'use client';

import { useRouter } from 'next/navigation';

import { ArrowRight, FileWarning } from 'lucide-react';

import { Button } from '@/components/ui/button';

import { Card, CardContent } from '@/components/ui/card';

export function DocumentsReminder() {
  const router = useRouter();

  return (
    <Card>
      <CardContent className='p-5'>
        <div className='flex flex-col gap-4 sm:flex-row sm:items-center'>
          <div className='flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted'>
            <FileWarning className='size-5 text-muted-foreground' />
          </div>

          <div className='min-w-0 flex-1'>
            <h2 className='text-sm font-semibold'>Documents Need Attention</h2>

            <p className='mt-1 text-sm text-muted-foreground'>
              Several applications have incomplete or pending documents that
              require review.
            </p>
          </div>

          <Button
            type='button'
            variant='outline'
            className='shrink-0'
            onClick={() => router.push('/admin/documents')}
          >
            Review Documents
            <ArrowRight className='size-4' />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
