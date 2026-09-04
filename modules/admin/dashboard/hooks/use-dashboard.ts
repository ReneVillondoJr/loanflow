'use client';

import { useMemo } from 'react';

import {
  currentApplication,
  dashboardStats,
  quickActions,
  recentApplications,
} from '../data/dashboard';

export function useDashboard() {
  const pendingApplications = useMemo(
    () =>
      recentApplications.filter(
        (application) => application.status === 'Pending',
      ),
    [],
  );

  const underReviewApplications = useMemo(
    () =>
      recentApplications.filter(
        (application) => application.status === 'Under Review',
      ),
    [],
  );

  const approvedApplications = useMemo(
    () =>
      recentApplications.filter(
        (application) => application.status === 'Approved',
      ),
    [],
  );

  const rejectedApplications = useMemo(
    () =>
      recentApplications.filter(
        (application) => application.status === 'Rejected',
      ),
    [],
  );

  return {
    stats: dashboardStats,
    recentApplications,
    currentApplication,
    quickActions,
    pendingApplications,
    underReviewApplications,
    approvedApplications,
    rejectedApplications,
  };
}
