'use client';

import { AlertTriangle, ArrowDown, ArrowUp, Minus } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

import { ManualReviewRowActions } from './row-actions';

import type { ManualReview } from '@/modules/admin/manual-reviews/types/manual-review';

interface ManualReviewsTableProps {
  reviews: ManualReview[];
  onView: (review: ManualReview) => void;
  onStart: (id: string) => void;
  onApprove: (review: ManualReview) => void;
  onReject: (review: ManualReview) => void;
  onEscalate: (id: string) => void;
  page: number;
  pageCount: number;
  pageSize: number;
  total: number;
  onPageChange: (page: number) => void;
}

function formatLoanType(value: ManualReview['loanType']) {
  return value
    .split('_')
    .map((word) => word.charAt(0) + word.slice(1).toLowerCase())
    .join(' ');
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
    maximumFractionDigits: 0,
  }).format(value);
}

function getStatusVariant(status: ManualReview['status']) {
  switch (status) {
    case 'APPROVED':
      return 'default' as const;
    case 'REJECTED':
      return 'destructive' as const;
    case 'ESCALATED':
      return 'destructive' as const;
    default:
      return 'secondary' as const;
  }
}

function getPriorityIcon(priority: ManualReview['priority']) {
  switch (priority) {
    case 'URGENT':
      return ArrowUp;
    case 'HIGH':
      return AlertTriangle;
    case 'LOW':
      return ArrowDown;
    default:
      return Minus;
  }
}

export function ManualReviewsTable({
  reviews,
  onView,
  onStart,
  onApprove,
  onReject,
  onEscalate,
  page,
  pageCount,
  pageSize,
  total,
  onPageChange,
}: ManualReviewsTableProps) {
  const start = total === 0 ? 0 : (page - 1) * pageSize + 1;

  const end = Math.min(page * pageSize, total);

  return (
    <Card className='overflow-hidden'>
      <CardContent className='p-0'>
        <div className='overflow-x-auto'>
          <table className='w-full min-w-[1100px] text-sm'>
            <thead className='border-b bg-muted/40'>
              <tr>
                <th className='px-4 py-3 text-left font-medium'>Applicant</th>

                <th className='px-4 py-3 text-left font-medium'>Application</th>

                <th className='px-4 py-3 text-left font-medium'>Loan</th>

                <th className='px-4 py-3 text-right font-medium'>Amount</th>

                <th className='px-4 py-3 text-center font-medium'>Score</th>

                <th className='px-4 py-3 text-left font-medium'>Risk</th>

                <th className='px-4 py-3 text-left font-medium'>Priority</th>

                <th className='px-4 py-3 text-left font-medium'>Status</th>

                <th className='px-4 py-3 text-left font-medium'>Assigned To</th>

                <th className='w-12 px-4 py-3' />
              </tr>
            </thead>

            <tbody className='divide-y'>
              {reviews.length === 0 ?
                <tr>
                  <td colSpan={10} className='px-4 py-12 text-center'>
                    <p className='font-medium'>No manual reviews found</p>

                    <p className='mt-1 text-sm text-muted-foreground'>
                      Try adjusting your filters or search.
                    </p>
                  </td>
                </tr>
              : reviews.map((review) => {
                  const PriorityIcon = getPriorityIcon(review.priority);

                  return (
                    <tr
                      key={review.id}
                      className='transition-colors hover:bg-muted/30'
                    >
                      <td className='px-4 py-4'>
                        <div>
                          <p className='font-medium'>{review.applicant.name}</p>

                          <p className='text-xs text-muted-foreground'>
                            {review.applicant.email}
                          </p>
                        </div>
                      </td>

                      <td className='px-4 py-4'>
                        <span className='font-mono text-xs'>
                          {review.applicationId}
                        </span>
                      </td>

                      <td className='px-4 py-4'>
                        {formatLoanType(review.loanType)}
                      </td>

                      <td className='px-4 py-4 text-right font-medium'>
                        {formatCurrency(review.requestedAmount)}
                      </td>

                      <td className='px-4 py-4 text-center'>
                        <span className='font-semibold'>
                          {review.creditScore}
                        </span>
                      </td>

                      <td className='px-4 py-4'>
                        <Badge variant='outline'>{review.riskLevel}</Badge>
                      </td>

                      <td className='px-4 py-4'>
                        <div className='flex items-center gap-2'>
                          <PriorityIcon className='size-4' />

                          <span className='capitalize'>
                            {review.priority.toLowerCase()}
                          </span>
                        </div>
                      </td>

                      <td className='px-4 py-4'>
                        <Badge variant={getStatusVariant(review.status)}>
                          {review.status
                            .split('_')
                            .map(
                              (word) =>
                                word.charAt(0) + word.slice(1).toLowerCase(),
                            )
                            .join(' ')}
                        </Badge>
                      </td>

                      <td className='px-4 py-4 text-muted-foreground'>
                        {review.assignedTo ?? 'Unassigned'}
                      </td>

                      <td className='px-4 py-4'>
                        <ManualReviewRowActions
                          review={review}
                          onView={onView}
                          onStart={onStart}
                          onApprove={onApprove}
                          onReject={onReject}
                          onEscalate={onEscalate}
                        />
                      </td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        </div>

        <div className='flex flex-col gap-3 border-t px-4 py-3 sm:flex-row sm:items-center sm:justify-between'>
          <p className='text-sm text-muted-foreground'>
            Showing {start}–{end} of {total} reviews
          </p>

          <div className='flex items-center gap-2'>
            <Button
              variant='outline'
              size='sm'
              disabled={page <= 1}
              onClick={() => onPageChange(page - 1)}
            >
              Previous
            </Button>

            <span className='min-w-20 text-center text-sm'>
              Page {page} of {pageCount}
            </span>

            <Button
              variant='outline'
              size='sm'
              disabled={page >= pageCount}
              onClick={() => onPageChange(page + 1)}
            >
              Next
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
