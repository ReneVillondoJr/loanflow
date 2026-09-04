'use client';

import { useState } from 'react';

import { ApplicationDetailsDialog } from './components/details-dialog';
import { ApplicationFilters } from './components/filters';
import { ApplicationsHeader } from './components/header';
import { ApplicationsList } from './components/list';
import { ApplicationStats } from './components/stats';

import { applicationStats } from './data/applications';

import { useApplications } from './hooks/use-applications';

import type { AdminApplication } from './types/applications';

export default function ApplicationsModule() {
  const {
    applications,
    search,
    setSearch,
    status,
    setStatus,
    loanType,
    setLoanType,
    priority,
    setPriority,
    clearFilters,
  } = useApplications();

  const [selectedApplication, setSelectedApplication] =
    useState<AdminApplication | null>(null);

  const [detailsOpen, setDetailsOpen] = useState(false);

  function handleView(application: AdminApplication) {
    setSelectedApplication(application);
    setDetailsOpen(true);
  }

  return (
    <div className='space-y-6'>
      <ApplicationsHeader total={applicationStats.total} />

      <ApplicationStats stats={applicationStats} />

      <ApplicationFilters
        search={search}
        onSearchChange={setSearch}
        status={status}
        onStatusChange={setStatus}
        loanType={loanType}
        onLoanTypeChange={setLoanType}
        priority={priority}
        onPriorityChange={setPriority}
        onClear={clearFilters}
      />

      <div className='flex items-center justify-between'>
        <div>
          <h2 className='text-base font-semibold'>Loan Applications</h2>

          <p className='mt-1 text-sm text-muted-foreground'>
            {applications.length} application
            {applications.length === 1 ? '' : 's'} found
          </p>
        </div>
      </div>

      <ApplicationsList applications={applications} onView={handleView} />

      <ApplicationDetailsDialog
        application={selectedApplication}
        open={detailsOpen}
        onOpenChange={setDetailsOpen}
      />
    </div>
  );
}
