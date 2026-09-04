'use client';

import {
  ArrowRight,
  CalendarDays,
  CircleDollarSign,
  FileText,
  User,
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';

import type {
  AdminApplication,
  ApplicationCardProps,
} from '../types/applications';

function getStatusClass(status: string) {
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

function getPriorityClass(priority: string) {
  switch (priority) {
    case 'Urgent':
      return 'border-red-200 bg-red-50 text-red-700';

    case 'High':
      return 'border-amber-200 bg-amber-50 text-amber-700';

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

export function ApplicationCard({ application, onView }: ApplicationCardProps) {
  const documentProgress =
    application.documentsCount > 0 ?
      Math.round(
        (application.completedDocuments / application.documentsCount) * 100,
      )
    : 0;

  return (
    <Card className='flex h-full flex-col'>
      <CardHeader className='space-y-4'>
        <div className='flex items-start justify-between gap-3'>
          <div className='flex min-w-0 items-start gap-3'>
            <div className='flex size-10 shrink-0 items-center justify-center rounded-md bg-muted'>
              <FileText className='size-5 text-muted-foreground' />
            </div>

            <div className='min-w-0'>
              <p className='truncate font-semibold'>
                {application.applicationNumber}
              </p>

              <p className='mt-1 truncate text-sm text-muted-foreground'>
                {application.loanType}
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

        {application.priority !== 'Normal' && (
          <Badge
            variant='outline'
            className={`w-fit ${getPriorityClass(application.priority)}`}
          >
            {application.priority} Priority
          </Badge>
        )}
      </CardHeader>

      <CardContent className='flex-1'>
        <div className='space-y-4'>
          <div className='flex items-center gap-3'>
            <div className='flex size-8 items-center justify-center rounded-full bg-muted'>
              <User className='size-4 text-muted-foreground' />
            </div>

            <div className='min-w-0'>
              <p className='truncate text-sm font-medium'>
                {application.applicantName}
              </p>

              <p className='truncate text-xs text-muted-foreground'>
                {application.applicantEmail}
              </p>
            </div>
          </div>

          <div className='grid grid-cols-2 gap-4'>
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
              <p className='text-xs text-muted-foreground'>Term</p>

              <p className='mt-1 text-sm font-semibold'>
                {application.term} months
              </p>
            </div>
          </div>

          <div>
            <div className='flex items-center justify-between text-xs'>
              <span className='text-muted-foreground'>Documents</span>

              <span className='font-medium'>
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

          <div className='flex items-center justify-between text-xs text-muted-foreground'>
            <div className='flex items-center gap-1.5'>
              <CalendarDays className='size-3.5' />
              Submitted
            </div>

            <span>{application.submittedAt}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className='gap-2'>
        <Button
          type='button'
          variant='outline'
          className='flex-1'
          onClick={() => onView(application)}
        >
          View Application
          <ArrowRight className='size-4' />
        </Button>
      </CardFooter>
    </Card>
  );
}
