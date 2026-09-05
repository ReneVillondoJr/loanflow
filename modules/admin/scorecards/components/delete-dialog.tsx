'use client';

import { AlertTriangle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

import type { Scorecard } from '@/modules/admin/scorecards/types/scorecard';

interface ScorecardDeleteDialogProps {
  scorecard: Scorecard | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: (id: string) => void;
}

export function ScorecardDeleteDialog({
  scorecard,
  open,
  onOpenChange,
  onConfirm,
}: ScorecardDeleteDialogProps) {
  if (!scorecard) {
    return null;
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='sm:max-w-md'>
        <DialogHeader>
          <div className='mb-2 flex size-10 items-center justify-center rounded-full bg-destructive/10'>
            <AlertTriangle className='size-5 text-destructive' />
          </div>

          <DialogTitle>Delete scorecard?</DialogTitle>

          <DialogDescription>
            This will permanently delete <strong>{scorecard.name}</strong>. This
            action cannot be undone.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Button
            type='button'
            variant='outline'
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>

          <Button
            type='button'
            variant='destructive'
            onClick={() => {
              onConfirm(scorecard.id);
              onOpenChange(false);
            }}
          >
            Delete Scorecard
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
