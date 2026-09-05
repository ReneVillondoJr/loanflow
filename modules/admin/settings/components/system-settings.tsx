'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import type {
  Currency,
  DateFormat,
  Language,
  SystemSettings,
  ThemeMode,
} from '@/modules/admin/settings/types/settings';

interface SystemSettingsProps {
  settings: SystemSettings;
  onChange: (updates: Partial<SystemSettings>) => void;
  onSave: () => void;
  isSaving: boolean;
}

export function SystemSettingsForm({
  settings,
  onChange,
  onSave,
  isSaving,
}: SystemSettingsProps) {
  return (
    <section className='space-y-6'>
      <div>
        <h2 className='text-lg font-semibold'>System Settings</h2>

        <p className='mt-1 text-sm text-muted-foreground'>
          Configure global LoanFlow preferences.
        </p>
      </div>

      <div className='grid gap-5 sm:grid-cols-2'>
        <div className='space-y-2'>
          <Label htmlFor='companyName'>Company name</Label>

          <Input
            id='companyName'
            value={settings.companyName}
            onChange={(event) =>
              onChange({
                companyName: event.target.value,
              })
            }
            className='h-10'
          />
        </div>

        <div className='space-y-2'>
          <Label htmlFor='companyEmail'>Company email</Label>

          <Input
            id='companyEmail'
            type='email'
            value={settings.companyEmail}
            onChange={(event) =>
              onChange({
                companyEmail: event.target.value,
              })
            }
            className='h-10'
          />
        </div>

        <div className='space-y-2'>
          <Label htmlFor='supportEmail'>Support email</Label>

          <Input
            id='supportEmail'
            type='email'
            value={settings.supportEmail}
            onChange={(event) =>
              onChange({
                supportEmail: event.target.value,
              })
            }
            className='h-10'
          />
        </div>

        <div className='space-y-2'>
          <Label htmlFor='supportPhone'>Support phone</Label>

          <Input
            id='supportPhone'
            value={settings.supportPhone}
            onChange={(event) =>
              onChange({
                supportPhone: event.target.value,
              })
            }
            className='h-10'
          />
        </div>

        <div className='space-y-2'>
          <Label>Language</Label>

          <Select
            value={settings.language}
            onValueChange={(value) =>
              onChange({
                language: value as Language,
              })
            }
          >
            <SelectTrigger className='h-10'>
              <SelectValue />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value='EN'>English</SelectItem>

              <SelectItem value='FIL'>Filipino</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className='space-y-2'>
          <Label>Theme</Label>

          <Select
            value={settings.theme}
            onValueChange={(value) =>
              onChange({
                theme: value as ThemeMode,
              })
            }
          >
            <SelectTrigger className='h-10'>
              <SelectValue />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value='SYSTEM'>System</SelectItem>

              <SelectItem value='LIGHT'>Light</SelectItem>

              <SelectItem value='DARK'>Dark</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className='space-y-2'>
          <Label>Date format</Label>

          <Select
            value={settings.dateFormat}
            onValueChange={(value) =>
              onChange({
                dateFormat: value as DateFormat,
              })
            }
          >
            <SelectTrigger className='h-10'>
              <SelectValue />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value='MM/DD/YYYY'>MM/DD/YYYY</SelectItem>

              <SelectItem value='DD/MM/YYYY'>DD/MM/YYYY</SelectItem>

              <SelectItem value='YYYY-MM-DD'>YYYY-MM-DD</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className='space-y-2'>
          <Label>Currency</Label>

          <Select
            value={settings.currency}
            onValueChange={(value) =>
              onChange({
                currency: value as Currency,
              })
            }
          >
            <SelectTrigger className='h-10'>
              <SelectValue />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value='PHP'>PHP — Philippine Peso</SelectItem>

              <SelectItem value='USD'>USD — US Dollar</SelectItem>

              <SelectItem value='EUR'>EUR — Euro</SelectItem>

              <SelectItem value='GBP'>GBP — British Pound</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className='flex justify-end border-t pt-5'>
        <Button
          type='button'
          onClick={onSave}
          disabled={isSaving}
          className='h-10'
        >
          {isSaving ? 'Saving...' : 'Save system settings'}
        </Button>
      </div>
    </section>
  );
}
