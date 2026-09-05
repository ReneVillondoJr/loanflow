'use client';

import { Settings } from 'lucide-react';

import { Badge } from '@/components/ui/badge';

export function SettingsHeader() {
  return (
    <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
      <div className='flex items-start gap-3'>
        <div className='flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted'>
          <Settings className='size-5 text-muted-foreground' />
        </div>

        <div className='min-w-0'>
          <div className='flex flex-wrap items-center gap-2'>
            <h1 className='text-xl font-semibold tracking-tight'>Settings</h1>

            <Badge variant='secondary'>System</Badge>
          </div>

          <p className='mt-1 text-sm text-muted-foreground'>
            Manage your LoanFlow account, security, applications, and system
            configuration.
          </p>
        </div>
      </div>
    </div>
  );
}
