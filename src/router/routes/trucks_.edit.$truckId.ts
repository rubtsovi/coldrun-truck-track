import { createFileRoute } from '@tanstack/react-router';

import { getTruck } from '_api/trucks.ts';
import { TrucksEditPage } from '_pages/Trucks';

export const Route = createFileRoute('/trucks/edit/$truckId')({
  component: TrucksEditPage,
  loader: ({ params: { truckId } }) => getTruck(truckId),
});
