export type ManualReviewStatus =
  | 'PENDING'
  | 'IN_REVIEW'
  | 'APPROVED'
  | 'REJECTED'
  | 'ESCALATED';

export type ManualReviewPriority = 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT';

export type ManualReviewDecision =
  | 'APPROVE'
  | 'REJECT'
  | 'REQUEST_INFORMATION'
  | 'ESCALATE';

export type LoanType =
  | 'PERSONAL_LOAN'
  | 'AUTO_LOAN'
  | 'HOME_LOAN'
  | 'BUSINESS_LOAN'
  | 'CREDIT_CARD';

export type RiskLevel = 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';

export interface ManualReviewApplicant {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export interface ManualReview {
  id: string;
  applicationId: string;

  applicant: ManualReviewApplicant;

  loanType: LoanType;
  requestedAmount: number;

  creditScore: number;
  riskLevel: RiskLevel;

  status: ManualReviewStatus;
  priority: ManualReviewPriority;

  reason: string;

  assignedTo: string | null;

  submittedAt: string;
  updatedAt: string;

  decision: ManualReviewDecision | null;
  decisionNotes: string | null;

  documentsCount: number;
  daysPending: number;
}

export interface ManualReviewFilters {
  search: string;
  status: 'ALL' | ManualReviewStatus;
  priority: 'ALL' | ManualReviewPriority;
  loanType: 'ALL' | LoanType;
  riskLevel: 'ALL' | RiskLevel;
}

export interface ManualReviewStats {
  total: number;
  pending: number;
  inReview: number;
  approved: number;
  rejected: number;
  urgent: number;
  averageDaysPending: number;
}

export interface ReviewApplicationInput {
  id: string;
  decision: ManualReviewDecision;
  notes: string;
}

export interface AssignReviewInput {
  id: string;
  assignedTo: string;
}
