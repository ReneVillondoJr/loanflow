import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div className='space-y-6'>
      {/* Header */}
      <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
        <div className='space-y-2'>
          <Skeleton className='h-8 w-40' />
          <Skeleton className='h-4 w-72 max-w-full' />
        </div>

        <Skeleton className='h-10 w-full sm:w-40' />
      </div>

      {/* Stats */}
      <div className='grid gap-4 sm:grid-cols-2 xl:grid-cols-4'>
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className='rounded-xl border bg-card p-5'>
            <div className='flex items-center justify-between'>
              <Skeleton className='h-4 w-24' />
              <Skeleton className='size-10 rounded-lg' />
            </div>

            <Skeleton className='mt-4 h-8 w-16' />
            <Skeleton className='mt-2 h-3 w-28' />
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className='flex flex-col gap-3 sm:flex-row'>
        <Skeleton className='h-10 w-full flex-1' />

        <Skeleton className='h-10 w-full sm:w-48' />
      </div>

      {/* Documents Cards */}
      <div className='grid gap-4 md:grid-cols-2 xl:grid-cols-3'>
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className='flex min-h-[260px] flex-col rounded-xl border bg-card'
          >
            {/* Card Header */}
            <div className='flex items-start justify-between gap-4 p-6'>
              <div className='flex min-w-0 items-start gap-3'>
                {/* File Icon */}
                <Skeleton className='size-10 shrink-0 rounded-md' />

                <div className='min-w-0 space-y-2'>
                  {/* Document Name */}
                  <Skeleton className='h-5 w-36 max-w-full' />

                  {/* Category */}
                  <Skeleton className='h-4 w-24' />
                </div>
              </div>

              {/* Status */}
              <Skeleton className='h-6 w-20 shrink-0 rounded-full' />
            </div>

            {/* Card Content */}
            <div className='flex-1 px-6 pb-6'>
              {/* Description */}
              <div className='space-y-2'>
                <Skeleton className='h-4 w-full' />
                <Skeleton className='h-4 w-[90%]' />
                <Skeleton className='h-4 w-[65%]' />
              </div>

              {/* Document Information */}
              <div className='mt-5 space-y-3'>
                {/* Requirement */}
                <div className='flex items-center justify-between gap-4'>
                  <Skeleton className='h-4 w-20' />
                  <Skeleton className='h-4 w-16' />
                </div>

                {/* File */}
                <div className='flex items-center justify-between gap-4'>
                  <Skeleton className='h-4 w-10' />
                  <Skeleton className='h-4 w-28' />
                </div>

                {/* Size */}
                <div className='flex items-center justify-between gap-4'>
                  <Skeleton className='h-4 w-8' />
                  <Skeleton className='h-4 w-16' />
                </div>

                {/* Uploaded */}
                <div className='flex items-center justify-between gap-4'>
                  <Skeleton className='h-4 w-16' />
                  <Skeleton className='h-4 w-24' />
                </div>
              </div>
            </div>

            {/* Card Footer */}
            <div className='flex flex-wrap gap-2 p-6 pt-0'>
              {/* View Button */}
              <Skeleton className='h-9 flex-1' />

              {/* Download */}
              <Skeleton className='size-9 rounded-md' />

              {/* Print */}
              <Skeleton className='size-9 rounded-md' />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
