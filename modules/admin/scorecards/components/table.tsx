'use client';

import { useState } from 'react';

import {
  ArrowDown,
  ArrowUp,
  ChevronsUpDown,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { ScorecardRowActions } from './row-actions';

import type { Scorecard } from '@/modules/admin/scorecards/types/scorecard';

interface ScorecardsTableProps {
  scorecards: Scorecard[];

  selectedIds: string[];
  onSelectedIdsChange: (ids: string[]) => void;

  onView: (scorecard: Scorecard) => void;
  onEdit: (scorecard: Scorecard) => void;
  onToggleStatus: (id: string) => void;
  onDelete: (scorecard: Scorecard) => void;

  page: number;
  pageCount: number;
  onPageChange: (page: number) => void;

  pageSize?: number;
}

type SortField =
  | 'name'
  | 'type'
  | 'status'
  | 'averageScore'
  | 'approvalRate'
  | 'applicationsScored'
  | 'updatedAt';

type SortDirection = 'asc' | 'desc';

function getStatusVariant(status: Scorecard['status']) {
  switch (status) {
    case 'ACTIVE':
      return 'default';

    case 'INACTIVE':
      return 'secondary';

    case 'DRAFT':
      return 'outline';

    default:
      return 'outline';
  }
}

function getStatusLabel(status: Scorecard['status']) {
  switch (status) {
    case 'ACTIVE':
      return 'Active';

    case 'INACTIVE':
      return 'Inactive';

    case 'DRAFT':
      return 'Draft';

    default:
      return status;
  }
}

function getTypeLabel(type: Scorecard['type']) {
  switch (type) {
    case 'PERSONAL_LOAN':
      return 'Personal Loan';

    case 'AUTO_LOAN':
      return 'Auto Loan';

    case 'HOME_LOAN':
      return 'Home Loan';

    case 'BUSINESS_LOAN':
      return 'Business Loan';

    case 'CREDIT_CARD':
      return 'Credit Card';

    default:
      return type;
  }
}

function formatDate(value: string) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return '—';
  }

  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
}

function SortButton({
  label,
  field,
  sortField,
  sortDirection,
  onSort,
}: {
  label: string;
  field: SortField;
  sortField: SortField;
  sortDirection: SortDirection;
  onSort: (field: SortField) => void;
}) {
  const active = sortField === field;

  return (
    <Button
      type='button'
      variant='ghost'
      size='sm'
      className='-ml-3 h-8 gap-1 px-3 font-medium'
      onClick={() => onSort(field)}
    >
      {label}

      {active ?
        sortDirection === 'asc' ?
          <ArrowUp className='size-3.5' aria-hidden='true' />
        : <ArrowDown className='size-3.5' aria-hidden='true' />
      : <ChevronsUpDown
          className='size-3.5 text-muted-foreground'
          aria-hidden='true'
        />
      }
    </Button>
  );
}

