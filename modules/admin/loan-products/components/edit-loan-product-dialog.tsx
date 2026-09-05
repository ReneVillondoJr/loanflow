'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

import type {
  LoanProduct,
  LoanProductCategory,
  LoanProductStatus,
} from '../types/loan-product';

interface EditLoanProductDialogProps {
  product: LoanProduct | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (product: LoanProduct) => void;
}

interface LoanProductFormProps {
  product: LoanProduct;
  onOpenChange: (open: boolean) => void;
  onSave: (product: LoanProduct) => void;
}

function LoanProductForm({
  product,
  onOpenChange,
  onSave,
}: LoanProductFormProps) {
  const [formData, setFormData] = useState<LoanProduct>(() => ({
    ...product,
  }));

  function updateField<K extends keyof LoanProduct>(
    field: K,
    value: LoanProduct[K],
  ) {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));
  }

  function handleSave() {
    const updatedProduct: LoanProduct = {
      ...formData,
      updatedAt: new Date().toISOString().split('T')[0],
    };

    onSave(updatedProduct);
    onOpenChange(false);
  }

  return (
    <div className='grid gap-5 py-4 sm:grid-cols-2'>
      <div className='grid gap-2 sm:col-span-2'>
        <Label htmlFor='edit-name'>Product Name</Label>

        <Input
          id='edit-name'
          value={formData.name}
          onChange={(event) => updateField('name', event.target.value)}
        />
      </div>

      <div className='grid gap-2'>
        <Label htmlFor='edit-code'>Product Code</Label>

        <Input
          id='edit-code'
          value={formData.code}
          onChange={(event) => updateField('code', event.target.value)}
        />
      </div>

      <div className='grid gap-2'>
        <Label htmlFor='edit-category'>Category</Label>

        <select
          id='edit-category'
          value={formData.category}
          onChange={(event) =>
            updateField('category', event.target.value as LoanProductCategory)
          }
          className='h-10 w-full rounded-md border bg-background px-3 text-sm'
        >
          <option value='PERSONAL'>Personal</option>
          <option value='BUSINESS'>Business</option>
          <option value='AUTO'>Auto</option>
          <option value='HOME'>Home</option>
          <option value='EDUCATION'>Education</option>
        </select>
      </div>

      <div className='grid gap-2 sm:col-span-2'>
        <Label htmlFor='edit-description'>Description</Label>

        <textarea
          id='edit-description'
          value={formData.description}
          onChange={(event) => updateField('description', event.target.value)}
          className='min-h-24 w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring'
        />
      </div>

      <div className='grid gap-2'>
        <Label htmlFor='edit-min-amount'>Minimum Amount</Label>

        <Input
          id='edit-min-amount'
          type='number'
          min='0'
          value={formData.minAmount}
          onChange={(event) =>
            updateField('minAmount', Number(event.target.value))
          }
        />
      </div>

      <div className='grid gap-2'>
        <Label htmlFor='edit-max-amount'>Maximum Amount</Label>

        <Input
          id='edit-max-amount'
          type='number'
          min='0'
          value={formData.maxAmount}
          onChange={(event) =>
            updateField('maxAmount', Number(event.target.value))
          }
        />
      </div>

      <div className='grid gap-2'>
        <Label htmlFor='edit-min-term'>Minimum Term</Label>

        <Input
          id='edit-min-term'
          type='number'
          min='1'
          value={formData.minTerm}
          onChange={(event) =>
            updateField('minTerm', Number(event.target.value))
          }
        />
      </div>

      <div className='grid gap-2'>
        <Label htmlFor='edit-max-term'>Maximum Term</Label>

        <Input
          id='edit-max-term'
          type='number'
          min='1'
          value={formData.maxTerm}
          onChange={(event) =>
            updateField('maxTerm', Number(event.target.value))
          }
        />
      </div>

      <div className='grid gap-2'>
        <Label htmlFor='edit-interest-rate'>Interest Rate (%)</Label>

        <Input
          id='edit-interest-rate'
          type='number'
          min='0'
          step='0.01'
          value={formData.interestRate}
          onChange={(event) =>
            updateField('interestRate', Number(event.target.value))
          }
        />
      </div>

      <div className='grid gap-2'>
        <Label htmlFor='edit-processing-fee'>Processing Fee</Label>

        <Input
          id='edit-processing-fee'
          type='number'
          min='0'
          value={formData.processingFee}
          onChange={(event) =>
            updateField('processingFee', Number(event.target.value))
          }
        />
      </div>

      <div className='grid gap-2'>
        <Label htmlFor='edit-status'>Status</Label>

        <select
          id='edit-status'
          value={formData.status}
          onChange={(event) =>
            updateField('status', event.target.value as LoanProductStatus)
          }
          className='h-10 w-full rounded-md border bg-background px-3 text-sm'
        >
          <option value='ACTIVE'>Active</option>
          <option value='INACTIVE'>Inactive</option>
          <option value='DRAFT'>Draft</option>
        </select>
      </div>

      <DialogFooter className='sm:col-span-2'>
        <Button
          type='button'
          variant='outline'
          onClick={() => onOpenChange(false)}
        >
          Cancel
        </Button>

        <Button type='button' onClick={handleSave}>
          Save Changes
        </Button>
      </DialogFooter>
    </div>
  );
}

export function EditLoanProductDialog({
  product,
  open,
  onOpenChange,
  onSave,
}: EditLoanProductDialogProps) {
  if (!product) {
    return null;
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='max-h-[90vh] overflow-y-auto sm:max-w-2xl'>
        <DialogHeader>
          <DialogTitle>Edit Loan Product</DialogTitle>

          <DialogDescription>
            Update the loan product information below.
          </DialogDescription>
        </DialogHeader>

        {open && (
          <LoanProductForm
            key={product.id}
            product={product}
            onOpenChange={onOpenChange}
            onSave={onSave}
          />
        )}
      </DialogContent>
    </Dialog>
  );
}
