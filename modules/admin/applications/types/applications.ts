export type ApplicationStatus =
  | 'Pending'
  | 'Under Review'
  | 'Approved'
  | 'Rejected'
  | 'Disbursed';

export type ApplicationPriority = 'Normal' | 'High' | 'Urgent';

export interface AdminApplication {
  id: string;
  applicationNumber: string;

  applicantName: string;
  applicantEmail: string;
  applicantPhone?: string;

  loanType: string;
  amount: number;
  term: number;

  status: ApplicationStatus;
  priority: ApplicationPriority;

  submittedAt: string;
  updatedAt: string;

  assignedTo?: string;

  employmentStatus?: string;
  monthlyIncome?: number;

  purpose?: string;

  documentsCount: number;
  completedDocuments: number;

  creditScore?: number;
}

export interface ApplicationStats {
  total: number;
  pending: number;
  underReview: number;
  approved: number;
  rejected: number;
  disbursed: number;
}

export interface ApplicationFilters {
  search: string;
  status: ApplicationStatus | 'All';
  loanType: string;
  priority: ApplicationPriority | 'All';
}

export interface ApplicationCardProps {
  application: AdminApplication;
  onView: (application: AdminApplication) => void;
}

export interface ApplicationsListProps {
  applications: AdminApplication[];
  onView: (application: AdminApplication) => void;
}

export interface ApplicationFiltersProps {
  search: string;
  onSearchChange: (value: string) => void;

  status: ApplicationStatus | 'All';
  onStatusChange: (value: ApplicationStatus | 'All') => void;

  loanType: string;
  onLoanTypeChange: (value: string) => void;

  priority: ApplicationPriority | 'All';
  onPriorityChange: (value: ApplicationPriority | 'All') => void;
}

export interface ApplicationDetailsDialogProps {
  application: AdminApplication | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}
