import { useRef } from 'react';

import { Link, RouteApi } from '@tanstack/react-router';
import { Toast } from 'primereact/toast';

import { putTruck } from '_api/trucks.ts';
import PageLayout from '_components/PageLayout';
import TruckForm from '_components/TruckForm';

const routeApi = new RouteApi({ id: '/trucks/edit/$truckId' });
function Edit() {
  const data = routeApi.useLoaderData();
  const toast = useRef<Toast>(null);
  return (
    <PageLayout title={`Edit truck: ${data.name}`}>
      <Toast ref={toast} />
      <TruckForm
        model={data}
        onSubmit={async req => {
          try {
            await putTruck(data.id, req);
            toast.current?.show({ severity: 'success', summary: 'Success' });
          } catch {
            toast.current?.show({
              severity: 'error',
              summary: 'Error',
              detail: 'Something went wrong',
            });
          }
        }}
      />

      <div>
        <Link className='p-button p-button-info' to={'/trucks'}>
          Back to list
        </Link>
      </div>
    </PageLayout>
  );
}

export default Edit;
