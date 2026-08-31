'use client';

import { Bell, Search } from 'lucide-react';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function AdminHeader() {
  return (
    <header className='sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background/95 px-4 backdrop-blur lg:px-8'>
      <div className='flex flex-1 items-center'>
        <div className='relative hidden w-full max-w-md md:block'>
          <Search className='absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground' />

          <Input
            placeholder='Search applications, customers...'
            className='pl-9'
          />
        </div>
      </div>

      <Button variant='ghost' size='icon'>
        <Bell className='size-5' />
      </Button>

      <Avatar>
        <AvatarFallback>RV</AvatarFallback>
      </Avatar>
    </header>
  );
}
