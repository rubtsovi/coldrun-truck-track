import React, { forwardRef } from 'react';

import { cn } from '_utils';

import { useFormField } from './_Form.hooks.ts';

function FormMessageInner(
  { children, className, ...props }: React.ComponentProps<'div'>,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message) : children;

  if (!body) {
    return null;
  }

  return (
    <div
      ref={ref}
      {...props}
      className={cn('text-sm', className, Boolean(error) && 'text-red-500')}
      id={formMessageId}
    >
      {body}
    </div>
  );
}

const FormMessage = forwardRef(FormMessageInner);

export default FormMessage;
