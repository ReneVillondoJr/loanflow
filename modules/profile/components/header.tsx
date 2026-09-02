import { User } from 'lucide-react';

import { PageHeader } from '@/components/page-header';

export function ProfileHeader() {
  return (
    <PageHeader
      title='My Profile'
      description='Manage your personal information and account details.'
      icon={<User className='size-5 text-muted-foreground' />}
    />
  );
}
