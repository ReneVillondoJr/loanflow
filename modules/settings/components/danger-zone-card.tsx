'use client';

import { AlertTriangle, LogOut } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function DangerZoneCard() {
  return (
    <Card className='border-destructive/30'>
      <CardHeader>
        <div className='flex items-center gap-3'>
          <div className='flex size-9 items-center justify-center rounded-md bg-destructive/10'>
            <AlertTriangle className='size-4 text-destructive' />
          </div>

          <div>
            <CardTitle className='text-base'>Account Actions</CardTitle>

            <p className='mt-1 text-sm text-muted-foreground'>
              Manage important actions for your account.
            </p>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className='flex flex-col gap-4 rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between'>
          <div className='flex items-start gap-3'>
            <LogOut className='mt-0.5 size-5 shrink-0 text-muted-foreground' />

            <div>
              <p className='text-sm font-medium'>Sign out of all devices</p>

              <p className='mt-1 text-sm text-muted-foreground'>
                Sign out from all active sessions on your account.
              </p>
            </div>
          </div>

          <Button
            type='button'
            variant='outline'
            className='w-full shrink-0 sm:w-auto'
          >
            Sign Out All
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
