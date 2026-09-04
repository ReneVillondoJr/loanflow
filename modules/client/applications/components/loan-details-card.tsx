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

import { Textarea } from '@/components/ui/textarea';

import {
  loanTerms,
  loanTypes,
} from '@/modules/client/applications/data/applications';

import type { ApplicationFormData } from '@/modules/client/applications/types/application';

interface LoanDetailsCardProps {
  formData: ApplicationFormData;
  updateField: <K extends keyof ApplicationFormData>(
    field: K,
    value: ApplicationFormData[K],
  ) => void;
}

export function LoanDetailsCard({
  formData,
  updateField,
}: LoanDetailsCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Loan Details</CardTitle>
      </CardHeader>

      <CardContent className='space-y-6'>
        <div className='space-y-2'>
          <Label htmlFor='loanType'>Loan Type</Label>

          <Select
            value={formData.loanType}
            onValueChange={(value) => {
              if (value) {
                updateField('loanType', value);
              }
            }}
          >
            <SelectTrigger id='loanType'>
              <SelectValue placeholder='Select loan type' />
            </SelectTrigger>

            <SelectContent>
              {loanTypes.map((loan) => (
                <SelectItem key={loan.value} value={loan.value}>
                  {loan.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className='grid gap-6 sm:grid-cols-2'>
          <div className='space-y-2'>
            <Label htmlFor='amount'>Loan Amount</Label>

            <Input
              id='amount'
              type='number'
              min='0'
              value={formData.amount}
              onChange={(event) => updateField('amount', event.target.value)}
              placeholder='150000'
            />
          </div>

          <div className='space-y-2'>
            <Label htmlFor='loanTerm'>Loan Term</Label>

            <Select
              value={formData.loanTerm}
              onValueChange={(value) => {
                if (value) {
                  updateField('loanTerm', value);
                }
              }}
            >
              <SelectTrigger id='loanTerm'>
                <SelectValue placeholder='Select term' />
              </SelectTrigger>

              <SelectContent>
                {loanTerms.map((term) => (
                  <SelectItem key={term.value} value={term.value}>
                    {term.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className='space-y-2'>
          <Label htmlFor='purpose'>Loan Purpose</Label>

          <Textarea
            id='purpose'
            value={formData.purpose}
            onChange={(event) => updateField('purpose', event.target.value)}
            placeholder='Tell us how you plan to use the loan.'
            rows={4}
          />
        </div>
      </CardContent>
    </Card>
  );
}
