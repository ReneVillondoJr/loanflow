import Link from 'next/link';

import { FileText, Plus } from 'lucide-react';

interface ApplicationsEmptyStateProps {
  hasFilters?: boolean;
}

export function ApplicationsEmptyState({
  hasFilters = false,
}: ApplicationsEmptyStateProps) {
  return (
    <div className='flex min-h-90 flex-col items-center justify-center px-6 text-center'>
      <div className='flex size-12 items-center justify-center rounded-full bg-muted'>
        <FileText className='size-6 text-muted-foreground' />
      </div>

      <h3 className='mt-4 text-base font-semibold'>
        {hasFilters ? 'No applications found' : 'No applications yet'}
      </h3>

      <p className='mt-1 max-w-sm text-sm text-muted-foreground'>
        {hasFilters ?
          'Try changing your search or filter options.'
        : 'Start your first loan application to begin.'}
      </p>

      {!hasFilters && (
        <Link
          href='/clients/applications/new'
          className='
            mt-5
            inline-flex
            h-10
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
          '
        >
          <Plus className='size-4' />
          New Application
        </Link>
      )}
    </div>
  );
}
