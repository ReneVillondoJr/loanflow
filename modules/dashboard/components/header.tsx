import Link from 'next/link';

import { Plus } from 'lucide-react';

import { PageHeader } from '@/components/page-header';

export function DashboardHeader() {
  return (
    <PageHeader
      title='Dashboard'
      description="Welcome back. Here's an overview of your loan activity."
      action={
        <Link
          href='/client/applications/new'
          className='
            inline-flex
            h-10
            w-full
            items-center
            justify-center
            gap-2
            rounded-md
            bg-primary
            px-4
            text-sm
            font-medium
            text-primary-foreground
            transition-colors
            hover:bg-primary/90
            sm:w-auto
          '
        >
          <Plus className='size-4' />
          New Application
        </Link>
      }
    />
  );
}
