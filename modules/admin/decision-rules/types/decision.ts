export type DecisionStatus =
  | 'PENDING'
  | 'APPROVED'
  | 'REJECTED'
  | 'MANUAL_REVIEW';

export type RiskLevel = 'LOW' | 'MEDIUM' | 'HIGH' | 'VERY_HIGH';

export type LoanType = 'PERSONAL' | 'BUSINESS' | 'AUTO' | 'HOME' | 'EDUCATION';

export interface DecisioningCustomer {
  id: string;
  name: string;
  email: string;
  phone?: string;
}

export interface DecisioningApplication {
  id: string;
  applicationNumber: string;
  loanType: LoanType;
  requestedAmount: number;
  requestedTerm: number;
}

export interface DecisionFactors {
  creditScore: number;
  monthlyIncome: number;
  debtToIncomeRatio: number;
  employmentYears: number;
  existingLoans: number;
}

export interface LoanDecision {
  id: string;
  applicationId: string;

  customer: DecisioningCustomer;

  application: DecisioningApplication;

  status: DecisionStatus;

  riskLevel: RiskLevel;

  decisionScore: number;

  recommendedAmount: number;

  recommendedTerm: number;

  interestRate: number;

  factors: DecisionFactors;

  notes?: string;

  createdAt: string;

  updatedAt: string;

  decidedAt?: string;
}

export interface DecisioningStats {
  total: number;
  pending: number;
  approved: number;
  rejected: number;
  manualReview: number;
}

export interface DecisioningFilters {
  search: string;
  status: DecisionStatus | 'ALL';
  riskLevel: RiskLevel | 'ALL';
  loanType: LoanType | 'ALL';
}
