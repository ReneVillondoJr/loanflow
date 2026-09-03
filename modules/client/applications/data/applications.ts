import type { ApplicationSummary, LoanApplication } from '../types/application';

export const applications: LoanApplication[] = [
  {
    id: '1',
    applicationNumber: 'LN-2026-00124',
    loanType: 'Personal Loan',
    amount: '₱150,000',
    status: 'Approved',
    submittedAt: 'Aug 29, 2026',
    updatedAt: 'Aug 30, 2026',
  },
  {
    id: '2',
    applicationNumber: 'LN-2026-00123',
    loanType: 'Business Loan',
    amount: '₱350,000',
    status: 'Pending Documents',
    submittedAt: 'Aug 28, 2026',
    updatedAt: 'Aug 29, 2026',
  },
  {
    id: '3',
    applicationNumber: 'LN-2026-00122',
    loanType: 'Personal Loan',
    amount: '₱100,000',
    status: 'Under Review',
    submittedAt: 'Aug 27, 2026',
    updatedAt: 'Aug 28, 2026',
  },
  {
    id: '4',
    applicationNumber: 'LN-2026-00121',
    loanType: 'Auto Loan',
    amount: '₱500,000',
    status: 'Approved',
    submittedAt: 'Aug 25, 2026',
    updatedAt: 'Aug 27, 2026',
  },
  {
    id: '5',
    applicationNumber: 'LN-2026-00120',
    loanType: 'Business Loan',
    amount: '₱250,000',
    status: 'Submitted',
    submittedAt: 'Aug 22, 2026',
    updatedAt: 'Aug 22, 2026',
  },
  {
    id: '6',
    applicationNumber: 'DRAFT-00119',
    loanType: 'Personal Loan',
    amount: '₱75,000',
    status: 'Draft',
    submittedAt: 'Not submitted',
    updatedAt: 'Aug 31, 2026',
  },
  {
    id: '7',
    applicationNumber: 'LN-2026-00118',
    loanType: 'Personal Loan',
    amount: '₱120,000',
    status: 'Rejected',
    submittedAt: 'Aug 18, 2026',
    updatedAt: 'Aug 21, 2026',
  },
];

export const applicationSummary: ApplicationSummary = {
  total: 24,
  pending: 8,
  approved: 12,
  rejected: 2,
};
import type {
  ApplicationFormData,
  EmploymentStatus,
  LoanTerm,
  LoanType,
} from '../types/application';

export const initialFormData: ApplicationFormData = {
  loanType: '',
  amount: '',
  purpose: '',
  employmentStatus: '',
  employerName: '',
  monthlyIncome: '',
  loanTerm: '',
  additionalInformation: '',
};

export const loanTypes: LoanType[] = [
  {
    value: 'personal',
    label: 'Personal Loan',
  },
  {
    value: 'business',
    label: 'Business Loan',
  },
  {
    value: 'auto',
    label: 'Auto Loan',
  },
  {
    value: 'home',
    label: 'Home Loan',
  },
];

export const employmentStatuses: EmploymentStatus[] = [
  {
    value: 'employed',
    label: 'Employed',
  },
  {
    value: 'self-employed',
    label: 'Self-Employed',
  },
  {
    value: 'business-owner',
    label: 'Business Owner',
  },
  {
    value: 'retired',
    label: 'Retired',
  },
  {
    value: 'other',
    label: 'Other',
  },
];

export const loanTerms: LoanTerm[] = [
  {
    value: '12',
    label: '12 months',
  },
  {
    value: '24',
    label: '24 months',
  },
  {
    value: '36',
    label: '36 months',
  },
  {
    value: '48',
    label: '48 months',
  },
  {
    value: '60',
    label: '60 months',
  },
];
