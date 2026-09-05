export type ReportPeriod =
  | 'TODAY'
  | 'THIS_WEEK'
  | 'THIS_MONTH'
  | 'THIS_QUARTER'
  | 'THIS_YEAR'
  | 'CUSTOM';

export type ReportType =
  | 'LOAN_PERFORMANCE'
  | 'APPLICATION_VOLUME'
  | 'APPROVAL_ANALYSIS'
  | 'RISK_ANALYSIS'
  | 'PORTFOLIO_ANALYSIS'
  | 'MANUAL_REVIEW';

export type ReportStatus = 'GENERATING' | 'READY' | 'FAILED';

export type ReportFormat = 'PDF' | 'CSV' | 'XLSX';

export type RiskLevel = 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';

export type LoanType =
  | 'PERSONAL_LOAN'
  | 'AUTO_LOAN'
  | 'HOME_LOAN'
  | 'BUSINESS_LOAN'
  | 'CREDIT_CARD';

export type ApplicationTrend = {
  date: string;
  applications: number;
  approved: number;
  rejected: number;
  pending: number;
};

export type LoanPerformance = {
  loanType: LoanType;
  label: string;
  applications: number;
  approved: number;
  rejected: number;
  approvalRate: number;
  averageAmount: number;
  totalDisbursed: number;
};

export type RiskDistribution = {
  level: RiskLevel;
  label: string;
  count: number;
  percentage: number;
};

export type ReportSummary = {
  totalApplications: number;
  approvedApplications: number;
  rejectedApplications: number;
  pendingApplications: number;
  approvalRate: number;
  rejectionRate: number;
  totalDisbursed: number;
  averageLoanAmount: number;
  averageProcessingTime: number;
};

export type Report = {
  id: string;
  name: string;
  description: string;
  type: ReportType;
  status: ReportStatus;
  format: ReportFormat;
  period: ReportPeriod;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
  fileSize?: string;
};

export type ReportFilters = {
  search: string;
  type: 'ALL' | ReportType;
  status: 'ALL' | ReportStatus;
  period: 'ALL' | ReportPeriod;
};

export type ReportStats = {
  totalReports: number;
  readyReports: number;
  generatingReports: number;
  failedReports: number;
};

export type GenerateReportInput = {
  name: string;
  description: string;
  type: ReportType;
  format: ReportFormat;
  period: ReportPeriod;
};

export type UpdateReportInput = GenerateReportInput & {
  id: string;
};

export type ReportsData = {
  summary: ReportSummary;
  applicationTrend: ApplicationTrend[];
  loanPerformance: LoanPerformance[];
  riskDistribution: RiskDistribution[];
  reports: Report[];
};
