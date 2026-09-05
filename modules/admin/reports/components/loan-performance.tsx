import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import type { LoanPerformance } from '@/modules/admin/reports/types/reports';

interface LoanPerformanceProps {
  data: LoanPerformance[];
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);
}

export function LoanPerformance({ data }: LoanPerformanceProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className='text-base'>Loan Performance</CardTitle>

        <p className='text-sm text-muted-foreground'>
          Performance by loan product.
        </p>
      </CardHeader>

      <CardContent>
        <div className='space-y-5'>
          {data.map((loan) => (
            <div key={loan.loanType}>
              <div className='mb-2 flex items-center justify-between gap-4'>
                <div className='min-w-0'>
                  <p className='truncate text-sm font-medium'>{loan.label}</p>

                  <p className='text-xs text-muted-foreground'>
                    {loan.applications.toLocaleString()} applications
                  </p>
                </div>

                <div className='text-right'>
                  <p className='text-sm font-semibold'>{loan.approvalRate}%</p>

                  <p className='text-xs text-muted-foreground'>approval</p>
                </div>
              </div>

              <div className='h-2 overflow-hidden rounded-full bg-muted'>
                <div
                  className='h-full rounded-full bg-primary'
                  style={{
                    width: `${loan.approvalRate}%`,
                  }}
                />
              </div>

              <div className='mt-2 flex justify-between text-xs text-muted-foreground'>
                <span>Avg. {formatCurrency(loan.averageAmount)}</span>

                <span>{formatCurrency(loan.totalDisbursed)} disbursed</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
