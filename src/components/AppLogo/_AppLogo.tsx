import { cn } from '_utils';

function AppLogo({ className, ...props }: Omit<React.ComponentProps<'div'>, 'children'>) {
  return (
    <div className={cn(className, 'flex items-center gap-4')} {...props}>
      <i className='pi pi-truck text-5xl leading-none' />
      <div className='flex flex-col gap-1 text-xl leading-none'>
        <span className='font-black uppercase tracking-tight'>Truck</span>
        <span className='tracking-[0.25rem]'>track</span>
      </div>
    </div>
  );
}

export default AppLogo;
