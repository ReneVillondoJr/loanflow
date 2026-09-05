'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import {
  ArrowLeft,
  BadgeDollarSign,
  Banknote,
  CheckCircle2,
  FileText,
  Percent,
  Save,
  Settings2,
  WalletCards,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { useLoanProductForm } from '../hooks/use-loan-product-form';

import type {
  LoanProductCategory,
  LoanProductStatus,
} from '../types/loan-product-form';

function FieldError({ message }: { message?: string }) {
  if (!message) return null;

  return <p className='text-xs font-medium text-destructive'>{message}</p>;
}

function SectionHeader({
  icon: Icon,
  title,
  description,
}: {
  icon: typeof FileText;
  title: string;
  description: string;
}) {
  return (
    <div className='flex items-start gap-3'>
      <div className='flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary'>
        <Icon className='size-4' />
      </div>

      <div className='min-w-0'>
        <h3 className='text-sm font-semibold tracking-tight'>{title}</h3>

        <p className='mt-0.5 text-xs leading-5 text-muted-foreground'>
          {description}
        </p>
      </div>
    </div>
  );
}

function Required() {
  return (
    <span className='ml-1 text-destructive' aria-hidden='true'>
      *
    </span>
  );
}

export function AddLoanProductForm() {
  const router = useRouter();

  const {
    formData,
    errors,
    isSubmitting,
    updateField,
    createProduct,
    resetForm,
    startSubmitting,
    stopSubmitting,
  } = useLoanProductForm();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const product = createProduct();

    if (!product) {
      return;
    }

    startSubmitting();

    /*
     * Temporary local implementation.
     *
     * Replace this with a Server Action / API request
     * when Prisma + PostgreSQL persistence is connected.
     */
    console.log('Created loan product:', product);

    resetForm();
    stopSubmitting();

    router.push('/admin/loan-products');
  }

  return (
    <div className='mx-auto w-full max-w-5xl pb-24'>
      {/* Page Header */}
      <div className='mb-6'>
        <div className='flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between'>
          <div className='flex items-start gap-3'>
            <div className='flex size-11 shrink-0 items-center justify-center rounded-xl border bg-card shadow-sm'>
              <WalletCards className='size-5 text-primary' />
            </div>

            <div>
              <div className='flex items-center gap-2'>
                <h1 className='text-xl font-semibold tracking-tight sm:text-2xl'>
                  Add Loan Product
                </h1>

                <span className='hidden rounded-full border bg-muted px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground sm:inline-flex'>
                  New
                </span>
              </div>

              <p className='mt-1 max-w-2xl text-sm leading-6 text-muted-foreground'>
                Create a lending product and define its eligibility, repayment
                terms, pricing, and availability.
              </p>
            </div>
          </div>

          <Link href='/admin/loan-products'>
            <Button
              type='button'
              variant='outline'
              className='w-full sm:w-auto'
            >
              <ArrowLeft className='mr-2 size-4' />
              Back to Products
            </Button>
          </Link>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className='space-y-5'>
        {/* Basic Information */}
        <section className='overflow-hidden rounded-xl border bg-card shadow-sm'>
          <div className='border-b px-5 py-4 sm:px-6'>
            <SectionHeader
              icon={FileText}
              title='Basic Information'
              description='Enter the core information borrowers and staff will use to identify this product.'
            />
          </div>

          <div className='grid gap-5 p-5 sm:grid-cols-2 sm:p-6'>
            {/* Product Name */}
            <div className='grid gap-2 sm:col-span-2'>
              <Label htmlFor='product-name' className='text-sm font-medium'>
                Product Name
                <Required />
              </Label>

              <Input
                id='product-name'
                placeholder='e.g. Personal Loan'
                value={formData.name}
                onChange={(event) => updateField('name', event.target.value)}
                aria-invalid={Boolean(errors.name)}
                className='h-10'
              />

              <FieldError message={errors.name} />
            </div>

            {/* Product Code */}
            <div className='grid gap-2'>
              <Label htmlFor='product-code' className='text-sm font-medium'>
                Product Code
                <Required />
              </Label>

              <Input
                id='product-code'
                placeholder='e.g. PERSONAL-01'
                value={formData.code}
                onChange={(event) =>
                  updateField('code', event.target.value.toUpperCase())
                }
                aria-invalid={Boolean(errors.code)}
                className='h-10 font-mono text-sm uppercase'
              />

              {errors.code ?
                <FieldError message={errors.code} />
              : <p className='text-xs text-muted-foreground'>
                  Use uppercase letters, numbers, and hyphens.
                </p>
              }
            </div>

            {/* Category */}
            <div className='grid gap-2'>
              <Label htmlFor='product-category' className='text-sm font-medium'>
                Product Category
                <Required />
              </Label>

              <select
                id='product-category'
                value={formData.category}
                onChange={(event) =>
                  updateField(
                    'category',
                    event.target.value as LoanProductCategory,
                  )
                }
                className='h-10 w-full rounded-md border bg-background px-3 text-sm outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-ring'
              >
                <option value='PERSONAL'>Personal Loan</option>

                <option value='BUSINESS'>Business Loan</option>

                <option value='AUTO'>Auto Loan</option>

                <option value='HOME'>Home Loan</option>

                <option value='EDUCATION'>Education Loan</option>
              </select>

              <p className='text-xs text-muted-foreground'>
                Determines how the product is classified.
              </p>
            </div>

            {/* Description */}
            <div className='grid gap-2 sm:col-span-2'>
              <Label
                htmlFor='product-description'
                className='text-sm font-medium'
              >
                Product Description
                <Required />
              </Label>

              <textarea
                id='product-description'
                placeholder='Describe the purpose, target borrowers, and key features of this loan product...'
                value={formData.description}
                onChange={(event) =>
                  updateField('description', event.target.value)
                }
                rows={4}
                aria-invalid={Boolean(errors.description)}
                className='min-h-24 w-full resize-y rounded-md border bg-background px-3 py-2.5 text-sm leading-6 outline-none transition-shadow placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring'
              />

              <div className='flex items-center justify-between gap-4'>
                <FieldError message={errors.description} />

                {!errors.description && (
                  <p className='text-xs text-muted-foreground'>
                    Keep the description clear and concise.
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Loan Terms */}
        <section className='overflow-hidden rounded-xl border bg-card shadow-sm'>
          <div className='border-b px-5 py-4 sm:px-6'>
            <SectionHeader
              icon={Banknote}
              title='Loan Terms'
              description='Define the borrowing limits and repayment period available under this product.'
            />
          </div>

          <div className='grid gap-5 p-5 sm:grid-cols-2 sm:p-6'>
            {/* Minimum Amount */}
            <div className='grid gap-2'>
              <Label htmlFor='min-amount' className='text-sm font-medium'>
                Minimum Loan Amount
                <Required />
              </Label>

              <div className='relative'>
                <span className='pointer-events-none absolute inset-y-0 left-3 flex items-center text-sm font-medium text-muted-foreground'>
                  ₱
                </span>

                <Input
                  id='min-amount'
                  type='number'
                  min='0'
                  step='0.01'
                  placeholder='10,000'
                  value={formData.minAmount}
                  onChange={(event) =>
                    updateField('minAmount', event.target.value)
                  }
                  aria-invalid={Boolean(errors.minAmount)}
                  className='h-10 pl-8'
                />
              </div>

              <FieldError message={errors.minAmount} />
            </div>

            {/* Maximum Amount */}
            <div className='grid gap-2'>
              <Label htmlFor='max-amount' className='text-sm font-medium'>
                Maximum Loan Amount
                <Required />
              </Label>

              <div className='relative'>
                <span className='pointer-events-none absolute inset-y-0 left-3 flex items-center text-sm font-medium text-muted-foreground'>
                  ₱
                </span>

                <Input
                  id='max-amount'
                  type='number'
                  min='0'
                  step='0.01'
                  placeholder='500,000'
                  value={formData.maxAmount}
                  onChange={(event) =>
                    updateField('maxAmount', event.target.value)
                  }
                  aria-invalid={Boolean(errors.maxAmount)}
                  className='h-10 pl-8'
                />
              </div>

              <FieldError message={errors.maxAmount} />
            </div>

            {/* Minimum Term */}
            <div className='grid gap-2'>
              <Label htmlFor='min-term' className='text-sm font-medium'>
                Minimum Term
                <Required />
              </Label>

              <div className='relative'>
                <Input
                  id='min-term'
                  type='number'
                  min='1'
                  step='1'
                  placeholder='6'
                  value={formData.minTerm}
                  onChange={(event) =>
                    updateField('minTerm', event.target.value)
                  }
                  aria-invalid={Boolean(errors.minTerm)}
                  className='h-10 pr-20'
                />

                <span className='pointer-events-none absolute inset-y-0 right-3 flex items-center text-xs text-muted-foreground'>
                  months
                </span>
              </div>

              <FieldError message={errors.minTerm} />
            </div>

            {/* Maximum Term */}
            <div className='grid gap-2'>
              <Label htmlFor='max-term' className='text-sm font-medium'>
                Maximum Term
                <Required />
              </Label>

              <div className='relative'>
                <Input
                  id='max-term'
                  type='number'
                  min='1'
                  step='1'
                  placeholder='60'
                  value={formData.maxTerm}
                  onChange={(event) =>
                    updateField('maxTerm', event.target.value)
                  }
                  aria-invalid={Boolean(errors.maxTerm)}
                  className='h-10 pr-20'
                />

                <span className='pointer-events-none absolute inset-y-0 right-3 flex items-center text-xs text-muted-foreground'>
                  months
                </span>
              </div>

              <FieldError message={errors.maxTerm} />
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className='overflow-hidden rounded-xl border bg-card shadow-sm'>
          <div className='border-b px-5 py-4 sm:px-6'>
            <SectionHeader
              icon={Percent}
              title='Pricing & Fees'
              description='Configure the interest rate and fees applied to this loan product.'
            />
          </div>

          <div className='grid gap-5 p-5 sm:grid-cols-2 sm:p-6'>
            {/* Interest Rate */}
            <div className='grid gap-2'>
              <Label htmlFor='interest-rate' className='text-sm font-medium'>
                Interest Rate
                <Required />
              </Label>

              <div className='relative'>
                <Input
                  id='interest-rate'
                  type='number'
                  min='0'
                  step='0.01'
                  placeholder='12.50'
                  value={formData.interestRate}
                  onChange={(event) =>
                    updateField('interestRate', event.target.value)
                  }
                  aria-invalid={Boolean(errors.interestRate)}
                  className='h-10 pr-10'
                />

                <span className='pointer-events-none absolute inset-y-0 right-3 flex items-center text-sm font-medium text-muted-foreground'>
                  %
                </span>
              </div>

              <FieldError message={errors.interestRate} />

              {!errors.interestRate && (
                <p className='text-xs text-muted-foreground'>
                  Enter the annual interest rate.
                </p>
              )}
            </div>

            {/* Processing Fee */}
            <div className='grid gap-2'>
              <Label htmlFor='processing-fee' className='text-sm font-medium'>
                Processing Fee
                <Required />
              </Label>

              <div className='relative'>
                <span className='pointer-events-none absolute inset-y-0 left-3 flex items-center text-sm font-medium text-muted-foreground'>
                  ₱
                </span>

                <Input
                  id='processing-fee'
                  type='number'
                  min='0'
                  step='0.01'
                  placeholder='500'
                  value={formData.processingFee}
                  onChange={(event) =>
                    updateField('processingFee', event.target.value)
                  }
                  aria-invalid={Boolean(errors.processingFee)}
                  className='h-10 pl-8'
                />
              </div>

              <FieldError message={errors.processingFee} />

              {!errors.processingFee && (
                <p className='text-xs text-muted-foreground'>
                  One-time fee charged when the loan is processed.
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Status */}
        <section className='overflow-hidden rounded-xl border bg-card shadow-sm'>
          <div className='border-b px-5 py-4 sm:px-6'>
            <SectionHeader
              icon={Settings2}
              title='Product Status'
              description='Control whether this product can currently be used for new loan applications.'
            />
          </div>

          <div className='p-5 sm:p-6'>
            <div className='grid gap-2 sm:max-w-md'>
              <Label htmlFor='product-status' className='text-sm font-medium'>
                Availability Status
              </Label>

              <select
                id='product-status'
                value={formData.status}
                onChange={(event) =>
                  updateField('status', event.target.value as LoanProductStatus)
                }
                className='h-10 w-full rounded-md border bg-background px-3 text-sm outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-ring'
              >
                <option value='DRAFT'>Draft</option>

                <option value='ACTIVE'>Active</option>

                <option value='INACTIVE'>Inactive</option>
              </select>

              <div className='flex items-start gap-2 rounded-lg border bg-muted/40 px-3 py-2.5'>
                <CheckCircle2 className='mt-0.5 size-4 shrink-0 text-muted-foreground' />

                <p className='text-xs leading-5 text-muted-foreground'>
                  <span className='font-medium text-foreground'>Draft</span>{' '}
                  products remain unavailable to borrowers until activated.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Review Summary */}
        <section className='rounded-xl border bg-muted/30 p-5 sm:p-6'>
          <div className='flex items-start gap-3'>
            <div className='flex size-9 shrink-0 items-center justify-center rounded-lg border bg-background'>
              <BadgeDollarSign className='size-4 text-primary' />
            </div>

            <div className='min-w-0'>
              <h3 className='text-sm font-semibold'>Before you save</h3>

              <p className='mt-1 text-xs leading-5 text-muted-foreground'>
                Review the product name, loan limits, repayment terms, interest
                rate, and status. Required fields must be completed before the
                product can be created.
              </p>
            </div>
          </div>
        </section>

        {/* Desktop Sticky Actions */}
        <div className='sticky bottom-3 z-20'>
          <div className='flex flex-col gap-3 rounded-xl border bg-background/95 p-3 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-background/80 sm:flex-row sm:items-center sm:justify-between'>
            <div className='hidden items-center gap-2 pl-2 sm:flex'>
              <div className='size-2 rounded-full bg-muted-foreground/40' />

              <span className='text-xs text-muted-foreground'>
                All changes are ready to be saved
              </span>
            </div>

            <div className='flex w-full flex-col-reverse gap-2 sm:w-auto sm:flex-row'>
              <Link href='/admin/loan-products' className='w-full sm:w-auto'>
                <Button
                  type='button'
                  variant='outline'
                  className='w-full sm:w-auto'
                >
                  Cancel
                </Button>
              </Link>

              <Button
                type='submit'
                disabled={isSubmitting}
                className='w-full sm:w-auto'
              >
                <Save className='mr-2 size-4' />

                {isSubmitting ? 'Saving...' : 'Create Loan Product'}
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
