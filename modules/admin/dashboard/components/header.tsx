'use client';

import { useRouter } from 'next/navigation';

import { Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { PageHeader } from '@/components/page-header';

export function DashboardHeader() {
  const router = useRouter();

  return (
    <PageHeader
      title='Dashboard'
      description='Monitor loan applications and manage your lending operations.'
      action={
        <Button
          type='button'
          onClick={() => router.push('/admin/applications')}
        >
          <Plus className='size-4' />
          New Application
        </Button>
      }
    />
  );
}
