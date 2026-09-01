import { Badge } from '@/components/ui/badge';

import type { ApplicationStatus } from '../types/application';

interface ApplicationStatusBadgeProps {
  status: ApplicationStatus;
}

const statusClasses: Record<ApplicationStatus, string> = {
  Draft: 'border-border bg-muted text-muted-foreground',

  Submitted: 'border-blue-200 bg-blue-50 text-blue-700',

  'Under Review': 'border-blue-200 bg-blue-50 text-blue-700',

  'Pending Documents': 'border-amber-200 bg-amber-50 text-amber-700',

  Approved: 'border-emerald-200 bg-emerald-50 text-emerald-700',

  Rejected: 'border-red-200 bg-red-50 text-red-700',

  Cancelled: 'border-border bg-muted text-muted-foreground',
};

export function ApplicationStatusBadge({
  status,
}: ApplicationStatusBadgeProps) {
  return (
    <Badge variant='outline' className={statusClasses[status]}>
      {status}
    </Badge>
  );
}
