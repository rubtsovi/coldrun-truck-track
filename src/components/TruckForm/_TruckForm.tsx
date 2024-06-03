import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from 'primereact/button';
import { UseFormReturn, useForm } from 'react-hook-form';

import { Form } from '_components/Form';
import DropdownField from '_components/fields/DropdownField/_DropdownField.tsx';
import TextInputField from '_components/fields/TextInputField/_TextInputField.tsx';
import { TRUCK_STATUS, statusOptionsList } from '_models/trucks.ts';

import { type TruckFormSchema, truckFormSchema } from './_TruckForm.schema.ts';

interface TruckFormProps<TInitValues extends TruckFormSchema> {
  model: TInitValues;
  onSubmit: (data: TruckFormSchema, form: UseFormReturn<TruckFormSchema>) => Promise<void>;
}

function TruckForm<InitValues extends TruckFormSchema>({
  model,
  onSubmit,
}: TruckFormProps<InitValues>) {
  const form = useForm<TruckFormSchema>({
    resolver: zodResolver(truckFormSchema),
    defaultValues: model,
  });

  const isOptionDisabled = ({ value }: ArrayItem<typeof statusOptionsList>) => {
    if (!model.status || model.status === TRUCK_STATUS.OUT_OF_SERVICE) return false;
    switch (value) {
      case TRUCK_STATUS.OUT_OF_SERVICE:
        return false;
      case TRUCK_STATUS.TO_JOB:
        return model.status !== TRUCK_STATUS.LOADING;
      case TRUCK_STATUS.AT_JOB:
        return model.status !== TRUCK_STATUS.TO_JOB;
      case TRUCK_STATUS.RETURNING:
        return model.status !== TRUCK_STATUS.AT_JOB;
      case TRUCK_STATUS.LOADING:
        return model.status !== TRUCK_STATUS.RETURNING;
      default:
        return false;
    }
  };

  return (
    <Form {...form}>
      <form
        className='flex flex-col gap-6'
        onSubmit={form.handleSubmit(async req => {
          await onSubmit(req, form);
        })}
      >
        <TextInputField label='Name' control={form.control} name={'name'} />
        <TextInputField label='Code' control={form.control} name={'code'} />
        <DropdownField
          label='Status'
          control={form.control}
          name={'status'}
          dropdownProps={{ options: statusOptionsList, optionDisabled: isOptionDisabled }}
        />
        <TextInputField label='Description' control={form.control} name={'description'} />
        <Button type='submit' className='self-start'>
          Submit
        </Button>
      </form>
    </Form>
  );
}

export default TruckForm;
