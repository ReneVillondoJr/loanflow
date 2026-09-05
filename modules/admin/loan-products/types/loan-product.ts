export type LoanProductStatus = 'ACTIVE' | 'INACTIVE' | 'DRAFT';

export type LoanProductCategory =
  | 'PERSONAL'
  | 'BUSINESS'
  | 'AUTO'
  | 'HOME'
  | 'EDUCATION';

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

export interface LoanProductFilters {
  search: string;

  category: LoanProductCategory | 'ALL';

  status: LoanProductStatus | 'ALL';
}

export interface LoanProductStats {
  total: number;

  active: number;

  inactive: number;

  draft: number;
}

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

export interface LoanProductFilters {
  search: string;
  category: LoanProductCategory | 'ALL';
  status: LoanProductStatus | 'ALL';
}

export interface LoanProductStats {
  total: number;
  active: number;
  inactive: number;
  draft: number;
}
