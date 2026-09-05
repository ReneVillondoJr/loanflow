'use client';

import { Bell, Search } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface AdminHeaderProps {
  user: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
}

export function AdminHeader({ user }: AdminHeaderProps) {
  const name = user.name?.trim() || 'User';
  const email = user.email?.trim() || '';

  const initials =
    name
      .split(/\s+/)
      .filter(Boolean)
      .map((part) => part.charAt(0))
      .join('')
      .slice(0, 2)
      .toUpperCase() || 'U';

  return (
    <header className='sticky top-0 z-30 flex h-16 w-full shrink-0 items-center border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80'>
      <div className='flex h-full w-full items-center gap-3 px-4 sm:px-6 lg:px-8'>
        {/* Search */}
        <div className='flex min-w-0 flex-1 items-center'>
          <div className='relative hidden w-full max-w-md md:block'>
            <Search
              aria-hidden='true'
              className='absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground'
            />

            <Input
              type='search'
              placeholder='Search applications, customers...'
              aria-label='Search applications and customers'
              className='h-9 w-full pl-9'
            />
          </div>
        </div>

        {/* Right actions */}
        <div className='flex shrink-0 items-center gap-1 sm:gap-2'>
          {/* Notifications */}
          <Button
            type='button'
            variant='ghost'
            size='icon'
            aria-label='Notifications'
            className='size-9'
          >
            <Bell className='size-5' />
          </Button>

          {/* User */}
          <div className='flex items-center gap-2 pl-1 sm:gap-3 sm:pl-2'>
            <Avatar className='size-9'>
              {user.image ?
                <AvatarImage src={user.image} alt={name} />
              : null}

              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>

            <div className='hidden min-w-0 md:block'>
              <p className='max-w-40 truncate text-sm font-medium leading-5'>
                {name}
              </p>

              {email ?
                <p className='max-w-48 truncate text-xs leading-4 text-muted-foreground'>
                  {email}
                </p>
              : null}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
