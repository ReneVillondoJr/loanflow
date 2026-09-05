'use client';

import {
  CheckCircle2,
  Clock3,
  Eye,
  FileText,
  MoreHorizontal,
  XCircle,
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import type { DecisionStatus, LoanDecision } from '../types/decision';

interface DecisioningTableProps {
  decisions: LoanDecision[];

  onUpdateStatus: (id: string, status: DecisionStatus) => void;
}

/* ---------------------------------------------
 * Formatters
 * --------------------------------------------- */

function formatLabel(value: string) {
  return value
    .toLowerCase()
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function formatCurrency(amount: number) {
  return new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
    maximumFractionDigits: 0,
  }).format(amount);
}

/* ---------------------------------------------
 * Status
 * --------------------------------------------- */

function getStatusIcon(status: DecisionStatus) {
  switch (status) {
    case 'APPROVED':
      return <CheckCircle2 className='size-3.5' />;

    case 'REJECTED':
      return <XCircle className='size-3.5' />;

    case 'MANUAL_REVIEW':
      return <Eye className='size-3.5' />;

    case 'PENDING':
    default:
      return <Clock3 className='size-3.5' />;
  }
}

function getStatusClassName(status: DecisionStatus) {
  switch (status) {
    case 'APPROVED':
      return [
        'border-emerald-200',
        'bg-emerald-50',
        'text-emerald-700',
        'dark:border-emerald-900',
        'dark:bg-emerald-950/40',
        'dark:text-emerald-400',
      ].join(' ');

    case 'REJECTED':
      return [
        'border-red-200',
        'bg-red-50',
        'text-red-700',
        'dark:border-red-900',
        'dark:bg-red-950/40',
        'dark:text-red-400',
      ].join(' ');

    case 'MANUAL_REVIEW':
      return [
        'border-amber-200',
        'bg-amber-50',
        'text-amber-700',
        'dark:border-amber-900',
        'dark:bg-amber-950/40',
        'dark:text-amber-400',
      ].join(' ');

    case 'PENDING':
    default:
      return ['border-border', 'bg-muted', 'text-muted-foreground'].join(' ');
  }
}

/* ---------------------------------------------
 * Risk
 * --------------------------------------------- */

function getRiskClassName(riskLevel: string) {
  switch (riskLevel) {
    case 'LOW':
      return [
        'border-emerald-200',
        'bg-emerald-50',
        'text-emerald-700',
        'dark:border-emerald-900',
        'dark:bg-emerald-950/40',
        'dark:text-emerald-400',
      ].join(' ');

    case 'MEDIUM':
      return [
        'border-blue-200',
        'bg-blue-50',
        'text-blue-700',
        'dark:border-blue-900',
        'dark:bg-blue-950/40',
        'dark:text-blue-400',
      ].join(' ');

    case 'HIGH':
      return [
        'border-amber-200',
        'bg-amber-50',
        'text-amber-700',
        'dark:border-amber-900',
        'dark:bg-amber-950/40',
        'dark:text-amber-400',
      ].join(' ');

    case 'VERY_HIGH':
      return [
        'border-red-200',
        'bg-red-50',
        'text-red-700',
        'dark:border-red-900',
        'dark:bg-red-950/40',
        'dark:text-red-400',
      ].join(' ');

    default:
      return ['border-border', 'bg-muted', 'text-muted-foreground'].join(' ');
  }
}

/* ---------------------------------------------
 * Empty State
 * --------------------------------------------- */

function EmptyState() {
  return (
    <div className='rounded-xl border bg-card'>
      <div className='flex min-h-[320px] flex-col items-center justify-center px-6 text-center'>
        <div className='flex size-12 items-center justify-center rounded-full bg-muted'>
          <FileText className='size-5 text-muted-foreground' />
        </div>

        <h3 className='mt-4 text-sm font-semibold'>No decisions found</h3>

        <p className='mt-1 max-w-sm text-sm leading-6 text-muted-foreground'>
          No loan decisions match your current filters. Try adjusting your
          search or filter criteria.
        </p>
      </div>
    </div>
  );
}

/* ---------------------------------------------
 * Decisioning Table
 * --------------------------------------------- */

