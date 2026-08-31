export { CurrentApplication } from './components/current-application';

export { DashboardHeader } from './components/header';

export { DashboardStats } from './components/stats';

export { DocumentsReminder } from './components/documents-reminder';

export { QuickActions } from './components/quick-actions';

export { RecentApplications } from './components/recent-applications';

export {
  dashboardStats,
  recentApplications,
  quickActions,
} from './data/dashboard';

export { useDashboard } from './hook/use-dashboard';

export type {
  ApplicationStatus,
  DashboardStat,
  LoanApplication,
  QuickAction,
} from './types/dashboard';
