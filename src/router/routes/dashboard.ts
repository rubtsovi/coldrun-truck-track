import { createFileRoute } from '@tanstack/react-router';

import { getDashboardData } from '_api/dashboard.ts';
import Dashboard from '_pages/Dashboard';

export const Route = createFileRoute('/dashboard')({
  component: Dashboard,
  loader: async () => await getDashboardData(),
});
