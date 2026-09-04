'use client';

import { useRouter } from 'next/navigation';

import {
  ArrowRight,
  CalendarDays,
  CircleDollarSign,
  FileText,
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

import { Card, CardContent, CardHeader } from '@/components/ui/card';

import type {
  RecentApplication,
  RecentApplicationsProps,
} from '../types/dashboard';

function getStatusClass(status: RecentApplication['status']) {
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

export function RecentApplications({ applications }: RecentApplicationsProps) {
  const router = useRouter();

  return (
    <Card>
      <CardHeader className='flex flex-row items-center justify-between gap-4'>
        <div>
          <h2 className='text-base font-semibold'>Recent Applications</h2>

          <p className='mt-1 text-sm text-muted-foreground'>
            Latest loan applications requiring attention.
          </p>
        </div>

        <Button
          type='button'
          variant='ghost'
          size='sm'
          className='shrink-0'
          onClick={() => router.push('/admin/applications')}
        >
          View All
          <ArrowRight className='size-4' />
        </Button>
      </CardHeader>

      <CardContent>
        <div className='grid gap-4 md:grid-cols-2'>
          {applications.map((application) => (
            <div
              key={application.id}
              className='rounded-xl border p-4 transition-colors hover:bg-muted/40'
            >
              <div className='flex items-start justify-between gap-3'>
                <div className='flex min-w-0 items-center gap-3'>
                  <div className='flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted'>
                    <FileText className='size-5 text-muted-foreground' />
                  </div>

                  <div className='min-w-0'>
                    <p className='truncate text-sm font-semibold'>
                      {application.applicationNumber}
                    </p>

                    <p className='mt-1 truncate text-xs text-muted-foreground'>
                      {application.applicantName}
                    </p>
                  </div>
                </div>

                <Badge
                  variant='outline'
                  className={getStatusClass(application.status)}
                >
                  {application.status}
                </Badge>
              </div>

              <div className='mt-4 grid grid-cols-2 gap-4'>
                <div>
                  <div className='flex items-center gap-1.5 text-xs text-muted-foreground'>
                    <CircleDollarSign className='size-3.5' />
                    Amount
                  </div>

                  <p className='mt-1 text-sm font-semibold'>
                    {formatCurrency(application.amount)}
                  </p>
                </div>

                <div>
                  <div className='flex items-center gap-1.5 text-xs text-muted-foreground'>
                    <CalendarDays className='size-3.5' />
                    Submitted
                  </div>

                  <p className='mt-1 text-sm font-semibold'>
                    {application.submittedAt}
                  </p>
                </div>
              </div>

              <div className='mt-4 flex items-center justify-between border-t pt-3'>
                <span className='text-xs text-muted-foreground'>
                  Assigned to
                </span>

                <span className='truncate text-xs font-medium'>
                  {application.assignedTo ?? 'Unassigned'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
