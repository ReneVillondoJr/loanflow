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
  LoanProductCategory,
  LoanProductFilters,
  LoanProductStatus,
} from '../types/loan-product';

interface LoanProductsFiltersProps {
  filters: LoanProductFilters;
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: LoanProductCategory | 'ALL') => void;
  onStatusChange: (value: LoanProductStatus | 'ALL') => void;
  onReset: () => void;
}

const selectClassName =
  'h-10 min-h-10 w-full rounded-lg bg-background sm:w-[180px]';

export function LoanProductsFilters({
  filters,
  onSearchChange,
  onCategoryChange,
  onStatusChange,
  onReset,
}: LoanProductsFiltersProps) {
  const hasFilters =
    filters.search.trim() !== '' ||
    filters.category !== 'ALL' ||
    filters.status !== 'ALL';

  return (
    <div className='flex flex-col gap-4 rounded-xl border bg-card p-4'>
      {/* Header */}
      <div className='flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
        <div className='flex items-center gap-2'>
          <div className='flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted'>
            <Filter className='size-4 text-muted-foreground' />
          </div>

          <div>
            <h2 className='text-sm font-medium'>Filter Loan Products</h2>

            <p className='text-xs text-muted-foreground'>
              Search and filter loan products
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
      <div className='grid gap-3 lg:grid-cols-[minmax(240px,1fr)_repeat(2,180px)]'>
        {/* Search */}
        <div className='relative'>
          <Search className='pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground' />

          <Input
            value={filters.search}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder='Search loan products...'
            className='h-10 min-h-10 rounded-lg pl-9'
          />
        </div>

        {/* Category */}
        <Select
          value={filters.category}
          onValueChange={(value) => {
            if (value !== null) {
              onCategoryChange(value as LoanProductCategory | 'ALL');
            }
          }}
        >
          <SelectTrigger id='loan-product-category' className={selectClassName}>
            <SelectValue placeholder='All categories' />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value='ALL'>All categories</SelectItem>
            <SelectItem value='PERSONAL'>Personal</SelectItem>
            <SelectItem value='BUSINESS'>Business</SelectItem>
            <SelectItem value='AUTO'>Auto</SelectItem>
            <SelectItem value='HOME'>Home</SelectItem>
            <SelectItem value='EDUCATION'>Education</SelectItem>
          </SelectContent>
        </Select>

        {/* Status */}
        <Select
          value={filters.status}
          onValueChange={(value) => {
            if (value !== null) {
              onStatusChange(value as LoanProductStatus | 'ALL');
            }
          }}
        >
          <SelectTrigger id='loan-product-status' className={selectClassName}>
            <SelectValue placeholder='All statuses' />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value='ALL'>All statuses</SelectItem>
            <SelectItem value='ACTIVE'>Active</SelectItem>
            <SelectItem value='INACTIVE'>Inactive</SelectItem>
            <SelectItem value='DRAFT'>Draft</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
