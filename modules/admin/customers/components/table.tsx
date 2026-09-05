'use client';

import { useState } from 'react';

import { Edit, Eye, MoreHorizontal } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { EditCustomerDialog } from './edit-customer-dialog';

import type { Customer } from '../types/customer';

interface CustomerTableProps {
  customers: Customer[];
}

export function CustomerTable({ customers }: CustomerTableProps) {
  const router = useRouter();

  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(
    null,
  );

  const [editDialogOpen, setEditDialogOpen] = useState(false);

  const handleView = (customerId: string) => {
    router.push(`/admin/customers/${customerId}`);
  };

  const handleEdit = (customer: Customer) => {
    setSelectedCustomer(customer);
    setEditDialogOpen(true);
  };

  const handleSave = (updatedCustomer: Customer) => {
    // Your local data can be updated here.
    console.log('Updated customer:', updatedCustomer);

    setEditDialogOpen(false);
    setSelectedCustomer(null);
  };

  if (customers.length === 0) {
    return (
      <Card>
        <CardContent className='flex min-h-[320px] items-center justify-center'>
          <div className='text-center'>
            <p className='text-sm font-medium'>No customers found</p>

            <p className='mt-1 text-sm text-muted-foreground'>
              Try adjusting your search or filters.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <>
      <Card className='overflow-hidden'>
        <CardContent className='p-0'>
          <div className='overflow-x-auto'>
            <table className='w-full min-w-[900px]'>
              <thead className='border-b bg-muted/40'>
                <tr>
                  <th className='px-5 py-3 text-left text-xs font-medium text-muted-foreground'>
                    Customer
                  </th>

                  <th className='px-5 py-3 text-left text-xs font-medium text-muted-foreground'>
                    Email
                  </th>

                  <th className='px-5 py-3 text-left text-xs font-medium text-muted-foreground'>
                    Phone
                  </th>

                  <th className='px-5 py-3 text-left text-xs font-medium text-muted-foreground'>
                    Status
                  </th>

                  <th className='px-5 py-3 text-left text-xs font-medium text-muted-foreground'>
                    Applications
                  </th>

                  <th className='px-5 py-3 text-left text-xs font-medium text-muted-foreground'>
                    Active Loans
                  </th>

                  <th className='w-12 px-3 py-3' />
                </tr>
              </thead>

              <tbody className='divide-y'>
                {customers.map((customer) => (
                  <tr
                    key={customer.id}
                    className='transition-colors hover:bg-muted/30'
                  >
                    <td className='px-5 py-4'>
                      <div className='flex items-center gap-3'>
                        <div className='flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary'>
                          {customer.name
                            .split(' ')
                            .map((part) => part[0])
                            .join('')
                            .slice(0, 2)
                            .toUpperCase()}
                        </div>

                        <div className='min-w-0'>
                          <p className='truncate text-sm font-medium'>
                            {customer.name}
                          </p>

                          <p className='text-xs text-muted-foreground'>
                            {new Date(customer.createdAt).toLocaleDateString(
                              'en-PH',
                              {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric',
                              },
                            )}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className='px-5 py-4 text-sm text-muted-foreground'>
                      {customer.email}
                    </td>

                    <td className='px-5 py-4 text-sm text-muted-foreground'>
                      {customer.phone ?? '—'}
                    </td>

                    <td className='px-5 py-4'>
                      <Badge
                        variant={
                          customer.status === 'ACTIVE' ? 'default' : 'secondary'
                        }
                      >
                        {customer.status}
                      </Badge>
                    </td>

                    <td className='px-5 py-4 text-sm'>
                      {customer.applicationsCount}
                    </td>

                    <td className='px-5 py-4 text-sm'>
                      {customer.activeLoans}
                    </td>

                    <td className='px-3 py-4'>
                      <DropdownMenu>
                        <DropdownMenuTrigger
                          type='button'
                          className='inline-flex size-8 items-center justify-center rounded-md border border-transparent transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'
                          aria-label='Customer actions'
                        >
                          {' '}
                          <MoreHorizontal className='size-4' />{' '}
                          <span className='sr-only'>
                            {' '}
                            Customer actions{' '}
                          </span>{' '}
                        </DropdownMenuTrigger>

                        <DropdownMenuContent align='end' className='w-40'>
                          <DropdownMenuItem
                            onClick={() => handleView(customer.id)}
                          >
                            <Eye className='mr-2 size-4' />
                            View
                          </DropdownMenuItem>

                          <DropdownMenuSeparator />

                          <DropdownMenuItem
                            onClick={() => handleEdit(customer)}
                          >
                            <Edit className='mr-2 size-4' />
                            Edit
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <EditCustomerDialog
        customer={selectedCustomer}
        open={editDialogOpen}
        onOpenChange={(open) => {
          setEditDialogOpen(open);

          if (!open) {
            setSelectedCustomer(null);
          }
        }}
        onSave={handleSave}
      />
    </>
  );
}
