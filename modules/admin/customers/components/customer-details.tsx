'use client';

import { useRouter } from 'next/navigation';

import { ArrowLeft, Calendar, Mail, User } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { Button } from '@/components/ui/button';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import type { Customer } from '@/modules/admin/customers/types/customer';

interface CustomerDetailsProps {
  customer: Customer;
}

function getInitials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .map((item) => item[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

export function CustomerDetails({ customer }: CustomerDetailsProps) {
  const router = useRouter();

  return (
    <div className='mx-auto max-w-5xl space-y-6'>
      <Button
        type='button'
        variant='ghost'
        size='sm'
        onClick={() => router.push('/admin/customers')}
      >
        <ArrowLeft className='mr-2 size-4' />
        Back to Customers
      </Button>

      {/* Customer Header */}
      <Card>
        <CardContent className='flex flex-col gap-5 p-6 sm:flex-row sm:items-center'>
          <Avatar className='size-20'>
            <AvatarImage src={customer.image ?? ''} alt={customer.name} />

            <AvatarFallback className='text-lg'>
              {getInitials(customer.name)}
            </AvatarFallback>
          </Avatar>

          <div className='min-w-0 flex-1'>
            <h1 className='text-2xl font-bold'>{customer.name}</h1>

            <p className='mt-1 break-all text-sm text-muted-foreground'>
              Customer ID: {customer.id}
            </p>
          </div>
        </CardContent>
      </Card>

      <div className='grid gap-6 md:grid-cols-2'>
        {/* Personal Information */}
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>

          <CardContent className='space-y-5'>
            <div className='flex items-center gap-3'>
              <User className='size-4 text-muted-foreground' />

              <div>
                <p className='text-xs text-muted-foreground'>Full Name</p>

                <p className='font-medium'>{customer.name}</p>
              </div>
            </div>

            <div className='flex items-center gap-3'>
              <Mail className='size-4 text-muted-foreground' />

              <div>
                <p className='text-xs text-muted-foreground'>Email Address</p>

                <p className='font-medium'>{customer.email}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Account Information */}
        <Card>
          <CardHeader>
            <CardTitle>Account Information</CardTitle>
          </CardHeader>

          <CardContent className='space-y-5'>
            <div className='flex items-center gap-3'>
              <User className='size-4 text-muted-foreground' />

              <div>
                <p className='text-xs text-muted-foreground'>Customer ID</p>

                <p className='break-all font-medium'>{customer.id}</p>
              </div>
            </div>

            <div className='flex items-center gap-3'>
              <Calendar className='size-4 text-muted-foreground' />

              <div>
                <p className='text-xs text-muted-foreground'>Member Since</p>

                <p className='font-medium'>
                  {new Intl.DateTimeFormat('en-US', {
                    dateStyle: 'medium',
                  }).format(new Date(customer.createdAt))}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Loan Statistics */}
      <div className='grid gap-4 sm:grid-cols-2'>
        <Card>
          <CardContent className='p-5'>
            <p className='text-sm text-muted-foreground'>Applications</p>

            <p className='mt-2 text-3xl font-bold'>
              {customer.applicationsCount}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className='p-5'>
            <p className='text-sm text-muted-foreground'>Active Loans</p>

            <p className='mt-2 text-3xl font-bold'>{customer.activeLoans}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
