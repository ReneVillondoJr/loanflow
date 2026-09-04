import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { employmentStatuses } from '@/modules/client/applications/data/applications';

import type { ApplicationFormData } from '@/modules/client/applications/types/application';

interface FinancialInformationCardProps {
  formData: ApplicationFormData;
  updateField: <K extends keyof ApplicationFormData>(
    field: K,
    value: ApplicationFormData[K],
  ) => void;
}

export function FinancialInformationCard({
  formData,
  updateField,
}: FinancialInformationCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Financial Information</CardTitle>
      </CardHeader>

      <CardContent className='space-y-6'>
        <div className='space-y-2'>
          <Label htmlFor='employmentStatus'>Employment Status</Label>

          <Select
            value={formData.employmentStatus}
            onValueChange={(value) => {
              if (value) {
                updateField('employmentStatus', value);
              }
            }}
          >
            <SelectTrigger id='employmentStatus'>
              <SelectValue placeholder='Select employment status' />
            </SelectTrigger>

            <SelectContent>
              {employmentStatuses.map((status) => (
                <SelectItem key={status.value} value={status.value}>
                  {status.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className='space-y-2'>
          <Label htmlFor='employerName'>Employer / Business Name</Label>

          <Input
            id='employerName'
            value={formData.employerName}
            onChange={(event) =>
              updateField('employerName', event.target.value)
            }
            placeholder='Enter employer or business name'
          />
        </div>

        <div className='space-y-2'>
          <Label htmlFor='monthlyIncome'>Monthly Income</Label>

          <Input
            id='monthlyIncome'
            type='number'
            min='0'
            value={formData.monthlyIncome}
            onChange={(event) =>
              updateField('monthlyIncome', event.target.value)
            }
            placeholder='50000'
          />
        </div>

        <div className='rounded-lg border bg-muted/40 p-4'>
          <p className='text-sm font-medium'>Financial information</p>

          <p className='mt-1 text-sm text-muted-foreground'>
            Provide accurate information to help us evaluate your loan
            application.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
