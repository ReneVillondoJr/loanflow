import { CheckCircle2, Clock3, FileText, XCircle } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';

import type { ApplicationSummary } from '../types/application';

interface ApplicationsSummaryProps {
  summary: ApplicationSummary;
}

export function ApplicationsSummary({ summary }: ApplicationsSummaryProps) {
  const items = [
    {
      title: 'Total Applications',
      value: summary.total,
      description: 'All applications',
      icon: FileText,
    },
    {
      title: 'Pending',
      value: summary.pending,
      description: 'Currently processing',
      icon: Clock3,
    },
    {
      title: 'Approved',
      value: summary.approved,
      description: 'Successfully approved',
      icon: CheckCircle2,
    },
    {
      title: 'Rejected',
      value: summary.rejected,
      description: 'Not approved',
      icon: XCircle,
    },
  ];

  return (
    <section className='grid gap-4 sm:grid-cols-2 xl:grid-cols-4'>
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <Card key={item.title}>
            <CardContent className='p-5'>
              <div className='flex items-start justify-between gap-4'>
                <div className='min-w-0'>
                  <p className='truncate text-sm text-muted-foreground'>
                    {item.title}
                  </p>

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
