import { createFileRoute } from '@tanstack/react-router';

import { TrucksAddPage } from '_pages/Trucks';

export const Route = createFileRoute('/trucks/add')({
  component: TrucksAddPage,
});
