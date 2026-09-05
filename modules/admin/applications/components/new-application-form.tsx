'use client';

import type { FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, CheckCircle2, FileText, Loader2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

import { useNewApplication } from '../hooks/use-new-applications';

export function NewApplicationForm() {
  const router = useRouter();

  const { form, errors, isSubmitting, updateField, submitApplication } =
    useNewApplication();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const success = await submitApplication();

    if (success) {
      router.push('/admin/applications');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-5'>
      {/* Header */}
      <div className='flex items-center gap-3'>
        <Button
          type='button'
          variant='ghost'
          size='icon'
          onClick={() => router.push('/admin/applications')}
          className='size-9 shrink-0'
        >
          <ArrowLeft className='size-4' />
          <span className='sr-only'>Back to applications</span>
        </Button>

        <div className='min-w-0'>
          <h1 className='text-xl font-semibold tracking-tight'>
            New Application
          </h1>

          <p className='text-sm text-muted-foreground'>
            Create a new customer loan application.
          </p>
        </div>
      </div>

      {/* Application Details */}
      <Card>
        <CardHeader className='pb-4'>
          <div className='flex items-center gap-3'>
            <div className='flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted'>
              <FileText className='size-4 text-muted-foreground' />
            </div>

            <div>
              <CardTitle className='text-sm font-medium'>
                Application Details
              </CardTitle>

              <p className='text-xs text-muted-foreground'>
                Basic information about the loan request.
              </p>
            </div>
          </div>
        </CardHeader>

        <CardContent className='space-y-5'>
          {/* Customer / Loan Product */}
          <div className='grid gap-5 md:grid-cols-2'>
            {/* Customer */}
            <div className='space-y-2'>
              <label htmlFor='customer' className='text-sm font-medium'>
                Customer
                <span className='ml-1 text-destructive'>*</span>
              </label>

              <Select
                value={form.customerId}
                onValueChange={(value) => {
                  if (value !== null) {
                    updateField('customerId', value);
                  }
                }}
              >
                <SelectTrigger id='customer' className='h-10'>
                  <SelectValue placeholder='Select customer' />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value='customer-001'>Juan Dela Cruz</SelectItem>

                  <SelectItem value='customer-002'>Maria Santos</SelectItem>

                  <SelectItem value='customer-003'>Pedro Reyes</SelectItem>

                  <SelectItem value='customer-004'>Ana Garcia</SelectItem>

                  <SelectItem value='customer-005'>Carlos Mendoza</SelectItem>
                </SelectContent>
              </Select>

              {errors.customerId && (
                <p className='text-xs text-destructive'>{errors.customerId}</p>
              )}
            </div>

            {/* Loan Product */}
            <div className='space-y-2'>
              <label htmlFor='loan-product' className='text-sm font-medium'>
                Loan Product
                <span className='ml-1 text-destructive'>*</span>
              </label>

              <Select
                value={form.loanProductId}
                onValueChange={(value) => {
                  if (value !== null) {
                    updateField('loanProductId', value);
                  }
                }}
              >
                <SelectTrigger id='loan-product' className='h-10'>
                  <SelectValue placeholder='Select loan product' />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value='personal-loan'>Personal Loan</SelectItem>

                  <SelectItem value='business-loan'>Business Loan</SelectItem>

                  <SelectItem value='auto-loan'>Auto Loan</SelectItem>

                  <SelectItem value='home-loan'>Home Loan</SelectItem>

                  <SelectItem value='education-loan'>Education Loan</SelectItem>
                </SelectContent>
              </Select>

              {errors.loanProductId && (
                <p className='text-xs text-destructive'>
                  {errors.loanProductId}
                </p>
              )}
            </div>
          </div>

          {/* Loan Amount / Term / Purpose */}
          <div className='grid gap-5 md:grid-cols-3'>
            {/* Loan Amount */}
            <div className='space-y-2'>
              <label htmlFor='loan-amount' className='text-sm font-medium'>
                Loan Amount
                <span className='ml-1 text-destructive'>*</span>
              </label>

              <div className='relative'>
                <span className='absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground'>
                  ₱
                </span>

                <Input
                  id='loan-amount'
                  type='number'
                  min='1'
                  step='1000'
                  value={form.loanAmount}
                  onChange={(event) =>
                    updateField('loanAmount', event.target.value)
                  }
                  placeholder='100,000'
                  className='h-10 pl-8'
                />
              </div>

              {errors.loanAmount && (
                <p className='text-xs text-destructive'>{errors.loanAmount}</p>
              )}
            </div>

            {/* Loan Term */}
            <div className='space-y-2'>
              <label htmlFor='loan-term' className='text-sm font-medium'>
                Loan Term
                <span className='ml-1 text-destructive'>*</span>
              </label>

              <Select
                value={form.loanTerm}
                onValueChange={(value) => {
                  if (value !== null) {
                    updateField('loanTerm', value);
                  }
                }}
              >
                <SelectTrigger id='loan-term' className='h-10'>
                  <SelectValue placeholder='Select term' />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value='6'>6 months</SelectItem>

                  <SelectItem value='12'>12 months</SelectItem>

                  <SelectItem value='18'>18 months</SelectItem>

                  <SelectItem value='24'>24 months</SelectItem>

                  <SelectItem value='36'>36 months</SelectItem>

                  <SelectItem value='48'>48 months</SelectItem>

                  <SelectItem value='60'>60 months</SelectItem>
                </SelectContent>
              </Select>

              {errors.loanTerm && (
                <p className='text-xs text-destructive'>{errors.loanTerm}</p>
              )}
            </div>

            {/* Purpose */}
            <div className='space-y-2'>
              <label htmlFor='purpose' className='text-sm font-medium'>
                Loan Purpose
                <span className='ml-1 text-destructive'>*</span>
              </label>

              <Select
                value={form.purpose}
                onValueChange={(value) => {
                  if (value !== null) {
                    updateField('purpose', value);
                  }
                }}
              >
                <SelectTrigger id='purpose' className='h-10'>
                  <SelectValue placeholder='Select purpose' />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value='PERSONAL'>Personal Expenses</SelectItem>

                  <SelectItem value='DEBT_CONSOLIDATION'>
                    Debt Consolidation
                  </SelectItem>

                  <SelectItem value='BUSINESS'>Business</SelectItem>

                  <SelectItem value='HOME_IMPROVEMENT'>
                    Home Improvement
                  </SelectItem>

                  <SelectItem value='EDUCATION'>Education</SelectItem>

                  <SelectItem value='MEDICAL'>Medical Expenses</SelectItem>

                  <SelectItem value='OTHER'>Other</SelectItem>
                </SelectContent>
              </Select>

              {errors.purpose && (
                <p className='text-xs text-destructive'>{errors.purpose}</p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Financial Information */}
      <Card>
        <CardHeader className='pb-4'>
          <CardTitle className='text-sm font-medium'>
            Financial Information
          </CardTitle>

          <p className='text-xs text-muted-foreground'>
            Customer employment and income details.
          </p>
        </CardHeader>

        <CardContent>
          <div className='grid gap-5 md:grid-cols-3'>
            {/* Employment Status */}
            <div className='space-y-2'>
              <label
                htmlFor='employment-status'
                className='text-sm font-medium'
              >
                Employment Status
                <span className='ml-1 text-destructive'>*</span>
              </label>

              <Select
                value={form.employmentStatus}
                onValueChange={(value) => {
                  if (value !== null) {
                    updateField('employmentStatus', value);
                  }
                }}
              >
                <SelectTrigger id='employment-status' className='h-10'>
                  <SelectValue placeholder='Select status' />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value='EMPLOYED'>Employed</SelectItem>

                  <SelectItem value='SELF_EMPLOYED'>Self-employed</SelectItem>

                  <SelectItem value='BUSINESS_OWNER'>Business Owner</SelectItem>

                  <SelectItem value='CONTRACTOR'>Contractor</SelectItem>

                  <SelectItem value='RETIRED'>Retired</SelectItem>
                </SelectContent>
              </Select>

              {errors.employmentStatus && (
                <p className='text-xs text-destructive'>
                  {errors.employmentStatus}
                </p>
              )}
            </div>

            {/* Monthly Income */}
            <div className='space-y-2'>
              <label htmlFor='monthly-income' className='text-sm font-medium'>
                Monthly Income
                <span className='ml-1 text-destructive'>*</span>
              </label>

              <div className='relative'>
                <span className='absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground'>
                  ₱
                </span>

                <Input
                  id='monthly-income'
                  type='number'
                  min='0'
                  step='1000'
                  value={form.monthlyIncome}
                  onChange={(event) =>
                    updateField('monthlyIncome', event.target.value)
                  }
                  placeholder='50,000'
                  className='h-10 pl-8'
                />
              </div>

              {errors.monthlyIncome && (
                <p className='text-xs text-destructive'>
                  {errors.monthlyIncome}
                </p>
              )}
            </div>

            {/* Employer */}
            <div className='space-y-2'>
              <label htmlFor='employer' className='text-sm font-medium'>
                Employer / Business
              </label>

              <Input
                id='employer'
                value={form.employer}
                onChange={(event) =>
                  updateField('employer', event.target.value)
                }
                placeholder='Company or business name'
                className='h-10'
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Additional Information */}
      <Card>
        <CardHeader className='pb-4'>
          <CardTitle className='text-sm font-medium'>
            Additional Information
          </CardTitle>

          <p className='text-xs text-muted-foreground'>
            Optional notes for this application.
          </p>
        </CardHeader>

        <CardContent>
          <Textarea
            id='notes'
            value={form.notes}
            onChange={(event) => updateField('notes', event.target.value)}
            placeholder='Add notes about this application...'
            rows={4}
          />
        </CardContent>
      </Card>

      {/* Actions */}
      <div className='flex flex-col-reverse gap-3 border-t pt-5 sm:flex-row sm:justify-end'>
        <Button
          type='button'
          variant='outline'
          onClick={() => router.push('/admin/applications')}
          disabled={isSubmitting}
        >
          Cancel
        </Button>

        <Button type='submit' disabled={isSubmitting} className='gap-2'>
          {isSubmitting ?
            <>
              <Loader2 className='size-4 animate-spin' />
              Creating...
            </>
          : <>
              <CheckCircle2 className='size-4' />
              Create Application
            </>
          }
        </Button>
      </div>
    </form>
  );
}
