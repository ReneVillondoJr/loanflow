'use client';

import { useState } from 'react';

import { useReports } from '@/modules/admin/reports/hooks/use-reports';

import { ReportsHeader } from './components/header';
import { ReportsStats } from './components/stats';
import { ReportsToolbar } from './components/toolbar';
import { ReportsOverview } from './components/overview';
import { ApplicationChart } from './components/application-chart';
import { LoanPerformance } from './components/loan-performance';
import { RiskDistribution } from './components/risk-distribution';
import { RecentReports } from './components/recent-reports';

import type { Report } from './types/reports';

export function ReportsPage() {
  const {
    paginatedReports,
    summary,
    applicationTrend,
    loanPerformance,
    riskDistribution,
    filters,
    stats,
    updateFilters,
    resetFilters,
    deleteReport,
  } = useReports();

  const [selectedReport, setSelectedReport] = useState<Report | null>(null);

  function handleView(report: Report) {
    setSelectedReport(report);
  }

  function handleDelete(report: Report) {
    deleteReport(report.id);

    if (selectedReport?.id === report.id) {
      setSelectedReport(null);
    }
  }

  return (
    <div className='w-full space-y-6'>
      <ReportsHeader
        onCreate={() => {
          // Generate Report dialog will be connected here.
        }}
      />

      <ReportsStats stats={stats} />

      <ReportsToolbar
        filters={filters}
        onFilterChange={updateFilters}
        onReset={resetFilters}
      />

      <ReportsOverview summary={summary} />

      <div className='grid gap-6 xl:grid-cols-2'>
        <ApplicationChart data={applicationTrend} />

        <LoanPerformance data={loanPerformance} />
      </div>

      <div className='grid gap-6 xl:grid-cols-2'>
        <RiskDistribution data={riskDistribution} />

        <RecentReports
          reports={paginatedReports}
          onView={handleView}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default ReportsPage;
