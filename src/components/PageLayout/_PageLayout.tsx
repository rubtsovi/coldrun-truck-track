interface PageLayoutProps {
  title: string;
}

function PageLayout({ title, children }: React.PropsWithChildren<PageLayoutProps>) {
  return (
    <div className='flex min-h-full flex-col gap-10'>
      <h1 className='text-3xl font-black'>{title}</h1>
      {children}
    </div>
  );
}

export default PageLayout;
