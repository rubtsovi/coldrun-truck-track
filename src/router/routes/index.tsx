import { Navigate, createFileRoute } from '@tanstack/react-router';

import { Route as dashboardRoute } from './dashboard.ts';

export const Route = createFileRoute('/')({
  component: () => <Navigate search={{}} to={dashboardRoute.to} />,
});
