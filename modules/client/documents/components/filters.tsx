'use client';

import { Search } from 'lucide-react';

import { Input } from '@/components/ui/input';

import type { DocumentStatus } from '../types/documents';

interface DocumentFiltersProps {
  search: string;
  onSearchChange: (value: string) => void;

  status: DocumentStatus | 'All';
  onStatusChange: (value: DocumentStatus | 'All') => void;
}

const statuses: Array<DocumentStatus | 'All'> = [
  'All',
  'Verified',
  'Pending Review',
  'Rejected',
  'Missing',
];

export function DocumentFilters({
  search,
  onSearchChange,
  status,
  onStatusChange,
}: DocumentFiltersProps) {
  return (
    <div className='flex flex-col gap-3 sm:flex-row sm:items-center'>
      <div className='relative flex-1'>
        <Search className='absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground' />

        <Input
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder='Search documents...'
          className='pl-9'
        />
      </div>

      <div className='flex flex-wrap gap-2'>
        {statuses.map((item) => (
          <button
            key={item}
            type='button'
            onClick={() => onStatusChange(item)}
            className={
              status === item ?
                'h-9 rounded-md bg-primary px-3 text-sm font-medium text-primary-foreground'
              : 'h-9 rounded-md border bg-background px-3 text-sm font-medium transition-colors hover:bg-muted'
            }
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
