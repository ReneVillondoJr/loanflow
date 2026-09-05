'use client';

import { useState } from 'react';

export interface NewApplicationFormData {
  loanProduct: string;
  loanAmount: string;
  loanTerm: string;
  purpose: string;
  employmentStatus: string;
  employer: string;
  monthlyIncome: string;
  notes: string;
}

export interface NewApplicationFormErrors {
  loanProduct?: string;
  loanAmount?: string;
  loanTerm?: string;
  purpose?: string;
  employmentStatus?: string;
  employer?: string;
  monthlyIncome?: string;
  notes?: string;
}

const initialForm: NewApplicationFormData = {
  loanProduct: '',
  loanAmount: '',
  loanTerm: '',
  purpose: '',
  employmentStatus: '',
  employer: '',
  monthlyIncome: '',
  notes: '',
};

export function useNewApplication() {
  const [form, setForm] = useState<NewApplicationFormData>(initialForm);

  const [errors, setErrors] = useState<NewApplicationFormErrors>({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  function updateField(field: keyof NewApplicationFormData, value: string) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));

    setErrors((current) => ({
      ...current,
      [field]: undefined,
    }));
  }

  function validate(): boolean {
    const nextErrors: NewApplicationFormErrors = {};

    if (!form.loanProduct) {
      nextErrors.loanProduct = 'Please select a loan product.';
    }

    if (!form.loanAmount) {
      nextErrors.loanAmount = 'Please enter the loan amount.';
    } else if (Number(form.loanAmount) <= 0) {
      nextErrors.loanAmount = 'Loan amount must be greater than 0.';
    }

    if (!form.loanTerm) {
      nextErrors.loanTerm = 'Please select a loan term.';
    }

    if (!form.purpose) {
      nextErrors.purpose = 'Please select the loan purpose.';
    }

    if (!form.employmentStatus) {
      nextErrors.employmentStatus = 'Please select your employment status.';
    }

    if (form.employmentStatus !== 'Unemployed' && !form.employer.trim()) {
      nextErrors.employer = 'Please enter your employer or business name.';
    }

    if (!form.monthlyIncome) {
      nextErrors.monthlyIncome = 'Please enter your monthly income.';
    } else if (Number(form.monthlyIncome) < 0) {
      nextErrors.monthlyIncome = 'Monthly income cannot be negative.';
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  }

  async function submitApplication(): Promise<boolean> {
    if (!validate()) {
      return false;
    }

    setIsSubmitting(true);

    try {
      /*
       * Temporary local submission.
       *
       * Replace this section later with your API/database call.
       */
      await new Promise((resolve) => setTimeout(resolve, 700));

      console.log('New loan application:', form);

      return true;
    } catch (error) {
      console.error('Failed to submit application:', error);

      return false;
    } finally {
      setIsSubmitting(false);
    }
  }

  function resetForm() {
    setForm(initialForm);
    setErrors({});
    setIsSubmitting(false);
  }

  return {
    form,
    errors,
    isSubmitting,
    updateField,
    validate,
    submitApplication,
    resetForm,
  };
}
