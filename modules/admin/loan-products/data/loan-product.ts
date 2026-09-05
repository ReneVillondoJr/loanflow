import type { LoanProduct } from '../types/loan-product';

export const loanProductsData: LoanProduct[] = [
  {
    id: 'lp_001',

    name: 'Personal Loan',

    code: 'PL-001',

    description:
      'Flexible personal financing for everyday expenses and personal needs.',

    category: 'PERSONAL',

    minAmount: 10000,

    maxAmount: 500000,

    minTerm: 6,

    maxTerm: 60,

    interestRate: 12.5,

    processingFee: 1500,

    status: 'ACTIVE',

    applications: 124,

    createdAt: '2026-01-15',

    updatedAt: '2026-08-20',
  },

  {
    id: 'lp_002',

    name: 'Business Growth Loan',

    code: 'BL-001',

    description:
      'Funding solution designed to help businesses expand and grow.',

    category: 'BUSINESS',

    minAmount: 50000,

    maxAmount: 2000000,

    minTerm: 12,

    maxTerm: 84,

    interestRate: 10.5,

    processingFee: 5000,

    status: 'ACTIVE',

    applications: 87,

    createdAt: '2026-02-10',

    updatedAt: '2026-08-15',
  },

  {
    id: 'lp_003',

    name: 'Auto Loan',

    code: 'AL-001',

    description:
      'Affordable vehicle financing with flexible repayment options.',

    category: 'AUTO',

    minAmount: 100000,

    maxAmount: 3000000,

    minTerm: 12,

    maxTerm: 72,

    interestRate: 8.75,

    processingFee: 3000,

    status: 'ACTIVE',

    applications: 56,

    createdAt: '2026-03-05',

    updatedAt: '2026-08-01',
  },

  {
    id: 'lp_004',

    name: 'Home Improvement Loan',

    code: 'HL-001',

    description: 'Finance your home renovation and improvement projects.',

    category: 'HOME',

    minAmount: 50000,

    maxAmount: 1500000,

    minTerm: 12,

    maxTerm: 120,

    interestRate: 9.5,

    processingFee: 4000,

    status: 'INACTIVE',

    applications: 32,

    createdAt: '2026-04-12',

    updatedAt: '2026-07-22',
  },

  {
    id: 'lp_005',

    name: 'Education Loan',

    code: 'EL-001',

    description: 'Financial assistance for education and academic expenses.',

    category: 'EDUCATION',

    minAmount: 20000,

    maxAmount: 750000,

    minTerm: 12,

    maxTerm: 60,

    interestRate: 7.5,

    processingFee: 2000,

    status: 'DRAFT',

    applications: 0,

    createdAt: '2026-08-10',

    updatedAt: '2026-08-10',
  },
];
