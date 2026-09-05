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

export function LoanProductsFilters({
  filters,
  onSearchChange,
  onCategoryChange,
  onStatusChange,
  onReset,
}: LoanProductsFiltersProps) {
  return (
    <div className='flex flex-col gap-3 lg:flex-row'>
      <div className='relative flex-1'>
        <Search className='pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground' />
        <Input
          value={filters.search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder='Search loan products...'
          className='pl-9'
        />
      </div>

      <Select
        value={filters.category}
        onValueChange={(value) =>
          onCategoryChange(value as LoanProductCategory | 'ALL')
        }
      >
        <SelectTrigger className='w-full lg:w-[180px]'>
          <SelectValue placeholder='Category' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='ALL'>All Categories</SelectItem>
          <SelectItem value='PERSONAL'>Personal</SelectItem>
          <SelectItem value='BUSINESS'>Business</SelectItem>
          <SelectItem value='AUTO'>Auto</SelectItem>
          <SelectItem value='HOME'>Home</SelectItem>
          <SelectItem value='EDUCATION'>Education</SelectItem>
        </SelectContent>
      </Select>

      <Select
        value={filters.status}
        onValueChange={(value) =>
          onStatusChange(value as LoanProductStatus | 'ALL')
        }
      >
        <SelectTrigger className='w-full lg:w-[160px]'>
          <SelectValue placeholder='Status' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='ALL'>All Status</SelectItem>
          <SelectItem value='ACTIVE'>Active</SelectItem>
          <SelectItem value='INACTIVE'>Inactive</SelectItem>
          <SelectItem value='DRAFT'>Draft</SelectItem>
        </SelectContent>
      </Select>

      <Button
        type='button'
        variant='outline'
        size='icon'
        className='shrink-0'
        onClick={onReset}
      >
        <RotateCcw className='h-4 w-4' />
        <span className='sr-only'>Reset filters</span>
      </Button>
    </div>
  );
}
