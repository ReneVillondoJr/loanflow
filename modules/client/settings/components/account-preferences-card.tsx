'use client';

import { Check, Loader2, Save } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import {
  dateFormatOptions,
  languageOptions,
  timezoneOptions,
} from '../data/settings';

import type { AccountPreferences } from '../types/settings';

interface AccountPreferencesCardProps {
  preferences: AccountPreferences;
  saving: boolean;
  onChange: (
    key: keyof AccountPreferences,
    value: AccountPreferences[keyof AccountPreferences],
  ) => void;
  onSave: () => void;
}

export function AccountPreferencesCard({
  preferences,
  saving,
  onChange,
  onSave,
}: AccountPreferencesCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Account Preferences</CardTitle>
        <CardDescription>
          Customize how information is displayed throughout your account.
        </CardDescription>
      </CardHeader>

      <CardContent className='space-y-6'>
        {/* Language */}
        <div className='space-y-2'>
          <label
            htmlFor='language'
            className='text-sm font-medium leading-none'
          >
            Language
          </label>

          <Select
            value={preferences.language}
            onValueChange={(value) => {
              if (value) {
                onChange('language', value);
              }
            }}
          >
            <SelectTrigger id='language' className='w-full'>
              <SelectValue placeholder='Select language' />
            </SelectTrigger>

            <SelectContent>
              {languageOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <p className='text-xs text-muted-foreground'>
            Choose your preferred display language.
          </p>
        </div>

        {/* Timezone */}
        <div className='space-y-2'>
          <label
            htmlFor='timezone'
            className='text-sm font-medium leading-none'
          >
            Timezone
          </label>

          <Select
            value={preferences.timezone}
            onValueChange={(value) => {
              if (value) {
                onChange('timezone', value);
              }
            }}
          >
            <SelectTrigger id='timezone' className='w-full'>
              <SelectValue placeholder='Select timezone' />
            </SelectTrigger>

            <SelectContent>
              {timezoneOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <p className='text-xs text-muted-foreground'>
            Used when displaying dates and times.
          </p>
        </div>

        {/* Date Format */}
        <div className='space-y-2'>
          <label
            htmlFor='date-format'
            className='text-sm font-medium leading-none'
          >
            Date Format
          </label>

          <Select
            value={preferences.dateFormat}
            onValueChange={(value) => {
              if (value) {
                onChange('dateFormat', value);
              }
            }}
          >
            <SelectTrigger id='date-format' className='w-full'>
              <SelectValue placeholder='Select date format' />
            </SelectTrigger>

            <SelectContent>
              {dateFormatOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <p className='text-xs text-muted-foreground'>
            Choose how dates appear across the application.
          </p>
        </div>
      </CardContent>

      <CardFooter className='flex flex-col gap-3 border-t bg-muted/30 px-6 py-4 sm:flex-row sm:items-center sm:justify-between'>
        <div className='flex items-center gap-2 text-xs text-muted-foreground'>
          <Check className='size-4' />
          <span>Changes are saved to your account preferences.</span>
        </div>

        <Button
          type='button'
          onClick={onSave}
          disabled={saving}
          className='w-full sm:w-auto'
        >
          {saving ?
            <>
              <Loader2 className='size-4 animate-spin' />
              Saving...
            </>
          : <>
              <Save className='size-4' />
              Save Changes
            </>
          }
        </Button>
      </CardFooter>
    </Card>
  );
}
