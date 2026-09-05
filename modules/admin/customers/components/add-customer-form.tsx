'use client';

import type { FormEvent } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import {
  ArrowLeft,
  CheckCircle2,
  Contact,
  FileText,
  Loader2,
  MapPin,
  Save,
  Wallet,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

import { useAddCustomer } from '../hooks/use-add-customer';

function FieldError({ message }: { message?: string }) {
  if (!message) return null;

  return <p className='text-xs font-medium text-destructive'>{message}</p>;
}

function Required() {
  return (
    <span className='ml-1 text-destructive' aria-hidden='true'>
      *
    </span>
  );
}

function SectionHeader({
  icon: Icon,
  title,
  description,
}: {
  icon: typeof Contact;
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

export function AddCustomerForm() {
  const router = useRouter();

  const { form, errors, isSubmitting, updateField, submitCustomer } =
    useAddCustomer();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const success = await submitCustomer();

    if (success) {
      router.push('/admin/customers');
    }
  };

  return (
    <div className='mx-auto w-full max-w-5xl pb-24'>
      {/* Page Header */}
      <div className='mb-6'>
        <div className='flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between'>
          <div className='flex items-start gap-3'>
            <div className='flex size-11 shrink-0 items-center justify-center rounded-xl border bg-card shadow-sm'>
              <Contact className='size-5 text-primary' />
            </div>

            <div className='min-w-0'>
              <div className='flex items-center gap-2'>
                <h1 className='text-xl font-semibold tracking-tight sm:text-2xl'>
                  Add Customer
                </h1>

                <span className='hidden rounded-full border bg-muted px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground sm:inline-flex'>
                  New
                </span>
              </div>

              <p className='mt-1 max-w-2xl text-sm leading-6 text-muted-foreground'>
                Create a new customer account and profile.
              </p>
            </div>
          </div>

          <Link href='/admin/customers'>
            <Button
              type='button'
              variant='outline'
              className='w-full sm:w-auto'
            >
              <ArrowLeft className='mr-2 size-4' />
              Back to Customers
            </Button>
          </Link>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className='space-y-5'>
        {/* Personal Information */}
        <section className='overflow-hidden rounded-xl border bg-card shadow-sm'>
          <div className='border-b px-5 py-4 sm:px-6'>
            <SectionHeader
              icon={Contact}
              title='Personal Information'
              description='Basic information about the customer.'
            />
          </div>

          <div className='grid gap-5 p-5 sm:p-6'>
            {/* Name */}
            <div className='grid gap-5 sm:grid-cols-2'>
              <div className='grid gap-2'>
                <label htmlFor='first-name' className='text-sm font-medium'>
                  First Name
                  <Required />
                </label>

                <Input
                  id='first-name'
                  value={form.firstName}
                  onChange={(event) =>
                    updateField('firstName', event.target.value)
                  }
                  placeholder='Juan'
                  aria-invalid={Boolean(errors.firstName)}
                  className='h-10'
                />

                <FieldError message={errors.firstName} />
              </div>

              <div className='grid gap-2'>
                <label htmlFor='last-name' className='text-sm font-medium'>
                  Last Name
                  <Required />
                </label>

                <Input
                  id='last-name'
                  value={form.lastName}
                  onChange={(event) =>
                    updateField('lastName', event.target.value)
                  }
                  placeholder='Dela Cruz'
                  aria-invalid={Boolean(errors.lastName)}
                  className='h-10'
                />

                <FieldError message={errors.lastName} />
              </div>
            </div>

            {/* Contact */}
            <div className='grid gap-5 md:grid-cols-3'>
              <div className='grid gap-2'>
                <label htmlFor='email' className='text-sm font-medium'>
                  Email Address
                  <Required />
                </label>

                <Input
                  id='email'
                  type='email'
                  value={form.email}
                  onChange={(event) => updateField('email', event.target.value)}
                  placeholder='juan@example.com'
                  aria-invalid={Boolean(errors.email)}
                  className='h-10'
                />

                <FieldError message={errors.email} />
              </div>

              <div className='grid gap-2'>
                <label htmlFor='phone' className='text-sm font-medium'>
                  Phone Number
                  <Required />
                </label>

                <Input
                  id='phone'
                  type='tel'
                  value={form.phone}
                  onChange={(event) => updateField('phone', event.target.value)}
                  placeholder='+63 920 456 7890'
                  aria-invalid={Boolean(errors.phone)}
                  className='h-10'
                />

                <FieldError message={errors.phone} />
              </div>

              <div className='grid gap-2'>
                <label htmlFor='date-of-birth' className='text-sm font-medium'>
                  Date of Birth
                  <Required />
                </label>

                <Input
                  id='date-of-birth'
                  type='date'
                  value={form.dateOfBirth}
                  onChange={(event) =>
                    updateField('dateOfBirth', event.target.value)
                  }
                  aria-invalid={Boolean(errors.dateOfBirth)}
                  className='h-10'
                />

                <FieldError message={errors.dateOfBirth} />
              </div>
            </div>
          </div>
        </section>

        {/* Address Information */}
        <section className='overflow-hidden rounded-xl border bg-card shadow-sm'>
          <div className='border-b px-5 py-4 sm:px-6'>
            <SectionHeader
              icon={MapPin}
              title='Address Information'
              description='Customer residential address.'
            />
          </div>

          <div className='grid gap-5 p-5 sm:p-6'>
            <div className='grid gap-2'>
              <label htmlFor='address' className='text-sm font-medium'>
                Address
                <Required />
              </label>

              <Input
                id='address'
                value={form.address}
                onChange={(event) => updateField('address', event.target.value)}
                placeholder='House number, street, barangay'
                aria-invalid={Boolean(errors.address)}
                className='h-10'
              />

              <FieldError message={errors.address} />
            </div>

            <div className='grid gap-5 md:grid-cols-3'>
              <div className='grid gap-2'>
                <label htmlFor='city' className='text-sm font-medium'>
                  City / Municipality
                  <Required />
                </label>

                <Input
                  id='city'
                  value={form.city}
                  onChange={(event) => updateField('city', event.target.value)}
                  placeholder='Zamboanga City'
                  aria-invalid={Boolean(errors.city)}
                  className='h-10'
                />

                <FieldError message={errors.city} />
              </div>

              <div className='grid gap-2'>
                <label htmlFor='province' className='text-sm font-medium'>
                  Province
                  <Required />
                </label>

                <Input
                  id='province'
                  value={form.province}
                  onChange={(event) =>
                    updateField('province', event.target.value)
                  }
                  placeholder='Zamboanga del Sur'
                  aria-invalid={Boolean(errors.province)}
                  className='h-10'
                />

                <FieldError message={errors.province} />
              </div>

              <div className='grid gap-2'>
                <label htmlFor='postal-code' className='text-sm font-medium'>
                  Postal Code
                </label>

                <Input
                  id='postal-code'
                  value={form.postalCode}
                  onChange={(event) =>
                    updateField('postalCode', event.target.value)
                  }
                  placeholder='7000'
                  className='h-10'
                />
              </div>
            </div>
          </div>
        </section>

        {/* Financial Information */}
        <section className='overflow-hidden rounded-xl border bg-card shadow-sm'>
          <div className='border-b px-5 py-4 sm:px-6'>
            <SectionHeader
              icon={Wallet}
              title='Financial Information'
              description='Employment and income information.'
            />
          </div>

          <div className='grid gap-5 p-5 sm:p-6'>
            <div className='grid gap-5 md:grid-cols-3'>
              <div className='grid gap-2'>
                <label
                  htmlFor='employment-status'
                  className='text-sm font-medium'
                >
                  Employment Status
                  <Required />
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

                    <SelectItem value='BUSINESS_OWNER'>
                      Business Owner
                    </SelectItem>

                    <SelectItem value='CONTRACTOR'>Contractor</SelectItem>

                    <SelectItem value='RETIRED'>Retired</SelectItem>

                    <SelectItem value='UNEMPLOYED'>Unemployed</SelectItem>
                  </SelectContent>
                </Select>

                <FieldError message={errors.employmentStatus} />
              </div>

              <div className='grid gap-2'>
                <label htmlFor='monthly-income' className='text-sm font-medium'>
                  Monthly Income
                  <Required />
                </label>

                <div className='relative'>
                  <span className='pointer-events-none absolute inset-y-0 left-3 flex items-center text-sm font-medium text-muted-foreground'>
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
                    placeholder='38,000'
                    aria-invalid={Boolean(errors.monthlyIncome)}
                    className='h-10 pl-8'
                  />
                </div>

                <FieldError message={errors.monthlyIncome} />
              </div>

              <div className='grid gap-2'>
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
          </div>
        </section>

        {/* Additional Information */}
        <section className='overflow-hidden rounded-xl border bg-card shadow-sm'>
          <div className='border-b px-5 py-4 sm:px-6'>
            <SectionHeader
              icon={FileText}
              title='Additional Information'
              description='Optional notes about the customer.'
            />
          </div>

          <div className='p-5 sm:p-6'>
            <div className='grid gap-2'>
              <label htmlFor='notes' className='text-sm font-medium'>
                Notes
              </label>

              <Textarea
                id='notes'
                value={form.notes}
                onChange={(event) => updateField('notes', event.target.value)}
                placeholder='Add notes about this customer...'
                rows={4}
                className='min-h-24 resize-y px-3 py-2.5 text-sm leading-6'
              />
            </div>
          </div>
        </section>

        {/* Before Save */}
        <section className='rounded-xl border bg-muted/30 p-5 sm:p-6'>
          <div className='flex items-start gap-3'>
            <div className='flex size-9 shrink-0 items-center justify-center rounded-lg border bg-background'>
              <CheckCircle2 className='size-4 text-primary' />
            </div>

            <div className='min-w-0'>
              <h3 className='text-sm font-semibold'>Before you save</h3>

              <p className='mt-1 text-xs leading-5 text-muted-foreground'>
                Review the customer&apos;s personal information, contact
                details, address, employment status, and monthly income.
                Required fields must be completed before the customer can be
                created.
              </p>
            </div>
          </div>
        </section>

        {/* Sticky Actions */}
        <div className='sticky bottom-3 z-20'>
          <div className='flex flex-col gap-3 rounded-xl border bg-background/95 p-3 shadow-lg backdrop-blur supports-backdrop-filter:bg-background/80 sm:flex-row sm:items-center sm:justify-between'>
            <div className='hidden items-center gap-2 pl-2 sm:flex'>
              <div className='size-2 rounded-full bg-muted-foreground/40' />

              <span className='text-xs text-muted-foreground'>
                Customer information is ready to be saved
              </span>
            </div>

            <div className='flex w-full flex-col-reverse gap-2 sm:w-auto sm:flex-row'>
              <Link href='/admin/customers' className='w-full sm:w-auto'>
                <Button
                  type='button'
                  variant='outline'
                  disabled={isSubmitting}
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
                {isSubmitting ?
                  <>
                    <Loader2 className='mr-2 size-4 animate-spin' />
                    Creating...
                  </>
                : <>
                    <Save className='mr-2 size-4' />
                    Create Customer
                  </>
                }
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
