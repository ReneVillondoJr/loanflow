import { Badge } from '@/components/ui/badge';

import type { LoanProductStatus } from '../types/loan-product';

interface LoanProductStatusBadgeProps {
  status: LoanProductStatus;
}

const statusVariants: Record<LoanProductStatus, string> = {
  ACTIVE:
    'border-emerald-200 bg-emerald-100 text-emerald-700 hover:bg-emerald-100',

  INACTIVE: 'border-slate-200 bg-slate-100 text-slate-700 hover:bg-slate-100',

  DRAFT: 'border-amber-200 bg-amber-100 text-amber-700 hover:bg-amber-100',
};

const statusLabels: Record<LoanProductStatus, string> = {
  ACTIVE: 'Active',
  INACTIVE: 'Inactive',
  DRAFT: 'Draft',
};

export function LoanProductStatusBadge({
  status,
}: LoanProductStatusBadgeProps) {
  return (
    <Badge variant='secondary' className={statusVariants[status]}>
      {statusLabels[status]}
    </Badge>
  );
}
