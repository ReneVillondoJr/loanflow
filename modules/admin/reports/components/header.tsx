'use client';

import { FileBarChart, Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';

interface ReportsHeaderProps {
  onCreate: () => void;
}

export function ReportsHeader({ onCreate }: ReportsHeaderProps) {
  return (
    <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
      <div className='flex items-start gap-3'>
        <div className='flex size-10 shrink-0 items-center justify-center rounded-lg border bg-muted/40'>
          <FileBarChart className='size-5 text-muted-foreground' />
        </div>

        <div>
          <h1 className='text-2xl font-semibold tracking-tight'>Reports</h1>

          <p className='mt-1 text-sm text-muted-foreground'>
            Monitor loan performance, applications, risk, and portfolio
            activity.
          </p>
        </div>
      </div>

      <Button onClick={onCreate}>
        <Plus className='mr-2 size-4' />
        Generate Report
      </Button>
    </div>
  );
}
