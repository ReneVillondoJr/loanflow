import { CheckCircle2, FileText, Package, XCircle } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';

import type { LoanProductStats } from '../types/loan-product';

interface LoanProductsStatsProps {
  stats: LoanProductStats;
}

export function LoanProductsStats({ stats }: LoanProductsStatsProps) {
  const items = [
    {
      label: 'Total Products',
      value: stats.total,
      icon: Package,
    },
    {
      label: 'Active',
      value: stats.active,
      icon: CheckCircle2,
    },
    {
      label: 'Inactive',
      value: stats.inactive,
      icon: XCircle,
    },
    {
      label: 'Draft',
      value: stats.draft,
      icon: FileText,
    },
  ];

  return (
    <div className='grid gap-4 sm:grid-cols-2 xl:grid-cols-4'>
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <Card key={item.label}>
            <CardContent className='flex items-center gap-4 p-5'>
              <div className='flex size-10 items-center justify-center rounded-lg bg-muted'>
                <Icon className='size-5 text-muted-foreground' />
              </div>

              <div>
                <p className='text-sm text-muted-foreground'>{item.label}</p>

                <p className='text-2xl font-semibold'>{item.value}</p>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
