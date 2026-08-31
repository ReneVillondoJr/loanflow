'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

import { ApplicationProgress } from './application-progress';

export function ApplicationForm() {
  const [step, setStep] = useState(1);

  const next = () => {
    setStep((current) => Math.min(current + 1, 6));
  };

  const previous = () => {
    setStep((current) => Math.max(current - 1, 1));
  };

  return (
    <div>
      <ApplicationProgress currentStep={step} />

      <Card>
        <CardContent className='p-6 md:p-8'>
          {step === 1 && <LoanDetailsStep />}

          {step === 2 && <PersonalInformationStep />}

          {step === 3 && <EmploymentStep />}

          {step === 4 && <FinancialStep />}

          {step === 5 && <DocumentsStep />}

          {step === 6 && <ReviewStep />}

          <div className='mt-8 flex items-center justify-between border-t pt-6'>
            <Button
              type='button'
              variant='outline'
              onClick={previous}
              disabled={step === 1}
            >
              Back
            </Button>

            {step < 6 ?
              <Button type='button' onClick={next}>
                Continue
              </Button>
            : <Button type='button'>Submit Application</Button>}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function LoanDetailsStep() {
  return (
    <div className='space-y-6'>
      <div>
        <h2 className='text-lg font-semibold'>Loan Details</h2>

        <p className='text-sm text-muted-foreground'>
          Tell us how much you would like to borrow.
        </p>
      </div>

      <div className='grid gap-6 md:grid-cols-2'>
        <FormField label='Loan Amount' placeholder='25,000' type='number' />

        <FormField label='Loan Term' placeholder='Select term' />
      </div>

      <FormField
        label='Loan Purpose'
        placeholder='What will you use the loan for?'
      />
    </div>
  );
}

function PersonalInformationStep() {
  return (
    <div className='space-y-6'>
      <div>
        <h2 className='text-lg font-semibold'>Personal Information</h2>

        <p className='text-sm text-muted-foreground'>
          Provide your personal information.
        </p>
      </div>

      <div className='grid gap-6 md:grid-cols-3'>
        <FormField label='First Name' placeholder='John' />

        <FormField label='Middle Name' placeholder='Michael' />

        <FormField label='Last Name' placeholder='Smith' />
      </div>

      <div className='grid gap-6 md:grid-cols-2'>
        <FormField label='Date of Birth' type='date' />

        <FormField label='Civil Status' placeholder='Select status' />
      </div>

      <div className='grid gap-6 md:grid-cols-2'>
        <FormField label='Phone Number' placeholder='+63 900 000 0000' />

        <FormField label='Alternate Phone' placeholder='+63 900 000 0000' />
      </div>

      <FormField label='Address' placeholder='Street address' />

      <div className='grid gap-6 md:grid-cols-3'>
        <FormField label='City' placeholder='City' />

        <FormField label='Province / State' placeholder='Province' />

        <FormField label='Postal Code' placeholder='9000' />
      </div>
    </div>
  );
}

function EmploymentStep() {
  return (
    <div className='space-y-6'>
      <div>
        <h2 className='text-lg font-semibold'>Employment & Income</h2>

        <p className='text-sm text-muted-foreground'>
          Tell us about your current employment and income.
        </p>
      </div>

      <div className='grid gap-6 md:grid-cols-2'>
        <FormField label='Employment Status' placeholder='Select status' />

        <FormField label='Employer Name' placeholder='Company name' />
      </div>

      <div className='grid gap-6 md:grid-cols-2'>
        <FormField label='Job Title' placeholder='Software Developer' />

        <FormField label='Years Employed' placeholder='3' type='number' />
      </div>

      <FormField label='Monthly Income' placeholder='50,000' type='number' />
    </div>
  );
}

function FinancialStep() {
  return (
    <div className='space-y-6'>
      <div>
        <h2 className='text-lg font-semibold'>Financial Information</h2>

        <p className='text-sm text-muted-foreground'>
          Help us understand your current financial position.
        </p>
      </div>

      <div className='grid gap-6 md:grid-cols-2'>
        <FormField
          label='Monthly Expenses'
          placeholder='20,000'
          type='number'
        />

        <FormField label='Existing Debt' placeholder='10,000' type='number' />
      </div>
    </div>
  );
}

function DocumentsStep() {
  return (
    <div className='space-y-6'>
      <div>
        <h2 className='text-lg font-semibold'>Supporting Documents</h2>

        <p className='text-sm text-muted-foreground'>
          Upload the documents required for your application.
        </p>
      </div>

      <div className='grid gap-4'>
        <DocumentUpload
          title='Government ID'
          description='Upload a valid government-issued ID.'
        />

        <DocumentUpload
          title='Proof of Income'
          description='Payslip, certificate of employment, or equivalent.'
        />

        <DocumentUpload
          title='Bank Statement'
          description='Recent bank statement if required.'
        />
      </div>
    </div>
  );
}

function ReviewStep() {
  return (
    <div className='space-y-6'>
      <div>
        <h2 className='text-lg font-semibold'>Review Your Application</h2>

        <p className='text-sm text-muted-foreground'>
          Review your information before submitting.
        </p>
      </div>

      <div className='grid gap-4 md:grid-cols-2'>
        <SummaryItem label='Requested Amount' value='₱25,000' />

        <SummaryItem label='Loan Term' value='24 months' />

        <SummaryItem label='Applicant' value='John Michael Smith' />

        <SummaryItem label='Monthly Income' value='₱50,000' />
      </div>

      <div className='rounded-lg border bg-muted/30 p-4'>
        <p className='text-sm font-medium'>Application Declaration</p>

        <p className='mt-1 text-sm text-muted-foreground'>
          By submitting this application, you confirm that the information
          provided is accurate and complete.
        </p>
      </div>
    </div>
  );
}

function FormField({
  label,
  placeholder,
  type = 'text',
}: {
  label: string;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div className='space-y-2'>
      <label className='text-sm font-medium'>{label}</label>

      <input
        type={type}
        placeholder={placeholder}
        className='flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm outline-none ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring'
      />
    </div>
  );
}

function DocumentUpload({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className='rounded-lg border border-dashed p-5'>
      <div className='mb-3'>
        <p className='text-sm font-medium'>{title}</p>

        <p className='text-xs text-muted-foreground'>{description}</p>
      </div>

      <input type='file' className='block w-full text-sm' />
    </div>
  );
}

function SummaryItem({ label, value }: { label: string; value: string }) {
  return (
    <div className='rounded-lg border p-4'>
      <p className='text-xs text-muted-foreground'>{label}</p>

      <p className='mt-1 font-medium'>{value}</p>
    </div>
  );
}
