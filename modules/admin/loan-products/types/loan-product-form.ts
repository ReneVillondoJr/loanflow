export type LoanProductCategory =
  | 'PERSONAL'
  | 'BUSINESS'
  | 'AUTO'
  | 'HOME'
  | 'EDUCATION';

export type LoanProductStatus = 'ACTIVE' | 'INACTIVE' | 'DRAFT';

export interface LoanProduct {
  id: string;
  name: string;
  code: string;
  description: string;
  category: LoanProductCategory;
  minAmount: number;
  maxAmount: number;
  minTerm: number;
  maxTerm: number;
  interestRate: number;
  processingFee: number;
  status: LoanProductStatus;
  applications: number;
  createdAt: string;
  updatedAt: string;
}

export interface LoanProductFormData {
  name: string;
  code: string;
  description: string;
  category: LoanProductCategory;
  minAmount: string;
  maxAmount: string;
  minTerm: string;
  maxTerm: string;
  interestRate: string;
  processingFee: string;
  status: LoanProductStatus;
}

export interface LoanProductFormErrors {
  name?: string;
  code?: string;
  description?: string;
  minAmount?: string;
  maxAmount?: string;
  minTerm?: string;
  maxTerm?: string;
  interestRate?: string;
  processingFee?: string;
}
