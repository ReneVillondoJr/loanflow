'use client';

import {
  currentApplication,
  dashboardStats,
  quickActions,
  recentApplications,
} from '../data/dashboard';

export function useDashboard() {
  return {
    stats: dashboardStats,
    applications: recentApplications,
    quickActions,
    currentApplication,
  };
}
