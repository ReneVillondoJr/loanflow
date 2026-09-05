export interface NewApplicationFormData {
  customerId: string;
  loanProductId: string;
  loanAmount: string;
  loanTerm: string;
  purpose: string;
  employmentStatus: string;
  monthlyIncome: string;
  employer: string;
  notes: string;
}

export interface NewApplicationFormErrors {
  customerId?: string;
  loanProductId?: string;
  loanAmount?: string;
  loanTerm?: string;
  purpose?: string;
  employmentStatus?: string;
  monthlyIncome?: string;
  employer?: string;
  notes?: string;
}
