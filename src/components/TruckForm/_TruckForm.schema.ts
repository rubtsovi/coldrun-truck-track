import * as z from 'zod';

import { TRUCK_STATUS } from '_models/trucks.ts';

export const truckFormSchema = z.object({
  name: z.string().trim().min(3, 'Minimum length should be equal 3 characters'),
  code: z.string().trim().min(1, 'Required'),
  status: z.nativeEnum(TRUCK_STATUS).nullish(),
  description: z.string().trim().nullish().nullable(),
});

export type TruckFormSchema = z.infer<typeof truckFormSchema>;
