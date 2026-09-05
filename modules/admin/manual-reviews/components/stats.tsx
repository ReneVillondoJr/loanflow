import {
  AlertTriangle,
  CheckCircle2,
  Clock3,
  FileSearch,
  XCircle,
} from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';

import type { ManualReviewStats } from '@/modules/admin/manual-reviews/types/manual-review';

interface ManualReviewsStatsProps {
  stats: ManualReviewStats;
}

export function ManualReviewsStats({ stats }: ManualReviewsStatsProps) {
  const items = [
    {
      label: 'Total Reviews',
      value: stats.total,
      icon: FileSearch,
    },
    {
      label: 'Pending',
      value: stats.pending,
      icon: Clock3,
    },
    {
      label: 'In Review',
      value: stats.inReview,
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
    {
      label: 'Urgent',
      value: stats.urgent,
      icon: AlertTriangle,
    },
  ];

  return (
    <div className='grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6'>
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <Card key={item.label}>
            <CardContent className='flex items-center justify-between p-4'>
              <div>
                <p className='text-sm text-muted-foreground'>{item.label}</p>

                <p className='mt-1 text-2xl font-semibold'>{item.value}</p>
              </div>

              <div className='flex size-9 items-center justify-center rounded-md bg-muted'>
                <Icon className='size-4 text-muted-foreground' />
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
