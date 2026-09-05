'use client';

import { useState } from 'react';

import type {
  NewApplicationFormData,
  NewApplicationFormErrors,
} from '../types/new-applications';

const initialForm: NewApplicationFormData = {
  customerId: '',
  loanProductId: '',
  loanAmount: '',
  loanTerm: '',
  purpose: '',
  employmentStatus: '',
  monthlyIncome: '',
  employer: '',
  notes: '',
};

export function useNewApplication() {
  const [form, setForm] = useState<NewApplicationFormData>(initialForm);

  const [errors, setErrors] = useState<NewApplicationFormErrors>({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = <K extends keyof NewApplicationFormData>(
    field: K,
    value: NewApplicationFormData[K],
  ) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));

    setErrors((current) => ({
      ...current,
      [field]: undefined,
    }));
  };

  const validate = () => {
    const nextErrors: NewApplicationFormErrors = {};

    if (!form.customerId) {
      nextErrors.customerId = 'Please select a customer.';
    }

    if (!form.loanProductId) {
      nextErrors.loanProductId = 'Please select a loan product.';
    }

    if (!form.loanAmount) {
      nextErrors.loanAmount = 'Please enter a loan amount.';
    } else if (Number(form.loanAmount) <= 0) {
      nextErrors.loanAmount = 'Loan amount must be greater than zero.';
    }

    if (!form.loanTerm) {
      nextErrors.loanTerm = 'Please select a loan term.';
    }

    if (!form.purpose) {
      nextErrors.purpose = 'Please select a loan purpose.';
    }

    if (!form.employmentStatus) {
      nextErrors.employmentStatus = 'Please select an employment status.';
    }

    if (!form.monthlyIncome) {
      nextErrors.monthlyIncome = 'Please enter the monthly income.';
    } else if (Number(form.monthlyIncome) < 0) {
      nextErrors.monthlyIncome = 'Monthly income cannot be negative.';
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  };

  const submitApplication = async () => {
    if (!validate()) {
      return false;
    }

    setIsSubmitting(true);

    try {
      /*
       * Replace this with your API/server action when
       * your application endpoint is ready.
       *
       * Example:
       *
       * const response = await fetch('/api/applications', {
       *   method: 'POST',
       *   headers: {
       *     'Content-Type': 'application/json',
       *   },
       *   body: JSON.stringify(form),
       * });
       *
       * if (!response.ok) {
       *   throw new Error('Failed to create application');
       * }
       */

      await new Promise((resolve) => setTimeout(resolve, 700));

      return true;
    } catch (error) {
      console.error('Failed to create application:', error);

      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setForm(initialForm);
    setErrors({});
  };

  return {
    form,
    errors,
    isSubmitting,
    updateField,
    submitApplication,
    resetForm,
  };
}
