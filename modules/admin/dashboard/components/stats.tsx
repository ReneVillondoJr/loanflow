import {
  CheckCircle2,
  Clock3,
  FileSearch,
  Files,
  PhilippinePeso,
} from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';

import type { DashboardStats as DashboardStatsType } from '../types/dashboard';

interface DashboardStatsProps {
  stats: DashboardStatsType;
}

export function DashboardStats({ stats }: DashboardStatsProps) {
  const items = [
    {
      label: 'Total Applications',
      value: stats.totalApplications,
      icon: Files,
    },
    {
      label: 'Pending Review',
      value: stats.pendingReview,
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
      label: 'Total Disbursed',
      value: stats.totalDisbursed,
      icon: PhilippinePeso,
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

                <div className='flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted'>
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
