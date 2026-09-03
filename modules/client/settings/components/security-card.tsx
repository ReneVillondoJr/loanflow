'use client';

import { KeyRound, LockKeyhole, Save, ShieldCheck } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';

import type { SecuritySettings } from '../types/settings';

interface SecurityCardProps {
  security: SecuritySettings;
  saving: boolean;
  onChange: <K extends keyof SecuritySettings>(
    key: K,
    value: SecuritySettings[K],
  ) => void;
  onSave: () => void;
}

export function SecurityCard({
  security,
  saving,
  onChange,
  onSave,
}: SecurityCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className='flex items-center gap-3'>
          <div className='flex size-9 items-center justify-center rounded-md bg-muted'>
            <ShieldCheck className='size-4 text-muted-foreground' />
          </div>

          <div>
            <CardTitle className='text-base'>Security</CardTitle>

            <p className='mt-1 text-sm text-muted-foreground'>
              Manage your password and account security.
            </p>
          </div>
        </div>
      </CardHeader>

      <CardContent className='space-y-4'>
        <div className='flex flex-col gap-4 rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between'>
          <div className='flex items-start gap-3'>
            <KeyRound className='mt-0.5 size-5 shrink-0 text-muted-foreground' />

            <div>
              <p className='text-sm font-medium'>Password & Security</p>

              <p className='mt-1 text-sm text-muted-foreground'>
                Change your password and manage your account security.
              </p>
            </div>
          </div>

          <Button
            type='button'
            variant='outline'
            className='w-full shrink-0 sm:w-auto'
          >
            Change Password
          </Button>
        </div>

        <div className='flex items-center justify-between gap-4 rounded-lg border p-4'>
          <div className='flex items-start gap-3'>
            <LockKeyhole className='mt-0.5 size-5 shrink-0 text-muted-foreground' />

            <div>
              <p className='text-sm font-medium'>Login Notifications</p>

              <p className='mt-1 text-sm text-muted-foreground'>
                Get notified when your account is accessed.
              </p>
            </div>
          </div>

          <Switch
            checked={security.loginNotifications}
            onCheckedChange={(checked) =>
              onChange('loginNotifications', checked)
            }
            aria-label='Login notifications'
          />
        </div>

        <div className='flex items-center justify-between gap-4 rounded-lg border p-4'>
          <div className='flex items-start gap-3'>
            <ShieldCheck className='mt-0.5 size-5 shrink-0 text-muted-foreground' />

            <div>
              <p className='text-sm font-medium'>Two-Factor Authentication</p>

              <p className='mt-1 text-sm text-muted-foreground'>
                Add an additional layer of security to your account.
              </p>
            </div>
          </div>

          <Switch
            checked={security.twoFactorAuthentication}
            onCheckedChange={(checked) =>
              onChange('twoFactorAuthentication', checked)
            }
            aria-label='Two-factor authentication'
          />
        </div>

        <div className='flex justify-end border-t pt-5'>
          <Button type='button' onClick={onSave} disabled={saving}>
            <Save className='size-4' />
            {saving ? 'Saving...' : 'Save Changes'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
