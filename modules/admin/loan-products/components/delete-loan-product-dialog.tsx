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

import type { LoanProduct } from '../types/loan-product';

interface DeleteLoanProductDialogProps {
  product: LoanProduct | null;

  open: boolean;

  onOpenChange: (open: boolean) => void;

  onConfirm: (id: string) => void;
}

export function DeleteLoanProductDialog({
  product,
  open,
  onOpenChange,
  onConfirm,
}: DeleteLoanProductDialogProps) {
  function handleDelete() {
    if (!product) {
      return;
    }

    onConfirm(product.id);

    onOpenChange(false);
  }

  if (!product) {
    return null;
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='sm:max-w-md'>
        <DialogHeader>
          <div className='mb-3 flex size-10 items-center justify-center rounded-full bg-destructive/10'>
            <AlertTriangle className='size-5 text-destructive' />
          </div>

          <DialogTitle>Delete Loan Product?</DialogTitle>

          <DialogDescription>
            Are you sure you want to delete <strong>{product.name}</strong>?
            This action cannot be undone.
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

          <Button type='button' variant='destructive' onClick={handleDelete}>
            Delete Product
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
