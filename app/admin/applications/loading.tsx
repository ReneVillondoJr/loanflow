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
      <div className='grid gap-4 sm:grid-cols-2 xl:grid-cols-5'>
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className='rounded-xl border bg-card p-5'>
            <div className='flex items-center justify-between gap-4'>
              <Skeleton className='h-4 w-28' />
              <Skeleton className='size-9 rounded-lg' />
            </div>

            <Skeleton className='mt-4 h-8 w-16' />
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className='rounded-xl border bg-card p-4'>
        <div className='flex flex-col gap-3 lg:flex-row'>
          <Skeleton className='h-10 w-full flex-1' />
          <Skeleton className='h-10 w-full lg:w-44' />
          <Skeleton className='h-10 w-full lg:w-44' />
          <Skeleton className='h-10 w-full lg:w-36' />
        </div>
      </div>

      {/* Section Header */}
      <div className='space-y-2'>
        <Skeleton className='h-5 w-36' />
        <Skeleton className='h-4 w-32' />
      </div>

      {/* Application Cards */}
      <div className='grid gap-4 md:grid-cols-2 xl:grid-cols-3'>
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className='flex h-full min-h-97.5 flex-col rounded-xl border bg-card'
          >
            {/* Card Header */}
            <div className='space-y-4 p-6'>
              <div className='flex items-start justify-between gap-3'>
                <div className='flex min-w-0 items-start gap-3'>
                  <Skeleton className='size-10 shrink-0 rounded-md' />

                  <div className='min-w-0 space-y-2'>
                    <Skeleton className='h-5 w-32' />
                    <Skeleton className='h-4 w-28' />
                  </div>
                </div>

                <Skeleton className='h-6 w-24 rounded-full' />
              </div>
            </div>

            {/* Card Content */}
            <div className='flex-1 space-y-5 px-6 pb-6'>
              {/* Applicant */}
              <div className='flex items-center gap-3'>
                <Skeleton className='size-8 rounded-full' />

                <div className='flex-1 space-y-2'>
                  <Skeleton className='h-4 w-32' />
                  <Skeleton className='h-3 w-44 max-w-full' />
                </div>
              </div>

              {/* Amount / Term */}
              <div className='grid grid-cols-2 gap-4'>
                <div className='space-y-2'>
                  <Skeleton className='h-3 w-14' />
                  <Skeleton className='h-5 w-24' />
                </div>

                <div className='space-y-2'>
                  <Skeleton className='h-3 w-10' />
                  <Skeleton className='h-5 w-20' />
                </div>
              </div>

              {/* Documents */}
              <div className='space-y-2'>
                <div className='flex items-center justify-between'>
                  <Skeleton className='h-3 w-20' />
                  <Skeleton className='h-3 w-10' />
                </div>

                <Skeleton className='h-2 w-full rounded-full' />
              </div>

              {/* Submitted */}
              <div className='flex items-center justify-between'>
                <Skeleton className='h-3 w-16' />
                <Skeleton className='h-3 w-24' />
              </div>
            </div>

            {/* Card Footer */}
            <div className='p-6 pt-0'>
              <Skeleton className='h-9 w-full rounded-md' />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
