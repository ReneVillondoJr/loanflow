'use client';

import { signOut } from 'next-auth/react';
import { LogOut } from 'lucide-react';

import { Button } from '@/components/ui/button';

export function LogoutButton() {
  const handleLogout = async () => {
    await signOut({
      callbackUrl: '/auth/login',
    });
  };

  return (
    <Button
      type='button'
      variant='ghost'
      className='w-full justify-start gap-3'
      onClick={handleLogout}
    >
      <LogOut className='size-4.25' />
      <span>Sign out</span>
    </Button>
  );
}
