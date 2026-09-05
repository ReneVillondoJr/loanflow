'use client';

import { MoreHorizontal, Pencil, Eye, Power, Trash2 } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Button } from '@/components/ui/button';

import type { Scorecard } from '@/modules/admin/scorecards/types/scorecard';

interface ScorecardRowActionsProps {
  scorecard: Scorecard;
  onView: (scorecard: Scorecard) => void;
  onEdit: (scorecard: Scorecard) => void;
  onToggleStatus: (scorecard: Scorecard) => void;
  onDelete: (scorecard: Scorecard) => void;
}

export function ScorecardRowActions({
  scorecard,
  onView,
  onEdit,
  onToggleStatus,
  onDelete,
}: ScorecardRowActionsProps) {
  const isActive = scorecard.status === 'ACTIVE';

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            type='button'
            variant='ghost'
            size='icon'
            className='size-8'
            aria-label={`Actions for ${scorecard.name}`}
          />
        }
      >
        <MoreHorizontal className='size-4' aria-hidden='true' />
      </DropdownMenuTrigger>

      <DropdownMenuContent align='end' className='w-44'>
        <DropdownMenuItem onClick={() => onView(scorecard)}>
          <Eye className='size-4' />
          View
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => onEdit(scorecard)}>
          <Pencil className='size-4' />
          Edit
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => onToggleStatus(scorecard)}>
          <Power className='size-4' />
          {isActive ? 'Deactivate' : 'Activate'}
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          variant='destructive'
          onClick={() => onDelete(scorecard)}
        >
          <Trash2 className='size-4' />
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
