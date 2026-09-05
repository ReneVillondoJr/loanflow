'use client';

import { useRouter } from 'next/navigation';

import { Mail, Phone } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { Badge } from '@/components/ui/badge';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import type { Customer } from '@/modules/admin/customers/types/customer';

import { CustomerActions } from './actions';

interface CustomerTableProps {
  customers: Customer[];
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

function getStatusVariant(status: Customer['status']) {
  switch (status) {
    case 'ACTIVE':
      return 'default';

    case 'PENDING':
      return 'secondary';

    case 'INACTIVE':
      return 'outline';

    default:
      return 'outline';
  }
}

export function CustomerTable({ customers }: CustomerTableProps) {
  const router = useRouter();

  function handleCustomerClick(customerId: string) {
    router.push(`/admin/customers/${customerId}`);
  }

  if (customers.length === 0) {
    return (
      <div className='rounded-lg border p-12 text-center'>
        <h3 className='font-semibold'>No customers found</h3>

        <p className='mt-1 text-sm text-muted-foreground'>
          Try changing your search or filter.
        </p>
      </div>
    );
  }

  return (
    <div className='overflow-hidden rounded-lg border'>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Customer</TableHead>

            <TableHead className='hidden md:table-cell'>Contact</TableHead>

            <TableHead>Status</TableHead>

            <TableHead className='hidden lg:table-cell'>Applications</TableHead>

            <TableHead className='hidden lg:table-cell'>Active Loans</TableHead>

            <TableHead className='w-16' />
          </TableRow>
        </TableHeader>

        <TableBody>
          {customers.map((customer) => (
            <TableRow
              key={customer.id}
              className='cursor-pointer'
              onClick={() => handleCustomerClick(customer.id)}
            >
              <TableCell>
                <div className='flex items-center gap-3'>
                  <Avatar>
                    <AvatarImage
                      src={customer.image ?? ''}
                      alt={customer.name}
                    />

                    <AvatarFallback>
                      {getInitials(customer.name)}
                    </AvatarFallback>
                  </Avatar>

                  <div className='min-w-0'>
                    <p className='truncate font-medium'>{customer.name}</p>

                    <p className='truncate text-sm text-muted-foreground md:hidden'>
                      {customer.email}
                    </p>
                  </div>
                </div>
              </TableCell>

              <TableCell className='hidden md:table-cell'>
                <div className='space-y-1'>
                  <div className='flex items-center gap-2 text-sm'>
                    <Mail className='size-3.5 text-muted-foreground' />

                    <span className='truncate'>{customer.email}</span>
                  </div>

                  {customer.phone && (
                    <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                      <Phone className='size-3.5' />

                      {customer.phone}
                    </div>
                  )}
                </div>
              </TableCell>

              <TableCell>
                <Badge variant={getStatusVariant(customer.status)}>
                  {customer.status}
                </Badge>
              </TableCell>

              <TableCell className='hidden lg:table-cell'>
                {customer.applicationsCount}
              </TableCell>

              <TableCell className='hidden lg:table-cell'>
                {customer.activeLoans}
              </TableCell>

              <TableCell onClick={(event) => event.stopPropagation()}>
                <CustomerActions customerId={customer.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
