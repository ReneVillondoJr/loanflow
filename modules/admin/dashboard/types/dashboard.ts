import type { LucideIcon } from 'lucide-react';

export type ApplicationStatus =
  | 'Pending'
  | 'Under Review'
  | 'Approved'
  | 'Rejected'
  | 'Disbursed';

export interface DashboardStats {
  totalApplications: number;
  pendingReview: number;
  underReview: number;
  approved: number;
  rejected: number;
  totalDisbursed: number;
}

export interface RecentApplication {
  id: string;
  applicationNumber: string;
  applicantName: string;
  loanType: string;
  amount: number;
  status: ApplicationStatus;
  submittedAt: string;
  assignedTo?: string;
}

export interface CurrentApplication {
  id: string;
  applicationNumber: string;
  applicantName: string;
  loanType: string;
  amount: number;
  term: number;
  status: ApplicationStatus;
  submittedAt: string;
  assignedTo?: string;
  documentsCount: number;
  completedDocuments: number;
}

export interface QuickAction {
  id: string;
  label: string;
  description: string;
  icon: LucideIcon;
  href?: string;
}

export interface RecentApplicationsProps {
  applications: RecentApplication[];
}

export interface QuickActionsProps {
  actions: QuickAction[];
}

export interface CurrentApplicationProps {
  application: CurrentApplication;
}