export function DecisioningTable({
  decisions,
  onUpdateStatus,
}: DecisioningTableProps) {
  if (decisions.length === 0) {
    return <EmptyState />;
  }

  return (
    <section className='overflow-hidden rounded-xl border bg-card'>
      {/* Table Header */}
      <div className='flex flex-col gap-3 border-b px-5 py-4 sm:flex-row sm:items-center sm:justify-between'>
        <div>
          <h2 className='text-sm font-semibold'>Loan Decisions</h2>

          <p className='mt-1 text-xs text-muted-foreground'>
            Review and manage loan decision outcomes.
          </p>
        </div>

        <Badge
          variant='secondary'
          className='w-fit rounded-md px-2.5 py-1 text-xs font-medium'
        >
          {decisions.length} {decisions.length === 1 ? 'decision' : 'decisions'}
        </Badge>
      </div>

      {/* Responsive Table */}
      <div className='overflow-x-auto'>
        <Table className='min-w-[1050px]'>
          <TableHeader>
            <TableRow className='bg-muted/30 hover:bg-muted/30'>
              <TableHead className='h-11 px-5 text-xs font-medium text-muted-foreground'>
                Application
              </TableHead>

              <TableHead className='h-11 px-5 text-xs font-medium text-muted-foreground'>
                Customer
              </TableHead>

              <TableHead className='h-11 px-5 text-xs font-medium text-muted-foreground'>
                Loan
              </TableHead>

              <TableHead className='h-11 px-5 text-xs font-medium text-muted-foreground'>
                Risk
              </TableHead>

              <TableHead className='h-11 px-5 text-xs font-medium text-muted-foreground'>
                Score
              </TableHead>

              <TableHead className='h-11 px-5 text-xs font-medium text-muted-foreground'>
                Status
              </TableHead>

              <TableHead className='h-11 w-17.5 px-5 text-right text-xs font-medium text-muted-foreground'>
                <span className='sr-only'>Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {decisions.map(
              ({
                id,
                customer,
                application,
                status,
                riskLevel,
                decisionScore,
              }) => (
                <TableRow key={id} className='group hover:bg-muted/20'>
                  {/* Application */}
                  <TableCell className='px-5 py-4'>
                    <div className='flex items-center gap-3'>
                      <div className='flex size-9 shrink-0 items-center justify-center rounded-lg border bg-muted/50'>
                        <FileText className='size-4 text-muted-foreground' />
                      </div>

                      <div className='min-w-0'>
                        <p className='truncate text-sm font-medium'>
                          {application.applicationNumber}
                        </p>

                        <p className='mt-0.5 text-xs text-muted-foreground'>
                          {formatLabel(application.loanType)}
                        </p>
                      </div>
                    </div>
                  </TableCell>

                  {/* Customer */}
                  <TableCell className='px-5 py-4'>
                    <div className='min-w-0'>
                      <p className='truncate text-sm font-medium'>
                        {customer.name}
                      </p>

                      <p className='mt-0.5 max-w-[220px] truncate text-xs text-muted-foreground'>
                        {customer.email}
                      </p>
                    </div>
                  </TableCell>

                  {/* Loan */}
                  <TableCell className='px-5 py-4'>
                    <div>
                      <p className='text-sm font-medium tabular-nums'>
                        {formatCurrency(application.requestedAmount)}
                      </p>

                      <p className='mt-0.5 text-xs text-muted-foreground'>
                        {application.requestedTerm} months
                      </p>
                    </div>
                  </TableCell>

                  {/* Risk */}
                  <TableCell className='px-5 py-4'>
                    <Badge
                      variant='outline'
                      className={`rounded-md px-2 py-0.5 text-xs font-medium ${getRiskClassName(
                        riskLevel,
                      )}`}
                    >
                      {formatLabel(riskLevel)}
                    </Badge>
                  </TableCell>

                  {/* Score */}
                  <TableCell className='px-5 py-4'>
                    <div className='flex items-baseline gap-1'>
                      <span className='text-sm font-semibold tabular-nums'>
                        {decisionScore}
                      </span>

                      <span className='text-xs text-muted-foreground'>
                        / 100
                      </span>
                    </div>
                  </TableCell>

                  {/* Status */}
                  <TableCell className='px-5 py-4'>
                    <Badge
                      variant='outline'
                      className={`gap-1.5 rounded-md px-2 py-0.5 text-xs font-medium ${getStatusClassName(
                        status,
                      )}`}
                    >
                      {getStatusIcon(status)}

                      {formatLabel(status)}
                    </Badge>
                  </TableCell>

                  {/* Actions */}
                  <TableCell className='px-5 py-4 text-right'>
                    <DropdownMenu>
                      <DropdownMenuTrigger
                        aria-label={`Actions for ${customer.name}`}
                        className='inline-flex size-8 items-center justify-center rounded-md border border-transparent text-muted-foreground outline-none transition-colors hover:border-border hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30'
                      >
                        <MoreHorizontal className='size-4' />
                      </DropdownMenuTrigger>

                      <DropdownMenuContent align='end' className='w-48'>
                        <DropdownMenuItem>
                          <Eye className='size-4' />
                          View decision
                        </DropdownMenuItem>

                        <DropdownMenuItem>
                          <FileText className='size-4' />
                          View application
                        </DropdownMenuItem>

                        <DropdownMenuSeparator />

                        <DropdownMenuItem
                          disabled={status === 'APPROVED'}
                          onClick={() => onUpdateStatus(id, 'APPROVED')}
                        >
                          <CheckCircle2 className='size-4' />
                          Approve
                        </DropdownMenuItem>

                        <DropdownMenuItem
                          disabled={status === 'MANUAL_REVIEW'}
                          onClick={() => onUpdateStatus(id, 'MANUAL_REVIEW')}
                        >
                          <Eye className='size-4' />
                          Manual review
                        </DropdownMenuItem>

                        <DropdownMenuItem
                          disabled={status === 'REJECTED'}
                          onClick={() => onUpdateStatus(id, 'REJECTED')}
                        >
                          <XCircle className='size-4' />
                          Reject
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ),
            )}
          </TableBody>
        </Table>
      </div>

      {/* Footer */}
      <div className='flex items-center justify-between border-t bg-muted/20 px-5 py-3'>
        <p className='text-xs text-muted-foreground'>
          Showing{' '}
          <span className='font-medium text-foreground'>
            {decisions.length}
          </span>{' '}
          of{' '}
          <span className='font-medium text-foreground'>
            {decisions.length}
          </span>{' '}
          decisions
        </p>
      </div>
    </section>
  );
}
