'use client';

import { useMemo, useState } from 'react';

import type {
  ApplicationFilters,
  ApplicationStatus,
  LoanApplication,
} from '../types/application';

export function useApplications(applications: LoanApplication[]) {
  const [filters, setFilters] = useState<ApplicationFilters>({
    search: '',
    status: 'all',
  });

  const filteredApplications = useMemo(() => {
    const search = filters.search.trim().toLowerCase();

    return applications.filter((application) => {
      const matchesSearch =
        !search ||
        application.applicationNumber.toLowerCase().includes(search) ||
        application.loanType.toLowerCase().includes(search) ||
        application.status.toLowerCase().includes(search);

      const matchesStatus =
        filters.status === 'all' || application.status === filters.status;

      return matchesSearch && matchesStatus;
    });
  }, [applications, filters]);

  function setSearch(value: string) {
    setFilters((current) => ({
      ...current,
      search: value,
    }));
  }

  function setStatus(value: 'all' | ApplicationStatus) {
    setFilters((current) => ({
      ...current,
      status: value,
    }));
  }

  function clearFilters() {
    setFilters({
      search: '',
      status: 'all',
    });
  }

  return {
    filters,
    filteredApplications,
    setSearch,
    setStatus,
    clearFilters,
  };
}
