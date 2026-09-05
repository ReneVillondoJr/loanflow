'use client';

import { useMemo, useState } from 'react';

import type {
  Customer,
  CustomerFilterState,
} from '@/modules/admin/customers/types/customer';

interface UseCustomerFiltersProps {
  customers: Customer[];
}

export function useCustomerFilters({ customers }: UseCustomerFiltersProps) {
  const [filters, setFilters] = useState<CustomerFilterState>({
    search: '',
    status: 'ALL',
  });

  const filteredCustomers = useMemo(() => {
    const search = filters.search.trim().toLowerCase();

    return customers.filter((customer) => {
      const matchesSearch =
        !search ||
        customer.name.toLowerCase().includes(search) ||
        customer.email.toLowerCase().includes(search) ||
        customer.phone?.toLowerCase().includes(search);

      const matchesStatus =
        filters.status === 'ALL' || customer.status === filters.status;

      return matchesSearch && matchesStatus;
    });
  }, [customers, filters]);

  const setSearch = (value: string) => {
    setFilters((current) => ({
      ...current,
      search: value,
    }));
  };

  const setStatus = (value: string) => {
    setFilters((current) => ({
      ...current,
      status: value,
    }));
  };

  return {
    filters,
    filteredCustomers,
    setSearch,
    setStatus,
  };
}
