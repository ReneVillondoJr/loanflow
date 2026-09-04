import { Skeleton } from '@/components/ui/skeleton';

function StatCardSkeleton() {
  return (
    <div className='rounded-xl border bg-card p-5'>
      <div className='flex items-center justify-between'>
        <Skeleton className='h-4 w-28' />
        <Skeleton className='size-9 rounded-lg' />
      </div>

      <Skeleton className='mt-4 h-8 w-20' />
      <Skeleton className='mt-2 h-3 w-24' />
    </div>
  );
}

function ApplicationCardSkeleton() {
  return (
    <div className='rounded-xl border bg-card p-5'>
      <div className='flex items-start justify-between gap-4'>
        <div className='flex min-w-0 items-center gap-3'>
          <Skeleton className='size-10 rounded-lg' />

          <div className='space-y-2'>
            <Skeleton className='h-4 w-32' />
            <Skeleton className='h-3 w-24' />
          </div>
        </div>

        <Skeleton className='h-6 w-20 rounded-full' />
      </div>

      <div className='mt-5 space-y-4'>
        <div className='space-y-2'>
          <Skeleton className='h-3 w-20' />
          <Skeleton className='h-4 w-36' />
        </div>

        <div className='grid grid-cols-2 gap-4'>
          <div className='space-y-2'>
            <Skeleton className='h-3 w-16' />
            <Skeleton className='h-4 w-24' />
          </div>

          <div className='space-y-2'>
            <Skeleton className='h-3 w-16' />
            <Skeleton className='h-4 w-20' />
          </div>
        </div>

        <Skeleton className='h-2 w-full rounded-full' />
      </div>
    </div>
  );
}

export default function DashboardLoading() {
  return (
    <div className='space-y-6'>
      {/* Header */}
      <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
        <div className='space-y-2'>
          <Skeleton className='h-7 w-36' />
          <Skeleton className='h-4 w-72' />
        </div>

        <Skeleton className='h-10 w-36' />
      </div>

      {/* Stats */}
      <div className='grid gap-4 sm:grid-cols-2 xl:grid-cols-5'>
        {Array.from({ length: 5 }).map((_, index) => (
          <StatCardSkeleton key={index} />
        ))}
      </div>

      {/* Main content */}
      <div className='grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]'>
        {/* Recent applications */}
        <div className='rounded-xl border bg-card'>
          <div className='flex items-center justify-between border-b p-5'>
            <div className='space-y-2'>
              <Skeleton className='h-5 w-40' />
              <Skeleton className='h-3 w-56' />
            </div>

            <Skeleton className='h-9 w-20' />
          </div>

          <div className='grid gap-4 p-5 md:grid-cols-2'>
            {Array.from({ length: 4 }).map((_, index) => (
              <ApplicationCardSkeleton key={index} />
            ))}
          </div>
        </div>

        {/* Quick actions */}
        <div className='rounded-xl border bg-card'>
          <div className='border-b p-5'>
            <Skeleton className='h-5 w-32' />
            <Skeleton className='mt-2 h-3 w-48' />
          </div>

          <div className='space-y-3 p-5'>
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className='flex items-center gap-3 rounded-lg border p-3'
              >
                <Skeleton className='size-9 rounded-lg' />

                <div className='flex-1 space-y-2'>
                  <Skeleton className='h-4 w-28' />
                  <Skeleton className='h-3 w-36' />
                </div>

                <Skeleton className='size-4' />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Current application */}
      <div className='rounded-xl border bg-card'>
        <div className='border-b p-5'>
          <Skeleton className='h-5 w-40' />
          <Skeleton className='mt-2 h-3 w-56' />
        </div>

        <div className='p-5'>
          <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className='space-y-2'>
                <Skeleton className='h-3 w-20' />
                <Skeleton className='h-5 w-28' />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Documents reminder */}
      <div className='rounded-xl border bg-card p-5'>
        <div className='flex items-start gap-4'>
          <Skeleton className='size-10 rounded-lg' />

          <div className='flex-1 space-y-2'>
            <Skeleton className='h-5 w-44' />
            <Skeleton className='h-4 w-72' />
          </div>

          <Skeleton className='h-9 w-24' />
        </div>
      </div>
    </div>
  );
}
