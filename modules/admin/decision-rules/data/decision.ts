import type { DecisioningFilters, LoanDecision } from '../types/decision';

export const initialDecisioningFilters: DecisioningFilters = {
  search: '',

  status: 'ALL',

  riskLevel: 'ALL',

  loanType: 'ALL',
};

export const decisioningData: LoanDecision[] = [
  {
    id: 'DEC-001',

    applicationId: 'APP-2026-0001',

    customer: {
      id: 'CUS-001',

      name: 'Juan Dela Cruz',

      email: 'juan.delacruz@email.com',

      phone: '+63 912 345 6789',
    },

    application: {
      id: 'APP-2026-0001',

      applicationNumber: 'APP-2026-0001',

      loanType: 'PERSONAL',

      requestedAmount: 150000,

      requestedTerm: 24,
    },

    status: 'PENDING',

    riskLevel: 'MEDIUM',

    decisionScore: 72,

    recommendedAmount: 120000,

    recommendedTerm: 24,

    interestRate: 12.5,

    factors: {
      creditScore: 680,

      monthlyIncome: 45000,

      debtToIncomeRatio: 32,

      employmentYears: 4,

      existingLoans: 1,
    },

    notes:
      'Applicant meets minimum requirements. Income verification is recommended.',

    createdAt: '2026-09-01',

    updatedAt: '2026-09-01',
  },

  {
    id: 'DEC-002',

    applicationId: 'APP-2026-0002',

    customer: {
      id: 'CUS-002',

      name: 'Maria Santos',

      email: 'maria.santos@email.com',

      phone: '+63 917 123 4567',
    },

    application: {
      id: 'APP-2026-0002',

      applicationNumber: 'APP-2026-0002',

      loanType: 'BUSINESS',

      requestedAmount: 500000,

      requestedTerm: 36,
    },

    status: 'APPROVED',

    riskLevel: 'LOW',

    decisionScore: 91,

    recommendedAmount: 500000,

    recommendedTerm: 36,

    interestRate: 9.5,

    factors: {
      creditScore: 760,

      monthlyIncome: 120000,

      debtToIncomeRatio: 18,

      employmentYears: 8,

      existingLoans: 0,
    },

    notes: 'Strong credit profile and stable income.',

    createdAt: '2026-08-30',

    updatedAt: '2026-09-01',

    decidedAt: '2026-09-01',
  },

  {
    id: 'DEC-003',

    applicationId: 'APP-2026-0003',

    customer: {
      id: 'CUS-003',

      name: 'Carlos Reyes',

      email: 'carlos.reyes@email.com',

      phone: '+63 905 555 1234',
    },

    application: {
      id: 'APP-2026-0003',

      applicationNumber: 'APP-2026-0003',

      loanType: 'AUTO',

      requestedAmount: 800000,

      requestedTerm: 60,
    },

    status: 'MANUAL_REVIEW',

    riskLevel: 'HIGH',

    decisionScore: 48,

    recommendedAmount: 0,

    recommendedTerm: 0,

    interestRate: 0,

    factors: {
      creditScore: 580,

      monthlyIncome: 35000,

      debtToIncomeRatio: 48,

      employmentYears: 2,

      existingLoans: 3,
    },

    notes: 'High debt-to-income ratio requires manual review.',

    createdAt: '2026-09-02',

    updatedAt: '2026-09-02',
  },

  {
    id: 'DEC-004',

    applicationId: 'APP-2026-0004',

    customer: {
      id: 'CUS-004',

      name: 'Angela Garcia',

      email: 'angela.garcia@email.com',

      phone: '+63 918 222 8899',
    },

    application: {
      id: 'APP-2026-0004',

      applicationNumber: 'APP-2026-0004',

      loanType: 'HOME',

      requestedAmount: 2500000,

      requestedTerm: 120,
    },

    status: 'REJECTED',

    riskLevel: 'VERY_HIGH',

    decisionScore: 29,

    recommendedAmount: 0,

    recommendedTerm: 0,

    interestRate: 0,

    factors: {
      creditScore: 480,

      monthlyIncome: 28000,

      debtToIncomeRatio: 62,

      employmentYears: 1,

      existingLoans: 4,
    },

    notes:
      'Applicant does not meet minimum credit and affordability requirements.',

    createdAt: '2026-08-28',

    updatedAt: '2026-08-29',

    decidedAt: '2026-08-29',
  },

  {
    id: 'DEC-005',

    applicationId: 'APP-2026-0005',

    customer: {
      id: 'CUS-005',

      name: 'Robert Mendoza',

      email: 'robert.mendoza@email.com',

      phone: '+63 919 888 1111',
    },

    application: {
      id: 'APP-2026-0005',

      applicationNumber: 'APP-2026-0005',

      loanType: 'EDUCATION',

      requestedAmount: 100000,

      requestedTerm: 18,
    },

    status: 'APPROVED',

    riskLevel: 'LOW',

    decisionScore: 88,

    recommendedAmount: 100000,

    recommendedTerm: 18,

    interestRate: 8.5,

    factors: {
      creditScore: 730,

      monthlyIncome: 55000,

      debtToIncomeRatio: 20,

      employmentYears: 5,

      existingLoans: 0,
    },

    notes: 'Applicant qualifies for standard education loan terms.',

    createdAt: '2026-09-03',

    updatedAt: '2026-09-03',

    decidedAt: '2026-09-03',
  },
];
