import { Progress } from '@/components/ui/progress';

import type { Loan } from '../types/loans';

interface LoanDetailsProgressProps {
  loan: Loan;
}

export function LoanDetailsProgress({ loan }: LoanDetailsProgressProps) {
  const progress =
    loan.totalMonths > 0 ?
      Math.min(100, Math.round((loan.paidMonths / loan.totalMonths) * 100))
    : 0;

  return (
    <section className='rounded-xl border bg-card'>
      <div className='border-b px-5 py-4 sm:px-6'>
        <h2 className='text-sm font-semibold'>Payment Progress</h2>

        <p className='mt-1 text-xs text-muted-foreground'>
          Track your progress toward completing this loan.
        </p>
      </div>

      <div className='p-5 sm:p-6'>
        <div className='flex items-end justify-between gap-4'>
          <div>
            <p className='text-2xl font-semibold'>{progress}%</p>

            <p className='mt-1 text-xs text-muted-foreground'>
              Loan term completed
            </p>
          </div>

          <p className='text-sm text-muted-foreground'>
            {loan.paidMonths} of {loan.totalMonths} months
          </p>
        </div>

        <Progress value={progress} className='mt-4 h-2' />
      </div>
    </section>
  );
}
