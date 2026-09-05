import {
  ArrowDownRight,
  ArrowUpRight,
  Clock3,
  DollarSign,
  FileCheck2,
  Percent,
} from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import type { ReportSummary } from '@/modules/admin/reports/types/reports';

interface ReportsOverviewProps {
  summary: ReportSummary;
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);
}

export function ReportsOverview({ summary }: ReportsOverviewProps) {
  const items = [
    {
      label: 'Total Applications',
      value: summary.totalApplications.toLocaleString(),
      icon: FileCheck2,
    },
    {
      label: 'Approval Rate',
      value: `${summary.approvalRate}%`,
      icon: Percent,
      trend: '+4.8%',
      positive: true,
    },
    {
      label: 'Total Disbursed',
      value: formatCurrency(summary.totalDisbursed),
      icon: DollarSign,
      trend: '+12.4%',
      positive: true,
    },
    {
      label: 'Avg. Processing',
      value: `${summary.averageProcessingTime} days`,
      icon: Clock3,
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className='text-base'>Performance Overview</CardTitle>
      </CardHeader>

      <CardContent>
        <div className='grid gap-6 sm:grid-cols-2 xl:grid-cols-4'>
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.label} className='flex items-start gap-3'>
                <div className='flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted/60'>
                  <Icon className='size-4 text-muted-foreground' />
                </div>

                <div className='min-w-0'>
                  <p className='text-sm text-muted-foreground'>{item.label}</p>

                  <div className='mt-1 flex items-center gap-2'>
                    <p className='text-lg font-semibold'>{item.value}</p>

                    {item.trend && (
                      <span className='inline-flex items-center text-xs font-medium text-foreground'>
                        {item.positive ?
                          <ArrowUpRight className='mr-0.5 size-3' />
                        : <ArrowDownRight className='mr-0.5 size-3' />}

                        {item.trend}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
