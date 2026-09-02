'use client';

import { Bell, Save } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';

import type { NotificationSettings } from '../types/settings';

interface NotificationSettingsCardProps {
  notifications: NotificationSettings;
  saving: boolean;
  onChange: <K extends keyof NotificationSettings>(
    key: K,
    value: NotificationSettings[K],
  ) => void;
  onSave: () => void;
}

const notificationItems: {
  key: keyof NotificationSettings;
  title: string;
  description: string;
}[] = [
  {
    key: 'applicationUpdates',
    title: 'Application Updates',
    description:
      'Receive notifications when your loan application status changes.',
  },
  {
    key: 'paymentReminders',
    title: 'Payment Reminders',
    description: 'Receive reminders about upcoming and overdue payments.',
  },
  {
    key: 'documentReminders',
    title: 'Document Reminders',
    description:
      'Receive reminders when documents are missing or need attention.',
  },
  {
    key: 'marketingEmails',
    title: 'Marketing Emails',
    description:
      'Receive product news, offers, and other promotional messages.',
  },
];

export function NotificationSettingsCard({
  notifications,
  saving,
  onChange,
  onSave,
}: NotificationSettingsCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className='flex items-center gap-3'>
          <div className='flex size-9 items-center justify-center rounded-md bg-muted'>
            <Bell className='size-4 text-muted-foreground' />
          </div>

          <div>
            <CardTitle className='text-base'>Notifications</CardTitle>

            <p className='mt-1 text-sm text-muted-foreground'>
              Choose which notifications you want to receive.
            </p>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className='divide-y rounded-lg border'>
          {notificationItems.map((item) => (
            <div
              key={item.key}
              className='flex items-center justify-between gap-4 p-4'
            >
              <div className='min-w-0'>
                <p className='text-sm font-medium'>{item.title}</p>

                <p className='mt-1 text-sm text-muted-foreground'>
                  {item.description}
                </p>
              </div>

              <Switch
                checked={notifications[item.key]}
                onCheckedChange={(checked) => onChange(item.key, checked)}
                aria-label={item.title}
              />
            </div>
          ))}
        </div>

        <div className='mt-5 flex justify-end border-t pt-5'>
          <Button type='button' onClick={onSave} disabled={saving}>
            <Save className='size-4' />
            {saving ? 'Saving...' : 'Save Changes'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
