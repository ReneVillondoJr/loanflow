import {
  BarChart3,
  ClipboardList,
  CreditCard,
  FileCheck,
  LayoutDashboard,
  Settings,
  ShieldCheck,
  SlidersHorizontal,
  Users,
} from 'lucide-react';

export const navigation = [
  {
    title: 'Dashboard',
    href: '/admin',
    icon: LayoutDashboard,
  },
  {
    title: 'Applications',
    href: '/admin/applications',
    icon: ClipboardList,
  },
  {
    title: 'Customers',
    href: '/admin/customers',
    icon: Users,
  },
  {
    title: 'Loan Products',
    href: '/admin/loan-products',
    icon: CreditCard,
  },
  {
    title: 'Decisioning',
    href: '/admin/decision-rules',
    icon: SlidersHorizontal,
  },
  {
    title: 'Scorecards',
    href: '/admin/scorecards',
    icon: FileCheck,
  },
  {
    title: 'Manual Reviews',
    href: '/admin/manual-reviews',
    icon: ShieldCheck,
  },
  {
    title: 'Reports',
    href: '/admin/reports',
    icon: BarChart3,
  },
  {
    title: 'Settings',
    href: '/admin/settings',
    icon: Settings,
  },
];
