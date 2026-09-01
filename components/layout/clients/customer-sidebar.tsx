'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
  FileCheck2,
  FileText,
  LayoutDashboard,
  LifeBuoy,
  LogOut,
  Settings,
  User,
  WalletCards,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

import { cn } from '@/lib/utils';

interface NavigationItem {
  title: string;
  href: string;
  icon: React.ComponentType<{
    className?: string;
  }>;
}

const navigation: NavigationItem[] = [
  {
    title: 'Dashboard',
    href: '/clients/dashboard',
    icon: LayoutDashboard,
  },
  {
    title: 'My Applications',
    href: '/clients/applications',
    icon: FileText,
  },
  {
    title: 'My Loans',
    href: '/clients/myloans',
    icon: WalletCards,
  },
  {
    title: 'Documents',
    href: '/clients/documents',
    icon: FileCheck2,
  },
];

const accountNavigation: NavigationItem[] = [
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

export function CustomerSidebar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/client') {
      return pathname === href;
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const renderNavigation = (items: NavigationItem[]) => {
    return items.map((item) => {
      const Icon = item.icon;
      const active = isActive(item.href);

      return (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            `
              flex h-10 w-full
              items-center
              gap-3
              rounded-md
              px-3
              text-sm
              font-medium
              transition-colors
            `,
            active ?
              `
                bg-primary
                text-primary-foreground
                shadow-sm
              `
            : `
                text-muted-foreground
                hover:bg-muted
                hover:text-foreground
              `,
          )}
        >
          <Icon className='size-[17px] shrink-0' />

          <span className='truncate'>{item.title}</span>
        </Link>
      );
    });
  };

  return (
    <aside
      className='
        hidden
        h-screen
        w-[240px]
        shrink-0
        flex-col
        border-r
        bg-background
        lg:sticky
        lg:top-0
        lg:flex
      '
    >
      {/* Logo */}
      <div className='flex h-[68px] shrink-0 items-center px-5'>
        <Link href='/client' className='flex items-center gap-3'>
          <div
            className='
              flex size-9 shrink-0
              items-center justify-center
              rounded-lg
              bg-primary
              text-primary-foreground
            '
          >
            <WalletCards className='size-5' />
          </div>

          <div className='min-w-0'>
            <p className='font-semibold tracking-tight'>LoanFlow</p>

            <p className='text-[11px] text-muted-foreground'>Customer Portal</p>
          </div>
        </Link>
      </div>

      <Separator />

      {/* Navigation */}
      <div className='flex min-h-0 flex-1 flex-col overflow-y-auto px-3 py-5'>
        {/* Overview */}
        <div>
          <p
            className='
              mb-2
              px-3
              text-[11px]
              font-semibold
              uppercase
              tracking-wider
              text-muted-foreground
            '
          >
            Overview
          </p>

          <nav className='space-y-1'>{renderNavigation(navigation)}</nav>
        </div>

        <Separator className='my-6' />

        {/* Account */}
        <div>
          <p
            className='
              mb-2
              px-3
              text-[11px]
              font-semibold
              uppercase
              tracking-wider
              text-muted-foreground
            '
          >
            Account
          </p>

          <nav className='space-y-1'>{renderNavigation(accountNavigation)}</nav>
        </div>
      </div>

      {/* Bottom */}
      <div className='shrink-0 border-t p-3'>
        {/* Support */}
        <div className='mb-3 rounded-lg bg-muted/50 p-3'>
          <div className='flex items-center gap-2'>
            <LifeBuoy className='size-4 shrink-0 text-muted-foreground' />

            <p className='text-sm font-semibold'>Need assistance?</p>
          </div>

          <p className='mt-1.5 text-xs leading-5 text-muted-foreground'>
            Contact our support team for help.
          </p>

          <Button variant='link' className='mt-1 h-auto px-0 text-xs'>
            <Link href='/client/support'>Contact Support</Link>
          </Button>
        </div>

        {/* Sign Out */}
        <Button
          type='button'
          variant='ghost'
          className='
            h-10
            w-full
            justify-start
            gap-3
            px-3
            text-muted-foreground
            hover:text-destructive
          '
        >
          <LogOut className='size-[17px]' />

          <span>Sign out</span>
        </Button>
      </div>
    </aside>
  );
}
