import { ClipboardCheck, Plus } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface ManualReviewsHeaderProps {
  pendingCount: number;
  onCreate?: () => void;
}

export function ManualReviewsHeader({
  pendingCount,
  onCreate,
}: ManualReviewsHeaderProps) {
  return (
    <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
      <div className='flex items-start gap-3'>
        <div className='flex size-10 shrink-0 items-center justify-center rounded-lg border bg-card'>
          <ClipboardCheck className='size-5 text-muted-foreground' />
        </div>

        <div>
          <div className='flex flex-wrap items-center gap-2'>
            <h1 className='text-2xl font-semibold tracking-tight'>
              Manual Reviews
            </h1>

            <Badge variant='secondary'>{pendingCount} pending</Badge>
          </div>

          <p className='mt-1 text-sm text-muted-foreground'>
            Review applications that require manual underwriting decisions.
          </p>
        </div>
      </div>

      {onCreate && (
        <Button onClick={onCreate}>
          <Plus className='mr-2 size-4' />
          Create Review
        </Button>
      )}
    </div>
  );
}
