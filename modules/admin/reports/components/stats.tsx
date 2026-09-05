import { BarChart3, CheckCircle2, FileText, Loader2 } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';

import type { ReportStats } from '@/modules/admin/reports/types/reports';

interface ReportsStatsProps {
  stats: ReportStats;
}

export function ReportsStats({ stats }: ReportsStatsProps) {
  const items = [
    {
      label: 'Total Reports',
      value: stats.totalReports,
      icon: FileText,
    },
    {
      label: 'Ready',
      value: stats.readyReports,
      icon: CheckCircle2,
    },
    {
      label: 'Generating',
      value: stats.generatingReports,
      icon: Loader2,
    },
    {
      label: 'Failed',
      value: stats.failedReports,
      icon: BarChart3,
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

                <p className='mt-1 text-2xl font-semibold tracking-tight'>
                  {item.value}
                </p>
              </div>

              <div className='flex size-10 items-center justify-center rounded-lg bg-muted/60'>
                <Icon className='size-5 text-muted-foreground' />
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
