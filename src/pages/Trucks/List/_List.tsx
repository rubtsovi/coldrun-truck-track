import { Link, RouteApi } from '@tanstack/react-router';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';

import PageLayout from '_components/PageLayout';
import TruckStatusBadge from '_components/TruckStatusBadge';
import { Truck } from '_models/trucks.ts';
import { cn } from '_utils';

const routeApi = new RouteApi({ id: '/trucks' });

function List() {
  const data = routeApi.useLoaderData();
  const search = routeApi.useSearch();
  const hasNext = data.length === 10; // generally it'll better to recieve from BE pageCount + 1 and list only pageCount records
  const hasPrev = (search?.page ?? 1) > 1;
  return (
    <PageLayout title='Trucks list'>
      <div className='flex justify-end'>
        <Link className='p-button' to={'/trucks/add'}>
          <i className='p-button-icon p-button-icon-left pi pi-plus' />
          <span className='p-button-label'>Add</span>
        </Link>
      </div>
      <DataTable value={data}>
        <Column field='name' header='Name' />
        <Column field='code' header='Code' />
        <Column
          field='status'
          header='Status'
          body={({ status }: Truck) => <TruckStatusBadge status={status} />}
        />
        <Column
          header='Actions'
          body={({ id }: Truck) => (
            <div className='flex gap-3'>
              <Link to={'/trucks/details/$truckId'} params={{ truckId: id.toString(10) }}>
                Details
              </Link>
              <Link to={'/trucks/edit/$truckId'} params={{ truckId: id.toString(10) }}>
                Edit
              </Link>
            </div>
          )}
        />
      </DataTable>
      <div className='flex justify-between'>
        <Link
          className={cn('p-button', { 'p-disabled': !hasPrev })}
          to={routeApi.id}
          disabled={!hasPrev}
          search={{ ...search, page: (search?.page ?? 1) - 1 }}
        >
          Previous
        </Link>
        <Link
          className={cn('p-button', { 'p-disabled': !hasNext })}
          to={routeApi.id}
          disabled={!hasNext}
          search={{ ...search, page: (search?.page ?? 1) + 1 }}
        >
          Next
        </Link>
      </div>
    </PageLayout>
  );
}

export default List;
