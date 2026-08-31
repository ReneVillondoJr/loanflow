import {
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  DollarSign,
  FileText,
} from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const metrics = [
  {
    title: 'Total Applications',
    value: '1,248',
    description: '+12.5% from last month',
    icon: FileText,
  },
  {
    title: 'Approved Loans',
    value: '742',
    description: '59.4% approval rate',
    icon: CheckCircle2,
  },
  {
    title: 'Pending Review',
    value: '186',
    description: 'Requires attention',
    icon: Clock3,
  },
  {
    title: 'Loan Volume',
    value: '$2.4M',
    description: '+8.2% from last month',
    icon: DollarSign,
  },
];

export default function AdminPage() {
  return (
    <div className='space-y-8'>
      <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
        <div>
          <h1 className='text-2xl font-semibold tracking-tight'>Dashboard</h1>

          <p className='mt-1 text-sm text-muted-foreground'>
            Overview of your loan applications and lending activity.
          </p>
        </div>
      </div>

      <div className='grid gap-4 sm:grid-cols-2 xl:grid-cols-4'>
        {metrics.map((metric) => {
          const Icon = metric.icon;

          return (
            <Card key={metric.title}>
              <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-3'>
                <CardTitle className='text-sm font-medium text-muted-foreground'>
                  {metric.title}
                </CardTitle>

                <div className='flex size-9 items-center justify-center rounded-lg bg-muted'>
                  <Icon className='size-4' />
                </div>
              </CardHeader>

              <CardContent>
                <div className='text-2xl font-semibold tracking-tight'>
                  {metric.value}
                </div>

                <div className='mt-2 flex items-center gap-1 text-xs text-muted-foreground'>
                  <ArrowUpRight className='size-3' />

                  {metric.description}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className='grid gap-6 lg:grid-cols-5'>
        <Card className='lg:col-span-3'>
          <CardHeader>
            <CardTitle>Application Overview</CardTitle>
          </CardHeader>

          <CardContent>
            <div className='flex h-[300px] items-center justify-center rounded-lg border border-dashed text-sm text-muted-foreground'>
              Application analytics chart
            </div>
          </CardContent>
        </Card>

        <Card className='lg:col-span-2'>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>

          <CardContent>
            <div className='space-y-4'>
              <p className='text-sm text-muted-foreground'>
                No recent activity available.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
