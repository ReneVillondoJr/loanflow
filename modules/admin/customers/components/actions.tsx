'use client';

import { Edit, Eye, MoreHorizontal } from 'lucide-react';

import { useRouter } from 'next/navigation';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface CustomerActionsProps {
  customerId: string;
}

export function CustomerActions({ customerId }: CustomerActionsProps) {
  const router = useRouter();

  const handleView = () => {
    router.push(`/admin/customers/${customerId}`);
  };

  const handleEdit = () => {
    router.push(`/admin/customers/${customerId}/edit`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        type='button'
        className='inline-flex size-9 items-center justify-center rounded-md border border-transparent transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'
        aria-label='Customer actions'
      >
        <MoreHorizontal className='size-4' />
        <span className='sr-only'>Customer actions</span>
      </DropdownMenuTrigger>

      <DropdownMenuContent align='end' className='w-40'>
        <DropdownMenuItem onClick={handleView}>
          <Eye className='mr-2 size-4' />
          View
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={handleEdit}>
          <Edit className='mr-2 size-4' />
          Edit
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
