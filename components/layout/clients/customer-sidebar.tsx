'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
  CreditCard,
  FileText,
  LayoutDashboard,
  LogOut,
  Settings,
  User,
  X,
} from 'lucide-react';

import { signOut } from 'next-auth/react';

import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';

interface CustomerSidebarProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const navigation = [
  {
    title: 'Dashboard',
    href: '/clients/dashboard',
    icon: LayoutDashboard,
  },
  {
    title: 'Applications',
    href: '/clients/applications',
    icon: FileText,
  },
  {
    title: 'My Loans',
    href: '/clients/myloans',
    icon: CreditCard,
  },
  {
    title: 'Profile',
    href: '/clients/profile',
    icon: User,
  },
  {
    title: 'Settings',
    href: '/clients/settings',
    icon: Settings,
  },
];

export function CustomerSidebar({
  open = false,
  onOpenChange,
}: CustomerSidebarProps) {
  const pathname = usePathname();

  const handleClose = () => {
    onOpenChange?.(false);
  };

  const handleLogout = async () => {
    await signOut({
      callbackUrl: '/auth/login',
    });
  };

  return (
    <>
      {/* Mobile Overlay */}
      {open && (
        <button
          type='button'
          aria-label='Close navigation'
          className='fixed inset-0 z-40 bg-black/50 lg:hidden'
          onClick={handleClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r bg-background transition-transform duration-200 ease-in-out',
          'lg:translate-x-0',
          open ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        {/* Logo / Header */}
        <div className='flex h-16 shrink-0 items-center justify-between border-b px-5'>
          <Link
            href='/clients/dashboard'
            className='flex items-center gap-3'
            onClick={handleClose}
          >
            <div className='flex size-8 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground'>
              L
            </div>

            <span className='text-lg font-semibold'>LoanFlow</span>
          </Link>

          {/* Mobile Close */}
          <Button
            type='button'
            variant='ghost'
            size='icon'
            className='size-9 lg:hidden'
            onClick={handleClose}
            aria-label='Close navigation'
          >
            <X className='size-5' />
          </Button>
        </div>

        {/* Navigation */}
        <nav className='flex-1 space-y-1 overflow-y-auto p-3'>
          {navigation.map((item) => {
            const Icon = item.icon;

            const isActive =
              item.href === '/clients/dashboard' ?
                pathname === '/clients/dashboard'
              : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleClose}
                className={cn(
                  'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                  isActive ?
                    'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground',
                )}
              >
                <Icon className='size-4' />

                <span>{item.title}</span>
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <div className='shrink-0 border-t p-3'>
          <Button
            type='button'
            variant='ghost'
            className='w-full justify-start gap-3 text-muted-foreground hover:bg-destructive/10 hover:text-destructive'
            onClick={handleLogout}
          >
            <LogOut className='size-4' />

            <span>Sign out</span>
          </Button>
        </div>
      </aside>
    </>
  );
}
