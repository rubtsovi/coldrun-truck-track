import { FloatLabel } from 'primereact/floatlabel';
import { InputText } from 'primereact/inputtext';
import { FieldPath, FieldValues, UseControllerProps } from 'react-hook-form';

import { FormControl, FormField, FormItem, FormLabel } from '_components/Form';
import FormMessage from '_components/Form/_FormMessage.tsx';
import type { CommonFieldProps } from '_components/fields/models.ts';
import { cn } from '_utils';

type TextInputFieldProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> = {
  inputProps?: React.ComponentProps<typeof InputText>;
} & CommonFieldProps &
  UseControllerProps<TFieldValues, TName>;

function TextInputField<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({ inputProps, label, labelProps, ...props }: TextInputFieldProps<TFieldValues, TName>) {
  return (
    <FormField
      render={({ field, fieldState }) => {
        const isInvalid = fieldState.invalid && fieldState.isTouched;
        return (
          <FormItem>
            <FloatLabel>
              <FormControl>
                <InputText
                  placeholder={label}
                  {...field}
                  {...inputProps}
                  className={cn(inputProps?.className, 'w-full')}
                  invalid={isInvalid}
                />
              </FormControl>
              <FormLabel {...labelProps}>{label}</FormLabel>
            </FloatLabel>
            {Boolean(fieldState.error) && <FormMessage>{fieldState.error?.message}</FormMessage>}
          </FormItem>
        );
      }}
      {...props}
    />
  );
}

export default TextInputField;
