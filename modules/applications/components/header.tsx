import { FileText } from 'lucide-react';

import { PageHeader } from '@/components/page-header';

interface ApplicationsHeaderProps {
  total: number;
}

export function ApplicationsHeader({ total }: ApplicationsHeaderProps) {
  return (
    <PageHeader
      title='My Applications'
      description={`Track and manage your loan applications. You have ${total} application${total === 1 ? '' : 's'}.`}
      icon={<FileText className='size-5 text-muted-foreground' />}
    />
  );
}
