import Link from 'next/link';

import { Plus } from 'lucide-react';

export function DashboardHeader() {
  return (
    <section className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
      <div className='min-w-0'>
        <h1 className='text-2xl font-semibold tracking-tight'>Dashboard</h1>

        <p className='mt-1 text-sm text-muted-foreground'>
          Welcome back. Here&apos;s an overview of your loan activity.
        </p>
      </div>

      <Link
        href='/clients/applications/new'
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
    </section>
  );
}
