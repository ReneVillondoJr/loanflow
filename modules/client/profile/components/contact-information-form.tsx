'use client';

import { Mail, Phone, Save } from 'lucide-react';

import { Button } from '@/components/ui/button';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { Input } from '@/components/ui/input';

import { Label } from '@/components/ui/label';

import { useContactInformation } from '../hooks/use-contact-information';

import type { ContactInformation } from '../types/profile';

interface ContactInformationFormProps {
  defaultValues?: Partial<ContactInformation>;

  onSave?: (values: ContactInformation) => void;
}

export function ContactInformationForm({
  defaultValues,
  onSave,
}: ContactInformationFormProps) {
  const { values, updateField } = useContactInformation({
    defaultValues,
  });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    onSave?.(values);
  }

  return (
    <Card>
      <CardHeader>
        <div className='flex items-center gap-3'>
          <div className='flex size-9 items-center justify-center rounded-md bg-muted'>
            <Mail className='size-4 text-muted-foreground' />
          </div>

          <div>
            <CardTitle className='text-base'>Contact Information</CardTitle>

            <p className='mt-1 text-sm text-muted-foreground'>
              Keep your contact details up to date.
            </p>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className='space-y-5'>
          <div className='grid gap-5 sm:grid-cols-2'>
            <div className='space-y-2'>
              <Label htmlFor='email'>Email Address</Label>

              <Input
                id='email'
                type='email'
                value={values.email}
                onChange={(event) => updateField('email', event.target.value)}
                placeholder='you@example.com'
              />
            </div>

            <div className='space-y-2'>
              <Label htmlFor='phone'>Phone Number</Label>

              <div className='relative'>
                <Phone className='pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground' />

                <Input
                  id='phone'
                  value={values.phone}
                  onChange={(event) => updateField('phone', event.target.value)}
                  className='pl-9'
                  placeholder='+63 900 000 0000'
                />
              </div>
            </div>
          </div>

          <div className='space-y-2'>
            <Label htmlFor='address'>Address</Label>

            <Input
              id='address'
              value={values.address}
              onChange={(event) => updateField('address', event.target.value)}
              placeholder='Enter your address'
            />
          </div>

          <div className='space-y-2'>
            <Label htmlFor='city'>City / Municipality</Label>

            <Input
              id='city'
              value={values.city}
              onChange={(event) => updateField('city', event.target.value)}
              placeholder='Enter your city'
            />
          </div>

          <div className='flex justify-end border-t pt-5'>
            <Button type='submit'>
              <Save className='size-4' />
              Save Changes
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
