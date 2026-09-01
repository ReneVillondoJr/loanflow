'use client';

import { ApplicationsFilters, ApplicationsTable } from '..';

import { useApplications } from '../hook/use-applications';

import type { LoanApplication } from '../types/application';

interface ApplicationsContentProps {
  applications: LoanApplication[];
}

export function ApplicationsContent({
  applications,
}: ApplicationsContentProps) {
  const { filters, filteredApplications, hasFilters, setSearch, setStatus } =
    useApplications({
      applications,
    });

  return (
    <div className='space-y-4'>
      <ApplicationsFilters
        filters={filters}
        onSearchChange={setSearch}
        onStatusChange={setStatus}
      />

      <ApplicationsTable
        applications={filteredApplications}
        hasFilters={hasFilters}
      />
    </div>
  );
}
