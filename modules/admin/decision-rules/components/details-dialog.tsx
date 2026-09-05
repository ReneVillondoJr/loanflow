import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

import { Separator } from '@/components/ui/separator';

import { DecisionStatusBadge } from './status-badge';
import { RiskLevelBadge } from './risk-level-badge';

import type { LoanDecision } from '../types/decision';

interface DecisionDetailsDialogProps {
  decision: LoanDecision;

  open: boolean;

  onOpenChange: (open: boolean) => void;
}

function formatCurrency(amount: number) {
  return new Intl.NumberFormat('en-PH', {
    style: 'currency',

    currency: 'PHP',

    maximumFractionDigits: 0,
  }).format(amount);
}

function DetailItem({
  label,
  value,
}: {
  label: string;

  value: React.ReactNode;
}) {
  return (
    <div className='space-y-1'>
      <p className='text-xs text-muted-foreground'>{label}</p>

      <div className='text-sm font-medium'>{value}</div>
    </div>
  );
}

export function DecisionDetailsDialog({
  decision,

  open,

  onOpenChange,
}: DecisionDetailsDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='max-h-[90vh] max-w-3xl overflow-y-auto'>
        <DialogHeader>
          <DialogTitle>Decision Details</DialogTitle>

          <DialogDescription>
            Review the decision assessment and recommendation for this
            application.
          </DialogDescription>
        </DialogHeader>

        {/* Status */}
        <div className='flex flex-wrap gap-2'>
          <DecisionStatusBadge status={decision.status} />

          <RiskLevelBadge riskLevel={decision.riskLevel} />
        </div>

        <Separator />

        {/* Customer */}
        <div>
          <h3 className='text-sm font-semibold'>Customer Information</h3>

          <div className='mt-4 grid gap-4 sm:grid-cols-2'>
            <DetailItem label='Customer Name' value={decision.customer.name} />

            <DetailItem label='Email' value={decision.customer.email} />

            <DetailItem
              label='Application Number'
              value={decision.application.applicationNumber}
            />

            <DetailItem
              label='Loan Type'
              value={decision.application.loanType}
            />
          </div>
        </div>

        <Separator />

        {/* Loan */}
        <div>
          <h3 className='text-sm font-semibold'>Loan Request</h3>

          <div className='mt-4 grid gap-4 sm:grid-cols-3'>
            <DetailItem
              label='Requested Amount'
              value={formatCurrency(decision.application.requestedAmount)}
            />

            <DetailItem
              label='Requested Term'
              value={`${decision.application.requestedTerm} months`}
            />

            <DetailItem
              label='Decision Score'
              value={`${decision.decisionScore}/100`}
            />
          </div>
        </div>

        <Separator />

        {/* Recommendation */}
        <div>
          <h3 className='text-sm font-semibold'>System Recommendation</h3>

          <div className='mt-4 grid gap-4 sm:grid-cols-3'>
            <DetailItem
              label='Recommended Amount'
              value={formatCurrency(decision.recommendedAmount)}
            />

            <DetailItem
              label='Recommended Term'
              value={
                decision.recommendedTerm ?
                  `${decision.recommendedTerm} months`
                : 'Not recommended'
              }
            />

            <DetailItem
              label='Interest Rate'
              value={
                decision.interestRate ? `${decision.interestRate}%` : 'N/A'
              }
            />
          </div>
        </div>

        <Separator />

        {/* Risk Factors */}
        <div>
          <h3 className='text-sm font-semibold'>Risk Assessment</h3>

          <div className='mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
            <DetailItem
              label='Credit Score'
              value={decision.factors.creditScore}
            />

            <DetailItem
              label='Monthly Income'
              value={formatCurrency(decision.factors.monthlyIncome)}
            />

            <DetailItem
              label='Debt-to-Income Ratio'
              value={`${decision.factors.debtToIncomeRatio}%`}
            />

            <DetailItem
              label='Employment Years'
              value={`${decision.factors.employmentYears} years`}
            />

            <DetailItem
              label='Existing Loans'
              value={decision.factors.existingLoans}
            />
          </div>
        </div>

        {/* Notes */}
        {decision.notes && (
          <>
            <Separator />

            <div>
              <h3 className='text-sm font-semibold'>Decision Notes</h3>

              <div className='mt-3 rounded-lg border bg-muted/30 p-4'>
                <p className='text-sm leading-6 text-muted-foreground'>
                  {decision.notes}
                </p>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
