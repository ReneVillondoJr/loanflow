'use client';

import { useState } from 'react';

import type {
  AddCustomerFormData,
  AddCustomerFormErrors,
} from '../types/customer';

const initialForm: AddCustomerFormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  dateOfBirth: '',
  address: '',
  city: '',
  province: '',
  postalCode: '',
  employmentStatus: '',
  employer: '',
  monthlyIncome: '',
  notes: '',
};

export function useAddCustomer() {
  const [form, setForm] = useState<AddCustomerFormData>(initialForm);

  const [errors, setErrors] = useState<AddCustomerFormErrors>({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = <K extends keyof AddCustomerFormData>(
    field: K,
    value: AddCustomerFormData[K],
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
    const nextErrors: AddCustomerFormErrors = {};

    if (!form.firstName.trim()) {
      nextErrors.firstName = 'First name is required.';
    }

    if (!form.lastName.trim()) {
      nextErrors.lastName = 'Last name is required.';
    }

    if (!form.email.trim()) {
      nextErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = 'Enter a valid email address.';
    }

    if (!form.phone.trim()) {
      nextErrors.phone = 'Phone number is required.';
    }

    if (!form.dateOfBirth) {
      nextErrors.dateOfBirth = 'Date of birth is required.';
    }

    if (!form.address.trim()) {
      nextErrors.address = 'Address is required.';
    }

    if (!form.city.trim()) {
      nextErrors.city = 'City is required.';
    }

    if (!form.province.trim()) {
      nextErrors.province = 'Province is required.';
    }

    if (!form.employmentStatus) {
      nextErrors.employmentStatus = 'Employment status is required.';
    }

    if (!form.monthlyIncome) {
      nextErrors.monthlyIncome = 'Monthly income is required.';
    } else if (Number(form.monthlyIncome) < 0) {
      nextErrors.monthlyIncome = 'Monthly income cannot be negative.';
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  };

  const submitCustomer = async () => {
    if (!validate()) {
      return false;
    }

    setIsSubmitting(true);

    try {
      // Connect your API/server action here.
      await new Promise((resolve) => setTimeout(resolve, 700));

      return true;
    } catch (error) {
      console.error('Failed to create customer:', error);

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
    submitCustomer,
    resetForm,
  };
}
