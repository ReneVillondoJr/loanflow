export type ApplicationStatus =
  | 'Draft'
  | 'Submitted'
  | 'Under Review'
  | 'Pending Documents'
  | 'Approved'
  | 'Rejected'
  | 'Cancelled';

export interface LoanApplication {
  id: string;
  applicationNumber: string;
  loanType: string;
  amount: string;
  status: ApplicationStatus;
  submittedAt: string;
  updatedAt: string;
}

export interface ApplicationSummary {
  total: number;
  pending: number;
  approved: number;
  rejected: number;
}

export interface ApplicationFilters {
  search: string;
  status: 'all' | ApplicationStatus;
}
