'use client';

import { FormProgress } from './form-progress';
import { LoanDetailsCard } from './loan-details-card';
import { FinancialInformationCard } from './financial-information-card';
import { ReviewApplicationCard } from './review-application-card';
import { FormActions } from './form-actions';

import { useApplicationForm } from '@/modules/client/applications/hook/use-applications';

import type { ApplicationFormProps } from '@/modules/client/applications/types/application';

export function ApplicationForm({ onSuccess }: ApplicationFormProps) {
  const {
    formData,
    step,
    isSubmitting,
    updateField,
    nextStep,
    previousStep,
    submitApplication,
  } = useApplicationForm();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    await submitApplication(onSuccess);
  }

  return (
    <form onSubmit={handleSubmit} className='space-y-6'>
      <FormProgress currentStep={step} />

      {step === 1 && (
        <LoanDetailsCard formData={formData} updateField={updateField} />
      )}

      {step === 2 && (
        <FinancialInformationCard
          formData={formData}
          updateField={updateField}
        />
      )}

      {step === 3 && <ReviewApplicationCard formData={formData} />}

      <FormActions
        step={step}
        isSubmitting={isSubmitting}
        onPrevious={previousStep}
        onNext={nextStep}
      />
    </form>
  );
}
