import { WalletCards } from 'lucide-react';

export function LoansHeader() {
  return (
    <section className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
      <div className='min-w-0'>
        <div className='flex items-center gap-3'>
          <div className='flex size-10 shrink-0 items-center justify-center rounded-md bg-muted'>
            <WalletCards className='size-5 text-muted-foreground' />
          </div>

          <div>
            <h1 className='text-2xl font-semibold tracking-tight'>My Loans</h1>

            <p className='mt-1 text-sm text-muted-foreground'>
              Manage your active loans and payment information.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
