'use client';

import { loansData } from '../data/loans';

export function useLoans() {
  const activeLoans = loansData.filter((loan) => loan.status === 'Active');

  const completedLoans = loansData.filter(
    (loan) => loan.status === 'Completed',
  );

  return {
    loans: loansData,
    activeLoans,
    completedLoans,
    totalLoans: loansData.length,
  };
}
