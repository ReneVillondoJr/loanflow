'use client';

import { Check, Eye, MoreHorizontal, RotateCcw, X } from 'lucide-react';

import { Button } from '@/components/ui/button';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import type { LoanDecision } from '../types/decision';

interface DecisionRowActionsProps {
  decision: LoanDecision;

  onView: (decision: LoanDecision) => void;

  onApprove: (decision: LoanDecision) => void;

  onReject: (decision: LoanDecision) => void;

  onManualReview: (decision: LoanDecision) => void;
}

export function DecisionRowActions({
  decision,
  onView,
  onApprove,
  onReject,
  onManualReview,
}: DecisionRowActionsProps) {
  const canDecide =
    decision.status === 'PENDING' || decision.status === 'MANUAL_REVIEW';

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button type='button' variant='ghost' size='icon' className='size-8'>
          <MoreHorizontal className='size-4' />

          <span className='sr-only'>Open actions</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align='end' className='w-48'>
        <DropdownMenuItem onClick={() => onView(decision)}>
          <Eye className='mr-2 size-4' />
          View Details
        </DropdownMenuItem>

        {canDecide && (
          <>
            <DropdownMenuSeparator />

            <DropdownMenuItem onClick={() => onApprove(decision)}>
              <Check className='mr-2 size-4' />
              Approve
            </DropdownMenuItem>

            <DropdownMenuItem onClick={() => onManualReview(decision)}>
              <RotateCcw className='mr-2 size-4' />
              Manual Review
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem
              onClick={() => onReject(decision)}
              className='text-destructive focus:text-destructive'
            >
              <X className='mr-2 size-4' />
              Reject
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
