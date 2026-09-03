import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div className='space-y-6'>
      {/* Header */}
      <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
        <div className='space-y-2'>
          <Skeleton className='h-8 w-32' />
          <Skeleton className='h-4 w-72 max-w-full' />
        </div>

        <Skeleton className='h-10 w-full sm:w-32' />
      </div>

      {/* Loans Summary */}
      <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className='rounded-xl border bg-card p-5'>
            <div className='flex items-center justify-between gap-4'>
              <Skeleton className='h-4 w-28' />
              <Skeleton className='size-9 shrink-0 rounded-lg' />
            </div>

            <Skeleton className='mt-4 h-8 w-20' />
            <Skeleton className='mt-2 h-3 w-32' />
          </div>
        ))}
      </div>

      {/* Loans Section */}
      <section>
        <div className='mb-4 space-y-2'>
          <Skeleton className='h-5 w-28' />
          <Skeleton className='h-4 w-80 max-w-full' />
        </div>

        {/* Loans List */}
        <div className='space-y-4'>
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className='rounded-xl border bg-card p-5'>
              <div className='flex flex-col gap-4 sm:flex-row sm:items-center'>
                {/* Loan Icon */}
                <Skeleton className='size-11 shrink-0 rounded-lg' />

                {/* Loan Information */}
                <div className='min-w-0 flex-1 space-y-2'>
                  <Skeleton className='h-5 w-40 max-w-full' />
                  <Skeleton className='h-4 w-56 max-w-full' />
                </div>

                {/* Status */}
                <Skeleton className='h-6 w-20 rounded-full' />

                {/* Amount */}
                <div className='space-y-2 sm:text-right'>
                  <Skeleton className='h-5 w-28' />
                  <Skeleton className='h-3 w-20' />
                </div>

                {/* Action */}
                <Skeleton className='h-9 w-20' />
              </div>

              {/* Progress */}
              <div className='mt-5 space-y-2'>
                <div className='flex items-center justify-between'>
                  <Skeleton className='h-3 w-20' />
                  <Skeleton className='h-3 w-10' />
                </div>

                <Skeleton className='h-2 w-full rounded-full' />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
