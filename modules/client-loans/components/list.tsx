import { LoanCard } from './laon-cards';
import { LoanEmptyState } from './empty-state';

import type { Loan } from '@/modules/client-loans/types/loans';

interface LoansListProps {
  loans: Loan[];
}

export function LoansList({ loans }: LoansListProps) {
  if (loans.length === 0) {
    return <LoanEmptyState />;
  }

  return (
    <section className='space-y-4'>
      {loans.map((loan) => (
        <LoanCard key={loan.id} loan={loan} />
      ))}
    </section>
  );
}
