import { Link } from '@tanstack/react-router';
import type { LinkProps } from '@tanstack/react-router';
import { ButtonGroup } from 'primereact/buttongroup';
import { Card } from 'primereact/card';

interface DashboardCardProps
  extends Omit<React.ComponentProps<typeof Card>, 'footer' | 'title' | 'pt'> {
  morePath?: LinkProps['to'];
  addPath?: LinkProps['to'];
  title: string;
}

function DashboardCard({ children, morePath, addPath, title, ...props }: DashboardCardProps) {
  return (
    <Card
      title={title}
      className='flex flex-col'
      footer={() => (
        <ButtonGroup>
          {/* TODO: exclude as LinkButton component */}
          {morePath && (
            <Link to={morePath} className='p-button'>
              <i className='p-button-icon p-button-icon-left pi pi-list' />
              <span className='p-button-label'>More</span>
            </Link>
          )}
          {addPath && (
            <Link to={addPath} className='p-button'>
              <i className='p-button-icon p-button-icon-left pi pi-plus' />
              <span className='p-button-label'>Add</span>
            </Link>
          )}
        </ButtonGroup>
      )}
      {...props}
      pt={{
        footer: { className: 'flex justify-end' },
        body: { className: 'flex flex-col flex-1 max-h-full overflow-hidden' },
        content: { className: 'flex-1' },
      }}
    >
      {children}
    </Card>
  );
}

export default DashboardCard;
