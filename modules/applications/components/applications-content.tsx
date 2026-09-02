'use client';

import { ApplicationsFilters } from './filters';
import { ApplicationsTable } from './table';

import { useApplications } from '../hook/use-applications';

import type { LoanApplication } from '../types/application';

interface ApplicationsContentProps {
  applications: LoanApplication[];
}

export function ApplicationsContent({
  applications,
}: ApplicationsContentProps) {
  const { filters, filteredApplications, setSearch, setStatus, clearFilters } =
    useApplications(applications);

  return (
    <div className='space-y-4'>
      <ApplicationsFilters
        filters={filters}
        onSearchChange={setSearch}
        onStatusChange={setStatus}
        onClear={clearFilters}
      />

      <ApplicationsTable applications={filteredApplications} />
    </div>
  );
}
