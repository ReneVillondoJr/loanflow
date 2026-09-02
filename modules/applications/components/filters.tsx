'use client';

import { RotateCcw, Search } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import type {
  ApplicationFilters,
  ApplicationStatus,
} from '../types/application';

interface ApplicationsFiltersProps {
  filters: ApplicationFilters;
  onSearchChange: (value: string) => void;
  onStatusChange: (value: 'all' | ApplicationStatus) => void;
  onClear: () => void;
}

const statusOptions: ApplicationStatus[] = [
  'Draft',
  'Submitted',
  'Under Review',
  'Pending Documents',
  'Approved',
  'Rejected',
  'Cancelled',
];

export function ApplicationsFilters({
  filters,
  onSearchChange,
  onStatusChange,
  onClear,
}: ApplicationsFiltersProps) {
  return (
    <div className='flex flex-col gap-3 rounded-lg border bg-card p-4 sm:flex-row sm:items-center'>
      <div className='relative min-w-0 flex-1'>
        <Search className='absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground' />

        <Input
          value={filters.search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder='Search applications...'
          className='pl-9'
        />
      </div>

      <Select
        value={filters.status}
        onValueChange={(value) => {
          if (!value) {
            return;
          }

          onStatusChange(value as 'all' | ApplicationStatus);
        }}
      >
        <SelectTrigger className='w-full sm:w-[200px]'>
          <SelectValue placeholder='Filter status' />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value='all'>All Statuses</SelectItem>

          {statusOptions.map((status) => (
            <SelectItem key={status} value={status}>
              {status}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Button
        type='button'
        variant='outline'
        onClick={onClear}
        className='w-full sm:w-auto'
      >
        <RotateCcw className='size-4' />
        Reset
      </Button>
    </div>
  );
}
