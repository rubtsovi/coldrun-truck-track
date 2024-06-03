import { createRouter } from '@tanstack/react-router';

import httpClient from '_config/httpClient';

import { routeTree } from './routeTree.gen';

const router = createRouter({ routeTree, context: { httpClient } });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default router;
