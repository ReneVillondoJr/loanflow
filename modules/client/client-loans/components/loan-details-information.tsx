import { Card, CardContent } from '@/components/ui/card';

import type { Loan } from '../types/loans';

interface LoanDetailsInformationProps {
  loan: Loan;
}

export function LoanDetailsInformation({ loan }: LoanDetailsInformationProps) {
  return (
    <Card>
      <CardContent className='p-5 sm:p-6'>
        <div className='border-b pb-4'>
          <h2 className='text-sm font-semibold'>Loan Information</h2>

          <p className='mt-1 text-xs text-muted-foreground'>
            Details and terms associated with this loan.
          </p>
        </div>

        <div className='grid gap-x-8 gap-y-5 pt-5 sm:grid-cols-2'>
          <div>
            <p className='text-xs text-muted-foreground'>Loan Type</p>

            <p className='mt-1 text-sm font-medium'>{loan.type}</p>
          </div>

          <div>
            <p className='text-xs text-muted-foreground'>Loan ID</p>

            <p className='mt-1 text-sm font-medium'>{loan.id}</p>
          </div>

          <div>
            <p className='text-xs text-muted-foreground'>Original Amount</p>

            <p className='mt-1 text-sm font-medium'>{loan.principalAmount}</p>
          </div>

          <div>
            <p className='text-xs text-muted-foreground'>Remaining Balance</p>

            <p className='mt-1 text-sm font-medium'>{loan.remainingBalance}</p>
          </div>

          <div>
            <p className='text-xs text-muted-foreground'>Monthly Payment</p>

            <p className='mt-1 text-sm font-medium'>{loan.monthlyPayment}</p>
          </div>

          <div>
            <p className='text-xs text-muted-foreground'>Interest Rate</p>

            <p className='mt-1 text-sm font-medium'>{loan.interestRate}</p>
          </div>

          <div>
            <p className='text-xs text-muted-foreground'>Loan Term</p>

            <p className='mt-1 text-sm font-medium'>
              {loan.totalMonths} months
            </p>
          </div>

          <div>
            <p className='text-xs text-muted-foreground'>Months Paid</p>

            <p className='mt-1 text-sm font-medium'>{loan.paidMonths} months</p>
          </div>

          <div>
            <p className='text-xs text-muted-foreground'>Next Payment</p>

            <p className='mt-1 text-sm font-medium'>{loan.nextPaymentDate}</p>
          </div>

          <div>
            <p className='text-xs text-muted-foreground'>Status</p>

            <p className='mt-1 text-sm font-medium'>{loan.status}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
