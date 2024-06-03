import { RouterProvider } from '@tanstack/react-router';
import { PrimeReactProvider } from 'primereact/api';

import httpClient from '_config/httpClient';
import HttpClientProvider from '_context/HttpClientContext';
import router from '_src/router';

function App() {
  return (
    <HttpClientProvider client={httpClient}>
      <PrimeReactProvider>
        <RouterProvider router={router} />
      </PrimeReactProvider>
    </HttpClientProvider>
  );
}

export default App;
