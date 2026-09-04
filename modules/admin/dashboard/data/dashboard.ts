import {
  FileCheck2,
  FilePlus2,
  FileSearch,
  UserPlus,
  Users,
} from 'lucide-react';

import type {
  CurrentApplication,
  DashboardStats,
  QuickAction,
  RecentApplication,
} from '../types/dashboard';

export const dashboardStats: DashboardStats = {
  totalApplications: 128,
  pendingReview: 24,
  underReview: 31,
  approved: 42,
  rejected: 18,
  totalDisbursed: 13,
};

export const recentApplications: RecentApplication[] = [
  {
    id: 'APP-001',
    applicationNumber: 'LN-2026-0001',
    applicantName: 'Juan Dela Cruz',
    loanType: 'Personal Loan',
    amount: 150000,
    status: 'Under Review',
    submittedAt: 'Sep 2, 2026',
    assignedTo: 'Maria Santos',
  },
  {
    id: 'APP-002',
    applicationNumber: 'LN-2026-0002',
    applicantName: 'Maria Santos',
    loanType: 'Business Loan',
    amount: 500000,
    status: 'Pending',
    submittedAt: 'Sep 2, 2026',
    assignedTo: 'John Reyes',
  },
  {
    id: 'APP-003',
    applicationNumber: 'LN-2026-0003',
    applicantName: 'Carlos Ramirez',
    loanType: 'Auto Loan',
    amount: 850000,
    status: 'Approved',
    submittedAt: 'Sep 1, 2026',
    assignedTo: 'Maria Santos',
  },
  {
    id: 'APP-004',
    applicationNumber: 'LN-2026-0004',
    applicantName: 'Ana Garcia',
    loanType: 'Personal Loan',
    amount: 200000,
    status: 'Rejected',
    submittedAt: 'Aug 31, 2026',
    assignedTo: 'John Reyes',
  },
];

export const currentApplication: CurrentApplication = {
  id: 'APP-006',
  applicationNumber: 'LN-2026-0006',
  applicantName: 'Sofia Mendoza',
  loanType: 'Business Loan',
  amount: 750000,
  term: 60,
  status: 'Pending',
  submittedAt: 'Sep 3, 2026',
  assignedTo: 'John Reyes',
  documentsCount: 9,
  completedDocuments: 4,
};

export const quickActions: QuickAction[] = [
  {
    id: 'new-application',
    label: 'New Application',
    description: 'Create a new loan application',
    icon: FilePlus2,
    href: '/admin/applications/new',
  },
  {
    id: 'review-applications',
    label: 'Review Applications',
    description: 'Review pending applications',
    icon: FileSearch,
    href: '/admin/applications',
  },
  {
    id: 'documents',
    label: 'Review Documents',
    description: 'Check pending documents',
    icon: FileCheck2,
    href: '/admin/documents',
  },
  {
    id: 'customers',
    label: 'Manage Customers',
    description: 'View and manage customers',
    icon: Users,
    href: '/admin/customers',
  },
  {
    id: 'add-customer',
    label: 'Add Customer',
    description: 'Create a new customer profile',
    icon: UserPlus,
    href: '/admin/customers/new',
  },
];
