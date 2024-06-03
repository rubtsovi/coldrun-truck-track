import { Badge } from 'primereact/badge';

import i18n from '_config/i18n';
import { TruckStatus } from '_models/trucks.ts';

interface TruckStatusBadgeProps
  extends Omit<React.ComponentProps<typeof Badge>, 'severity' | 'children'> {
  status: TruckStatus;
}

function TruckStatusBadge({ status, ...props }: TruckStatusBadgeProps) {
  const getSeverityByStatus = (): Required<React.ComponentProps<typeof Badge>>['severity'] => {
    switch (status) {
      case 'AT_JOB':
      case 'TO_JOB':
      case 'LOADING':
        return 'info';
      case 'OUT_OF_SERVICE':
        return 'danger';
      case 'RETURNING':
      default:
        return 'success';
    }
  };

  return <Badge severity={getSeverityByStatus()} {...props} value={i18n.statuses[status]} />;
}

export default TruckStatusBadge;
