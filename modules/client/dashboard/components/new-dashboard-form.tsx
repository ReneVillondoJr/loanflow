'use client';

import { useRouter } from 'next/navigation';

import { ArrowLeft, CheckCircle2, FileText } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

import { useNewApplication } from '../hooks/use-new-application';

export function NewApplicationForm() {
  const router = useRouter();

  const { form, errors, isSubmitting, updateField, submitApplication } =
    useNewApplication();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const success = await submitApplication();

    if (success) {
      router.push('/client/dashboard');
    }
  }

  return (
    <form onSubmit={handleSubmit} className='mx-auto w-full max-w-4xl pb-24'>
      <div className='space-y-6'>
        {/* =========================================================
            LOAN INFORMATION
        ========================================================= */}
        <section className='overflow-hidden rounded-xl border bg-card'>
          {/* Section Header */}
          <div className='flex items-start gap-3 border-b px-6 py-5'>
            <div className='flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary'>
              <FileText className='size-4' />
            </div>

            <div className='min-w-0'>
              <h2 className='text-sm font-semibold'>Loan Information</h2>
              <p className='mt-1 text-xs leading-5 text-muted-foreground'>
                Tell us about the loan you would like to apply for.
              </p>
            </div>
          </div>

          {/* Section Content */}
          <div className='space-y-5 px-6 py-6'>
            {/* Loan Product */}
            <div className='grid gap-2'>
              <Label htmlFor='loan-product'>Loan Product</Label>

              <select
                id='loan-product'
                value={form.loanProduct}
                onChange={(event) =>
                  updateField('loanProduct', event.target.value)
                }
                className='h-10 w-full rounded-md border bg-background px-3 text-sm outline-none transition-colors focus:border-ring focus:ring-2 focus:ring-ring/20'
              >
                <option value=''>Select a loan product</option>
                <option value='Personal Loan'>Personal Loan</option>
                <option value='Salary Loan'>Salary Loan</option>
                <option value='Business Loan'>Business Loan</option>
              </select>

              {errors.loanProduct && (
                <p className='text-xs font-medium text-destructive'>
                  {errors.loanProduct}
                </p>
              )}
            </div>

            {/* Amount + Term */}
            <div className='grid gap-5 md:grid-cols-2'>
              {/* Loan Amount */}
              <div className='grid gap-2'>
                <Label htmlFor='loan-amount'>Loan Amount</Label>

                <div className='relative'>
                  <span className='pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground'>
                    ₱
                  </span>

                  <Input
                    id='loan-amount'
                    type='number'
                    min='0'
                    placeholder='200,000'
                    value={form.loanAmount}
                    onChange={(event) =>
                      updateField('loanAmount', event.target.value)
                    }
                    className='h-10 pl-8'
                  />
                </div>

                <p className='text-xs leading-5 text-muted-foreground'>
                  Enter the amount you want to borrow.
                </p>

                {errors.loanAmount && (
                  <p className='text-xs font-medium text-destructive'>
                    {errors.loanAmount}
                  </p>
                )}
              </div>

              {/* Loan Term */}
              <div className='grid gap-2'>
                <Label htmlFor='loan-term'>Loan Term</Label>

                <select
                  id='loan-term'
                  value={form.loanTerm}
                  onChange={(event) =>
                    updateField('loanTerm', event.target.value)
                  }
                  className='h-10 w-full rounded-md border bg-background px-3 text-sm outline-none transition-colors focus:border-ring focus:ring-2 focus:ring-ring/20'
                >
                  <option value=''>Select loan term</option>
                  <option value='6'>6 months</option>
                  <option value='12'>12 months</option>
                  <option value='18'>18 months</option>
                  <option value='24'>24 months</option>
                  <option value='36'>36 months</option>
                  <option value='48'>48 months</option>
                </select>

                {errors.loanTerm ?
                  <p className='text-xs font-medium text-destructive'>
                    {errors.loanTerm}
                  </p>
                : <p aria-hidden className='text-xs leading-5 text-transparent'>
                    &nbsp;
                  </p>
                }
              </div>
            </div>

            {/* Loan Purpose */}
            <div className='grid gap-2'>
              <Label htmlFor='loan-purpose'>Loan Purpose</Label>

              <select
                id='loan-purpose'
                value={form.purpose}
                onChange={(event) => updateField('purpose', event.target.value)}
                className='h-10 w-full rounded-md border bg-background px-3 text-sm outline-none transition-colors focus:border-ring focus:ring-2 focus:ring-ring/20'
              >
                <option value=''>Select loan purpose</option>
                <option value='Debt Consolidation'>Debt Consolidation</option>
                <option value='Home Improvement'>Home Improvement</option>
                <option value='Education'>Education</option>
                <option value='Medical Expenses'>Medical Expenses</option>
                <option value='Business'>Business</option>
                <option value='Emergency Expenses'>Emergency Expenses</option>
                <option value='Personal Expenses'>Personal Expenses</option>
                <option value='Other'>Other</option>
              </select>

              {errors.purpose && (
                <p className='text-xs font-medium text-destructive'>
                  {errors.purpose}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* =========================================================
            EMPLOYMENT & INCOME
        ========================================================= */}
        <section className='overflow-hidden rounded-xl border bg-card'>
          {/* Section Header */}
          <div className='border-b px-6 py-5'>
            <h2 className='text-sm font-semibold'>Employment & Income</h2>
            <p className='mt-1 text-xs leading-5 text-muted-foreground'>
              Provide your current employment and financial information.
            </p>
          </div>

          {/* Section Content */}
          <div className='px-6 py-6'>
            <div className='grid gap-5 md:grid-cols-2'>
              {/* Employment Status */}
              <div className='grid gap-2'>
                <Label htmlFor='employment-status'>Employment Status</Label>

                <select
                  id='employment-status'
                  value={form.employmentStatus}
                  onChange={(event) =>
                    updateField('employmentStatus', event.target.value)
                  }
                  className='h-10 w-full rounded-md border bg-background px-3 text-sm outline-none transition-colors focus:border-ring focus:ring-2 focus:ring-ring/20'
                >
                  <option value=''>Select employment status</option>
                  <option value='Employed'>Employed</option>
                  <option value='Self-employed'>Self-employed</option>
                  <option value='Business Owner'>Business Owner</option>
                  <option value='Freelancer'>Freelancer</option>
                  <option value='Retired'>Retired</option>
                  <option value='Unemployed'>Unemployed</option>
                </select>

                {errors.employmentStatus && (
                  <p className='text-xs font-medium text-destructive'>
                    {errors.employmentStatus}
                  </p>
                )}
              </div>

              {/* Employer */}
              <div className='grid gap-2'>
                <Label htmlFor='employer'>Employer / Business Name</Label>

                <Input
                  id='employer'
                  placeholder='Enter employer or business name'
                  value={form.employer}
                  onChange={(event) =>
                    updateField('employer', event.target.value)
                  }
                  className='h-10'
                />

                {errors.employer && (
                  <p className='text-xs font-medium text-destructive'>
                    {errors.employer}
                  </p>
                )}
              </div>

              {/* Monthly Income */}
              <div className='grid gap-2'>
                <Label htmlFor='monthly-income'>Monthly Income</Label>

                <div className='relative'>
                  <span className='pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground'>
                    ₱
                  </span>

                  <Input
                    id='monthly-income'
                    type='number'
                    min='0'
                    placeholder='38,000'
                    value={form.monthlyIncome}
                    onChange={(event) =>
                      updateField('monthlyIncome', event.target.value)
                    }
                    className='h-10 pl-8'
                  />
                </div>

                <p className='text-xs leading-5 text-muted-foreground'>
                  Enter your average monthly income.
                </p>

                {errors.monthlyIncome && (
                  <p className='text-xs font-medium text-destructive'>
                    {errors.monthlyIncome}
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            ADDITIONAL INFORMATION
        ========================================================= */}
        <section className='overflow-hidden rounded-xl border bg-card'>
          {/* Section Header */}
          <div className='border-b px-6 py-5'>
            <h2 className='text-sm font-semibold'>Additional Information</h2>
            <p className='mt-1 text-xs leading-5 text-muted-foreground'>
              Add any additional details about your application.
            </p>
          </div>

          {/* Section Content */}
          <div className='grid gap-2 px-6 py-6'>
            <Label htmlFor='application-notes'>
              Notes
              <span className='ml-1 font-normal text-muted-foreground'>
                (Optional)
              </span>
            </Label>

            <Textarea
              id='application-notes'
              placeholder='Enter any additional information you would like us to know...'
              value={form.notes}
              onChange={(event) => updateField('notes', event.target.value)}
              className='min-h-28 resize-y'
            />

            <p className='text-xs leading-5 text-muted-foreground'>
              Include anything that may help us better understand your
              application.
            </p>
          </div>
        </section>

        {/* =========================================================
            ACTION BAR
        ========================================================= */}
        <div className='flex flex-col-reverse gap-3 border-t pt-6 sm:flex-row sm:items-center sm:justify-between'>
          <Button
            type='button'
            variant='outline'
            onClick={() => router.push('/clients/dashboard')}
            disabled={isSubmitting}
            className='w-full sm:w-auto'
          >
            <ArrowLeft className='size-4' />
            Cancel
          </Button>

          <Button
            type='submit'
            disabled={isSubmitting}
            className='w-full gap-2 sm:w-auto'
          >
            <CheckCircle2 className='size-4' />
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </Button>
        </div>
      </div>
    </form>
  );
}
