import { Badge } from '@/components/ui/badge';

import type { DecisionStatus } from '../types/decision';

interface DecisionStatusBadgeProps {
  status: DecisionStatus;
}

const statusConfig: Record<
  DecisionStatus,
  {
    label: string;
    className: string;
  }
> = {
  PENDING: {
    label: 'Pending',

    className:
      'border-transparent bg-amber-100 text-amber-700 hover:bg-amber-100',
  },

  APPROVED: {
    label: 'Approved',

    className:
      'border-transparent bg-emerald-100 text-emerald-700 hover:bg-emerald-100',
  },

  REJECTED: {
    label: 'Rejected',

    className: 'border-transparent bg-red-100 text-red-700 hover:bg-red-100',
  },

  MANUAL_REVIEW: {
    label: 'Manual Review',

    className: 'border-transparent bg-blue-100 text-blue-700 hover:bg-blue-100',
  },
};

export function DecisionStatusBadge({ status }: DecisionStatusBadgeProps) {
  const config = statusConfig[status];

  return (
    <Badge variant='secondary' className={config.className}>
      {config.label}
    </Badge>
  );
}
