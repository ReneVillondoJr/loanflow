import Link from 'next/link';

import { ArrowRight } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import type { ApplicationStatus, LoanApplication } from '../types/dashboard';

interface RecentApplicationsProps {
  applications: LoanApplication[];
}

function getStatusClass(status: ApplicationStatus) {
  switch (status) {
    case 'Approved':
      return 'border-emerald-200 bg-emerald-50 text-emerald-700';

    case 'Pending':
      return 'border-amber-200 bg-amber-50 text-amber-700';

    case 'Under Review':
      return 'border-blue-200 bg-blue-50 text-blue-700';

    case 'Rejected':
      return 'border-red-200 bg-red-50 text-red-700';

    default:
      return 'border-border bg-muted text-muted-foreground';
  }
}

export function RecentApplications({ applications }: RecentApplicationsProps) {
  return (
    <Card className='min-w-0'>
      <CardHeader>
        <div className='flex items-center justify-between gap-4'>
          <div className='min-w-0'>
            <CardTitle className='text-base'>Recent Applications</CardTitle>

            <p className='mt-1 text-sm text-muted-foreground'>
              Your latest loan applications
            </p>
          </div>

          <Link
            href='/clients/applications'
            className='
              inline-flex
              h-9
              shrink-0
              items-center
              gap-1.5
              rounded-md
              px-2
              text-sm
              font-medium
              text-muted-foreground
              transition-colors
              hover:bg-muted
              hover:text-foreground
            '
          >
            View all
            <ArrowRight className='size-4' />
          </Link>
        </div>
      </CardHeader>

      <CardContent className='p-0'>
        <div className='divide-y'>
          {applications.map((application) => (
            <Link
              key={application.id}
              href={`/clients/applications/${application.id}`}
              className='
                flex
                flex-col
                gap-3
                px-6
                py-4
                transition-colors
                hover:bg-muted/40
                sm:flex-row
                sm:items-center
                sm:justify-between
              '
            >
              <div className='min-w-0'>
                <div className='flex flex-wrap items-center gap-2'>
                  <p className='text-sm font-medium'>{application.id}</p>

                  <Badge
                    variant='outline'
                    className={getStatusClass(application.status)}
                  >
                    {application.status}
                  </Badge>
                </div>

                <p className='mt-1 text-sm text-muted-foreground'>
                  {application.type}
                </p>
              </div>

              <div className='shrink-0 sm:text-right'>
                <p className='text-sm font-medium'>{application.amount}</p>

                <p className='mt-1 text-xs text-muted-foreground'>
                  {application.date}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
