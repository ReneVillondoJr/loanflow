'use client';

import { ShieldCheck } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import type {
  SecuritySettings,
  SessionTimeout,
  PasswordExpiry,
} from '@/modules/admin/settings/types/settings';

interface SecuritySettingsProps {
  settings: SecuritySettings;
  onChange: (updates: Partial<SecuritySettings>) => void;
  onSave: () => void;
  isSaving: boolean;
}

export function SecuritySettingsForm({
  settings,
  onChange,
  onSave,
  isSaving,
}: SecuritySettingsProps) {
  return (
    <section className='space-y-6'>
      <div>
        <h2 className='text-lg font-semibold'>Security</h2>

        <p className='mt-1 text-sm text-muted-foreground'>
          Configure authentication and account security.
        </p>
      </div>

      <div className='divide-y rounded-lg border'>
        <div className='flex items-center justify-between gap-4 p-4'>
          <div className='flex min-w-0 items-start gap-3'>
            <ShieldCheck className='mt-0.5 size-4 shrink-0 text-muted-foreground' />

            <div>
              <p className='text-sm font-medium'>Two-factor authentication</p>

              <p className='text-xs text-muted-foreground'>
                Require an additional verification step when signing in.
              </p>
            </div>
          </div>

          <Switch
            checked={settings.twoFactorEnabled}
            onCheckedChange={(checked) =>
              onChange({
                twoFactorEnabled: checked,
              })
            }
          />
        </div>

        <div className='flex items-center justify-between gap-4 p-4'>
          <div>
            <p className='text-sm font-medium'>Login alerts</p>

            <p className='text-xs text-muted-foreground'>
              Notify you when a new login occurs.
            </p>
          </div>

          <Switch
            checked={settings.loginAlerts}
            onCheckedChange={(checked) =>
              onChange({
                loginAlerts: checked,
              })
            }
          />
        </div>

        <div className='flex items-center justify-between gap-4 p-4'>
          <div>
            <Label>Session timeout</Label>

            <p className='mt-1 text-xs text-muted-foreground'>
              Automatically sign out inactive sessions.
            </p>
          </div>

          <Select
            value={settings.sessionTimeout}
            onValueChange={(value) =>
              onChange({
                sessionTimeout: value as SessionTimeout,
              })
            }
          >
            <SelectTrigger className='h-10 w-40'>
              <SelectValue />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value='15_MINUTES'>15 minutes</SelectItem>

              <SelectItem value='30_MINUTES'>30 minutes</SelectItem>

              <SelectItem value='1_HOUR'>1 hour</SelectItem>

              <SelectItem value='4_HOURS'>4 hours</SelectItem>

              <SelectItem value='8_HOURS'>8 hours</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className='flex items-center justify-between gap-4 p-4'>
          <div>
            <Label>Password expiry</Label>

            <p className='mt-1 text-xs text-muted-foreground'>
              Require users to periodically change passwords.
            </p>
          </div>

          <Select
            value={settings.passwordExpiry}
            onValueChange={(value) =>
              onChange({
                passwordExpiry: value as PasswordExpiry,
              })
            }
          >
            <SelectTrigger className='h-10 w-40'>
              <SelectValue />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value='30_DAYS'>30 days</SelectItem>

              <SelectItem value='60_DAYS'>60 days</SelectItem>

              <SelectItem value='90_DAYS'>90 days</SelectItem>

              <SelectItem value='NEVER'>Never</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className='flex items-center justify-between gap-4 p-4'>
          <div>
            <p className='text-sm font-medium'>Strong passwords</p>

            <p className='text-xs text-muted-foreground'>
              Require complex passwords for accounts.
            </p>
          </div>

          <Switch
            checked={settings.requireStrongPassword}
            onCheckedChange={(checked) =>
              onChange({
                requireStrongPassword: checked,
              })
            }
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
          {isSaving ? 'Saving...' : 'Save security'}
        </Button>
      </div>
    </section>
  );
}
