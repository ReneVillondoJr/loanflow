import { z } from 'zod';

export const applicationSchema = z.object({
  loanProductId: z.string().min(1),

  requestedAmount: z.number().positive(),
  termMonths: z.number().int().positive(),
  purpose: z.string().min(2),

  firstName: z.string().min(2),
  middleName: z.string().optional(),
  lastName: z.string().min(2),
  dateOfBirth: z.string().min(1),
  civilStatus: z.string().min(1),
  nationality: z.string().min(2),

  phone: z.string().min(7),
  alternatePhone: z.string().optional(),

  address: z.string().min(5),
  city: z.string().min(2),
  state: z.string().min(2),
  postalCode: z.string().min(2),
  country: z.string().min(2),

  employmentStatus: z.string().min(1),
  employerName: z.string().min(2),
  jobTitle: z.string().min(2),
  employmentYears: z.number().min(0),
  monthlyIncome: z.number().positive(),

  monthlyExpenses: z.number().min(0),
  existingDebt: z.number().min(0),
});

export type ApplicationSchema = z.infer<typeof applicationSchema>;
