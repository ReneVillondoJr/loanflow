import Link from 'next/link';

import {
  ArrowRight,
  CalendarDays,
  CircleDollarSign,
  CreditCard,
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

import type { Loan, LoanStatus } from '../types/loans';

interface LoanCardProps {
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

export function LoanCard({ loan }: LoanCardProps) {
  const progress = Math.round((loan.paidMonths / loan.totalMonths) * 100);

  return (
    <Card className='overflow-hidden'>
      <CardContent className='p-0'>
        <div className='flex flex-col gap-6 p-5 lg:flex-row lg:items-start lg:justify-between'>
          {/* Left */}
          <div className='min-w-0 flex-1'>
            <div className='flex flex-wrap items-center gap-2'>
              <div className='flex size-10 shrink-0 items-center justify-center rounded-md bg-muted'>
                <CircleDollarSign className='size-5 text-muted-foreground' />
              </div>

              <div className='min-w-0'>
                <div className='flex flex-wrap items-center gap-2'>
                  <h2 className='text-base font-semibold'>{loan.type}</h2>

                  <Badge
                    variant='outline'
                    className={getStatusClass(loan.status)}
                  >
                    {loan.status}
                  </Badge>
                </div>

                <p className='mt-1 text-sm text-muted-foreground'>
                  Loan ID: {loan.id}
                </p>
              </div>
            </div>

            {/* Progress */}
            <div className='mt-6'>
              <div className='mb-2 flex items-center justify-between gap-4'>
                <p className='text-sm font-medium'>Payment Progress</p>

                <p className='text-sm text-muted-foreground'>
                  {loan.paidMonths} of {loan.totalMonths} months
                </p>
              </div>

              <Progress value={progress} className='h-2' />

              <p className='mt-2 text-xs text-muted-foreground'>
                {progress}% of your loan term completed
              </p>
            </div>

            {/* Details */}
            <div className='mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4'>
              <div>
                <p className='text-xs text-muted-foreground'>Original Amount</p>

                <p className='mt-1 text-sm font-semibold'>
                  {loan.principalAmount}
                </p>
              </div>

              <div>
                <p className='text-xs text-muted-foreground'>
                  Remaining Balance
                </p>

                <p className='mt-1 text-sm font-semibold'>
                  {loan.remainingBalance}
                </p>
              </div>

              <div>
                <p className='text-xs text-muted-foreground'>Monthly Payment</p>

                <p className='mt-1 text-sm font-semibold'>
                  {loan.monthlyPayment}
                </p>
              </div>

              <div>
                <p className='text-xs text-muted-foreground'>Interest Rate</p>

                <p className='mt-1 text-sm font-semibold'>
                  {loan.interestRate}
                </p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className='flex w-full shrink-0 flex-col gap-4 lg:w-[220px] lg:border-l lg:pl-6'>
            <div className='rounded-md bg-muted/50 p-4'>
              <div className='flex items-center gap-2 text-muted-foreground'>
                <CalendarDays className='size-4' />

                <p className='text-xs font-medium'>Next Payment</p>
              </div>

              <p className='mt-2 text-sm font-semibold'>
                {loan.nextPaymentDate}
              </p>
            </div>

            <div className='rounded-md bg-muted/50 p-4'>
              <div className='flex items-center gap-2 text-muted-foreground'>
                <CreditCard className='size-4' />

                <p className='text-xs font-medium'>Monthly Payment</p>
              </div>

              <p className='mt-2 text-lg font-semibold'>
                {loan.monthlyPayment}
              </p>
            </div>

            <Link
              href={`/clients/loans/${loan.id}`}
              className='inline-flex h-10 w-full items-center justify-center gap-2 rounded-md border bg-background px-4 text-sm font-medium transition-colors hover:bg-muted'
            >
              View Details
              <ArrowRight className='size-4' />
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
