import type { LucideIcon } from 'lucide-react';

export type ApplicationStatus =
  | 'Approved'
  | 'Pending'
  | 'Under Review'
  | 'Rejected';

export interface DashboardStat {
  title: string;
  value: string;
  description: string;
  icon: LucideIcon;
}

export interface LoanApplication {
  id: string;
  type: string;
  amount: string;
  status: ApplicationStatus;
  date: string;
}

export interface CurrentApplication {
  id: string;
  loanType: string;
  amount: string;
  status: ApplicationStatus;
}

export interface QuickAction {
  title: string;
  href: string;
}
