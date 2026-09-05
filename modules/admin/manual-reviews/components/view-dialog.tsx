'use client';

import { FileText, UserRound } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';

import type { ManualReview } from '@/modules/admin/manual-reviews/types/manual-review';

interface ManualReviewViewDialogProps {
  open: boolean;
  review: ManualReview | null;
  onOpenChange: (open: boolean) => void;
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
    maximumFractionDigits: 0,
  }).format(value);
}

function formatLoanType(value: ManualReview['loanType']) {
  return value
    .split('_')
    .map((word) => word.charAt(0) + word.slice(1).toLowerCase())
    .join(' ');
}

export function ManualReviewViewDialog({
  open,
  review,
  onOpenChange,
}: ManualReviewViewDialogProps) {
  if (!review) {
    return null;
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='max-h-[90vh] overflow-y-auto sm:max-w-2xl'>
        <DialogHeader>
          <DialogTitle>Manual Review Details</DialogTitle>

          <DialogDescription>{review.applicationId}</DialogDescription>
        </DialogHeader>

        <div className='space-y-6'>
          <section className='space-y-3'>
            <div className='flex items-center gap-2'>
              <UserRound className='size-4 text-muted-foreground' />

              <h3 className='font-medium'>Applicant</h3>
            </div>

            <div className='grid gap-4 rounded-lg border p-4 sm:grid-cols-2'>
              <div>
                <p className='text-xs text-muted-foreground'>Name</p>

                <p className='mt-1 font-medium'>{review.applicant.name}</p>
              </div>

              <div>
                <p className='text-xs text-muted-foreground'>Email</p>

                <p className='mt-1'>{review.applicant.email}</p>
              </div>

              <div>
                <p className='text-xs text-muted-foreground'>Phone</p>

                <p className='mt-1'>{review.applicant.phone}</p>
              </div>

              <div>
                <p className='text-xs text-muted-foreground'>Assigned To</p>

                <p className='mt-1'>{review.assignedTo ?? 'Unassigned'}</p>
              </div>
            </div>
          </section>

          <Separator />

          <section className='space-y-3'>
            <div className='flex items-center gap-2'>
              <FileText className='size-4 text-muted-foreground' />

              <h3 className='font-medium'>Application</h3>
            </div>

            <div className='grid gap-4 rounded-lg border p-4 sm:grid-cols-2'>
              <div>
                <p className='text-xs text-muted-foreground'>Loan Type</p>

                <p className='mt-1'>{formatLoanType(review.loanType)}</p>
              </div>

              <div>
                <p className='text-xs text-muted-foreground'>
                  Requested Amount
                </p>

                <p className='mt-1 font-medium'>
                  {formatCurrency(review.requestedAmount)}
                </p>
              </div>

              <div>
                <p className='text-xs text-muted-foreground'>Credit Score</p>

                <p className='mt-1 font-semibold'>{review.creditScore}</p>
              </div>

              <div>
                <p className='text-xs text-muted-foreground'>Documents</p>

                <p className='mt-1'>{review.documentsCount} documents</p>
              </div>
            </div>
          </section>

          <Separator />

          <section className='space-y-3'>
            <h3 className='font-medium'>Review Information</h3>

            <div className='rounded-lg border p-4'>
              <div className='flex flex-wrap gap-2'>
                <Badge variant='secondary'>{review.status}</Badge>

                <Badge variant='outline'>{review.priority} priority</Badge>

                <Badge variant='outline'>{review.riskLevel} risk</Badge>
              </div>

              <div className='mt-4'>
                <p className='text-xs text-muted-foreground'>Review reason</p>

                <p className='mt-1 text-sm'>{review.reason}</p>
              </div>

              {review.decisionNotes && (
                <div className='mt-4'>
                  <p className='text-xs text-muted-foreground'>
                    Decision notes
                  </p>

                  <p className='mt-1 text-sm'>{review.decisionNotes}</p>
                </div>
              )}
            </div>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}
