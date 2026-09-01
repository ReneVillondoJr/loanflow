'use client';

import { useMemo, useState } from 'react';

import type {
  ApplicationFilters,
  ApplicationStatus,
  LoanApplication,
} from '../types/application';

interface UseApplicationsProps {
  applications: LoanApplication[];
}

export function useApplications({ applications }: UseApplicationsProps) {
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

  function setSearch(search: string) {
    setFilters((current) => ({
      ...current,
      search,
    }));
  }

  function setStatus(status: 'all' | ApplicationStatus) {
    setFilters((current) => ({
      ...current,
      status,
    }));
  }

  function clearFilters() {
    setFilters({
      search: '',
      status: 'all',
    });
  }

  const hasFilters =
    filters.search.trim().length > 0 || filters.status !== 'all';

  return {
    filters,
    filteredApplications,
    hasFilters,
    setSearch,
    setStatus,
    clearFilters,
  };
}
