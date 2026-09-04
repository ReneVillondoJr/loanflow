import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import {
  employmentStatuses,
  loanTypes,
} from '@/modules/client/applications/data/applications';

import type { ApplicationFormData } from '@/modules/client/applications/types/application';

interface ReviewApplicationCardProps {
  formData: ApplicationFormData;
}

export function ReviewApplicationCard({
  formData,
}: ReviewApplicationCardProps) {
  const loanType =
    loanTypes.find((loan) => loan.value === formData.loanType)?.label ??
    'Not selected';

  const employment =
    employmentStatuses.find(
      (status) => status.value === formData.employmentStatus,
    )?.label ?? 'Not selected';

  return (
    <Card>
      <CardHeader>
        <CardTitle>Review Application</CardTitle>
      </CardHeader>

      <CardContent className='space-y-6'>
        <div className='grid gap-4 sm:grid-cols-2'>
          <div>
            <p className='text-sm text-muted-foreground'>Loan Type</p>

            <p className='mt-1 font-medium'>{loanType}</p>
          </div>

          <div>
            <p className='text-sm text-muted-foreground'>Loan Amount</p>

            <p className='mt-1 font-medium'>₱{formData.amount || '0'}</p>
          </div>

          <div>
            <p className='text-sm text-muted-foreground'>Loan Term</p>

            <p className='mt-1 font-medium'>
              {formData.loanTerm ?
                `${formData.loanTerm} months`
              : 'Not selected'}
            </p>
          </div>

          <div>
            <p className='text-sm text-muted-foreground'>Employment</p>

            <p className='mt-1 font-medium'>{employment}</p>
          </div>
        </div>

        <div className='border-t pt-4'>
          <p className='text-sm text-muted-foreground'>Loan Purpose</p>

          <p className='mt-1 text-sm'>{formData.purpose || 'Not provided'}</p>
        </div>

        <div className='rounded-lg border bg-muted/40 p-4'>
          <p className='text-sm font-medium'>Ready to submit?</p>

          <p className='mt-1 text-sm text-muted-foreground'>
            Please review your information carefully before submitting your
            application.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
