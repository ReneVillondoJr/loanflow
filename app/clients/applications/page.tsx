'use client';

import {
  CheckCircle2,
  Clock3,
  FileCheck2,
  FileText,
  Plus,
  User,
  WalletCards,
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { ActionButton } from '@/components/action-button';

const statistics = [
  {
    title: 'Applications',
    value: '2',
    description: 'Total submitted',
    icon: FileText,
    iconClass: 'bg-muted text-foreground',
  },
  {
    title: 'Under Review',
    value: '1',
    description: 'Awaiting decision',
    icon: Clock3,
    iconClass: 'bg-orange-50 text-orange-600',
  },
  {
    title: 'Approved',
    value: '1',
    description: 'Approved applications',
    icon: CheckCircle2,
    iconClass: 'bg-emerald-50 text-emerald-600',
  },
  {
    title: 'Active Loans',
    value: '0',
    description: 'Currently active',
    icon: WalletCards,
    iconClass: 'bg-blue-50 text-blue-600',
  },
];

const applications = [
  {
    name: 'Personal Loan',
    description: 'Submitted recently',
    status: 'Under Review',
    amount: '₱50,000',
    statusClass: 'border-orange-200 bg-orange-50 text-orange-700',
  },
  {
    name: 'Business Loan',
    description: 'Updated recently',
    status: 'Approved',
    amount: '₱150,000',
    statusClass: 'border-emerald-200 bg-emerald-50 text-emerald-700',
  },
];

export default function DashboardPage() {
  return (
    <div className='space-y-6'>
      {/* Page Header */}
      <section className='flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between'>
        <div className='min-w-0'>
          <p className='mb-1 text-sm font-medium text-muted-foreground'>
            Dashboard
          </p>

          <h1 className='text-2xl font-semibold tracking-tight sm:text-3xl'>
            Welcome back
          </h1>

          <p className='mt-1 text-sm text-muted-foreground'>
            Manage your loan applications and account in one place.
          </p>
        </div>

        {/* Desktop only */}
        <div className='hidden sm:block'>
          <ActionButton
            href='/dashboard/applications/new'
            label='Apply for Loan'
            icon={<Plus className='size-4' />}
            variant='primary'
          />
        </div>
      </section>

      {/* Statistics */}
      <section className='grid gap-4 sm:grid-cols-2 xl:grid-cols-4'>
        {statistics.map((stat) => {
          const Icon = stat.icon;

          return (
            <Card key={stat.title} className='shadow-none'>
              <CardContent className='flex items-center gap-4 p-5'>
                <div
                  className={`
                    flex size-11 shrink-0
                    items-center justify-center
                    rounded-lg
                    ${stat.iconClass}
                  `}
                >
                  <Icon className='size-5' />
                </div>

                <div className='min-w-0'>
                  <p className='text-sm text-muted-foreground'>{stat.title}</p>

                  <p className='mt-0.5 text-2xl font-semibold tracking-tight'>
                    {stat.value}
                  </p>

                  <p className='mt-0.5 truncate text-xs text-muted-foreground'>
                    {stat.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </section>

      {/* Main Content */}
      <section className='grid gap-6 xl:grid-cols-[minmax(0,1fr)_340px]'>
        {/* Recent Applications */}
        <Card className='shadow-none'>
          <CardHeader className='flex flex-row items-start justify-between space-y-0 gap-4'>
            <div className='min-w-0'>
              <CardTitle className='text-base'>Recent Applications</CardTitle>

              <p className='mt-1 text-sm text-muted-foreground'>
                Track the status of your loan applications.
              </p>
            </div>

            <ActionButton
              href='/dashboard/applications'
              label='View all'
              variant='secondary'
              size='sm'
              className='shrink-0'
            />
          </CardHeader>

          <CardContent>
            {/* Desktop */}
            <div className='hidden overflow-hidden rounded-lg border md:block'>
              {/* Table Header */}
              <div
                className='
                  grid
                  grid-cols-[minmax(0,1fr)_160px_130px]
                  items-center
                  border-b
                  bg-muted/30
                  px-4
                  py-3
                  text-xs
                  font-medium
                  text-muted-foreground
                '
              >
                <span>Application</span>
                <span>Status</span>
                <span className='text-right'>Amount</span>
              </div>

              {/* Rows */}
              {applications.map((application) => (
                <div
                  key={application.name}
                  className='
                    grid
                    grid-cols-[minmax(0,1fr)_160px_130px]
                    items-center
                    border-b
                    px-4
                    py-4
                    last:border-b-0
                  '
                >
                  <div className='min-w-0'>
                    <p className='truncate text-sm font-semibold'>
                      {application.name}
                    </p>

                    <p className='mt-0.5 truncate text-xs text-muted-foreground'>
                      {application.description}
                    </p>
                  </div>

                  <div>
                    <Badge
                      variant='outline'
                      className={`
                        h-6
                        whitespace-nowrap
                        rounded-full
                        px-2.5
                        text-xs
                        font-medium
                        ${application.statusClass}
                      `}
                    >
                      {application.status}
                    </Badge>
                  </div>

                  <p className='text-right text-sm font-semibold'>
                    {application.amount}
                  </p>
                </div>
              ))}
            </div>

            {/* Mobile */}
            <div className='space-y-3 md:hidden'>
              {applications.map((application) => (
                <div key={application.name} className='rounded-lg border p-4'>
                  <div className='flex items-start justify-between gap-3'>
                    <div className='min-w-0'>
                      <p className='truncate text-sm font-semibold'>
                        {application.name}
                      </p>

                      <p className='mt-1 truncate text-xs text-muted-foreground'>
                        {application.description}
                      </p>
                    </div>

                    <Badge
                      variant='outline'
                      className={`
                        h-6
                        shrink-0
                        whitespace-nowrap
                        rounded-full
                        px-2.5
                        text-xs
                        ${application.statusClass}
                      `}
                    >
                      {application.status}
                    </Badge>
                  </div>

                  <div className='mt-4 flex items-center justify-between border-t pt-3'>
                    <span className='text-xs text-muted-foreground'>
                      Loan amount
                    </span>

                    <span className='text-sm font-semibold'>
                      {application.amount}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className='shadow-none'>
          <CardHeader>
            <CardTitle className='text-base'>Quick Actions</CardTitle>

            <p className='text-sm text-muted-foreground'>
              Common actions for your account.
            </p>
          </CardHeader>

          <CardContent className='space-y-2'>
            <ActionButton
              href='/dashboard/applications/new'
              label='New Loan Application'
              icon={<FileText className='size-4 text-muted-foreground' />}
              showArrow
              fullWidth
            />

            <ActionButton
              href='/dashboard/documents'
              label='Upload Documents'
              icon={<FileCheck2 className='size-4 text-muted-foreground' />}
              showArrow
              fullWidth
            />

            <ActionButton
              href='/dashboard/profile'
              label='Update Profile'
              icon={<User className='size-4 text-muted-foreground' />}
              showArrow
              fullWidth
            />
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
