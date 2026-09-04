import { CheckCircle2, Clock3, FileSearch, Files, XCircle } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';

import type { ApplicationStats } from '../types/applications';

interface ApplicationStatsProps {
  stats: ApplicationStats;
}

export function ApplicationStats({ stats }: ApplicationStatsProps) {
  const items = [
    {
      label: 'Total Applications',
      value: stats.total,
      icon: Files,
    },
    {
      label: 'Pending',
      value: stats.pending,
      icon: Clock3,
    },
    {
      label: 'Under Review',
      value: stats.underReview,
      icon: FileSearch,
    },
    {
      label: 'Approved',
      value: stats.approved,
      icon: CheckCircle2,
    },
    {
      label: 'Rejected',
      value: stats.rejected,
      icon: XCircle,
    },
  ];

  return (
    <div className='grid gap-4 sm:grid-cols-2 xl:grid-cols-5'>
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <Card key={item.label}>
            <CardContent className='p-5'>
              <div className='flex items-center justify-between gap-4'>
                <p className='text-sm text-muted-foreground'>{item.label}</p>

                <div className='flex size-9 items-center justify-center rounded-lg bg-muted'>
                  <Icon className='size-4 text-muted-foreground' />
                </div>
              </div>

              <p className='mt-4 text-2xl font-semibold tracking-tight'>
                {item.value}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
