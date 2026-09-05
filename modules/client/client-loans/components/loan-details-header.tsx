import Link from 'next/link';

import { ArrowLeft, CircleDollarSign } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

import type { Loan, LoanStatus } from '../types/loans';

interface LoanDetailsHeaderProps {
  loan: Loan;
}

function getStatusClass(status: LoanStatus) {
  switch (status) {
    case 'Active':
      return 'border-blue-200 bg-blue-50 text-blue-700';

    case 'Completed':
      return 'border-emerald-200 bg-emerald-50 text-emerald-700';

    case 'Overdue':
      return 'border-red-200 bg-red-50 text-red-700';

    case 'Pending Disbursement':
      return 'border-amber-200 bg-amber-50 text-amber-700';

    default:
      return 'border-border bg-muted text-muted-foreground';
  }
}

export function LoanDetailsHeader({ loan }: LoanDetailsHeaderProps) {
  return (
    <div className='space-y-5'>
      <Link
        href='/clients/myloans'
        className='inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground'
      >
        <ArrowLeft className='size-4' />
        Back to Loans
      </Link>

      <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
        <div className='flex min-w-0 items-center gap-3'>
          <div className='flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary'>
            <CircleDollarSign className='size-5' />
          </div>

          <div className='min-w-0'>
            <div className='flex flex-wrap items-center gap-2'>
              <h1 className='text-xl font-semibold tracking-tight'>
                {loan.type}
              </h1>

              <Badge variant='outline' className={getStatusClass(loan.status)}>
                {loan.status}
              </Badge>
            </div>

            <p className='mt-1 text-sm text-muted-foreground'>
              Loan ID: {loan.id}
            </p>
          </div>
        </div>

        {loan.status === 'Active' && (
          <Button type='button' variant='outline' className='w-full sm:w-auto'>
            Make Payment
          </Button>
        )}
      </div>
    </div>
  );
}
