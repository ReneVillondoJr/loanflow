'use client';

import { Search, X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import {
  applicationPriorities,
  applicationStatuses,
  loanTypes,
} from '../data/applications';

import type {
  ApplicationPriority,
  ApplicationStatus,
} from '../types/applications';

interface ApplicationFiltersProps {
  search: string;
  onSearchChange: (value: string) => void;

  status: ApplicationStatus | 'All';
  onStatusChange: (value: ApplicationStatus | 'All') => void;

  loanType: string;
  onLoanTypeChange: (value: string) => void;

  priority: ApplicationPriority | 'All';
  onPriorityChange: (value: ApplicationPriority | 'All') => void;

  onClear: () => void;
}

export function ApplicationFilters({
  search,
  onSearchChange,
  status,
  onStatusChange,
  loanType,
  onLoanTypeChange,
  priority,
  onPriorityChange,
  onClear,
}: ApplicationFiltersProps) {
  const hasFilters =
    Boolean(search) ||
    status !== 'All' ||
    loanType !== 'All' ||
    priority !== 'All';

  return (
    <div className='flex flex-col gap-3 rounded-xl border bg-card p-4'>
      <div className='flex flex-col gap-3 lg:flex-row'>
        {/* Search */}
        <div className='relative min-w-0 flex-1'>
          <Search className='absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground' />

          <Input
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder='Search applications...'
            className='pl-9'
          />
        </div>

        {/* Status */}
        <Select
          value={status}
          onValueChange={(value) => {
            if (value !== null) {
              onStatusChange(value as ApplicationStatus | 'All');
            }
          }}
        >
          <SelectTrigger className='w-full lg:w-44'>
            <SelectValue placeholder='Status' />
          </SelectTrigger>

          <SelectContent>
            {applicationStatuses.map((item) => (
              <SelectItem key={item} value={item}>
                {item === 'All' ? 'All Statuses' : item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Loan Type */}
        <Select
          value={loanType}
          onValueChange={(value) => {
            if (value !== null) {
              onLoanTypeChange(value);
            }
          }}
        >
          <SelectTrigger className='w-full lg:w-44'>
            <SelectValue placeholder='Loan type' />
          </SelectTrigger>

          <SelectContent>
            {loanTypes.map((item) => (
              <SelectItem key={item} value={item}>
                {item === 'All' ? 'All Loan Types' : item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Priority */}
        <Select
          value={priority}
          onValueChange={(value) => {
            if (value !== null) {
              onPriorityChange(value as ApplicationPriority | 'All');
            }
          }}
        >
          <SelectTrigger className='w-full lg:w-36'>
            <SelectValue placeholder='Priority' />
          </SelectTrigger>

          <SelectContent>
            {applicationPriorities.map((item) => (
              <SelectItem key={item} value={item}>
                {item === 'All' ? 'All Priorities' : item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Clear */}
        {hasFilters && (
          <Button
            type='button'
            variant='ghost'
            onClick={onClear}
            className='shrink-0'
          >
            <X className='size-4' />
            Clear
          </Button>
        )}
      </div>
    </div>
  );
}
