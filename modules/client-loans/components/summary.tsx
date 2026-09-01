import { CheckCircle2, CircleDollarSign, WalletCards } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';

interface LoansSummaryProps {
  totalLoans: number;
  activeLoans: number;
  completedLoans: number;
}

export function LoansSummary({
  totalLoans,
  activeLoans,
  completedLoans,
}: LoansSummaryProps) {
  const items = [
    {
      title: 'Total Loans',
      value: totalLoans,
      description: 'All loan records',
      icon: WalletCards,
    },
    {
      title: 'Active Loans',
      value: activeLoans,
      description: 'Currently being repaid',
      icon: CircleDollarSign,
    },
    {
      title: 'Completed Loans',
      value: completedLoans,
      description: 'Successfully paid',
      icon: CheckCircle2,
    },
  ];

  return (
    <section className='grid gap-4 sm:grid-cols-2 xl:grid-cols-3'>
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <Card key={item.title}>
            <CardContent className='p-5'>
              <div className='flex items-start justify-between gap-4'>
                <div className='min-w-0'>
                  <p className='text-sm text-muted-foreground'>{item.title}</p>

                  <p className='mt-1 text-2xl font-semibold tracking-tight'>
                    {item.value}
                  </p>

                  <p className='mt-1 text-xs text-muted-foreground'>
                    {item.description}
                  </p>
                </div>

                <div className='flex size-10 shrink-0 items-center justify-center rounded-md bg-muted'>
                  <Icon className='size-5 text-muted-foreground' />
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </section>
  );
}
