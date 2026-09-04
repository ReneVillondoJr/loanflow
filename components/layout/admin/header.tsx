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
  const name = user.name ?? 'User';
  const email = user.email ?? '';

  const initials = name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part.charAt(0))
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <header className='sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background/95 px-4 backdrop-blur lg:px-8'>
      {/* Search */}
      <div className='flex flex-1 items-center'>
        <div className='relative hidden w-full max-w-md md:block'>
          <Search className='absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground' />

          <Input
            placeholder='Search applications, customers...'
            className='pl-9'
          />
        </div>
      </div>

      {/* Notifications */}
      <Button
        type='button'
        variant='ghost'
        size='icon'
        aria-label='Notifications'
      >
        <Bell className='size-5' />
      </Button>

      {/* User */}
      <div className='flex items-center gap-3'>
        <Avatar>
          <AvatarImage src={user.image ?? ''} alt={name} />

          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>

        <div className='hidden min-w-0 md:block'>
          <p className='max-w-40 truncate text-sm font-medium'>{name}</p>

          <p className='max-w-48 truncate text-xs text-muted-foreground'>
            {email}
          </p>
        </div>
      </div>
    </header>
  );
}
