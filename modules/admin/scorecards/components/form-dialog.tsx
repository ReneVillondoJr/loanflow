'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

import type {
  CreateScorecardInput,
  Scorecard,
  ScorecardType,
} from '@/modules/admin/scorecards/types/scorecard';

interface ScorecardFormDialogProps {
  open: boolean;
  scorecard?: Scorecard | null;
  onOpenChange: (open: boolean) => void;
  onSubmit: (
    input: CreateScorecardInput & {
      id?: string;
    },
  ) => void;
}

const loanTypes: {
  value: ScorecardType;
  label: string;
}[] = [
  {
    value: 'PERSONAL_LOAN',
    label: 'Personal Loan',
  },
  {
    value: 'AUTO_LOAN',
    label: 'Auto Loan',
  },
  {
    value: 'HOME_LOAN',
    label: 'Home Loan',
  },
  {
    value: 'BUSINESS_LOAN',
    label: 'Business Loan',
  },
  {
    value: 'CREDIT_CARD',
    label: 'Credit Card',
  },
];

const DEFAULT_FORM = {
  name: '',
  description: '',
  type: 'PERSONAL_LOAN' as ScorecardType,
  minScore: '300',
  maxScore: '850',
  passingScore: '650',
};

function getFormValues(scorecard?: Scorecard | null) {
  if (!scorecard) {
    return DEFAULT_FORM;
  }

  return {
    name: scorecard.name,
    description: scorecard.description,
    type: scorecard.type,
    minScore: String(scorecard.minScore),
    maxScore: String(scorecard.maxScore),
    passingScore: String(scorecard.passingScore),
  };
}

export function ScorecardFormDialog({
  open,
  scorecard,
  onOpenChange,
  onSubmit,
}: ScorecardFormDialogProps) {
  const [form, setForm] = useState(() => getFormValues(scorecard));

  const editing = Boolean(scorecard);

  function updateField(field: keyof typeof form, value: string) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function handleOpenChange(nextOpen: boolean) {
    if (nextOpen) {
      setForm(getFormValues(scorecard));
    }

    onOpenChange(nextOpen);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.name.trim()) {
      return;
    }

    const min = Number(form.minScore);
    const max = Number(form.maxScore);
    const passing = Number(form.passingScore);

    if (Number.isNaN(min) || Number.isNaN(max) || Number.isNaN(passing)) {
      return;
    }

    if (min >= max) {
      return;
    }

    if (passing < min || passing > max) {
      return;
    }

    onSubmit({
      ...(scorecard ? { id: scorecard.id } : {}),
      name: form.name.trim(),
      description: form.description.trim(),
      type: form.type,
      minScore: min,
      maxScore: max,
      passingScore: passing,
    });

    onOpenChange(false);
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className='sm:max-w-lg'>
        <DialogHeader>
          <DialogTitle>
            {editing ? 'Edit Scorecard' : 'Create Scorecard'}
          </DialogTitle>

          <DialogDescription>
            Configure the basic scoring model information.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className='space-y-5'>
          <div className='space-y-2'>
            <Label htmlFor='scorecard-name'>Name</Label>

            <Input
              id='scorecard-name'
              value={form.name}
              onChange={(event) => updateField('name', event.target.value)}
              placeholder='Personal Loan Standard'
            />
          </div>

          <div className='space-y-2'>
            <Label htmlFor='scorecard-description'>Description</Label>

            <Textarea
              id='scorecard-description'
              value={form.description}
              onChange={(event) =>
                updateField('description', event.target.value)
              }
              placeholder='Describe the purpose of this scorecard...'
              rows={3}
            />
          </div>

          <div className='space-y-2'>
            <Label htmlFor='scorecard-type'>Loan Type</Label>

            <Select
              value={form.type}
              onValueChange={(value) =>
                updateField('type', value as ScorecardType)
              }
            >
              <SelectTrigger id='scorecard-type' className='w-full'>
                <SelectValue placeholder='Select loan type' />
              </SelectTrigger>

              <SelectContent>
                {loanTypes.map((loanType) => (
                  <SelectItem key={loanType.value} value={loanType.value}>
                    {loanType.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className='grid gap-4 sm:grid-cols-3'>
            <div className='space-y-2'>
              <Label htmlFor='min-score'>Minimum</Label>

              <Input
                id='min-score'
                type='number'
                min={0}
                value={form.minScore}
                onChange={(event) =>
                  updateField('minScore', event.target.value)
                }
              />
            </div>

            <div className='space-y-2'>
              <Label htmlFor='max-score'>Maximum</Label>

              <Input
                id='max-score'
                type='number'
                min={0}
                value={form.maxScore}
                onChange={(event) =>
                  updateField('maxScore', event.target.value)
                }
              />
            </div>

            <div className='space-y-2'>
              <Label htmlFor='passing-score'>Passing</Label>

              <Input
                id='passing-score'
                type='number'
                min={0}
                value={form.passingScore}
                onChange={(event) =>
                  updateField('passingScore', event.target.value)
                }
              />
            </div>
          </div>

          <DialogFooter>
            <Button
              type='button'
              variant='outline'
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button type='submit'>
              {editing ? 'Save Changes' : 'Create Scorecard'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
