export type LoanStatus =
  | 'Active'
  | 'Completed'
  | 'Overdue'
  | 'Pending Disbursement';

export interface Loan {
  id: string;
  applicationId: string;
  type: string;
  principalAmount: string;
  remainingBalance: string;
  monthlyPayment: string;
  interestRate: string;
  term: string;
  paidMonths: number;
  totalMonths: number;
  nextPaymentDate: string;
  status: LoanStatus;
  disbursementDate: string;
}
