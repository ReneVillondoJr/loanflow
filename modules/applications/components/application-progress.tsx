'use client';

import { Check } from 'lucide-react';

import { cn } from '@/lib/utils';

const steps = [
  'Loan Details',
  'Personal',
  'Employment',
  'Financial',
  'Documents',
  'Review',
];

interface ApplicationProgressProps {
  currentStep: number;
}

export function ApplicationProgress({ currentStep }: ApplicationProgressProps) {
  return (
    <div className='mb-8'>
      <div className='hidden items-center md:flex'>
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const completed = stepNumber < currentStep;
          const active = stepNumber === currentStep;

          return (
            <div key={step} className='flex flex-1 items-center last:flex-none'>
              <div className='flex flex-col items-center'>
                <div
                  className={cn(
                    'flex size-9 items-center justify-center rounded-full border text-sm font-medium',
                    completed &&
                      'border-primary bg-primary text-primary-foreground',
                    active &&
                      'border-primary bg-primary text-primary-foreground',
                    !active &&
                      !completed &&
                      'border-muted-foreground/30 text-muted-foreground',
                  )}
                >
                  {completed ?
                    <Check className='size-4' />
                  : stepNumber}
                </div>

                <span
                  className={cn(
                    'mt-2 text-xs',
                    active ?
                      'font-medium text-foreground'
                    : 'text-muted-foreground',
                  )}
                >
                  {step}
                </span>
              </div>

              {index < steps.length - 1 && (
                <div
                  className={cn(
                    'mx-3 mt-[-20px] h-px flex-1',
                    completed ? 'bg-primary' : 'bg-border',
                  )}
                />
              )}
            </div>
          );
        })}
      </div>

      <div className='md:hidden'>
        <p className='text-sm font-medium'>
          Step {currentStep} of {steps.length}
        </p>

        <div className='mt-2 h-2 overflow-hidden rounded-full bg-muted'>
          <div
            className='h-full bg-primary transition-all'
            style={{
              width: `${(currentStep / steps.length) * 100}%`,
            }}
          />
        </div>

        <p className='mt-2 text-xs text-muted-foreground'>
          {steps[currentStep - 1]}
        </p>
      </div>
    </div>
  );
}
