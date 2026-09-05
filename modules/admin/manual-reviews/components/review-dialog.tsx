'use client';

import { useState } from 'react';

import { AlertTriangle, CheckCircle2, XCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';

import type {
  ManualReview,
  ManualReviewDecision,
} from '@/modules/admin/manual-reviews/types/manual-review';

interface ManualReviewDialogProps {
  open: boolean;
  review: ManualReview | null;
  decision: ManualReviewDecision;
  onOpenChange: (open: boolean) => void;
  onSubmit: (decision: ManualReviewDecision, notes: string) => void;
}

const DECISION_CONFIG = {
  APPROVE: {
    title: 'Approve Application',
    description:
      'Confirm that this application meets the requirements for approval.',
    button: 'Approve Application',
    icon: CheckCircle2,
  },
  REJECT: {
    title: 'Reject Application',
    description: 'Provide a reason for rejecting this loan application.',
    button: 'Reject Application',
    icon: XCircle,
  },
  REQUEST_INFORMATION: {
    title: 'Request Information',
    description:
      'Specify the additional information required from the applicant.',
    button: 'Request Information',
    icon: AlertTriangle,
  },
  ESCALATE: {
    title: 'Escalate Review',
    description:
      'Explain why this application requires senior underwriting review.',
    button: 'Escalate Review',
    icon: AlertTriangle,
  },
} as const;

export function ManualReviewDialog({
  open,
  review,
  decision,
  onOpenChange,
  onSubmit,
}: ManualReviewDialogProps) {
  const [notes, setNotes] = useState('');

  if (!review) {
    return null;
  }

  const config = DECISION_CONFIG[decision];
  const Icon = config.icon;

  function handleSubmit() {
    onSubmit(decision, notes.trim());
    setNotes('');
  }

  function handleOpenChange(value: boolean) {
    if (!value) {
      setNotes('');
    }

    onOpenChange(value);
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className='sm:max-w-lg'>
        <DialogHeader>
          <div className='flex size-10 items-center justify-center rounded-lg bg-muted'>
            <Icon className='size-5' />
          </div>

          <DialogTitle className='pt-2'>{config.title}</DialogTitle>

          <DialogDescription>{config.description}</DialogDescription>
        </DialogHeader>

        <div className='rounded-lg border bg-muted/30 p-4'>
          <p className='font-medium'>{review.applicant.name}</p>

          <p className='text-sm text-muted-foreground'>
            {review.applicationId}
          </p>
        </div>

        <div className='space-y-2'>
          <label htmlFor='review-notes' className='text-sm font-medium'>
            Review notes
          </label>

          <Textarea
            id='review-notes'
            value={notes}
            onChange={(event) => setNotes(event.target.value)}
            placeholder='Add notes about your decision...'
            className='min-h-28 resize-none'
          />
        </div>

        <DialogFooter>
          <Button variant='outline' onClick={() => handleOpenChange(false)}>
            Cancel
          </Button>

          <Button
            variant={decision === 'REJECT' ? 'destructive' : 'default'}
            onClick={handleSubmit}
            disabled={decision !== 'APPROVE' && !notes.trim()}
          >
            {config.button}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
