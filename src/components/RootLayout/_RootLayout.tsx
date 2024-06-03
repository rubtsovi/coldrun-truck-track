import { Link, Outlet } from '@tanstack/react-router';
import { Menu } from 'primereact/menu';
import type { MenuItem } from 'primereact/menuitem';

import AppLogo from '_components/AppLogo';
import { Route as dashboardRoute } from '_routes/dashboard.ts';
import { Route as trucksRoute } from '_routes/trucks.ts';
import router from '_src/router';

function RootLayout() {
  const items = [
    {
      label: 'Dashboard',
      icon: 'pi pi-sitemap',
      command: () => router.navigate({ to: dashboardRoute.to }),
    },
    {
      label: 'Trucks',
      icon: 'pi pi-truck',
      command: () => router.navigate({ to: trucksRoute.to }),
    },
    {
      label: 'Employees',
      icon: 'pi pi-users',
    },
    {
      label: 'Factory',
      icon: 'pi pi-cog',
    },
    {
      label: 'Customers',
      icon: 'pi pi-briefcase',
    },
  ] satisfies MenuItem[];

  return (
    <div className='relative flex min-h-dvh gap-6 overflow-hidden'>
      <div className='flex h-dvh w-80 flex-col items-stretch overflow-auto border-r border-r-gray-600 px-4 pb-4 pt-10'>
        <Link to={dashboardRoute.to} className='self-center'>
          <AppLogo className='mb-8' />
        </Link>
        <Menu model={items} className='w-full border-0' />
      </div>
      <div className='flex-1 self-stretch py-6 pr-6'>
        <Outlet />
      </div>
    </div>
  );
}

export default RootLayout;
