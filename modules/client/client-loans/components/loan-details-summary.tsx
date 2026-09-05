import { CircleDollarSign, CreditCard, Percent } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';

import type { Loan } from '../types/loans';

interface LoanDetailsSummaryProps {
  loan: Loan;
}

export function LoanDetailsSummary({ loan }: LoanDetailsSummaryProps) {
  return (
    <div className='grid gap-4 sm:grid-cols-2 xl:grid-cols-4'>
      <Card>
        <CardContent className='p-5'>
          <div className='flex items-center gap-2 text-muted-foreground'>
            <CircleDollarSign className='size-4' />

            <span className='text-xs font-medium'>Original Amount</span>
          </div>

          <p className='mt-3 text-xl font-semibold'>{loan.principalAmount}</p>

          <p className='mt-1 text-xs text-muted-foreground'>
            Initial loan principal
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className='p-5'>
          <div className='flex items-center gap-2 text-muted-foreground'>
            <CircleDollarSign className='size-4' />

            <span className='text-xs font-medium'>Remaining Balance</span>
          </div>

          <p className='mt-3 text-xl font-semibold'>{loan.remainingBalance}</p>

          <p className='mt-1 text-xs text-muted-foreground'>
            Current outstanding balance
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className='p-5'>
          <div className='flex items-center gap-2 text-muted-foreground'>
            <CreditCard className='size-4' />

            <span className='text-xs font-medium'>Monthly Payment</span>
          </div>

          <p className='mt-3 text-xl font-semibold'>{loan.monthlyPayment}</p>

          <p className='mt-1 text-xs text-muted-foreground'>
            Scheduled payment amount
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className='p-5'>
          <div className='flex items-center gap-2 text-muted-foreground'>
            <Percent className='size-4' />

            <span className='text-xs font-medium'>Interest Rate</span>
          </div>

          <p className='mt-3 text-xl font-semibold'>{loan.interestRate}</p>

          <p className='mt-1 text-xs text-muted-foreground'>
            Current loan interest rate
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
