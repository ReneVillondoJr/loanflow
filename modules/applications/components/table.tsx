import Link from 'next/link';

import { ArrowRight, Calendar, FileText } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { ApplicationStatusBadge } from './status-badge';
import { ApplicationsEmptyState } from './empty-state';

import type { LoanApplication } from '../types/application';

interface ApplicationsTableProps {
  applications: LoanApplication[];
  hasFilters?: boolean;
}

export function ApplicationsTable({
  applications,
  hasFilters = false,
}: ApplicationsTableProps) {
  return (
    <Card className='min-w-0'>
      <CardHeader>
        <div className='flex items-center justify-between gap-4'>
          <div>
            <CardTitle className='text-base'>Applications</CardTitle>

            <p className='mt-1 text-sm text-muted-foreground'>
              Select an application to view its details.
            </p>
          </div>

          <span className='shrink-0 text-sm text-muted-foreground'>
            {applications.length}{' '}
            {applications.length === 1 ? 'result' : 'results'}
          </span>
        </div>
      </CardHeader>

      <CardContent className='p-0'>
        {applications.length === 0 ?
          <ApplicationsEmptyState hasFilters={hasFilters} />
        : <>
            {/* Desktop Table */}
            <div className='hidden overflow-x-auto md:block'>
              <table className='w-full text-sm'>
                <thead className='border-y bg-muted/30'>
                  <tr>
                    <th className='px-6 py-3 text-left text-xs font-medium text-muted-foreground'>
                      Application
                    </th>

                    <th className='px-6 py-3 text-left text-xs font-medium text-muted-foreground'>
                      Loan Type
                    </th>

                    <th className='px-6 py-3 text-right text-xs font-medium text-muted-foreground'>
                      Amount
                    </th>

                    <th className='px-6 py-3 text-left text-xs font-medium text-muted-foreground'>
                      Status
                    </th>

                    <th className='px-6 py-3 text-left text-xs font-medium text-muted-foreground'>
                      Submitted
                    </th>

                    <th className='w-[56px] px-4 py-3' />
                  </tr>
                </thead>

                <tbody className='divide-y'>
                  {applications.map((application) => (
                    <tr
                      key={application.id}
                      className='transition-colors hover:bg-muted/40'
                    >
                      <td className='px-6 py-4'>
                        <Link
                          href={`/clients/applications/${application.applicationNumber}`}
                          className='font-medium hover:underline'
                        >
                          {application.applicationNumber}
                        </Link>
                      </td>

                      <td className='px-6 py-4 text-muted-foreground'>
                        {application.loanType}
                      </td>

                      <td className='px-6 py-4 text-right font-medium'>
                        {application.amount}
                      </td>

                      <td className='px-6 py-4'>
                        <ApplicationStatusBadge status={application.status} />
                      </td>

                      <td className='px-6 py-4 text-muted-foreground'>
                        {application.submittedAt}
                      </td>

                      <td className='px-4 py-4'>
                        <Link
                          href={`/clients/applications/${application.applicationNumber}`}
                          aria-label={`View ${application.applicationNumber}`}
                          className='
                            inline-flex
                            size-8
                            items-center
                            justify-center
                            rounded-md
                            text-muted-foreground
                            transition-colors
                            hover:bg-muted
                            hover:text-foreground
                          '
                        >
                          <ArrowRight className='size-4' />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className='divide-y md:hidden'>
              {applications.map((application) => (
                <Link
                  key={application.id}
                  href={`/clients/applications/${application.applicationNumber}`}
                  className='
                    block
                    px-4
                    py-4
                    transition-colors
                    hover:bg-muted/40
                  '
                >
                  <div className='flex items-start justify-between gap-3'>
                    <div className='min-w-0'>
                      <div className='flex items-center gap-2'>
                        <FileText className='size-4 shrink-0 text-muted-foreground' />

                        <p className='truncate text-sm font-medium'>
                          {application.applicationNumber}
                        </p>
                      </div>

                      <p className='mt-1 text-sm text-muted-foreground'>
                        {application.loanType}
                      </p>
                    </div>

                    <ArrowRight className='size-4 shrink-0 text-muted-foreground' />
                  </div>

                  <div className='mt-4 flex flex-wrap items-center justify-between gap-3'>
                    <div>
                      <p className='text-sm font-semibold'>
                        {application.amount}
                      </p>

                      <div className='mt-1 flex items-center gap-1.5 text-xs text-muted-foreground'>
                        <Calendar className='size-3.5' />

                        {application.submittedAt}
                      </div>
                    </div>

                    <ApplicationStatusBadge status={application.status} />
                  </div>
                </Link>
              ))}
            </div>
          </>
        }
      </CardContent>
    </Card>
  );
}
