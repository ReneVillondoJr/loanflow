import { CalendarDays, CircleDollarSign, FileCheck2, User } from 'lucide-react';

import { Badge } from '@/components/ui/badge';

import { Card, CardContent, CardHeader } from '@/components/ui/card';

import type { CurrentApplication as CurrentApplicationType } from '../types/dashboard';

interface CurrentApplicationProps {
  application: CurrentApplicationType;
}

function getStatusClass(status: CurrentApplicationType['status']) {
  switch (status) {
    case 'Approved':
      return 'border-emerald-200 bg-emerald-50 text-emerald-700';

    case 'Disbursed':
      return 'border-blue-200 bg-blue-50 text-blue-700';

    case 'Pending':
      return 'border-amber-200 bg-amber-50 text-amber-700';

    case 'Under Review':
      return 'border-violet-200 bg-violet-50 text-violet-700';

    case 'Rejected':
      return 'border-red-200 bg-red-50 text-red-700';

    default:
      return '';
  }
}

function formatCurrency(amount: number) {
  return new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
    maximumFractionDigits: 0,
  }).format(amount);
}

export function CurrentApplication({ application }: CurrentApplicationProps) {
  const documentProgress =
    application.documentsCount > 0 ?
      Math.round(
        (application.completedDocuments / application.documentsCount) * 100,
      )
    : 0;

  return (
    <Card>
      <CardHeader>
        <div className='flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
          <div>
            <h2 className='text-base font-semibold'>Current Application</h2>

            <p className='mt-1 text-sm text-muted-foreground'>
              Application currently receiving the most attention.
            </p>
          </div>

          <Badge
            variant='outline'
            className={getStatusClass(application.status)}
          >
            {application.status}
          </Badge>
        </div>
      </CardHeader>

      <CardContent>
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
          <div className='flex items-start gap-3'>
            <div className='flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted'>
              <User className='size-4 text-muted-foreground' />
            </div>

            <div className='min-w-0'>
              <p className='text-xs text-muted-foreground'>Applicant</p>

              <p className='mt-1 truncate text-sm font-semibold'>
                {application.applicantName}
              </p>

              <p className='mt-1 truncate text-xs text-muted-foreground'>
                {application.applicationNumber}
              </p>
            </div>
          </div>

          <div className='flex items-start gap-3'>
            <div className='flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted'>
              <CircleDollarSign className='size-4 text-muted-foreground' />
            </div>

            <div>
              <p className='text-xs text-muted-foreground'>Loan Amount</p>

              <p className='mt-1 text-sm font-semibold'>
                {formatCurrency(application.amount)}
              </p>
            </div>
          </div>

          <div className='flex items-start gap-3'>
            <div className='flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted'>
              <FileCheck2 className='size-4 text-muted-foreground' />
            </div>

            <div className='min-w-0 flex-1'>
              <div className='flex items-center justify-between gap-3'>
                <p className='text-xs text-muted-foreground'>Documents</p>

                <span className='text-xs font-medium'>
                  {application.completedDocuments}/{application.documentsCount}
                </span>
              </div>

              <div className='mt-2 h-2 overflow-hidden rounded-full bg-muted'>
                <div
                  className='h-full rounded-full bg-primary transition-all'
                  style={{
                    width: `${documentProgress}%`,
                  }}
                />
              </div>
            </div>
          </div>

          <div className='flex items-start gap-3'>
            <div className='flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted'>
              <CalendarDays className='size-4 text-muted-foreground' />
            </div>

            <div>
              <p className='text-xs text-muted-foreground'>Submitted</p>

              <p className='mt-1 text-sm font-semibold'>
                {application.submittedAt}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
