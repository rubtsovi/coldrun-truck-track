import { createRootRouteWithContext } from '@tanstack/react-router';

import RootLayout from '_components/RootLayout/_RootLayout.tsx';
import { IHttpClient } from '_models/httpClient.ts';

export const Route = createRootRouteWithContext<{
  httpClient: IHttpClient;
}>()({
  component: RootLayout,
});
