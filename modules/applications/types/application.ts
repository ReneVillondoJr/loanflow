export type ApplicationFormData = {
  loanProductId: string;

  requestedAmount: number;
  termMonths: number;
  purpose: string;

  firstName: string;
  middleName: string;
  lastName: string;
  dateOfBirth: string;
  civilStatus: string;
  nationality: string;

  phone: string;
  alternatePhone: string;

  address: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;

  employmentStatus: string;
  employerName: string;
  jobTitle: string;
  employmentYears: number;
  monthlyIncome: number;

  monthlyExpenses: number;
  existingDebt: number;
};
