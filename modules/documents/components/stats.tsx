import { CheckCircle2, Clock3, FileText, TriangleAlert } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';

import type { DocumentStat } from '../types/documents';

interface DocumentStatsProps {
  stats: DocumentStat[];
}

const icons = [FileText, CheckCircle2, Clock3, TriangleAlert];

export function DocumentStats({ stats }: DocumentStatsProps) {
  return (
    <section className='grid gap-4 sm:grid-cols-2 xl:grid-cols-4'>
      {stats.map((stat, index) => {
        const Icon = icons[index] ?? FileText;

        return (
          <Card key={stat.title}>
            <CardContent className='p-5'>
              <div className='flex items-start justify-between gap-4'>
                <div className='min-w-0'>
                  <p className='truncate text-sm text-muted-foreground'>
                    {stat.title}
                  </p>

                  <p className='mt-1 text-2xl font-semibold tracking-tight'>
                    {stat.value}
                  </p>

                  <p className='mt-1 text-xs text-muted-foreground'>
                    {stat.description}
                  </p>
                </div>

                <div className='flex size-10 shrink-0 items-center justify-center rounded-md bg-muted'>
                  <Icon className='size-5 text-muted-foreground' />
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </section>
  );
}
