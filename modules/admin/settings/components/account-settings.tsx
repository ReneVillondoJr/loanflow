'use client';

import { Save } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import type { AccountSettings } from '@/modules/admin/settings/types/settings';

interface AccountSettingsProps {
  settings: AccountSettings;
  onChange: (updates: Partial<AccountSettings>) => void;
  onSave: () => void;
  isSaving: boolean;
}

export function AccountSettingsForm({
  settings,
  onChange,
  onSave,
  isSaving,
}: AccountSettingsProps) {
  return (
    <section className='space-y-6'>
      <div>
        <h2 className='text-lg font-semibold'>Account Settings</h2>

        <p className='mt-1 text-sm text-muted-foreground'>
          Update your personal and account information.
        </p>
      </div>

      <div className='grid gap-5 sm:grid-cols-2'>
        <div className='space-y-2'>
          <Label htmlFor='firstName'>First name</Label>

          <Input
            id='firstName'
            value={settings.firstName}
            onChange={(event) =>
              onChange({
                firstName: event.target.value,
              })
            }
            className='h-10'
          />
        </div>

        <div className='space-y-2'>
          <Label htmlFor='lastName'>Last name</Label>

          <Input
            id='lastName'
            value={settings.lastName}
            onChange={(event) =>
              onChange({
                lastName: event.target.value,
              })
            }
            className='h-10'
          />
        </div>

        <div className='space-y-2'>
          <Label htmlFor='email'>Email address</Label>

          <Input
            id='email'
            type='email'
            value={settings.email}
            onChange={(event) =>
              onChange({
                email: event.target.value,
              })
            }
            className='h-10'
          />
        </div>

        <div className='space-y-2'>
          <Label htmlFor='phone'>Phone number</Label>

          <Input
            id='phone'
            value={settings.phone}
            onChange={(event) =>
              onChange({
                phone: event.target.value,
              })
            }
            className='h-10'
          />
        </div>

        <div className='space-y-2'>
          <Label htmlFor='jobTitle'>Job title</Label>

          <Input
            id='jobTitle'
            value={settings.jobTitle}
            onChange={(event) =>
              onChange({
                jobTitle: event.target.value,
              })
            }
            className='h-10'
          />
        </div>

        <div className='space-y-2'>
          <Label htmlFor='department'>Department</Label>

          <Input
            id='department'
            value={settings.department}
            onChange={(event) =>
              onChange({
                department: event.target.value,
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
          <Save className='mr-2 size-4' />
          {isSaving ? 'Saving...' : 'Save changes'}
        </Button>
      </div>
    </section>
  );
}
