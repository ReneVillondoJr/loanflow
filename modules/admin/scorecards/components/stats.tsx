import { Activity, BarChart3, CheckCircle2, FileText } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';

import type { ScorecardStats } from '@/modules/admin/scorecards/types/scorecard';

interface ScorecardsStatsProps {
  stats: ScorecardStats;
}

export function ScorecardsStats({ stats }: ScorecardsStatsProps) {
  const items = [
    {
      label: 'Total Scorecards',
      value: stats.total,
      icon: FileText,
    },
    {
      label: 'Active',
      value: stats.active,
      icon: CheckCircle2,
    },
    {
      label: 'Average Score',
      value: stats.averageScore,
      icon: BarChart3,
    },
    {
      label: 'Approval Rate',
      value: `${stats.averageApprovalRate}%`,
      icon: Activity,
    },
  ];

  return (
    <div className='grid gap-4 sm:grid-cols-2 xl:grid-cols-4'>
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <Card key={item.label}>
            <CardContent className='flex items-center justify-between p-5'>
              <div>
                <p className='text-sm text-muted-foreground'>{item.label}</p>

                <p className='mt-2 text-2xl font-semibold tracking-tight'>
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
