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

import type {
  DecisionStatus,
  DecisioningFilters,
  LoanType,
  RiskLevel,
} from '../types/decision';

interface DecisioningFiltersProps {
  filters: DecisioningFilters;
  onUpdateFilters: (filters: Partial<DecisioningFilters>) => void;
  onReset: () => void;
}

const selectClassName = 'h-10 w-full rounded-lg bg-background sm:w-[180px]';

export function DecisioningFilters({
  filters,
  onUpdateFilters,
  onReset,
}: DecisioningFiltersProps) {
  const hasFilters =
    filters.search.trim() !== '' ||
    filters.status !== 'ALL' ||
    filters.riskLevel !== 'ALL' ||
    filters.loanType !== 'ALL';

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
              <h2 className='text-sm font-medium'>Filter Decisions</h2>

              <p className='text-xs text-muted-foreground'>
                Search and filter loan decisions
              </p>
            </div>
          </div>

          {hasFilters && (
            <Button
              type='button'
              variant='ghost'
              size='sm'
              onClick={onReset}
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
              value={filters.search}
              onChange={(event) =>
                onUpdateFilters({
                  search: event.target.value,
                })
              }
              placeholder='Search customer or application...'
              className='h-10 rounded-lg pl-9'
            />
          </div>

          {/* Status */}
          <Select
            value={filters.status}
            onValueChange={(value) =>
              onUpdateFilters({
                status: value as DecisionStatus | 'ALL',
              })
            }
          >
            <SelectTrigger id='decision-status' className={selectClassName}>
              <SelectValue placeholder='All statuses' />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value='ALL'>All statuses</SelectItem>

              <SelectItem value='PENDING'>Pending</SelectItem>

              <SelectItem value='APPROVED'>Approved</SelectItem>

              <SelectItem value='REJECTED'>Rejected</SelectItem>

              <SelectItem value='MANUAL_REVIEW'>Manual Review</SelectItem>
            </SelectContent>
          </Select>

          {/* Risk Level */}
          <Select
            value={filters.riskLevel}
            onValueChange={(value) =>
              onUpdateFilters({
                riskLevel: value as RiskLevel | 'ALL',
              })
            }
          >
            <SelectTrigger id='decision-risk-level' className={selectClassName}>
              <SelectValue placeholder='All risk levels' />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value='ALL'>All risk levels</SelectItem>

              <SelectItem value='LOW'>Low</SelectItem>

              <SelectItem value='MEDIUM'>Medium</SelectItem>

              <SelectItem value='HIGH'>High</SelectItem>

              <SelectItem value='VERY_HIGH'>Very High</SelectItem>
            </SelectContent>
          </Select>

          {/* Loan Type */}
          <Select
            value={filters.loanType}
            onValueChange={(value) =>
              onUpdateFilters({
                loanType: value as LoanType | 'ALL',
              })
            }
          >
            <SelectTrigger id='decision-loan-type' className={selectClassName}>
              <SelectValue placeholder='All loan types' />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value='ALL'>All loan types</SelectItem>

              <SelectItem value='PERSONAL'>Personal</SelectItem>

              <SelectItem value='BUSINESS'>Business</SelectItem>

              <SelectItem value='AUTO'>Auto</SelectItem>

              <SelectItem value='HOME'>Home</SelectItem>

              <SelectItem value='EDUCATION'>Education</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </section>
  );
}
