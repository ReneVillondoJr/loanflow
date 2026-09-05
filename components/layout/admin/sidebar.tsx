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

import { LogoutButton } from '@/components/logout-button';
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
] as const;

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className='fixed inset-y-0 left-0 z-40 hidden w-64 flex-col border-r bg-background lg:flex'>
      {/* Logo */}
      <div className='flex h-16 shrink-0 items-center border-b px-5'>
        <Link
          href='/admin'
          className='flex min-w-0 items-center gap-3 rounded-md outline-none transition-opacity hover:opacity-80 focus-visible:ring-2 focus-visible:ring-ring'
        >
          <div className='flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground'>
            L
          </div>

          <span className='truncate text-lg font-semibold tracking-tight'>
            LoanFlow
          </span>
        </Link>
      </div>

      {/* Navigation */}
      <nav
        aria-label='Admin navigation'
        className='min-h-0 flex-1 overflow-y-auto px-3 py-4'
      >
        <div className='space-y-1'>
          {navigation.map((item) => {
            const Icon = item.icon;

            const isActive =
              item.href === '/admin' ?
                pathname === '/admin'
              : pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                className={cn(
                  'group flex min-h-10 w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium outline-none transition-colors',
                  'focus-visible:ring-2 focus-visible:ring-ring',
                  isActive ?
                    'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground',
                )}
              >
                <Icon
                  aria-hidden='true'
                  className={cn(
                    'size-4 shrink-0',
                    !isActive &&
                      'text-muted-foreground group-hover:text-foreground',
                  )}
                />

                <span className='min-w-0 truncate'>{item.title}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Sign out */}
      <div className='shrink-0 border-t p-4'>
        <LogoutButton />
      </div>
    </aside>
  );
}
