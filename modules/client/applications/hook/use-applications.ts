'use client';

import { useMemo, useState } from 'react';

import { initialFormData } from '../data/applications';
import type { ApplicationFormData } from '../types/application';

import type {
  ApplicationFilters,
  ApplicationStatus,
  LoanApplication,
} from '../types/application';

export function useApplications(applications: LoanApplication[]) {
  const [filters, setFilters] = useState<ApplicationFilters>({
    search: '',
    status: 'all',
  });

  const filteredApplications = useMemo(() => {
    const search = filters.search.trim().toLowerCase();

    return applications.filter((application) => {
      const matchesSearch =
        !search ||
        application.applicationNumber.toLowerCase().includes(search) ||
        application.loanType.toLowerCase().includes(search) ||
        application.status.toLowerCase().includes(search);

      const matchesStatus =
        filters.status === 'all' || application.status === filters.status;

      return matchesSearch && matchesStatus;
    });
  }, [applications, filters]);

  function setSearch(value: string) {
    setFilters((current) => ({
      ...current,
      search: value,
    }));
  }

  function setStatus(value: 'all' | ApplicationStatus) {
    setFilters((current) => ({
      ...current,
      status: value,
    }));
  }

  function clearFilters() {
    setFilters({
      search: '',
      status: 'all',
    });
  }

  return {
    filters,
    filteredApplications,
    setSearch,
    setStatus,
    clearFilters,
  };
}

export function useApplicationForm() {
  const [formData, setFormData] =
    useState<ApplicationFormData>(initialFormData);

  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function updateField<K extends keyof ApplicationFormData>(
    field: K,
    value: ApplicationFormData[K],
  ) {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function nextStep() {
    setStep((current) => Math.min(current + 1, 3));
  }

  function previousStep() {
    setStep((current) => Math.max(current - 1, 1));
  }

  function goToStep(value: number) {
    setStep(Math.min(Math.max(value, 1), 3));
  }

  async function submitApplication(onSuccess?: () => void) {
    setIsSubmitting(true);

    try {
      // Replace this with your API/server action later.
      await new Promise((resolve) => setTimeout(resolve, 800));

      onSuccess?.();
    } finally {
      setIsSubmitting(false);
    }
  }

  return {
    formData,
    step,
    isSubmitting,
    updateField,
    nextStep,
    previousStep,
    goToStep,
    submitApplication,
  };
}
