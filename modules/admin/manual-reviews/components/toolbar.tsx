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
  LoanType,
  ManualReviewFilters,
  ManualReviewPriority,
  ManualReviewStatus,
  RiskLevel,
} from '@/modules/admin/manual-reviews/types/manual-review';

interface ManualReviewsToolbarProps {
  filters: ManualReviewFilters;
  onFilterChange: (updates: Partial<ManualReviewFilters>) => void;
  onReset: () => void;
}

const STATUSES: Array<{
  value: ManualReviewStatus;
  label: string;
}> = [
  { value: 'PENDING', label: 'Pending' },
  { value: 'IN_REVIEW', label: 'In Review' },
  { value: 'APPROVED', label: 'Approved' },
  { value: 'REJECTED', label: 'Rejected' },
  { value: 'ESCALATED', label: 'Escalated' },
];

const PRIORITIES: Array<{
  value: ManualReviewPriority;
  label: string;
}> = [
  { value: 'URGENT', label: 'Urgent' },
  { value: 'HIGH', label: 'High' },
  { value: 'MEDIUM', label: 'Medium' },
  { value: 'LOW', label: 'Low' },
];

const LOAN_TYPES: Array<{
  value: LoanType;
  label: string;
}> = [
  { value: 'PERSONAL_LOAN', label: 'Personal Loan' },
  { value: 'AUTO_LOAN', label: 'Auto Loan' },
  { value: 'HOME_LOAN', label: 'Home Loan' },
  { value: 'BUSINESS_LOAN', label: 'Business Loan' },
  { value: 'CREDIT_CARD', label: 'Credit Card' },
];

const RISK_LEVELS: Array<{
  value: RiskLevel;
  label: string;
}> = [
  { value: 'CRITICAL', label: 'Critical' },
  { value: 'HIGH', label: 'High' },
  { value: 'MEDIUM', label: 'Medium' },
  { value: 'LOW', label: 'Low' },
];

export function ManualReviewsToolbar({
  filters,
  onFilterChange,
  onReset,
}: ManualReviewsToolbarProps) {
  return (
    <div className='w-full'>
      <div className='flex w-full flex-col gap-3 lg:flex-row lg:items-center lg:gap-4'>
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
            placeholder='Search applicant or application...'
            aria-label='Search manual reviews'
            className='h-10 w-full pl-9'
          />
        </div>

        {/* Filters */}
        <div className='grid w-full grid-cols-2 gap-2 sm:flex sm:flex-wrap lg:w-auto lg:flex-nowrap'>
          {/* Status */}
          <Select
            value={filters.status}
            onValueChange={(value) =>
              onFilterChange({
                status: value as ManualReviewFilters['status'],
              })
            }
          >
            <SelectTrigger className='h-10 w-full sm:w-[140px]'>
              <SelectValue placeholder='Status' />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value='ALL'>All statuses</SelectItem>

              {STATUSES.map((status) => (
                <SelectItem key={status.value} value={status.value}>
                  {status.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Priority */}
          <Select
            value={filters.priority}
            onValueChange={(value) =>
              onFilterChange({
                priority: value as ManualReviewFilters['priority'],
              })
            }
          >
            <SelectTrigger className='h-10 w-full sm:w-[135px]'>
              <SelectValue placeholder='Priority' />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value='ALL'>All priorities</SelectItem>

              {PRIORITIES.map((priority) => (
                <SelectItem key={priority.value} value={priority.value}>
                  {priority.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Loan Type */}
          <Select
            value={filters.loanType}
            onValueChange={(value) =>
              onFilterChange({
                loanType: value as ManualReviewFilters['loanType'],
              })
            }
          >
            <SelectTrigger className='h-10 w-full sm:w-[155px]'>
              <SelectValue placeholder='Loan type' />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value='ALL'>All loan types</SelectItem>

              {LOAN_TYPES.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Risk */}
          <Select
            value={filters.riskLevel}
            onValueChange={(value) =>
              onFilterChange({
                riskLevel: value as ManualReviewFilters['riskLevel'],
              })
            }
          >
            <SelectTrigger className='h-10 w-full sm:w-[125px]'>
              <SelectValue placeholder='Risk' />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value='ALL'>All risk</SelectItem>

              {RISK_LEVELS.map((risk) => (
                <SelectItem key={risk.value} value={risk.value}>
                  {risk.label}
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
    </div>
  );
}
