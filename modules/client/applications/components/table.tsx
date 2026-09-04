'use client';

import { Eye } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { ApplicationStatusBadge } from './status-badge';

import type { LoanApplication } from '../types/application';

interface ApplicationsTableProps {
  applications: LoanApplication[];
}

export function ApplicationsTable({ applications }: ApplicationsTableProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Applications</CardTitle>
      </CardHeader>

      <CardContent className='p-0'>
        {applications.length === 0 ?
          <div className='mx-6 mb-6 flex min-h-32 items-center justify-center rounded-lg border border-dashed'>
            <p className='text-sm text-muted-foreground'>
              No applications found.
            </p>
          </div>
        : <div className='overflow-x-auto'>
            <Table className='min-w-190'>
              <TableHeader>
                <TableRow>
                  <TableHead className='px-6'>Application</TableHead>

                  <TableHead>Loan Type</TableHead>

                  <TableHead>Amount</TableHead>

                  <TableHead>Status</TableHead>

                  <TableHead>Submitted</TableHead>

                  <TableHead>Updated</TableHead>

                  <TableHead className='px-6 text-right'>Action</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {applications.map((application) => (
                  <TableRow key={application.id}>
                    <TableCell className='px-6'>
                      <div className='font-medium'>
                        {application.applicationNumber}
                      </div>
                    </TableCell>

                    <TableCell>{application.loanType}</TableCell>

                    <TableCell className='font-medium'>
                      {application.amount}
                    </TableCell>

                    <TableCell>
                      <ApplicationStatusBadge status={application.status} />
                    </TableCell>

                    <TableCell className='text-muted-foreground'>
                      {application.submittedAt}
                    </TableCell>

                    <TableCell className='text-muted-foreground'>
                      {application.updatedAt}
                    </TableCell>

                    <TableCell className='px-6 text-right'>
                      <Button type='button' variant='ghost' size='sm'>
                        <Eye className='size-4' />
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        }
      </CardContent>
    </Card>
  );
}
