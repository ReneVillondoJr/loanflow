export type CustomerStatus = 'ACTIVE' | 'PENDING' | 'INACTIVE';

export interface Customer {
  id: string;

  name: string;

  email: string;

  image: string | null;

  phone: string | null;

  status: CustomerStatus;

  createdAt: Date;

  applicationsCount: number;

  activeLoans: number;
}

export interface CustomerStatsData {
  total: number;

  active: number;

  pending: number;

  inactive: number;
}

export interface CustomerFilterState {
  search: string;

  status: string;
}

export interface AddCustomerFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  address: string;
  city: string;
  province: string;
  postalCode: string;
  employmentStatus: string;
  employer: string;
  monthlyIncome: string;
  notes: string;
}

export interface AddCustomerFormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  dateOfBirth?: string;
  address?: string;
  city?: string;
  province?: string;
  postalCode?: string;
  employmentStatus?: string;
  employer?: string;
  monthlyIncome?: string;
  notes?: string;
}
