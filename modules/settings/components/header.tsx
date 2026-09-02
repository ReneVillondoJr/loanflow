import { Settings } from 'lucide-react';

import { PageHeader } from '@/components/page-header';

export function SettingsHeader() {
  return (
    <PageHeader
      title='Settings'
      description='Manage your account preferences, notifications, and security.'
      icon={<Settings className='size-5 text-muted-foreground' />}
    />
  );
}
