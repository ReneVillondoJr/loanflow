import { notFound } from 'next/navigation';

import { LoanDetailsHeader } from '@/modules/client/client-loans/components/loan-details-header';
import { LoanDetailsInformation } from '@/modules/client/client-loans/components/loan-details-information';
import { LoanDetailsProgress } from '@/modules/client/client-loans/components/loan-details-progress';
import { LoanDetailsSummary } from '@/modules/client/client-loans/components/loan-details-summary';
import { LoanPaymentSchedule } from '@/modules/client/client-loans/components/loan-payment-schedule';
import { loansData } from '@/modules/client/client-loans/data/loans';
import type { Loan } from '@/modules/client/client-loans/types/loans';

interface LoanDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function LoanDetailsPage({
  params,
}: LoanDetailsPageProps) {
  const { id } = await params;

  const loan: Loan | undefined = loansData.find((item: Loan) => item.id === id);

  if (!loan) {
    notFound();
  }

  return (
    <div className='mx-auto w-full max-w-6xl space-y-6'>
      <LoanDetailsHeader loan={loan} />

      <LoanDetailsSummary loan={loan} />

      <div className='grid gap-6 lg:grid-cols-[1.35fr_1fr]'>
        <LoanDetailsProgress loan={loan} />

        <LoanDetailsInformation loan={loan} />
      </div>

      <LoanPaymentSchedule loan={loan} />
    </div>
  );
}
