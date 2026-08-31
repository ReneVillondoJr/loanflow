import {
  CurrentApplication,
  DashboardHeader,
  DashboardStats,
  DocumentsReminder,
  QuickActions,
  RecentApplications,
} from '@/modules/dashboard';

import {
  currentApplication,
  dashboardStats,
  quickActions,
  recentApplications,
} from '@/modules/dashboard/data/dashboard';

export default function ClientDashboardPage() {
  return (
    <div className='space-y-6'>
      <DashboardHeader />

      <DashboardStats stats={dashboardStats} />

      <section className='grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]'>
        <RecentApplications applications={recentApplications} />

        <QuickActions actions={quickActions} />
      </section>

      <CurrentApplication application={currentApplication} />

      <DocumentsReminder />
    </div>
  );
}
