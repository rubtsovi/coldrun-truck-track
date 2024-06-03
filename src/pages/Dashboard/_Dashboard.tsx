import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';

import DashboardCard from '_components/DashboardCard';
import PageLayout from '_components/PageLayout';
import TruckStatusBadge from '_components/TruckStatusBadge';
import WorkInProgressPlaceholder from '_components/WorkInProgressPlaceholder';
import { Route as dashboardRoute } from '_routes/dashboard.ts';
import { Route as listTrucksRoute } from '_routes/trucks.ts';
import { Route as addTruckRoute } from '_routes/trucks_.add.ts';

function Dashboard() {
  const dashboardData = dashboardRoute.useLoaderData();
  return (
    <PageLayout title='Dashboard'>
      <div className='grid flex-1 auto-rows-fr grid-cols-2 gap-6'>
        <DashboardCard title='Trucks' morePath={listTrucksRoute.to} addPath={addTruckRoute.to}>
          <DataTable value={dashboardData}>
            <Column field='code' header='Code' />
            <Column field='name' header='Name' />
            <Column
              field='status'
              header='Status'
              body={truck => <TruckStatusBadge status={truck.status} />}
            />
          </DataTable>
        </DashboardCard>
        <DashboardCard title='Employees'>
          <WorkInProgressPlaceholder />
        </DashboardCard>
        <DashboardCard title='Customers'>
          <WorkInProgressPlaceholder />
        </DashboardCard>
        <DashboardCard title='Factory'>
          <WorkInProgressPlaceholder />
        </DashboardCard>
      </div>
    </PageLayout>
  );
}

export default Dashboard;
