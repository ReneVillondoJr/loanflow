'use client';

import { CalendarDays, Mail, Phone, User } from 'lucide-react';

import { Badge } from '@/components/ui/badge';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

import type { ApplicationDetailsDialogProps } from '../types/applications';

function formatCurrency(amount: number) {
  return new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
    maximumFractionDigits: 0,
  }).format(amount);
}

export function ApplicationDetailsDialog({
  application,
  open,
  onOpenChange,
}: ApplicationDetailsDialogProps) {
  if (!application) {
    return null;
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='max-h-[90vh] overflow-y-auto sm:max-w-2xl'>
        <DialogHeader>
          <div className='flex flex-wrap items-center gap-2'>
            <DialogTitle>{application.applicationNumber}</DialogTitle>

            <Badge variant='outline'>{application.status}</Badge>
          </div>

          <DialogDescription>
            Review application details and applicant information.
          </DialogDescription>
        </DialogHeader>

        <div className='space-y-6'>
          {/* Applicant */}
          <section className='space-y-3'>
            <h3 className='text-sm font-semibold'>Applicant Information</h3>

            <div className='rounded-lg border p-4'>
              <div className='flex items-start gap-3'>
                <div className='flex size-10 items-center justify-center rounded-full bg-muted'>
                  <User className='size-5 text-muted-foreground' />
                </div>

                <div className='min-w-0 space-y-2'>
                  <p className='font-medium'>{application.applicantName}</p>

                  <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                    <Mail className='size-3.5' />
                    {application.applicantEmail}
                  </div>

                  {application.applicantPhone && (
                    <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                      <Phone className='size-3.5' />
                      {application.applicantPhone}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Loan */}
          <section className='space-y-3'>
            <h3 className='text-sm font-semibold'>Loan Information</h3>

            <div className='grid gap-4 rounded-lg border p-4 sm:grid-cols-2'>
              <div>
                <p className='text-xs text-muted-foreground'>Loan Type</p>
                <p className='mt-1 text-sm font-medium'>
                  {application.loanType}
                </p>
              </div>

              <div>
                <p className='text-xs text-muted-foreground'>Amount</p>
                <p className='mt-1 text-sm font-medium'>
                  {formatCurrency(application.amount)}
                </p>
              </div>

              <div>
                <p className='text-xs text-muted-foreground'>Loan Term</p>
                <p className='mt-1 text-sm font-medium'>
                  {application.term} months
                </p>
              </div>

              <div>
                <p className='text-xs text-muted-foreground'>Purpose</p>
                <p className='mt-1 text-sm font-medium'>
                  {application.purpose ?? '—'}
                </p>
              </div>
            </div>
          </section>

          {/* Financial */}
          <section className='space-y-3'>
            <h3 className='text-sm font-semibold'>Financial Information</h3>

            <div className='grid gap-4 rounded-lg border p-4 sm:grid-cols-3'>
              <div>
                <p className='text-xs text-muted-foreground'>Employment</p>
                <p className='mt-1 text-sm font-medium'>
                  {application.employmentStatus ?? '—'}
                </p>
              </div>

              <div>
                <p className='text-xs text-muted-foreground'>Monthly Income</p>
                <p className='mt-1 text-sm font-medium'>
                  {application.monthlyIncome ?
                    formatCurrency(application.monthlyIncome)
                  : '—'}
                </p>
              </div>

              <div>
                <p className='text-xs text-muted-foreground'>Credit Score</p>
                <p className='mt-1 text-sm font-medium'>
                  {application.creditScore ?? '—'}
                </p>
              </div>
            </div>
          </section>

          {/* Timeline */}
          <section className='space-y-3'>
            <h3 className='text-sm font-semibold'>Application Timeline</h3>

            <div className='space-y-3 rounded-lg border p-4 text-sm'>
              <div className='flex items-center justify-between gap-4'>
                <div className='flex items-center gap-2 text-muted-foreground'>
                  <CalendarDays className='size-4' />
                  Submitted
                </div>

                <span className='font-medium'>{application.submittedAt}</span>
              </div>

              <div className='flex items-center justify-between gap-4'>
                <span className='text-muted-foreground'>Last Updated</span>

                <span className='font-medium'>{application.updatedAt}</span>
              </div>

              <div className='flex items-center justify-between gap-4'>
                <span className='text-muted-foreground'>Assigned To</span>

                <span className='font-medium'>
                  {application.assignedTo ?? 'Unassigned'}
                </span>
              </div>
            </div>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}
