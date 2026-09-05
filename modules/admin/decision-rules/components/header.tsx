import { BrainCircuit, RefreshCw } from 'lucide-react';

import { Button } from '@/components/ui/button';

export function DecisioningHeader() {
  return (
    <div className='flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between'>
      <div className='flex items-start gap-3'>
        <div className='flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10'>
          <BrainCircuit className='size-5 text-primary' />
        </div>

        <div>
          <div className='flex flex-wrap items-center gap-2'>
            <h1 className='text-2xl font-semibold tracking-tight'>
              Loan Decisioning
            </h1>

            <span className='rounded-full border bg-muted px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground'>
              Decision Engine
            </span>
          </div>

          <p className='mt-1 max-w-2xl text-sm leading-6 text-muted-foreground'>
            Review loan applications, assess risk, and manage approval
            decisions.
          </p>
        </div>
      </div>

      <Button type='button' variant='outline'>
        <RefreshCw className='mr-2 size-4' />
        Refresh
      </Button>
    </div>
  );
}
