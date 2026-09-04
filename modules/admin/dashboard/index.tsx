'use client';

import { useDashboard } from './hooks/use-dashboard';

import { CurrentApplication } from './components/current-application';
import { DashboardHeader } from './components/header';
import { DashboardStats } from './components/stats';
import { DocumentsReminder } from './components/documents-reminder';
import { QuickActions } from './components/quick-actions';
import { RecentApplications } from './components/recent-applications';

export default function DashboardModule() {
  const { stats, recentApplications, currentApplication, quickActions } =
    useDashboard();

  return (
    <div className='space-y-6'>
      <DashboardHeader />

      <DashboardStats stats={stats} />

      <section className='grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]'>
        <RecentApplications applications={recentApplications} />

        <QuickActions actions={quickActions} />
      </section>

      <CurrentApplication application={currentApplication} />

      <DocumentsReminder />
    </div>
  );
}
