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
  ReportFilters,
  ReportPeriod,
  ReportStatus,
  ReportType,
} from '@/modules/admin/reports/types/reports';

interface ReportsToolbarProps {
  filters: ReportFilters;
  onFilterChange: (updates: Partial<ReportFilters>) => void;
  onReset: () => void;
}

const REPORT_TYPES: Array<{
  value: ReportType;
  label: string;
}> = [
  {
    value: 'LOAN_PERFORMANCE',
    label: 'Loan Performance',
  },
  {
    value: 'APPLICATION_VOLUME',
    label: 'Application Volume',
  },
  {
    value: 'APPROVAL_ANALYSIS',
    label: 'Approval Analysis',
  },
  {
    value: 'RISK_ANALYSIS',
    label: 'Risk Analysis',
  },
  {
    value: 'PORTFOLIO_ANALYSIS',
    label: 'Portfolio Analysis',
  },
  {
    value: 'MANUAL_REVIEW',
    label: 'Manual Review',
  },
];

const REPORT_STATUSES: Array<{
  value: ReportStatus;
  label: string;
}> = [
  {
    value: 'READY',
    label: 'Ready',
  },
  {
    value: 'GENERATING',
    label: 'Generating',
  },
  {
    value: 'FAILED',
    label: 'Failed',
  },
];

const REPORT_PERIODS: Array<{
  value: ReportPeriod;
  label: string;
}> = [
  {
    value: 'TODAY',
    label: 'Today',
  },
  {
    value: 'THIS_WEEK',
    label: 'This Week',
  },
  {
    value: 'THIS_MONTH',
    label: 'This Month',
  },
  {
    value: 'THIS_QUARTER',
    label: 'This Quarter',
  },
  {
    value: 'THIS_YEAR',
    label: 'This Year',
  },
];

export function ReportsToolbar({
  filters,
  onFilterChange,
  onReset,
}: ReportsToolbarProps) {
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
            placeholder='Search reports...'
            aria-label='Search reports'
            className='h-10 w-full pl-9'
          />
        </div>

        {/* Filters */}
        <div className='grid w-full grid-cols-2 gap-2 sm:flex sm:flex-wrap lg:w-auto lg:flex-nowrap'>
          <Select
            value={filters.type}
            onValueChange={(value) =>
              onFilterChange({
                type: value as ReportFilters['type'],
              })
            }
          >
            <SelectTrigger className='h-10 w-full sm:w-[180px]'>
              <SelectValue placeholder='Report type' />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value='ALL'>All report types</SelectItem>

              {REPORT_TYPES.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            value={filters.status}
            onValueChange={(value) =>
              onFilterChange({
                status: value as ReportFilters['status'],
              })
            }
          >
            <SelectTrigger className='h-10 w-full sm:w-[135px]'>
              <SelectValue placeholder='Status' />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value='ALL'>All statuses</SelectItem>

              {REPORT_STATUSES.map((status) => (
                <SelectItem key={status.value} value={status.value}>
                  {status.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            value={filters.period}
            onValueChange={(value) =>
              onFilterChange({
                period: value as ReportFilters['period'],
              })
            }
          >
            <SelectTrigger className='h-10 w-full sm:w-[145px]'>
              <SelectValue placeholder='Period' />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value='ALL'>All periods</SelectItem>

              {REPORT_PERIODS.map((period) => (
                <SelectItem key={period.value} value={period.value}>
                  {period.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

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
