'use client';

import { useMemo, useState } from 'react';

import { REPORTS_DATA } from '@/modules/admin/reports/data/reports';

import type {
  GenerateReportInput,
  Report,
  ReportFilters,
  UpdateReportInput,
} from '@/modules/admin/reports/types/reports';

const PAGE_SIZE = 8;

const DEFAULT_FILTERS: ReportFilters = {
  search: '',
  type: 'ALL',
  status: 'ALL',
  period: 'ALL',
};

export function useReports() {
  const [reports, setReports] = useState<Report[]>(REPORTS_DATA.reports);

  const [filters, setFilters] = useState<ReportFilters>(DEFAULT_FILTERS);

  const [page, setPage] = useState(1);

  const summary = REPORTS_DATA.summary;

  const applicationTrend = REPORTS_DATA.applicationTrend;

  const loanPerformance = REPORTS_DATA.loanPerformance;

  const riskDistribution = REPORTS_DATA.riskDistribution;

  const filteredReports = useMemo(() => {
    const search = filters.search.trim().toLowerCase();

    return reports.filter((report) => {
      const matchesSearch =
        !search ||
        report.name.toLowerCase().includes(search) ||
        report.description.toLowerCase().includes(search) ||
        report.createdBy.toLowerCase().includes(search);

      const matchesType =
        filters.type === 'ALL' || report.type === filters.type;

      const matchesStatus =
        filters.status === 'ALL' || report.status === filters.status;

      const matchesPeriod =
        filters.period === 'ALL' || report.period === filters.period;

      return matchesSearch && matchesType && matchesStatus && matchesPeriod;
    });
  }, [reports, filters]);

  const pageCount = Math.max(1, Math.ceil(filteredReports.length / PAGE_SIZE));

  const paginatedReports = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;

    return filteredReports.slice(start, start + PAGE_SIZE);
  }, [filteredReports, page]);

  const stats = useMemo(() => {
    return {
      totalReports: reports.length,
      readyReports: reports.filter((report) => report.status === 'READY')
        .length,
      generatingReports: reports.filter(
        (report) => report.status === 'GENERATING',
      ).length,
      failedReports: reports.filter((report) => report.status === 'FAILED')
        .length,
    };
  }, [reports]);

  function updateFilters(updates: Partial<ReportFilters>) {
    setFilters((current) => ({
      ...current,
      ...updates,
    }));

    setPage(1);
  }

  function resetFilters() {
    setFilters(DEFAULT_FILTERS);
    setPage(1);
  }

  function getReport(id: string) {
    return reports.find((report) => report.id === id) ?? null;
  }

  function createReport(input: GenerateReportInput) {
    const now = new Date().toISOString();

    const report: Report = {
      id: `RPT-${String(Date.now()).slice(-6)}`,
      name: input.name,
      description: input.description,
      type: input.type,
      format: input.format,
      period: input.period,
      status: 'GENERATING',
      createdBy: 'Current User',
      createdAt: now,
      updatedAt: now,
    };

    setReports((current) => [report, ...current]);
    setPage(1);

    return report;
  }

  function updateReport(input: UpdateReportInput) {
    const now = new Date().toISOString();

    setReports((current) =>
      current.map((report) =>
        report.id === input.id ?
          {
            ...report,
            name: input.name,
            description: input.description,
            type: input.type,
            format: input.format,
            period: input.period,
            updatedAt: now,
          }
        : report,
      ),
    );
  }

  function deleteReport(id: string) {
    setReports((current) => current.filter((report) => report.id !== id));

    setPage((current) => Math.min(current, pageCount));
  }

  function retryReport(id: string) {
    setReports((current) =>
      current.map((report) =>
        report.id === id ?
          {
            ...report,
            status: 'GENERATING',
            updatedAt: new Date().toISOString(),
          }
        : report,
      ),
    );
  }

  function markReportReady(id: string) {
    setReports((current) =>
      current.map((report) =>
        report.id === id ?
          {
            ...report,
            status: 'READY',
            fileSize: report.fileSize ?? '1.2 MB',
            updatedAt: new Date().toISOString(),
          }
        : report,
      ),
    );
  }

  return {
    reports,
    filteredReports,
    paginatedReports,

    summary,
    applicationTrend,
    loanPerformance,
    riskDistribution,

    filters,
    stats,

    page,
    pageCount,
    pageSize: PAGE_SIZE,

    updateFilters,
    resetFilters,
    setPage,

    getReport,
    createReport,
    updateReport,
    deleteReport,
    retryReport,
    markReportReady,
  };
}
