import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div className='space-y-6'>
      {/* Dashboard Header */}
      <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
        <div className='space-y-2'>
          <Skeleton className='h-8 w-48' />
          <Skeleton className='h-4 w-72 max-w-full' />
        </div>

        <Skeleton className='h-10 w-full sm:w-32' />
      </div>

      {/* Dashboard Stats */}
      <div className='grid gap-4 sm:grid-cols-2 xl:grid-cols-4'>
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className='rounded-xl border bg-card p-5'>
            <div className='flex items-center justify-between gap-4'>
              <Skeleton className='h-4 w-28' />
              <Skeleton className='size-10 shrink-0 rounded-lg' />
            </div>

            <Skeleton className='mt-5 h-8 w-20' />
            <Skeleton className='mt-2 h-3 w-32' />
          </div>
        ))}
      </div>

      {/* Recent Applications + Quick Actions */}
      <section className='grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]'>
        {/* Recent Applications */}
        <div className='overflow-hidden rounded-xl border bg-card'>
          <div className='flex items-center justify-between border-b p-5'>
            <div className='space-y-2'>
              <Skeleton className='h-5 w-40' />
              <Skeleton className='h-3 w-56' />
            </div>

            <Skeleton className='h-9 w-20' />
          </div>

          <div className='divide-y'>
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className='flex items-center gap-4 p-4'>
                <Skeleton className='size-10 shrink-0 rounded-full' />

                <div className='min-w-0 flex-1 space-y-2'>
                  <Skeleton className='h-4 w-40 max-w-full' />
                  <Skeleton className='h-3 w-28' />
                </div>

                <Skeleton className='hidden h-6 w-20 rounded-full sm:block' />

                <Skeleton className='hidden h-4 w-20 sm:block' />
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className='rounded-xl border bg-card p-5'>
          <div className='mb-5 space-y-2'>
            <Skeleton className='h-5 w-32' />
            <Skeleton className='h-3 w-48' />
          </div>

          <div className='space-y-3'>
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className='flex items-center gap-3 rounded-lg border p-3'
              >
                <Skeleton className='size-9 shrink-0 rounded-md' />

                <div className='flex-1 space-y-2'>
                  <Skeleton className='h-4 w-28' />
                  <Skeleton className='h-3 w-full' />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Application */}
      <div className='rounded-xl border bg-card p-5'>
        <div className='mb-5 flex items-center justify-between'>
          <div className='space-y-2'>
            <Skeleton className='h-5 w-40' />
            <Skeleton className='h-3 w-56' />
          </div>

          <Skeleton className='h-8 w-20' />
        </div>

        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className='space-y-2'>
              <Skeleton className='h-3 w-20' />
              <Skeleton className='h-5 w-28' />
            </div>
          ))}
        </div>

        <div className='mt-6 space-y-2'>
          <div className='flex justify-between'>
            <Skeleton className='h-3 w-24' />
            <Skeleton className='h-3 w-10' />
          </div>

          <Skeleton className='h-2 w-full rounded-full' />
        </div>
      </div>

      {/* Documents Reminder */}
      <div className='rounded-xl border bg-card p-5'>
        <div className='flex gap-4'>
          <Skeleton className='size-10 shrink-0 rounded-lg' />

          <div className='flex-1 space-y-2'>
            <Skeleton className='h-5 w-48' />
            <Skeleton className='h-4 w-full max-w-lg' />
          </div>

          <Skeleton className='hidden h-9 w-28 sm:block' />
        </div>
      </div>
    </div>
  );
}
