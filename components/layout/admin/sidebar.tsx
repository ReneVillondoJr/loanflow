'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
  BarChart3,
  ClipboardList,
  CreditCard,
  FileCheck2,
  LayoutDashboard,
  Settings,
  ShieldCheck,
  SlidersHorizontal,
  Users,
} from 'lucide-react';

import { cn } from '@/lib/utils';

const navigation = [
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
    icon: FileCheck2,
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

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className='fixed inset-y-0 left-0 hidden w-64 border-r bg-background lg:block'>
      <div className='flex h-16 items-center border-b px-6'>
        <Link href='/admin' className='flex items-center gap-3 font-semibold'>
          <div className='flex size-8 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground'>
            L
          </div>

          <span className='text-lg'>LoanFlow</span>
        </Link>
      </div>

      <nav className='space-y-1 p-3'>
        {navigation.map((item) => {
          const Icon = item.icon;

          const isActive =
            item.href === '/admin' ?
              pathname === '/admin'
            : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                isActive ?
                  'bg-primary text-primary-foreground'
                : 'text-muted-foreground hover:bg-muted hover:text-foreground',
              )}
            >
              <Icon className='size-4' />

              {item.title}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
