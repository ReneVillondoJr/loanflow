'use client';

import Link from 'next/link';

import { Bell, ChevronDown, Menu, Plus, User } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { Button } from '@/components/ui/button';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { ActionButton } from '@/components/action-button';

interface CustomerHeaderProps {
  onMenuClick?: () => void;
}

export function CustomerHeader({ onMenuClick }: CustomerHeaderProps) {
  return (
    <header
      className='
        sticky top-0 z-30
        flex h-[68px] shrink-0
        items-center justify-between
        border-b
        bg-background/95
        px-4
        backdrop-blur
        supports-[backdrop-filter]:bg-background/80
        md:px-6
        lg:px-8
      '
    >
      {/* Left */}
      <div className='flex min-w-0 items-center gap-3'>
        {/* Mobile Menu */}
        <Button
          type='button'
          variant='ghost'
          size='icon'
          className='size-9 shrink-0 lg:hidden'
          onClick={onMenuClick}
          aria-label='Open navigation menu'
        >
          <Menu className='size-5' />
        </Button>

        {/* Header Information */}
        <div className='min-w-0'>
          <p className='text-xs font-medium text-muted-foreground sm:text-sm'>
            Customer Portal
          </p>

          <p className='truncate text-sm font-semibold'>
            Manage your loans and applications
          </p>
        </div>
      </div>

      {/* Right */}
      <div className='flex shrink-0 items-center gap-1.5 sm:gap-2'>
        {/* Apply for Loan */}
        <ActionButton
          href='/client/applications/new'
          label='Apply for Loan'
          icon={<Plus className='size-4' />}
          variant='primary'
          size='sm'
          className='hidden sm:inline-flex'
        />

        {/* Notifications */}
        <Button
          type='button'
          variant='ghost'
          size='icon'
          className='relative size-9 shrink-0'
          aria-label='Notifications'
        >
          <Bell className='size-[18px]' />

          <span
            className='
              absolute
              right-1.5
              top-1.5
              size-2
              rounded-full
              bg-destructive
              ring-2
              ring-background
            '
          />

          <span className='sr-only'>Notifications</span>
        </Button>

        {/* User Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button
              type='button'
              variant='ghost'
              className='
                h-10
                shrink-0
                gap-2
                px-1.5
                sm:px-2
              '
            >
              <Avatar className='size-8 shrink-0'>
                <AvatarImage src='' alt='Customer' />

                <AvatarFallback
                  className='
                    bg-muted
                    text-xs
                    font-medium
                  '
                >
                  RV
                </AvatarFallback>
              </Avatar>

              <div className='hidden min-w-0 text-left md:block'>
                <p className='max-w-32 truncate text-sm font-semibold'>
                  Customer
                </p>

                <p className='max-w-36 truncate text-xs text-muted-foreground'>
                  customer@email.com
                </p>
              </div>

              <ChevronDown className='hidden size-4 shrink-0 text-muted-foreground md:block' />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align='end' sideOffset={8} className='w-56'>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>

            <DropdownMenuSeparator />

            <DropdownMenuItem>
              <Link
                href='/client/profile'
                className='flex w-full cursor-pointer items-center'
              >
                <User className='mr-2 size-4' />
                Profile
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem>
              <Link
                href='/client/settings'
                className='flex w-full cursor-pointer items-center'
              >
                Settings
              </Link>
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem
              className='
                cursor-pointer
                text-destructive
                focus:text-destructive
              '
            >
              Sign out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
