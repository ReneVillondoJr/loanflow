import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import type { ApplicationTrend } from '@/modules/admin/reports/types/reports';

interface ApplicationChartProps {
  data: ApplicationTrend[];
}

export function ApplicationChart({ data }: ApplicationChartProps) {
  const maxValue = Math.max(...data.map((item) => item.applications), 1);

  return (
    <Card className='h-full'>
      <CardHeader>
        <CardTitle className='text-base'>Application Volume</CardTitle>

        <p className='text-sm text-muted-foreground'>
          Application activity over the selected period.
        </p>
      </CardHeader>

      <CardContent>
        <div className='flex h-64 items-end gap-2'>
          {data.map((item) => {
            const height = (item.applications / maxValue) * 100;

            return (
              <div
                key={item.date}
                className='flex min-w-0 flex-1 flex-col items-center gap-2'
              >
                <span className='text-xs font-medium'>{item.applications}</span>

                <div className='flex h-48 w-full items-end'>
                  <div
                    className='w-full rounded-md bg-primary/80 transition-all'
                    style={{
                      height: `${height}%`,
                    }}
                    title={`${item.applications} applications`}
                  />
                </div>

                <span className='truncate text-[11px] text-muted-foreground'>
                  {item.date}
                </span>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
