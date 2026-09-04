import { CheckCircle2, Clock3, FileText, XCircle } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';

import type { ApplicationSummary } from '../types/application';

interface ApplicationsSummaryProps {
  summary: ApplicationSummary;
}

export function ApplicationsSummary({ summary }: ApplicationsSummaryProps) {
  const items = [
    {
      label: 'Total',
      value: summary.total,
      icon: FileText,
    },
    {
      label: 'Pending',
      value: summary.pending,
      icon: Clock3,
    },
    {
      label: 'Approved',
      value: summary.approved,
      icon: CheckCircle2,
    },
    {
      label: 'Rejected',
      value: summary.rejected,
      icon: XCircle,
    },
  ];

  return (
    <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <Card key={item.label}>
            <CardContent className='flex items-center justify-between p-5'>
              <div>
                <p className='text-sm text-muted-foreground'>{item.label}</p>

                <p className='mt-1 text-2xl font-semibold tracking-tight'>
                  {item.value}
                </p>
              </div>

              <div className='flex size-10 items-center justify-center rounded-lg bg-muted'>
                <Icon className='size-5 text-muted-foreground' />
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
