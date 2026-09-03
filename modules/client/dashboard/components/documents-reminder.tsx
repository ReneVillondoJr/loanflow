import Link from 'next/link';

import { ArrowRight, FileCheck2 } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';

export function DocumentsReminder() {
  return (
    <Card>
      <CardContent className='p-5'>
        <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
          <div className='flex min-w-0 items-start gap-3'>
            <div
              className='
                flex
                size-10
                shrink-0
                items-center
                justify-center
                rounded-md
                bg-muted
              '
            >
              <FileCheck2 className='size-5 text-muted-foreground' />
            </div>

            <div className='min-w-0'>
              <p className='text-sm font-semibold'>
                Keep your documents updated
              </p>

              <p className='mt-1 text-sm text-muted-foreground'>
                Make sure your required documents are complete for faster
                processing.
              </p>
            </div>
          </div>

          <Link
            href='/clients/documents'
            className='
              inline-flex
              h-9
              shrink-0
              items-center
              justify-center
              gap-2
              rounded-md
              border
              bg-background
              px-3
              text-sm
              font-medium
              transition-colors
              hover:bg-muted
            '
          >
            Manage Documents
            <ArrowRight className='size-4' />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
