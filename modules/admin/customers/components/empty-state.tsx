import { Users } from 'lucide-react';

export function CustomerEmptyState() {
  return (
    <div className='flex flex-col items-center justify-center rounded-lg border border-dashed py-16 text-center'>
      <div className='flex size-12 items-center justify-center rounded-full bg-muted'>
        <Users className='size-6 text-muted-foreground' />
      </div>

      <h3 className='mt-4 font-semibold'>No customers found</h3>

      <p className='mt-1 text-sm text-muted-foreground'>
        There are no customers matching your filters.
      </p>
    </div>
  );
}
