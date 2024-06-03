import { createFileRoute } from '@tanstack/react-router';

import { getTruckList } from '_api/trucks.ts';
import { TrucksFM } from '_models/trucks.ts';
import { TrucksListPage } from '_pages/Trucks';

export const Route = createFileRoute('/trucks')({
  component: TrucksListPage,
  loaderDeps: ({ search }) => search,
  loader: ({ deps }) => getTruckList(deps),
  validateSearch: (searchObj: Record<string, string>): Partial<TrucksFM> => ({
    page: parseInt(searchObj?.page ?? 1),
  }),
});
