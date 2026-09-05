'use client';

import type {
  Customer,
  CustomerStatsData,
} from '@/modules/admin/customers/types/customer';

import { useCustomerFilters } from '@/modules/admin/customers/hooks/use-customer-filters';

import { CustomerEmptyState } from '@/modules/admin/customers/components/empty-state';
import { CustomerFilters } from '@/modules/admin/customers/components/filters';
import { CustomerPageHeader } from '@/modules/admin/customers/components/header';
import { CustomerStats } from '@/modules/admin/customers/components/stats';
import { CustomerTable } from '@/modules/admin/customers/components/table';

interface CustomersProps {
  customers: Customer[];
  stats: CustomerStatsData;
}

export default function Customers({ customers, stats }: CustomersProps) {
  const { filters, filteredCustomers, setSearch, setStatus } =
    useCustomerFilters({
      customers,
    });

  return (
    <div className='space-y-6'>
      <CustomerPageHeader />

      <CustomerStats stats={stats} />

      <CustomerFilters
        search={filters.search}
        status={filters.status}
        onSearchChange={setSearch}
        onStatusChange={setStatus}
      />

      {filteredCustomers.length === 0 ?
        <CustomerEmptyState />
      : <CustomerTable customers={filteredCustomers} />}
    </div>
  );
}
