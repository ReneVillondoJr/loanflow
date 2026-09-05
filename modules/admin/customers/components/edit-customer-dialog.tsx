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

import type { Customer, CustomerStatus } from '../types/customer';

interface EditCustomerDialogProps {
  customer: Customer | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (customer: Customer) => void;
}

interface CustomerFormProps {
  customer: Customer;
  onOpenChange: (open: boolean) => void;
  onSave: (customer: Customer) => void;
}

function CustomerForm({ customer, onOpenChange, onSave }: CustomerFormProps) {
  const [formData, setFormData] = useState<Customer>(() => ({
    ...customer,
  }));

  function updateField<K extends keyof Customer>(field: K, value: Customer[K]) {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));
  }

  function handleSave() {
    const updatedCustomer: Customer = {
      ...formData,
    };

    onSave(updatedCustomer);
    onOpenChange(false);
  }

  return (
    <div className='grid gap-5 py-4 sm:grid-cols-2'>
      {/* Customer Name */}
      <div className='grid gap-2 sm:col-span-2'>
        <Label htmlFor='edit-customer-name'>Customer Name</Label>

        <Input
          id='edit-customer-name'
          value={formData.name}
          onChange={(event) => updateField('name', event.target.value)}
        />
      </div>

      {/* Email */}
      <div className='grid gap-2'>
        <Label htmlFor='edit-customer-email'>Email Address</Label>

        <Input
          id='edit-customer-email'
          type='email'
          value={formData.email}
          onChange={(event) => updateField('email', event.target.value)}
        />
      </div>

      {/* Phone */}
      <div className='grid gap-2'>
        <Label htmlFor='edit-customer-phone'>Phone Number</Label>

        <Input
          id='edit-customer-phone'
          type='tel'
          value={formData.phone ?? ''}
          onChange={(event) => updateField('phone', event.target.value)}
        />
      </div>

      {/* Status */}
      <div className='grid gap-2'>
        <Label htmlFor='edit-customer-status'>Status</Label>

        <select
          id='edit-customer-status'
          value={formData.status}
          onChange={(event) =>
            updateField('status', event.target.value as CustomerStatus)
          }
          className='h-10 w-full rounded-md border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring'
        >
          <option value='ACTIVE'>Active</option>
          <option value='INACTIVE'>Inactive</option>
          <option value='PENDING'>Pending</option>
        </select>
      </div>

      {/* Profile Image */}
      <div className='grid gap-2'>
        <Label htmlFor='edit-customer-image'>Profile Image</Label>

        <Input
          id='edit-customer-image'
          value={formData.image ?? ''}
          onChange={(event) => updateField('image', event.target.value || null)}
          placeholder='Image URL'
        />
      </div>

      {/* Applications */}
      <div className='grid gap-2'>
        <Label htmlFor='edit-applications-count'>Applications</Label>

        <Input
          id='edit-applications-count'
          type='number'
          min='0'
          value={formData.applicationsCount}
          onChange={(event) =>
            updateField('applicationsCount', Number(event.target.value))
          }
        />
      </div>

      {/* Active Loans */}
      <div className='grid gap-2'>
        <Label htmlFor='edit-active-loans'>Active Loans</Label>

        <Input
          id='edit-active-loans'
          type='number'
          min='0'
          value={formData.activeLoans}
          onChange={(event) =>
            updateField('activeLoans', Number(event.target.value))
          }
        />
      </div>

      {/* Actions */}
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

export function EditCustomerDialog({
  customer,
  open,
  onOpenChange,
  onSave,
}: EditCustomerDialogProps) {
  if (!customer) {
    return null;
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='max-h-[90vh] overflow-y-auto sm:max-w-2xl'>
        <DialogHeader>
          <DialogTitle>Edit Customer</DialogTitle>

          <DialogDescription>
            Update the customer information below.
          </DialogDescription>
        </DialogHeader>

        {open && (
          <CustomerForm
            key={customer.id}
            customer={customer}
            onOpenChange={onOpenChange}
            onSave={onSave}
          />
        )}
      </DialogContent>
    </Dialog>
  );
}
