import { createFileRoute } from '@tanstack/react-router';

import { getTruck } from '_api/trucks.ts';
import { TrucksDetailsPage } from '_pages/Trucks';

export const Route = createFileRoute('/trucks/details/$truckId')({
  component: TrucksDetailsPage,
  loader: async ({ params }) => await getTruck(params.truckId),
});
