import { Badge } from '@/components/ui/badge';

import type { ApplicationStatus } from '../types/application';

interface ApplicationStatusBadgeProps {
  status: ApplicationStatus;
}

const statusVariants: Record<
  ApplicationStatus,
  'default' | 'secondary' | 'outline' | 'destructive'
> = {
  Draft: 'secondary',
  Submitted: 'outline',
  'Under Review': 'secondary',
  'Pending Documents': 'secondary',
  Approved: 'default',
  Rejected: 'destructive',
  Cancelled: 'destructive',
};

export function ApplicationStatusBadge({
  status,
}: ApplicationStatusBadgeProps) {
  return <Badge variant={statusVariants[status]}>{status}</Badge>;
}
