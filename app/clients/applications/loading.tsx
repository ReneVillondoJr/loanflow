import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div className='space-y-6'>
      {/* Header */}
      <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
        <div className='space-y-2'>
          <Skeleton className='h-8 w-48' />
          <Skeleton className='h-4 w-72 max-w-full' />
        </div>

        <Skeleton className='h-10 w-32' />
      </div>

      {/* Summary */}
      <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className='rounded-xl border bg-card p-5'>
            <div className='flex items-center justify-between'>
              <Skeleton className='h-4 w-24' />
              <Skeleton className='size-9 rounded-lg' />
            </div>

            <Skeleton className='mt-4 h-8 w-20' />
            <Skeleton className='mt-2 h-3 w-28' />
          </div>
        ))}
      </div>

      {/* Applications */}
      <div className='overflow-hidden rounded-xl border bg-card'>
        <div className='border-b p-4'>
          <Skeleton className='h-6 w-40' />
        </div>

        <div className='divide-y'>
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className='flex items-center gap-4 p-4'>
              <Skeleton className='size-10 shrink-0 rounded-full' />

              <div className='min-w-0 flex-1 space-y-2'>
                <Skeleton className='h-4 w-48 max-w-full' />
                <Skeleton className='h-3 w-32 max-w-full' />
              </div>

              <Skeleton className='hidden h-6 w-20 shrink-0 rounded-full sm:block' />

              <Skeleton className='hidden h-9 w-20 shrink-0 sm:block' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
