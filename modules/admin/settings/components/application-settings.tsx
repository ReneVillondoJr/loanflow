'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

import type { ApplicationSettings } from '@/modules/admin/settings/types/settings';

interface ApplicationSettingsProps {
  settings: ApplicationSettings;
  onChange: (updates: Partial<ApplicationSettings>) => void;
  onSave: () => void;
  isSaving: boolean;
}

export function ApplicationSettingsForm({
  settings,
  onChange,
  onSave,
  isSaving,
}: ApplicationSettingsProps) {
  return (
    <section className='space-y-6'>
      <div>
        <h2 className='text-lg font-semibold'>Application Settings</h2>

        <p className='mt-1 text-sm text-muted-foreground'>
          Configure default loan application behavior.
        </p>
      </div>

      <div className='divide-y rounded-lg border'>
        <div className='flex items-center justify-between gap-4 p-4'>
          <div>
            <p className='text-sm font-medium'>Automatic assignment</p>

            <p className='text-xs text-muted-foreground'>
              Automatically assign applications to available loan officers.
            </p>
          </div>

          <Switch
            checked={settings.autoAssignApplications}
            onCheckedChange={(checked) =>
              onChange({
                autoAssignApplications: checked,
              })
            }
          />
        </div>

        <div className='flex items-center justify-between gap-4 p-4'>
          <div>
            <p className='text-sm font-medium'>Automatic scoring</p>

            <p className='text-xs text-muted-foreground'>
              Score applications automatically using active scorecards.
            </p>
          </div>

          <Switch
            checked={settings.autoScoreApplications}
            onCheckedChange={(checked) =>
              onChange({
                autoScoreApplications: checked,
              })
            }
          />
        </div>

        <div className='flex items-center justify-between gap-4 p-4'>
          <div>
            <p className='text-sm font-medium'>Require manual review</p>

            <p className='text-xs text-muted-foreground'>
              Send selected applications to manual review.
            </p>
          </div>

          <Switch
            checked={settings.requireManualReview}
            onCheckedChange={(checked) =>
              onChange({
                requireManualReview: checked,
              })
            }
          />
        </div>

        <div className='flex items-center justify-between gap-4 p-4'>
          <div>
            <p className='text-sm font-medium'>Multiple active applications</p>

            <p className='text-xs text-muted-foreground'>
              Allow customers to have multiple active loans.
            </p>
          </div>

          <Switch
            checked={settings.allowMultipleApplications}
            onCheckedChange={(checked) =>
              onChange({
                allowMultipleApplications: checked,
              })
            }
          />
        </div>
      </div>

      <div className='grid gap-5 sm:grid-cols-3'>
        <div className='space-y-2'>
          <Label htmlFor='maxApplications'>Max active applications</Label>

          <Input
            id='maxApplications'
            type='number'
            min={1}
            value={settings.maxActiveApplications}
            onChange={(event) =>
              onChange({
                maxActiveApplications: Number(event.target.value),
              })
            }
            className='h-10'
          />
        </div>

        <div className='space-y-2'>
          <Label htmlFor='loanTerm'>Default loan term</Label>

          <Input
            id='loanTerm'
            type='number'
            min={1}
            value={settings.defaultLoanTerm}
            onChange={(event) =>
              onChange({
                defaultLoanTerm: Number(event.target.value),
              })
            }
            className='h-10'
          />
        </div>

        <div className='space-y-2'>
          <Label htmlFor='creditScore'>Minimum credit score</Label>

          <Input
            id='creditScore'
            type='number'
            min={0}
            max={850}
            value={settings.minimumCreditScore}
            onChange={(event) =>
              onChange({
                minimumCreditScore: Number(event.target.value),
              })
            }
            className='h-10'
          />
        </div>
      </div>

      <div className='flex justify-end border-t pt-5'>
        <Button
          type='button'
          onClick={onSave}
          disabled={isSaving}
          className='h-10'
        >
          {isSaving ? 'Saving...' : 'Save application settings'}
        </Button>
      </div>
    </section>
  );
}
