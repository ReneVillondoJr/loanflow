'use client';

import { useMemo, useState } from 'react';

import { applications } from '../data/applications';

import type {
  ApplicationPriority,
  ApplicationStatus,
} from '../types/applications';

export function useApplications() {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState<ApplicationStatus | 'All'>('All');

  const [loanType, setLoanType] = useState('All');

  const [priority, setPriority] = useState<ApplicationPriority | 'All'>('All');

  const filteredApplications = useMemo(() => {
    const query = search.trim().toLowerCase();

    return applications.filter((application) => {
      const matchesSearch =
        !query ||
        application.applicantName.toLowerCase().includes(query) ||
        application.applicationNumber.toLowerCase().includes(query) ||
        application.applicantEmail.toLowerCase().includes(query);

      const matchesStatus = status === 'All' || application.status === status;

      const matchesLoanType =
        loanType === 'All' || application.loanType === loanType;

      const matchesPriority =
        priority === 'All' || application.priority === priority;

      return (
        matchesSearch && matchesStatus && matchesLoanType && matchesPriority
      );
    });
  }, [search, status, loanType, priority]);

  const pendingApplications = useMemo(
    () =>
      applications.filter((application) => application.status === 'Pending'),
    [],
  );

  const underReviewApplications = useMemo(
    () =>
      applications.filter(
        (application) => application.status === 'Under Review',
      ),
    [],
  );

  const approvedApplications = useMemo(
    () =>
      applications.filter((application) => application.status === 'Approved'),
    [],
  );

  const rejectedApplications = useMemo(
    () =>
      applications.filter((application) => application.status === 'Rejected'),
    [],
  );

  const clearFilters = () => {
    setSearch('');
    setStatus('All');
    setLoanType('All');
    setPriority('All');
  };

  return {
    applications: filteredApplications,

    pendingApplications,
    underReviewApplications,
    approvedApplications,
    rejectedApplications,

    search,
    setSearch,

    status,
    setStatus,

    loanType,
    setLoanType,

    priority,
    setPriority,

    clearFilters,
  };
}
