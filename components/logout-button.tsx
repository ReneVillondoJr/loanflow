'use client';

import { LogOut } from 'lucide-react';

import { Button } from '@/components/ui/button';

export function LogoutButton() {
  const handleLogout = async () => {
    document.cookie = 'loanflow-role=; path=/; max-age=0';
    document.cookie = 'loanflow-email=; path=/; max-age=0';
    document.cookie = 'loanflow-name=; path=/; max-age=0';
    window.location.href = '/auth/login';
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
