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
  ScorecardFilters,
  ScorecardStatus,
  ScorecardType,
} from '@/modules/admin/scorecards/types/scorecard';

interface ScorecardsToolbarProps {
  filters: ScorecardFilters;
  onFilterChange: (updates: Partial<ScorecardFilters>) => void;
  onReset: () => void;
}

const SCORECARD_TYPES: Array<{
  value: ScorecardType;
  label: string;
}> = [
  { value: 'PERSONAL_LOAN', label: 'Personal Loan' },
  { value: 'AUTO_LOAN', label: 'Auto Loan' },
  { value: 'HOME_LOAN', label: 'Home Loan' },
  { value: 'BUSINESS_LOAN', label: 'Business Loan' },
  { value: 'CREDIT_CARD', label: 'Credit Card' },
];

const SCORECARD_STATUSES: Array<{
  value: ScorecardStatus;
  label: string;
}> = [
  { value: 'ACTIVE', label: 'Active' },
  { value: 'INACTIVE', label: 'Inactive' },
  { value: 'DRAFT', label: 'Draft' },
];

export function ScorecardsToolbar({
  filters,
  onFilterChange,
  onReset,
}: ScorecardsToolbarProps) {
  return (
    <div className='flex flex-col gap-3 sm:flex-row sm:items-center'>
      {/* Search */}
      <div className='relative min-w-0 flex-1'>
        <Search
          aria-hidden='true'
          className='pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground'
        />

        <Input
          value={filters.search}
          onChange={(event) =>
            onFilterChange({
              search: event.target.value,
            })
          }
          placeholder='Search scorecards...'
          aria-label='Search scorecards'
          className='h-10 pl-9'
        />
      </div>

      {/* Filters */}
      <div className='flex items-center gap-2'>
        {/* Status */}
        <Select
          value={filters.status}
          onValueChange={(value) =>
            onFilterChange({
              status: value as ScorecardFilters['status'],
            })
          }
        >
          <SelectTrigger className='h-10 w-[145px]'>
            <SelectValue placeholder='Status' />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value='ALL'>All statuses</SelectItem>

            {SCORECARD_STATUSES.map((status) => (
              <SelectItem key={status.value} value={status.value}>
                {status.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Loan Type */}
        <Select
          value={filters.type}
          onValueChange={(value) =>
            onFilterChange({
              type: value as ScorecardFilters['type'],
            })
          }
        >
          <SelectTrigger className='h-10 w-[165px]'>
            <SelectValue placeholder='Loan type' />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value='ALL'>All loan types</SelectItem>

            {SCORECARD_TYPES.map((type) => (
              <SelectItem key={type.value} value={type.value}>
                {type.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Reset */}
        <Button
          type='button'
          variant='outline'
          size='icon'
          onClick={onReset}
          aria-label='Reset filters'
          title='Reset filters'
          className='h-10 w-10 shrink-0'
        >
          <RotateCcw aria-hidden='true' className='size-4' />
        </Button>
      </div>
    </div>
  );
}
