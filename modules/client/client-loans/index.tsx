'use client';

import { LoansHeader } from './components/header';
import { LoansList } from './components/list';
import { LoansSummary } from './components/summary';

import { useLoans } from './hooks/use-loans';

export default function ClientLoansModule() {
  const { loans, activeLoans, completedLoans, totalLoans } = useLoans();

  return (
    <div className='space-y-6'>
      <LoansHeader />

      <LoansSummary
        totalLoans={totalLoans}
        activeLoans={activeLoans.length}
        completedLoans={completedLoans.length}
      />

      <section>
        <div className='mb-4'>
          <h2 className='text-base font-semibold'>Your Loans</h2>

          <p className='mt-1 text-sm text-muted-foreground'>
            View your loan balances, payments, and progress.
          </p>
        </div>

        <LoansList loans={loans} />
      </section>
    </div>
  );
}
