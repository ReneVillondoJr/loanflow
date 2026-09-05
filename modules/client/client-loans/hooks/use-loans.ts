'use client';

import { useMemo } from 'react';

import { loansData } from '../data/loans';

export function useLoans() {
  const loans = useMemo(() => loansData, []);

  const activeLoans = useMemo(
    () => loans.filter((loan) => loan.status === 'Active'),
    [loans],
  );

  const completedLoans = useMemo(
    () => loans.filter((loan) => loan.status === 'Completed'),
    [loans],
  );

  const overdueLoans = useMemo(
    () => loans.filter((loan) => loan.status === 'Overdue'),
    [loans],
  );

  const pendingLoans = useMemo(
    () => loans.filter((loan) => loan.status === 'Pending Disbursement'),
    [loans],
  );

  const totalPrincipal = useMemo(
    () =>
      loans.reduce((total, loan) => total + Number(loan.principalAmount), 0),
    [loans],
  );

  const totalRemainingBalance = useMemo(
    () =>
      loans.reduce((total, loan) => total + Number(loan.remainingBalance), 0),
    [loans],
  );

  return {
    loans,

    // Filtered loans
    activeLoans,
    completedLoans,
    overdueLoans,
    pendingLoans,

    // Counts
    totalLoans: loans.length,
    activeLoanCount: activeLoans.length,
    completedLoanCount: completedLoans.length,
    overdueLoanCount: overdueLoans.length,
    pendingLoanCount: pendingLoans.length,

    // Financial totals
    totalPrincipal,
    totalRemainingBalance,
  };
}
