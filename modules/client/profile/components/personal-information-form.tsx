'use client';

import { Save, UserRound } from 'lucide-react';

import { Button } from '@/components/ui/button';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { Input } from '@/components/ui/input';

import { Label } from '@/components/ui/label';

import { usePersonalInformation } from '../hooks/use-personal-information';

import type { PersonalInformation } from '../types/profile';

interface PersonalInformationFormProps {
  defaultValues?: Partial<PersonalInformation>;

  onSave?: (values: PersonalInformation) => void;
}

export function PersonalInformationForm({
  defaultValues,
  onSave,
}: PersonalInformationFormProps) {
  const { values, updateField } = usePersonalInformation({
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
            <UserRound className='size-4 text-muted-foreground' />
          </div>

          <div>
            <CardTitle className='text-base'>Personal Information</CardTitle>

            <p className='mt-1 text-sm text-muted-foreground'>
              Update your personal details.
            </p>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className='space-y-5'>
          <div className='grid gap-5 sm:grid-cols-2'>
            <div className='space-y-2'>
              <Label htmlFor='firstName'>First Name</Label>

              <Input
                id='firstName'
                value={values.firstName}
                onChange={(event) =>
                  updateField('firstName', event.target.value)
                }
                placeholder='Enter your first name'
              />
            </div>

            <div className='space-y-2'>
              <Label htmlFor='middleName'>
                Middle Name
                <span className='ml-1 text-muted-foreground'>(Optional)</span>
              </Label>

              <Input
                id='middleName'
                value={values.middleName}
                onChange={(event) =>
                  updateField('middleName', event.target.value)
                }
                placeholder='Enter your middle name'
              />
            </div>
          </div>

          <div className='grid gap-5 sm:grid-cols-2'>
            <div className='space-y-2'>
              <Label htmlFor='lastName'>Last Name</Label>

              <Input
                id='lastName'
                value={values.lastName}
                onChange={(event) =>
                  updateField('lastName', event.target.value)
                }
                placeholder='Enter your last name'
              />
            </div>

            <div className='space-y-2'>
              <Label htmlFor='dateOfBirth'>Date of Birth</Label>

              <Input
                id='dateOfBirth'
                type='date'
                value={values.dateOfBirth}
                onChange={(event) =>
                  updateField('dateOfBirth', event.target.value)
                }
              />
            </div>
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
