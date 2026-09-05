'use client';

import { useState } from 'react';

import { Edit, MoreHorizontal, Power, Trash2 } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import type { LoanProduct } from '../types/loan-product';

import { DeleteLoanProductDialog } from './delete-loan-product-dialog';
import { EditLoanProductDialog } from './edit-loan-product-dialog';

interface LoanProductRowActionsProps {
  product: LoanProduct;
  onUpdate: (product: LoanProduct) => void;
  onToggleStatus: (id: string) => void;
  onDelete: (id: string) => void;
}

export function LoanProductRowActions({
  product,
  onUpdate,
  onToggleStatus,
  onDelete,
}: LoanProductRowActionsProps) {
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  function handleEdit() {
    setEditDialogOpen(true);
  }

  function handleToggleStatus() {
    onToggleStatus(product.id);
  }

  function handleDelete() {
    setDeleteDialogOpen(true);
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className='inline-flex size-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'>
          <MoreHorizontal className='size-4' />

          <span className='sr-only'>Open actions menu</span>
        </DropdownMenuTrigger>

        <DropdownMenuContent align='end' className='w-48'>
          <DropdownMenuItem onClick={handleEdit}>
            <Edit className='mr-2 size-4' />
            Edit Product
          </DropdownMenuItem>

          <DropdownMenuItem onClick={handleToggleStatus}>
            <Power className='mr-2 size-4' />

            {product.status === 'ACTIVE' ? 'Deactivate' : 'Activate'}
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem
            className='text-destructive focus:text-destructive'
            onClick={handleDelete}
          >
            <Trash2 className='mr-2 size-4' />
            Delete Product
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <EditLoanProductDialog
        product={product}
        open={editDialogOpen}
        onOpenChange={setEditDialogOpen}
        onSave={onUpdate}
      />

      <DeleteLoanProductDialog
        product={product}
        open={deleteDialogOpen}
        onOpenChange={setDeleteDialogOpen}
        onConfirm={onDelete}
      />
    </>
  );
}
