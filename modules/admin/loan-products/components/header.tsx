import Link from 'next/link';

import { Plus, WalletCards } from 'lucide-react';

import { Button } from '@/components/ui/button';

import { PageHeader } from '@/components/page-header';

export function LoanProductsHeader() {
  return (
    <PageHeader
      title='Loan Products'
      description='Manage loan products, terms, rates, and availability.'
      icon={<WalletCards className='size-5 text-primary' />}
      action={
        <Link href='/admin/loan-products/new'>
          <Button>
            <Plus className='mr-2 size-4' />
            Add Loan Product
          </Button>
        </Link>
      }
    />
  );
}
