import Link from 'next/link';

import { ArrowRight } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import type { CurrentApplication } from '../types/dashboard';

interface CurrentApplicationProps {
  application: CurrentApplication;
}

function getStatusClass(status: string) {
  switch (status) {
    case 'Approved':
      return 'border-emerald-200 bg-emerald-50 text-emerald-700';

    case 'Pending':
      return 'border-amber-200 bg-amber-50 text-amber-700';

    case 'Under Review':
      return 'border-blue-200 bg-blue-50 text-blue-700';

    case 'Rejected':
      return 'border-red-200 bg-red-50 text-red-700';

    default:
      return 'border-border bg-muted text-muted-foreground';
  }
}

export function CurrentApplication({ application }: CurrentApplicationProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className='text-base'>Current Application</CardTitle>

        <p className='text-sm text-muted-foreground'>
          Track your latest loan application.
        </p>
      </CardHeader>

      <CardContent>
        <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
          <div className='rounded-md border p-4'>
            <p className='text-xs text-muted-foreground'>Application</p>

            <p className='mt-1 text-sm font-medium'>{application.id}</p>
          </div>

          <div className='rounded-md border p-4'>
            <p className='text-xs text-muted-foreground'>Loan Type</p>

            <p className='mt-1 text-sm font-medium'>{application.loanType}</p>
          </div>

          <div className='rounded-md border p-4'>
            <p className='text-xs text-muted-foreground'>Amount</p>

            <p className='mt-1 text-sm font-medium'>{application.amount}</p>
          </div>

          <div className='rounded-md border p-4'>
            <p className='text-xs text-muted-foreground'>Status</p>

            <Badge
              variant='outline'
              className={`mt-1 ${getStatusClass(application.status)}`}
            >
              {application.status}
            </Badge>
          </div>
        </div>

        <div className='mt-4 flex justify-end'>
          <Link
            href={`/clients/applications/${application.id}`}
            className='
              inline-flex
              h-10
              w-full
              items-center
              justify-center
              gap-2
              rounded-md
              border
              bg-background
              px-4
              text-sm
              font-medium
              transition-colors
              hover:bg-muted
              sm:w-auto
            '
          >
            View Application
            <ArrowRight className='size-4' />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
