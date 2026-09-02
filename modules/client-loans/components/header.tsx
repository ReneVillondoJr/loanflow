import { WalletCards } from 'lucide-react';
import { PageHeader } from '@/components/page-header';
export function LoansHeader() {
  return (
    <PageHeader
      title='My Loans'
      description='Manage your active loans and payment information.'
      icon={<WalletCards className='size-5 text-muted-foreground' />}
    />
  );
}
