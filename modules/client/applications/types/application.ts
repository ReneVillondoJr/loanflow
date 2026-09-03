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
export interface ApplicationFormData {
  loanType: string;
  amount: string;
  purpose: string;
  employmentStatus: string;
  employerName: string;
  monthlyIncome: string;
  loanTerm: string;
  additionalInformation: string;
}

export interface ApplicationFormProps {
  onSuccess?: () => void;
}

export interface LoanType {
  value: string;
  label: string;
}

export interface EmploymentStatus {
  value: string;
  label: string;
}

export interface LoanTerm {
  value: string;
  label: string;
}
