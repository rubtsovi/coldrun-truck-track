import { forwardRef } from 'react';

import { cn } from '_utils';

import { useFormField } from './_Form.hooks.ts';

function FormLabelInner(
  { className, ...props }: React.ComponentProps<'label'>,
  ref: React.ForwardedRef<HTMLLabelElement>
) {
  const { error, formItemId } = useFormField();
  return (
    <label
      ref={ref}
      className={cn(error && 'text-red-500', 'font-bold', className)}
      htmlFor={formItemId}
      {...props}
    />
  );
}

const FormLabel = forwardRef(FormLabelInner);

export default FormLabel;
