import { CalendarDays, CheckCircle2 } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

import type { Loan } from '../types/loans';

interface LoanPaymentScheduleProps {
  loan: Loan;
}

export function LoanPaymentSchedule({ loan }: LoanPaymentScheduleProps) {
  const rows = Array.from(
    { length: Math.min(loan.totalMonths, 6) },
    (_, index) => {
      const month = loan.paidMonths + index + 1;

      return {
        month,
        date: index === 0 ? loan.nextPaymentDate : `Payment ${month}`,
        amount: loan.monthlyPayment,
        paid: month <= loan.paidMonths,
      };
    },
  );

  return (
    <Card>
      <CardContent className='p-0'>
        <div className='border-b px-5 py-4 sm:px-6'>
          <h2 className='text-sm font-semibold'>Payment Schedule</h2>

          <p className='mt-1 text-xs text-muted-foreground'>
            Upcoming payments for this loan.
          </p>
        </div>

        <div className='divide-y'>
          {rows.map((payment) => (
            <div
              key={payment.month}
              className='flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6'
            >
              <div className='flex items-center gap-3'>
                <div className='flex size-9 shrink-0 items-center justify-center rounded-full bg-muted'>
                  {payment.paid ?
                    <CheckCircle2 className='size-4 text-emerald-600' />
                  : <CalendarDays className='size-4 text-muted-foreground' />}
                </div>

                <div>
                  <p className='text-sm font-medium'>Payment {payment.month}</p>

                  <p className='mt-0.5 text-xs text-muted-foreground'>
                    {payment.date}
                  </p>
                </div>
              </div>

              <div className='flex items-center justify-between gap-4 sm:justify-end'>
                <p className='text-sm font-semibold'>{payment.amount}</p>

                <Badge
                  variant='outline'
                  className={
                    payment.paid ?
                      'border-emerald-200 bg-emerald-50 text-emerald-700'
                    : 'border-amber-200 bg-amber-50 text-amber-700'
                  }
                >
                  {payment.paid ? 'Paid' : 'Upcoming'}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
