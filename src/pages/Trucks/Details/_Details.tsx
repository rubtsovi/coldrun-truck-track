import { useRef } from 'react';

import { Link, useLoaderData } from '@tanstack/react-router';
import { Button } from 'primereact/button';
import { ButtonGroup } from 'primereact/buttongroup';
import { Toast } from 'primereact/toast';

import { deleteTruck } from '_api/trucks.ts';
import PageLayout from '_components/PageLayout';
import TruckStatusBadge from '_components/TruckStatusBadge';
import router from '_src/router';

function Details() {
  const data = useLoaderData({ from: '/trucks/details/$truckId' });
  const toast = useRef<Toast>(null);
  const onRemoveClick = () => {
    deleteTruck(data.id)
      .then(() => {
        router.navigate({ to: '/trucks' });
      })
      .catch(() => {
        toast.current?.show({ severity: 'error', summary: 'Error' });
      });
  };
  return (
    <PageLayout title={`Truck details: ${data.name}`}>
      <Toast ref={toast} />
      <div className='flex justify-end'>
        <ButtonGroup>
          <Link
            to={'/trucks/edit/$truckId'}
            params={{ truckId: data.id.toString(10) }}
            className='p-button'
          >
            Edit
          </Link>
          <Button severity='danger' onClick={onRemoveClick}>
            Remove
          </Button>
        </ButtonGroup>
      </div>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col'>
          <div className='text-sm font-black'>Name</div>
          <div>{data.name}</div>
        </div>
        <div className='flex flex-col'>
          <div className='text-sm font-black'>Code</div>
          <div>{data.code}</div>
        </div>
        <div className='flex flex-col'>
          <div className='text-sm font-black'>Status</div>
          <TruckStatusBadge className='self-start' status={data.status} />
        </div>
        <div className='flex flex-col'>
          <div className='text-sm font-black'>Description</div>
          <div>{data.description || <i>Lack of description</i>}</div>
        </div>
      </div>
      <div>
        <Link className='p-button p-button-info' to={'/trucks'}>
          Back to list
        </Link>
      </div>
    </PageLayout>
  );
}

export default Details;
