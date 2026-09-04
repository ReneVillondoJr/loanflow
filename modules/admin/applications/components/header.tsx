'use client';

import { useRouter } from 'next/navigation';

import { Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { PageHeader } from '@/components/page-header';

interface ApplicationsHeaderProps {
  total: number;
}

export function ApplicationsHeader({ total }: ApplicationsHeaderProps) {
  const router = useRouter();

  return (
    <PageHeader
      title='Applications'
      description='Review and manage customer loan applications.'
      action={
        <Button
          type='button'
          onClick={() => router.push('/admin/applications/new')}
        >
          <Plus className='size-4' />
          New Application
          <span className='ml-1 text-xs opacity-70'>{total}</span>
        </Button>
      }
    />
  );
}
