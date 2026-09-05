'use client';

import {
  CheckCircle2,
  Eye,
  MoreHorizontal,
  Play,
  ShieldAlert,
  XCircle,
} from 'lucide-react';

import { Button } from '@/components/ui/button';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import type { ManualReview } from '@/modules/admin/manual-reviews/types/manual-review';

interface ManualReviewRowActionsProps {
  review: ManualReview;
  onView: (review: ManualReview) => void;
  onStart: (id: string) => void;
  onApprove: (review: ManualReview) => void;
  onReject: (review: ManualReview) => void;
  onEscalate: (id: string) => void;
}

export function ManualReviewRowActions({
  review,
  onView,
  onStart,
  onApprove,
  onReject,
  onEscalate,
}: ManualReviewRowActionsProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            variant='ghost'
            size='icon'
            aria-label={`Actions for ${review.applicant.name}`}
          >
            <MoreHorizontal className='size-4' />
          </Button>
        }
      />

      <DropdownMenuContent align='end'>
        <DropdownMenuItem onClick={() => onView(review)}>
          <Eye className='mr-2 size-4' />
          View details
        </DropdownMenuItem>

        {review.status === 'PENDING' && (
          <DropdownMenuItem onClick={() => onStart(review.id)}>
            <Play className='mr-2 size-4' />
            Start review
          </DropdownMenuItem>
        )}

        <DropdownMenuSeparator />

        {review.status !== 'APPROVED' && review.status !== 'REJECTED' && (
          <>
            <DropdownMenuItem onClick={() => onApprove(review)}>
              <CheckCircle2 className='mr-2 size-4' />
              Approve
            </DropdownMenuItem>

            <DropdownMenuItem onClick={() => onReject(review)}>
              <XCircle className='mr-2 size-4' />
              Reject
            </DropdownMenuItem>

            <DropdownMenuItem onClick={() => onEscalate(review.id)}>
              <ShieldAlert className='mr-2 size-4' />
              Escalate
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
