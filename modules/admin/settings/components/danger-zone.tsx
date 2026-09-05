'use client';

import { AlertTriangle, Trash2 } from 'lucide-react';

import { Button } from '@/components/ui/button';

export function DangerZone() {
  return (
    <section className='space-y-6'>
      <div>
        <h2 className='text-lg font-semibold text-destructive'>Danger Zone</h2>

        <p className='mt-1 text-sm text-muted-foreground'>
          Destructive actions that may permanently affect your LoanFlow
          environment.
        </p>
      </div>

      <div className='rounded-lg border border-destructive/30'>
        <div className='flex items-start gap-3 p-4'>
          <AlertTriangle className='mt-0.5 size-5 shrink-0 text-destructive' />

          <div>
            <h3 className='text-sm font-semibold'>Administrative actions</h3>

            <p className='mt-1 text-xs text-muted-foreground'>
              These actions should only be performed by a Super Administrator.
            </p>
          </div>
        </div>

        <div className='divide-y border-t border-destructive/20'>
          <div className='flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between'>
            <div>
              <p className='text-sm font-medium'>Clear generated reports</p>

              <p className='mt-1 text-xs text-muted-foreground'>
                Remove generated report files from storage.
              </p>
            </div>

            <Button type='button' variant='outline' className='h-10'>
              <Trash2 className='mr-2 size-4' />
              Clear reports
            </Button>
          </div>

          <div className='flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between'>
            <div>
              <p className='text-sm font-medium'>Reset system settings</p>

              <p className='mt-1 text-xs text-muted-foreground'>
                Restore system configuration to its defaults.
              </p>
            </div>

            <Button type='button' variant='outline' className='h-10'>
              Reset settings
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
