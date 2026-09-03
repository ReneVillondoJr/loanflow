import Link from 'next/link';

import { ChevronRight, KeyRound, ShieldCheck } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function ProfileSecurityCard() {
  return (
    <Card>
      <CardHeader>
        <div className='flex items-center gap-3'>
          <div className='flex size-9 items-center justify-center rounded-md bg-muted'>
            <ShieldCheck className='size-4 text-muted-foreground' />
          </div>

          <div>
            <CardTitle className='text-base'>Account Security</CardTitle>

            <p className='mt-1 text-sm text-muted-foreground'>
              Manage your password and account security.
            </p>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className='flex flex-col gap-4 rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between'>
          <div className='flex items-start gap-3'>
            <KeyRound className='mt-0.5 size-5 shrink-0 text-muted-foreground' />

            <div>
              <p className='text-sm font-medium'>Password & Security</p>

              <p className='mt-1 text-sm text-muted-foreground'>
                Change your password and manage security settings.
              </p>
            </div>
          </div>

          <Link
            href='/client/settings'
            className='inline-flex h-10 w-full shrink-0 items-center justify-center gap-2 rounded-md border bg-background px-4 text-sm font-medium transition-colors hover:bg-muted sm:w-auto'
          >
            Manage
            <ChevronRight className='size-4' />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
