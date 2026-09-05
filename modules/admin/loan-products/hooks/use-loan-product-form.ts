'use client';

import { useState } from 'react';

import { initialLoanProductFormData } from '../data/loan-form';

import type {
  LoanProduct,
  LoanProductFormData,
  LoanProductFormErrors,
} from '../types/loan-product-form';

function createProductId() {
  return `LP-${Date.now()}`;
}

function getToday() {
  return new Date().toISOString().split('T')[0];
}

export function useLoanProductForm() {
  const [formData, setFormData] = useState<LoanProductFormData>(
    initialLoanProductFormData,
  );

  const [errors, setErrors] = useState<LoanProductFormErrors>({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  function updateField<K extends keyof LoanProductFormData>(
    field: K,
    value: LoanProductFormData[K],
  ) {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [field]: undefined,
    }));
  }

  function validateForm() {
    const nextErrors: LoanProductFormErrors = {};

    const minAmount = Number(formData.minAmount);

    const maxAmount = Number(formData.maxAmount);

    const minTerm = Number(formData.minTerm);

    const maxTerm = Number(formData.maxTerm);

    const interestRate = Number(formData.interestRate);

    const processingFee = Number(formData.processingFee);

    /*
     * Basic Information
     */

    if (!formData.name.trim()) {
      nextErrors.name = 'Product name is required.';
    } else if (formData.name.trim().length < 3) {
      nextErrors.name = 'Product name must be at least 3 characters.';
    }

    if (!formData.code.trim()) {
      nextErrors.code = 'Product code is required.';
    } else if (!/^[A-Z0-9-]+$/.test(formData.code.trim())) {
      nextErrors.code = 'Use uppercase letters, numbers, and hyphens only.';
    }

    if (!formData.description.trim()) {
      nextErrors.description = 'Description is required.';
    }

    /*
     * Loan Amount
     */

    if (!formData.minAmount) {
      nextErrors.minAmount = 'Minimum amount is required.';
    } else if (!Number.isFinite(minAmount) || minAmount <= 0) {
      nextErrors.minAmount = 'Enter a valid minimum amount.';
    }

    if (!formData.maxAmount) {
      nextErrors.maxAmount = 'Maximum amount is required.';
    } else if (!Number.isFinite(maxAmount) || maxAmount <= 0) {
      nextErrors.maxAmount = 'Enter a valid maximum amount.';
    } else if (Number.isFinite(minAmount) && maxAmount < minAmount) {
      nextErrors.maxAmount =
        'Maximum amount must be greater than or equal to minimum amount.';
    }

    /*
     * Loan Term
     */

    if (!formData.minTerm) {
      nextErrors.minTerm = 'Minimum term is required.';
    } else if (!Number.isFinite(minTerm) || minTerm <= 0) {
      nextErrors.minTerm = 'Enter a valid minimum term.';
    }

    if (!formData.maxTerm) {
      nextErrors.maxTerm = 'Maximum term is required.';
    } else if (!Number.isFinite(maxTerm) || maxTerm <= 0) {
      nextErrors.maxTerm = 'Enter a valid maximum term.';
    } else if (Number.isFinite(minTerm) && maxTerm < minTerm) {
      nextErrors.maxTerm =
        'Maximum term must be greater than or equal to minimum term.';
    }

    /*
     * Pricing
     */

    if (!formData.interestRate) {
      nextErrors.interestRate = 'Interest rate is required.';
    } else if (!Number.isFinite(interestRate) || interestRate < 0) {
      nextErrors.interestRate = 'Enter a valid interest rate.';
    }

    if (!formData.processingFee) {
      nextErrors.processingFee = 'Processing fee is required.';
    } else if (!Number.isFinite(processingFee) || processingFee < 0) {
      nextErrors.processingFee = 'Enter a valid processing fee.';
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  }

  function createProduct(): LoanProduct | null {
    if (!validateForm()) {
      return null;
    }

    const today = getToday();

    const product: LoanProduct = {
      id: createProductId(),

      name: formData.name.trim(),

      code: formData.code.trim().toUpperCase(),

      description: formData.description.trim(),

      category: formData.category,

      minAmount: Number(formData.minAmount),

      maxAmount: Number(formData.maxAmount),

      minTerm: Number(formData.minTerm),

      maxTerm: Number(formData.maxTerm),

      interestRate: Number(formData.interestRate),

      processingFee: Number(formData.processingFee),

      status: formData.status,

      applications: 0,

      createdAt: today,

      updatedAt: today,
    };

    return product;
  }

  function resetForm() {
    setFormData(initialLoanProductFormData);

    setErrors({});
  }

  function startSubmitting() {
    setIsSubmitting(true);
  }

  function stopSubmitting() {
    setIsSubmitting(false);
  }

  return {
    formData,
    errors,
    isSubmitting,

    updateField,
    validateForm,
    createProduct,
    resetForm,

    startSubmitting,
    stopSubmitting,
  };
}
