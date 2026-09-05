import { CheckCircle2, Clock3, UserX, Users } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';

import type { CustomerStatsData } from '@/modules/admin/customers/types/customer';

interface CustomerStatsProps {
  stats: CustomerStatsData;
}

const statItems = [
  {
    key: 'total',
    label: 'Total Customers',
    icon: Users,
  },
  {
    key: 'active',
    label: 'Active',
    icon: CheckCircle2,
  },
  {
    key: 'pending',
    label: 'Pending',
    icon: Clock3,
  },
  {
    key: 'inactive',
    label: 'Inactive',
    icon: UserX,
  },
] as const;

export function CustomerStats({ stats }: CustomerStatsProps) {
  return (
    <div className='grid gap-4 sm:grid-cols-2 xl:grid-cols-4'>
      {statItems.map((item) => {
        const Icon = item.icon;

        return (
          <Card key={item.key}>
            <CardContent className='flex items-center justify-between p-5'>
              <div>
                <p className='text-sm text-muted-foreground'>{item.label}</p>

                <p className='mt-2 text-2xl font-bold'>{stats[item.key]}</p>
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
