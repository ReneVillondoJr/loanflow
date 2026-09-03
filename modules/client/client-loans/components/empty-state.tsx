import Link from 'next/link';

import { FilePlus2, WalletCards } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';

export function LoanEmptyState() {
  return (
    <Card>
      <CardContent className='flex flex-col items-center justify-center px-6 py-16 text-center'>
        <div className='flex size-12 items-center justify-center rounded-full bg-muted'>
          <WalletCards className='size-6 text-muted-foreground' />
        </div>

        <h2 className='mt-5 text-lg font-semibold'>No loans yet</h2>

        <p className='mt-2 max-w-md text-sm text-muted-foreground'>
          You currently do not have any approved or active loans. Once your
          application is approved, your loan will appear here.
        </p>

        <Link
          href='/clients/applications/new'
          className='mt-6 inline-flex h-10 items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90'
        >
          <FilePlus2 className='size-4' />
          Apply for a Loan
        </Link>
      </CardContent>
    </Card>
  );
}
