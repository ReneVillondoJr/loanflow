'use client';

import { Search } from 'lucide-react';

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
}

export function ApplicationsFilters({
  filters,
  onSearchChange,
  onStatusChange,
}: ApplicationsFiltersProps) {
  return (
    <div className='flex flex-col gap-3 sm:flex-row sm:items-center'>
      <div className='relative w-full flex-1'>
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
        onValueChange={(value) =>
          onStatusChange(value as 'all' | ApplicationStatus)
        }
      >
        <SelectTrigger className='w-full sm:w-[200px]'>
          <SelectValue placeholder='All statuses' />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value='all'>All statuses</SelectItem>

          <SelectItem value='Draft'>Draft</SelectItem>

          <SelectItem value='Submitted'>Submitted</SelectItem>

          <SelectItem value='Under Review'>Under Review</SelectItem>

          <SelectItem value='Pending Documents'>Pending Documents</SelectItem>

          <SelectItem value='Approved'>Approved</SelectItem>

          <SelectItem value='Rejected'>Rejected</SelectItem>

          <SelectItem value='Cancelled'>Cancelled</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
