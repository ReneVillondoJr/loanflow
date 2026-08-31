import Link from 'next/link';

import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  FileCheck2,
  FileText,
  Plus,
  WalletCards,
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const stats = [
  {
    title: 'Total Applications',
    value: '24',
    description: 'Applications submitted',
    icon: FileText,
  },
  {
    title: 'Pending Applications',
    value: '8',
    description: 'Awaiting review',
    icon: Clock3,
  },
  {
    title: 'Approved Loans',
    value: '12',
    description: 'Successfully approved',
    icon: CheckCircle2,
  },
  {
    title: 'Total Loan Amount',
    value: '₱1.24M',
    description: 'Across all applications',
    icon: WalletCards,
  },
];

const applications = [
  {
    id: 'LN-2026-00124',
    type: 'Personal Loan',
    amount: '₱150,000',
    status: 'Approved',
    date: 'Aug 29, 2026',
  },
  {
    id: 'LN-2026-00123',
    type: 'Business Loan',
    amount: '₱350,000',
    status: 'Pending',
    date: 'Aug 28, 2026',
  },
  {
    id: 'LN-2026-00122',
    type: 'Personal Loan',
    amount: '₱100,000',
    status: 'Under Review',
    date: 'Aug 27, 2026',
  },
  {
    id: 'LN-2026-00121',
    type: 'Auto Loan',
    amount: '₱500,000',
    status: 'Approved',
    date: 'Aug 25, 2026',
  },
];

function getStatusClass(status: string) {
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

export default function ClientDashboardPage() {
  return (
    <div className='space-y-6'>
      {/* Page Header */}
      <section className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
        <div className='min-w-0'>
          <h1 className='text-2xl font-semibold tracking-tight'>Dashboard</h1>

          <p className='mt-1 text-sm text-muted-foreground'>
            Welcome back. Here&apos;s an overview of your loan activity.
          </p>
        </div>

        <Link
          href='/client/applications/new'
          className='
            inline-flex
            h-10
            w-full
            items-center
            justify-center
            gap-2
            rounded-md
            bg-primary
            px-4
            text-sm
            font-medium
            text-primary-foreground
            transition-colors
            hover:bg-primary/90
            sm:w-auto
          '
        >
          <Plus className='size-4' />
          New Application
        </Link>
      </section>

      {/* Statistics */}
      <section className='grid gap-4 sm:grid-cols-2 xl:grid-cols-4'>
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <Card key={stat.title}>
              <CardContent className='p-5'>
                <div className='flex items-start justify-between gap-4'>
                  <div className='min-w-0'>
                    <p className='truncate text-sm text-muted-foreground'>
                      {stat.title}
                    </p>

                    <p className='mt-1 text-2xl font-semibold tracking-tight'>
                      {stat.value}
                    </p>

                    <p className='mt-1 text-xs text-muted-foreground'>
                      {stat.description}
                    </p>
                  </div>

                  <div
                    className='
                      flex
                      size-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-md
                      bg-muted
                    '
                  >
                    <Icon className='size-5 text-muted-foreground' />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </section>

      {/* Main Content */}
      <section className='grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]'>
        {/* Recent Applications */}
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
                href='/client/applications'
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
                  href={`/client/applications/${application.id}`}
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

        {/* Quick Actions */}
        <Card className='h-fit'>
          <CardHeader>
            <CardTitle className='text-base'>Quick Actions</CardTitle>

            <p className='text-sm text-muted-foreground'>Common actions</p>
          </CardHeader>

          <CardContent className='space-y-3'>
            <Link
              href='/client/applications/new'
              className='
                flex
                h-10
                w-full
                items-center
                justify-between
                rounded-md
                border
                bg-background
                px-3.5
                text-sm
                font-medium
                transition-colors
                hover:bg-muted
              '
            >
              <span>New Loan Application</span>
              <ArrowRight className='size-4 shrink-0' />
            </Link>

            <Link
              href='/client/applications'
              className='
                flex
                h-10
                w-full
                items-center
                justify-between
                rounded-md
                border
                bg-background
                px-3.5
                text-sm
                font-medium
                transition-colors
                hover:bg-muted
              '
            >
              <span>View Applications</span>
              <ArrowRight className='size-4 shrink-0' />
            </Link>

            <Link
              href='/client/loans'
              className='
                flex
                h-10
                w-full
                items-center
                justify-between
                rounded-md
                border
                bg-background
                px-3.5
                text-sm
                font-medium
                transition-colors
                hover:bg-muted
              '
            >
              <span>View My Loans</span>
              <ArrowRight className='size-4 shrink-0' />
            </Link>

            <Link
              href='/client/documents'
              className='
                flex
                h-10
                w-full
                items-center
                justify-between
                rounded-md
                border
                bg-background
                px-3.5
                text-sm
                font-medium
                transition-colors
                hover:bg-muted
              '
            >
              <span>My Documents</span>
              <ArrowRight className='size-4 shrink-0' />
            </Link>
          </CardContent>
        </Card>
      </section>

      {/* Current Application */}
      <Card>
        <CardHeader>
          <CardTitle className='text-base'>Current Application</CardTitle>

          <p className='text-sm text-muted-foreground'>
            Track your latest loan application.
          </p>
        </CardHeader>

        <CardContent>
          <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
            <div className='rounded-md border p-4'>
              <p className='text-xs text-muted-foreground'>Application</p>

              <p className='mt-1 text-sm font-medium'>LN-2026-00124</p>
            </div>

            <div className='rounded-md border p-4'>
              <p className='text-xs text-muted-foreground'>Loan Type</p>

              <p className='mt-1 text-sm font-medium'>Personal Loan</p>
            </div>

            <div className='rounded-md border p-4'>
              <p className='text-xs text-muted-foreground'>Amount</p>

              <p className='mt-1 text-sm font-medium'>₱150,000</p>
            </div>

            <div className='rounded-md border p-4'>
              <p className='text-xs text-muted-foreground'>Status</p>

              <Badge
                variant='outline'
                className='
                  mt-1
                  border-emerald-200
                  bg-emerald-50
                  text-emerald-700
                '
              >
                Approved
              </Badge>
            </div>
          </div>

          <div className='mt-4 flex justify-end'>
            <Link
              href='/client/applications/LN-2026-00124'
              className='
                inline-flex
                h-10
                w-full
                items-center
                justify-center
                gap-2
                rounded-md
                border
                bg-background
                px-4
                text-sm
                font-medium
                transition-colors
                hover:bg-muted
                sm:w-auto
              '
            >
              View Application
              <ArrowRight className='size-4' />
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Documents Reminder */}
      <Card>
        <CardContent className='p-5'>
          <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
            <div className='flex min-w-0 items-start gap-3'>
              <div className='flex size-10 shrink-0 items-center justify-center rounded-md bg-muted'>
                <FileCheck2 className='size-5 text-muted-foreground' />
              </div>

              <div className='min-w-0'>
                <p className='text-sm font-semibold'>
                  Keep your documents updated
                </p>

                <p className='mt-1 text-sm text-muted-foreground'>
                  Make sure your required documents are complete for faster
                  processing.
                </p>
              </div>
            </div>

            <Link
              href='/client/documents'
              className='
                inline-flex
                h-9
                shrink-0
                items-center
                justify-center
                gap-2
                rounded-md
                border
                bg-background
                px-3
                text-sm
                font-medium
                transition-colors
                hover:bg-muted
              '
            >
              Manage Documents
              <ArrowRight className='size-4' />
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
