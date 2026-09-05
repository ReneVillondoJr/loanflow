'use client';

import { Plus, Users } from 'lucide-react';

import { Button } from '@/components/ui/button';

interface CustomerPageHeaderProps {
  onAddCustomer?: () => void;
}

export function CustomerPageHeader({ onAddCustomer }: CustomerPageHeaderProps) {
  return (
    <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
      <div>
        <div className='flex items-center gap-3'>
          <div className='flex size-10 items-center justify-center rounded-lg bg-primary/10'>
            <Users className='size-5 text-primary' />
          </div>

          <div>
            <h1 className='text-2xl font-bold tracking-tight'>Customers</h1>

            <p className='text-sm text-muted-foreground'>
              Manage customer accounts and information.
            </p>
          </div>
        </div>
      </div>

      <Button type='button' onClick={onAddCustomer}>
        <Plus className='mr-2 size-4' />
        Add Customer
      </Button>
    </div>
  );
}
