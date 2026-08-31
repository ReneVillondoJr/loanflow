'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
  FileCheck2,
  FileText,
  LayoutDashboard,
  Settings,
  User,
  WalletCards,
  X,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

import { ActionButton } from '@/components/action-button';

import { cn } from '@/lib/utils';

interface CustomerMobileSidebarProps {
  open: boolean;
  onClose: () => void;
}

const navigation = [
  {
    title: 'Dashboard',
    href: '/client',
    icon: LayoutDashboard,
  },
  {
    title: 'My Applications',
    href: '/client/applications',
    icon: FileText,
  },
  {
    title: 'My Loans',
    href: '/client/loans',
    icon: WalletCards,
  },
  {
    title: 'Documents',
    href: '/client/documents',
    icon: FileCheck2,
  },
];

const accountNavigation = [
  {
    title: 'Profile',
    href: '/client/profile',
    icon: User,
  },
  {
    title: 'Settings',
    href: '/client/settings',
    icon: Settings,
  },
];

export function CustomerMobileSidebar({
  open,
  onClose,
}: CustomerMobileSidebarProps) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/client') {
      return pathname === href;
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  if (!open) {
    return null;
  }

  return (
    <div className='fixed inset-0 z-50 lg:hidden'>
      {/* Overlay */}
      <button
        type='button'
        aria-label='Close menu'
        className='
          absolute inset-0
          bg-black/40
          backdrop-blur-[1px]
        '
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside
        className='
          relative z-10
          flex h-full
          w-[280px]
          max-w-[85vw]
          flex-col
          bg-background
          shadow-2xl
        '
      >
        {/* Header */}
        <div className='flex h-[68px] shrink-0 items-center justify-between px-5'>
          <Link
            href='/client'
            onClick={onClose}
            className='flex items-center gap-3'
          >
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

            <div>
              <p className='font-semibold tracking-tight'>LoanFlow</p>

              <p className='text-[11px] text-muted-foreground'>
                Customer Portal
              </p>
            </div>
          </Link>

          <Button
            type='button'
            variant='ghost'
            size='icon'
            className='size-9 shrink-0'
            onClick={onClose}
            aria-label='Close menu'
          >
            <X className='size-5' />
          </Button>
        </div>

        <Separator />

        {/* Navigation */}
        <div className='flex-1 overflow-y-auto px-3 py-5'>
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

          <nav className='space-y-1'>
            {navigation.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    `
                      flex h-11 w-full
                      items-center
                      gap-3
                      rounded-md
                      px-3
                      text-sm
                      font-medium
                      transition-colors
                    `,
                    active ?
                      'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground',
                  )}
                >
                  <Icon className='size-[17px] shrink-0' />

                  <span className='truncate'>{item.title}</span>
                </Link>
              );
            })}
          </nav>

          <Separator className='my-6' />

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

          <nav className='space-y-1'>
            {accountNavigation.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    `
                      flex h-11 w-full
                      items-center
                      gap-3
                      rounded-md
                      px-3
                      text-sm
                      font-medium
                      transition-colors
                    `,
                    active ?
                      'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground',
                  )}
                >
                  <Icon className='size-[17px] shrink-0' />

                  <span className='truncate'>{item.title}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom */}
        <div className='border-t p-4'>
          <ActionButton
            href='/client/applications/new'
            label='Apply for Loan'
            variant='primary'
            fullWidth
            onClick={onClose}
          />
        </div>
      </aside>
    </div>
  );
}
