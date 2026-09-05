'use client';

import { useRouter } from 'next/navigation';
import { Plus, Users } from 'lucide-react';

import { Button } from '@/components/ui/button';

export function CustomerPageHeader() {
  const router = useRouter();

  return (
    <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
      <div className='flex items-center gap-3'>
        <div className='flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10'>
          <Users className='size-5 text-primary' />
        </div>

        <div className='min-w-0'>
          <h1 className='text-2xl font-bold tracking-tight'>Customers</h1>

          <p className='text-sm text-muted-foreground'>
            Manage customer accounts and information.
          </p>
        </div>
      </div>

      <Button
        type='button'
        onClick={() => router.push('/admin/customers/new')}
        className='w-full gap-2 sm:w-auto'
      >
        <Plus className='size-4' />
        Add Customer
      </Button>
    </div>
  );
}
