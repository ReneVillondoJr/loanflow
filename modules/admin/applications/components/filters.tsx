'use client';

import { Filter, RotateCcw, Search } from 'lucide-react';

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

const selectClassName = 'h-10 w-full rounded-lg bg-background sm:w-[180px]';

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
    search.trim() !== '' ||
    status !== 'All' ||
    loanType !== 'All' ||
    priority !== 'All';

  return (
    <section className='relative rounded-xl border bg-card'>
      <div className='flex flex-col gap-4 p-4'>
        {/* Header */}
        <div className='flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
          <div className='flex items-center gap-2'>
            <div className='flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted'>
              <Filter className='size-4 text-muted-foreground' />
            </div>

            <div>
              <h2 className='text-sm font-medium'>Filter Applications</h2>

              <p className='text-xs text-muted-foreground'>
                Search and filter loan applications
              </p>
            </div>
          </div>

          {hasFilters && (
            <Button
              type='button'
              variant='ghost'
              size='sm'
              onClick={onClear}
              className='h-8 w-fit gap-2 self-start sm:self-auto'
            >
              <RotateCcw className='size-3.5' />
              Reset
            </Button>
          )}
        </div>

        {/* Filters */}
        <div className='grid gap-3 lg:grid-cols-[minmax(240px,1fr)_repeat(3,180px)]'>
          {/* Search */}
          <div className='relative'>
            <Search className='pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground' />

            <Input
              value={search}
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder='Search applications...'
              className='h-10 rounded-lg pl-9'
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
            <SelectTrigger id='application-status' className={selectClassName}>
              <SelectValue placeholder='All statuses' />
            </SelectTrigger>

            <SelectContent>
              {applicationStatuses.map((item) => (
                <SelectItem key={item} value={item}>
                  {item === 'All' ? 'All statuses' : item}
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
            <SelectTrigger
              id='application-priority'
              className={selectClassName}
            >
              <SelectValue placeholder='All priorities' />
            </SelectTrigger>

            <SelectContent>
              {applicationPriorities.map((item) => (
                <SelectItem key={item} value={item}>
                  {item === 'All' ? 'All priorities' : item}
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
            <SelectTrigger
              id='application-loan-type'
              className={selectClassName}
            >
              <SelectValue placeholder='All loan types' />
            </SelectTrigger>

            <SelectContent>
              {loanTypes.map((item) => (
                <SelectItem key={item} value={item}>
                  {item === 'All' ? 'All loan types' : item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </section>
  );
}
