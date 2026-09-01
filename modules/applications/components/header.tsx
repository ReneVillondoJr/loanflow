import Link from 'next/link';

import { Plus } from 'lucide-react';

interface ApplicationsHeaderProps {
  total?: number;
}

export function ApplicationsHeader({ total }: ApplicationsHeaderProps) {
  return (
    <section className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
      <div className='min-w-0'>
        <div className='flex flex-wrap items-center gap-2'>
          <h1 className='text-2xl font-semibold tracking-tight'>
            My Applications
          </h1>

          {typeof total === 'number' && (
            <span className='rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground'>
              {total} total
            </span>
          )}
        </div>

        <p className='mt-1 text-sm text-muted-foreground'>
          View, manage, and track your loan applications.
        </p>
      </div>

      <Link
        href='/clients/applications/new'
        className='
          inline-flex
          h-10
          w-full
          shrink-0
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
