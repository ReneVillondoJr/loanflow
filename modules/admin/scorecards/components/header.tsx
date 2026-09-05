import { Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';

interface ScorecardsHeaderProps {
  onCreate: () => void;
}

export function ScorecardsHeader({ onCreate }: ScorecardsHeaderProps) {
  return (
    <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
      <div className='min-w-0'>
        <h1 className='text-2xl font-semibold tracking-tight'>Scorecards</h1>

        <p className='mt-1 text-sm text-muted-foreground'>
          Manage credit scoring models and risk assessment rules.
        </p>
      </div>

      <Button onClick={onCreate} className='shrink-0'>
        <Plus className='mr-2 size-4' />
        New Scorecard
      </Button>
    </div>
  );
}
