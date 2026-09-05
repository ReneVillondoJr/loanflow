import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import type {
  RiskDistribution as RiskDistributionItem,
  RiskLevel,
} from '@/modules/admin/reports/types/reports';

interface RiskDistributionProps {
  data: RiskDistributionItem[];
}

const RISK_CLASSES: Record<RiskLevel, string> = {
  LOW: 'bg-foreground/70',
  MEDIUM: 'bg-foreground/50',
  HIGH: 'bg-foreground/35',
  CRITICAL: 'bg-foreground/20',
};

export function RiskDistribution({ data }: RiskDistributionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className='text-base'>Risk Distribution</CardTitle>

        <p className='text-sm text-muted-foreground'>
          Current portfolio risk levels.
        </p>
      </CardHeader>

      <CardContent>
        <div className='space-y-5'>
          {data.map((item) => (
            <div key={item.level}>
              <div className='mb-2 flex items-center justify-between'>
                <span className='text-sm font-medium'>{item.label}</span>

                <span className='text-sm text-muted-foreground'>
                  {item.count.toLocaleString()} · {item.percentage}%
                </span>
              </div>

              <div className='h-2 overflow-hidden rounded-full bg-muted'>
                <div
                  className={`h-full rounded-full ${RISK_CLASSES[item.level]}`}
                  style={{
                    width: `${item.percentage}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
