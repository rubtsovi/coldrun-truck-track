import { FormLabel } from '_components/Form';

export interface CommonFieldProps {
  label: string;
  labelProps?: React.ComponentProps<typeof FormLabel>;
}
