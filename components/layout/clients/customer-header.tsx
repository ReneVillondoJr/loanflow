'use client';

import { signOut } from 'next-auth/react';

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

  user: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
}

export function CustomerHeader({ onMenuClick, user }: CustomerHeaderProps) {
  const name = user.name?.trim() || 'Customer';
  const email = user.email ?? '';

  const initials =
    name
      .split(/\s+/)
      .filter(Boolean)
      .map((part) => part.charAt(0))
      .join('')
      .slice(0, 2)
      .toUpperCase() || 'CU';

  return (
    <header className='sticky top-0 z-30 flex h-16 shrink-0 items-center justify-between border-b bg-background/95 px-4 backdrop-blur md:px-6 lg:px-8'>
      {/* Left */}
      <div className='flex min-w-0 items-center gap-3'>
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
        {/* Apply */}
        <ActionButton
          href='/clients/applications/new'
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
          <Bell className='size-4.5' />

          <span className='absolute right-1.5 top-1.5 size-2 rounded-full bg-destructive ring-2 ring-background' />

          <span className='sr-only'>Notifications</span>
        </Button>

        {/* User Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger
            className='flex h-10 shrink-0 items-center gap-2 rounded-md px-1.5 text-left outline-none transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring sm:px-2'
            aria-label='Open account menu'
          >
            <Avatar className='size-8 shrink-0'>
              <AvatarImage src={user.image ?? ''} alt={name} />

              <AvatarFallback className='bg-muted text-xs font-medium'>
                {initials}
              </AvatarFallback>
            </Avatar>

            <div className='hidden min-w-0 md:block'>
              <p className='max-w-32 truncate text-sm font-semibold'>{name}</p>

              <p className='max-w-36 truncate text-xs text-muted-foreground'>
                {email}
              </p>
            </div>

            <ChevronDown className='hidden size-4 shrink-0 text-muted-foreground md:block' />
          </DropdownMenuTrigger>

          <DropdownMenuContent align='end' sideOffset={8} className='w-56'>
            <DropdownMenuLabel>
              <div className='flex flex-col gap-1'>
                <span className='font-medium'>{name}</span>

                <span className='truncate text-xs font-normal text-muted-foreground'>
                  {email}
                </span>
              </div>
            </DropdownMenuLabel>

            <DropdownMenuSeparator />

            <DropdownMenuItem
              className='cursor-pointer'
              onClick={() => {
                window.location.href = '/clients/profile';
              }}
            >
              <User className='mr-2 size-4' />
              Profile
            </DropdownMenuItem>

            <DropdownMenuItem
              className='cursor-pointer'
              onClick={() => {
                window.location.href = '/clients/settings';
              }}
            >
              Settings
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem
              className='cursor-pointer text-destructive focus:text-destructive'
              onClick={async () => {
                await signOut({
                  callbackUrl: '/auth/login',
                });
              }}
            >
              Sign out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
