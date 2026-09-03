import { CheckCircle2, Clock3, FileText, WalletCards } from 'lucide-react';

import type {
  CurrentApplication,
  DashboardStat,
  LoanApplication,
  QuickAction,
} from '../types/dashboard';

export const dashboardStats: DashboardStat[] = [
  {
    title: 'Total Applications',
    value: '24',
    description: 'Applications submitted',
    icon: FileText,
  },
  {
    title: 'Pending Applications',
    value: '8',
    description: 'Awaiting review',
    icon: Clock3,
  },
  {
    title: 'Approved Loans',
    value: '12',
    description: 'Successfully approved',
    icon: CheckCircle2,
  },
  {
    title: 'Total Loan Amount',
    value: '₱1.24M',
    description: 'Across all applications',
    icon: WalletCards,
  },
];

export const recentApplications: LoanApplication[] = [
  {
    id: 'LN-2026-00124',
    type: 'Personal Loan',
    amount: '₱150,000',
    status: 'Approved',
    date: 'Aug 29, 2026',
  },
  {
    id: 'LN-2026-00123',
    type: 'Business Loan',
    amount: '₱350,000',
    status: 'Pending',
    date: 'Aug 28, 2026',
  },
  {
    id: 'LN-2026-00122',
    type: 'Personal Loan',
    amount: '₱100,000',
    status: 'Under Review',
    date: 'Aug 27, 2026',
  },
  {
    id: 'LN-2026-00121',
    type: 'Auto Loan',
    amount: '₱500,000',
    status: 'Approved',
    date: 'Aug 25, 2026',
  },
];

export const quickActions: QuickAction[] = [
  {
    title: 'New Loan Application',
    href: '/clients/applications/new',
  },
  {
    title: 'View Applications',
    href: '/clients/applications',
  },
  {
    title: 'View My Loans',
    href: '/clients/loans',
  },
  {
    title: 'My Documents',
    href: '/clients/documents',
  },
];

export const currentApplication: CurrentApplication = {
  id: 'LN-2026-00124',
  loanType: 'Personal Loan',
  amount: '₱150,000',
  status: 'Approved',
};
