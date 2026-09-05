'use client';

import { CheckCircle2, FileText, ShieldCheck } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

import type { Scorecard } from '@/modules/admin/scorecards/types/scorecard';

interface ScorecardViewDialogProps {
  scorecard: Scorecard | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ScorecardViewDialog({
  scorecard,
  open,
  onOpenChange,
}: ScorecardViewDialogProps) {
  if (!scorecard) {
    return null;
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='max-h-[90vh] overflow-y-auto sm:max-w-2xl'>
        <DialogHeader>
          <div className='flex items-start justify-between gap-4 pr-8'>
            <div className='min-w-0'>
              <DialogTitle className='truncate'>{scorecard.name}</DialogTitle>

              <DialogDescription className='mt-1'>
                {scorecard.description}
              </DialogDescription>
            </div>

            <Badge>{scorecard.status}</Badge>
          </div>
        </DialogHeader>

        <div className='space-y-5'>
          <div className='grid gap-3 sm:grid-cols-3'>
            <Card>
              <CardContent className='p-4'>
                <FileText className='mb-2 size-4 text-muted-foreground' />

                <p className='text-xs text-muted-foreground'>Rules</p>

                <p className='text-xl font-semibold'>{scorecard.rulesCount}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className='p-4'>
                <ShieldCheck className='mb-2 size-4 text-muted-foreground' />

                <p className='text-xs text-muted-foreground'>Passing Score</p>

                <p className='text-xl font-semibold'>
                  {scorecard.passingScore}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className='p-4'>
                <CheckCircle2 className='mb-2 size-4 text-muted-foreground' />

                <p className='text-xs text-muted-foreground'>Approval Rate</p>

                <p className='text-xl font-semibold'>
                  {scorecard.applicationsScored > 0 ?
                    `${scorecard.approvalRate}%`
                  : '—'}
                </p>
              </CardContent>
            </Card>
          </div>

          <div className='rounded-lg border'>
            <div className='border-b px-4 py-3'>
              <h3 className='text-sm font-medium'>Score Range</h3>
            </div>

            <div className='grid grid-cols-3 gap-4 p-4'>
              <div>
                <p className='text-xs text-muted-foreground'>Minimum</p>

                <p className='mt-1 font-medium'>{scorecard.minScore}</p>
              </div>

              <div>
                <p className='text-xs text-muted-foreground'>Passing</p>

                <p className='mt-1 font-medium'>{scorecard.passingScore}</p>
              </div>

              <div>
                <p className='text-xs text-muted-foreground'>Maximum</p>

                <p className='mt-1 font-medium'>{scorecard.maxScore}</p>
              </div>
            </div>
          </div>

          <div className='rounded-lg border'>
            <div className='border-b px-4 py-3'>
              <h3 className='text-sm font-medium'>Scorecard Information</h3>
            </div>

            <div className='grid gap-4 p-4 sm:grid-cols-2'>
              <div>
                <p className='text-xs text-muted-foreground'>Loan Type</p>

                <p className='mt-1 text-sm font-medium'>
                  {scorecard.type.replace(/_/g, ' ')}
                </p>
              </div>

              <div>
                <p className='text-xs text-muted-foreground'>Version</p>

                <p className='mt-1 text-sm font-medium'>v{scorecard.version}</p>
              </div>

              <div>
                <p className='text-xs text-muted-foreground'>
                  Applications Scored
                </p>

                <p className='mt-1 text-sm font-medium'>
                  {scorecard.applicationsScored.toLocaleString()}
                </p>
              </div>

              <div>
                <p className='text-xs text-muted-foreground'>Average Score</p>

                <p className='mt-1 text-sm font-medium'>
                  {scorecard.averageScore || '—'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
