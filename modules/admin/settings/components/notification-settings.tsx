'use client';

import { Bell } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';

import type { NotificationSettings } from '@/modules/admin/settings/types/settings';

interface NotificationSettingsProps {
  settings: NotificationSettings;
  onChange: (updates: Partial<NotificationSettings>) => void;
  onSave: () => void;
  isSaving: boolean;
}

const ITEMS: Array<{
  key: keyof NotificationSettings;
  label: string;
  description: string;
}> = [
  {
    key: 'emailNotifications',
    label: 'Email notifications',
    description: 'Receive important notifications by email.',
  },
  {
    key: 'inAppNotifications',
    label: 'In-app notifications',
    description: 'Show alerts inside the LoanFlow application.',
  },
  {
    key: 'smsNotifications',
    label: 'SMS notifications',
    description: 'Receive selected alerts through SMS.',
  },
  {
    key: 'newApplication',
    label: 'New applications',
    description: 'Notify when a new loan application is submitted.',
  },
  {
    key: 'applicationStatus',
    label: 'Application status',
    description: 'Notify when an application status changes.',
  },
  {
    key: 'manualReview',
    label: 'Manual reviews',
    description: 'Notify when an application requires manual review.',
  },
  {
    key: 'paymentReminder',
    label: 'Payment reminders',
    description: 'Notify about upcoming payment activity.',
  },
  {
    key: 'systemAlerts',
    label: 'System alerts',
    description: 'Receive important system-level notifications.',
  },
  {
    key: 'securityAlerts',
    label: 'Security alerts',
    description: 'Receive notifications about security events.',
  },
];

export function NotificationSettingsForm({
  settings,
  onChange,
  onSave,
  isSaving,
}: NotificationSettingsProps) {
  return (
    <section className='space-y-6'>
      <div>
        <div className='flex items-center gap-2'>
          <Bell className='size-5 text-muted-foreground' />

          <h2 className='text-lg font-semibold'>Notifications</h2>
        </div>

        <p className='mt-1 text-sm text-muted-foreground'>
          Control which notifications you receive.
        </p>
      </div>

      <div className='divide-y rounded-lg border'>
        {ITEMS.map((item) => (
          <div
            key={item.key}
            className='flex items-center justify-between gap-4 p-4'
          >
            <div className='min-w-0'>
              <p className='text-sm font-medium'>{item.label}</p>

              <p className='mt-1 text-xs text-muted-foreground'>
                {item.description}
              </p>
            </div>

            <Switch
              checked={settings[item.key]}
              onCheckedChange={(checked) =>
                onChange({
                  [item.key]: checked,
                })
              }
            />
          </div>
        ))}
      </div>

      <div className='flex justify-end border-t pt-5'>
        <Button
          type='button'
          onClick={onSave}
          disabled={isSaving}
          className='h-10'
        >
          {isSaving ? 'Saving...' : 'Save notifications'}
        </Button>
      </div>
    </section>
  );
}