export function ScorecardsTable({
  scorecards,
  selectedIds,
  onSelectedIdsChange,
  onView,
  onEdit,
  onToggleStatus,
  onDelete,
  page,
  pageCount,
  onPageChange,
  pageSize = 10,
}: ScorecardsTableProps) {
  const [sortField, setSortField] = useState<SortField>('updatedAt');

  const [sortDirection, setSortDirection] = useState<SortDirection>('desc');

  function handleSort(field: SortField) {
    if (sortField === field) {
      setSortDirection((current) => (current === 'asc' ? 'desc' : 'asc'));

      return;
    }

    setSortField(field);
    setSortDirection('asc');
  }

  const sortedScorecards = [...scorecards].sort((a, b) => {
    let comparison = 0;

    switch (sortField) {
      case 'name':
        comparison = a.name.localeCompare(b.name);
        break;

      case 'type':
        comparison = getTypeLabel(a.type).localeCompare(getTypeLabel(b.type));
        break;

      case 'status':
        comparison = a.status.localeCompare(b.status);
        break;

      case 'averageScore':
        comparison = a.averageScore - b.averageScore;
        break;

      case 'approvalRate':
        comparison = a.approvalRate - b.approvalRate;
        break;

      case 'applicationsScored':
        comparison = a.applicationsScored - b.applicationsScored;
        break;

      case 'updatedAt':
        comparison =
          new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime();
        break;

      default:
        comparison = 0;
    }

    return sortDirection === 'asc' ? comparison : -comparison;
  });

  const visibleIds = sortedScorecards.map((scorecard) => scorecard.id);

  const allVisibleSelected =
    visibleIds.length > 0 && visibleIds.every((id) => selectedIds.includes(id));

  const someVisibleSelected = visibleIds.some((id) => selectedIds.includes(id));

  function handleSelectAll(checked: boolean) {
    if (!checked) {
      const visibleIdSet = new Set(visibleIds);

      onSelectedIdsChange(selectedIds.filter((id) => !visibleIdSet.has(id)));

      return;
    }

    const ids = new Set(selectedIds);

    visibleIds.forEach((id) => {
      ids.add(id);
    });

    onSelectedIdsChange(Array.from(ids));
  }

  function handleSelect(scorecard: Scorecard, checked: boolean) {
    if (checked) {
      if (!selectedIds.includes(scorecard.id)) {
        onSelectedIdsChange([...selectedIds, scorecard.id]);
      }

      return;
    }

    onSelectedIdsChange(selectedIds.filter((id) => id !== scorecard.id));
  }

  function handleToggleStatus(scorecard: Scorecard) {
    onToggleStatus(scorecard.id);
  }

  const startItem =
    sortedScorecards.length === 0 ? 0 : (page - 1) * pageSize + 1;

  const endItem =
    sortedScorecards.length === 0 ? 0 : startItem + sortedScorecards.length - 1;

  return (
    <div className='w-full overflow-hidden rounded-lg border bg-background'>
      <div className='w-full overflow-x-auto'>
        <Table className='w-full min-w-225'>
          <TableHeader>
            <TableRow className='bg-muted/40'>
              <TableHead className='w-12 px-4'>
                <Checkbox
                  checked={allVisibleSelected}
                  onCheckedChange={handleSelectAll}
                  aria-label='Select all scorecards'
                  className={
                    someVisibleSelected && !allVisibleSelected ?
                      'data-[state=unchecked]:bg-muted'
                    : undefined
                  }
                />
              </TableHead>

              <TableHead className='px-4'>
                <SortButton
                  label='Scorecard'
                  field='name'
                  sortField={sortField}
                  sortDirection={sortDirection}
                  onSort={handleSort}
                />
              </TableHead>

              <TableHead className='px-4'>
                <SortButton
                  label='Type'
                  field='type'
                  sortField={sortField}
                  sortDirection={sortDirection}
                  onSort={handleSort}
                />
              </TableHead>

              <TableHead className='px-4'>
                <SortButton
                  label='Status'
                  field='status'
                  sortField={sortField}
                  sortDirection={sortDirection}
                  onSort={handleSort}
                />
              </TableHead>

              <TableHead className='px-4 text-right'>
                <SortButton
                  label='Avg. Score'
                  field='averageScore'
                  sortField={sortField}
                  sortDirection={sortDirection}
                  onSort={handleSort}
                />
              </TableHead>

              <TableHead className='px-4 text-right'>
                <SortButton
                  label='Approval'
                  field='approvalRate'
                  sortField={sortField}
                  sortDirection={sortDirection}
                  onSort={handleSort}
                />
              </TableHead>

              <TableHead className='px-4 text-right'>
                <SortButton
                  label='Applications'
                  field='applicationsScored'
                  sortField={sortField}
                  sortDirection={sortDirection}
                  onSort={handleSort}
                />
              </TableHead>

              <TableHead className='px-4'>
                <SortButton
                  label='Updated'
                  field='updatedAt'
                  sortField={sortField}
                  sortDirection={sortDirection}
                  onSort={handleSort}
                />
              </TableHead>

              <TableHead className='w-16 px-4 text-right'>Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {sortedScorecards.length === 0 ?
              <TableRow>
                <TableCell
                  colSpan={9}
                  className='h-32 text-center text-sm text-muted-foreground'
                >
                  No scorecards found.
                </TableCell>
              </TableRow>
            : sortedScorecards.map((scorecard) => {
                const selected = selectedIds.includes(scorecard.id);

                return (
                  <TableRow
                    key={scorecard.id}
                    data-state={selected ? 'selected' : undefined}
                    className='transition-colors'
                  >
                    <TableCell className='px-4 py-4'>
                      <Checkbox
                        checked={selected}
                        onCheckedChange={(checked) =>
                          handleSelect(scorecard, checked === true)
                        }
                        aria-label={`Select ${scorecard.name}`}
                      />
                    </TableCell>

                    <TableCell className='px-4 py-4'>
                      <div className='min-w-0'>
                        <button
                          type='button'
                          className='max-w-70 truncate text-left text-sm font-medium hover:underline'
                          onClick={() => onView(scorecard)}
                        >
                          {scorecard.name}
                        </button>

                        <p className='mt-0.5 max-w-80 truncate text-xs text-muted-foreground'>
                          {scorecard.description || 'No description'}
                        </p>
                      </div>
                    </TableCell>

                    <TableCell className='px-4 py-4'>
                      <span className='text-sm'>
                        {getTypeLabel(scorecard.type)}
                      </span>
                    </TableCell>

                    <TableCell className='px-4 py-4'>
                      <Badge variant={getStatusVariant(scorecard.status)}>
                        {getStatusLabel(scorecard.status)}
                      </Badge>
                    </TableCell>

                    <TableCell className='px-4 py-4 text-right'>
                      <div className='font-medium'>
                        {scorecard.averageScore}
                      </div>

                      <div className='text-xs text-muted-foreground'>
                        {scorecard.minScore}–{scorecard.maxScore}
                      </div>
                    </TableCell>

                    <TableCell className='px-4 py-4 text-right'>
                      <span className='font-medium'>
                        {scorecard.approvalRate}%
                      </span>
                    </TableCell>

                    <TableCell className='px-4 py-4 text-right'>
                      <span className='font-medium'>
                        {scorecard.applicationsScored.toLocaleString()}
                      </span>
                    </TableCell>

                    <TableCell className='px-4 py-4'>
                      <span className='text-sm text-muted-foreground'>
                        {formatDate(scorecard.updatedAt)}
                      </span>
                    </TableCell>

                    <TableCell className='px-4 py-4 text-right'>
                      <ScorecardRowActions
                        scorecard={scorecard}
                        onView={onView}
                        onEdit={onEdit}
                        onToggleStatus={handleToggleStatus}
                        onDelete={onDelete}
                      />
                    </TableCell>
                  </TableRow>
                );
              })
            }
          </TableBody>
        </Table>
      </div>

      <div className='flex flex-col gap-3 border-t px-4 py-3 sm:flex-row sm:items-center sm:justify-between'>
        <p className='text-sm text-muted-foreground'>
          Showing{' '}
          <span className='font-medium text-foreground'>{startItem}</span> to{' '}
          <span className='font-medium text-foreground'>{endItem}</span> of{' '}
          <span className='font-medium text-foreground'>
            {scorecards.length}
          </span>{' '}
          scorecards
        </p>

        <div className='flex items-center gap-2'>
          <Button
            type='button'
            variant='outline'
            size='icon'
            className='size-8'
            disabled={page <= 1}
            onClick={() => onPageChange(Math.max(1, page - 1))}
            aria-label='Previous page'
          >
            <ChevronLeft className='size-4' aria-hidden='true' />
          </Button>

          <div className='min-w-20 text-center text-sm'>
            Page {page} of {Math.max(pageCount, 1)}
          </div>

          <Button
            type='button'
            variant='outline'
            size='icon'
            className='size-8'
            disabled={pageCount <= 1 || page >= pageCount}
            onClick={() => onPageChange(Math.min(pageCount, page + 1))}
            aria-label='Next page'
          >
            <ChevronRight className='size-4' aria-hidden='true' />
          </Button>
        </div>
      </div>
    </div>
  );
}
