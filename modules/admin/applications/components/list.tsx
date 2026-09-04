'use client';

import { FileSearch } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';

import { ApplicationCard } from './card';

import type { ApplicationsListProps } from '../types/applications';

export function ApplicationsList({
  applications,
  onView,
}: ApplicationsListProps) {
  if (applications.length === 0) {
    return (
      <Card>
        <CardContent className='flex min-h-70 flex-col items-center justify-center text-center'>
          <div className='flex size-12 items-center justify-center rounded-full bg-muted'>
            <FileSearch className='size-6 text-muted-foreground' />
          </div>

          <h3 className='mt-4 font-semibold'>No applications found</h3>

          <p className='mt-1 max-w-sm text-sm text-muted-foreground'>
            Try adjusting your search or filters to find the application you are
            looking for.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className='grid gap-4 md:grid-cols-2 xl:grid-cols-3'>
      {applications.map((application) => (
        <ApplicationCard
          key={application.id}
          application={application}
          onView={onView}
        />
      ))}
    </div>
  );
}
