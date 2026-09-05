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

interface CustomerFiltersProps {
  search: string;
  status: string;
  onSearchChange: (value: string) => void;
  onStatusChange: (value: string) => void;
}

export function CustomerFilters({
  search,
  status,
  onSearchChange,
  onStatusChange,
}: CustomerFiltersProps) {
  return (
    <div className='flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
      {/* Search */}
      <div className='relative w-full sm:max-w-sm'>
        <Search className='absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground' />

        <Input
          type='search'
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder='Search customers...'
          className='pl-9'
        />
      </div>

      {/* Status Filter */}
      <Select
        value={status}
        onValueChange={(value) => onStatusChange(value ?? 'ALL')}
      >
        <SelectTrigger className='w-full sm:w-45'>
          <SelectValue placeholder='Filter status' />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value='ALL'>All customers</SelectItem>

          <SelectItem value='ACTIVE'>Active</SelectItem>

          <SelectItem value='PENDING'>Pending</SelectItem>

          <SelectItem value='INACTIVE'>Inactive</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
