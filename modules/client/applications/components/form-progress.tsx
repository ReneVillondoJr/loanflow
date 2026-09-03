import { CheckCircle2 } from 'lucide-react';

const steps = [
  {
    number: 1,
    label: 'Loan Details',
  },
  {
    number: 2,
    label: 'Financial Information',
  },
  {
    number: 3,
    label: 'Review',
  },
];

interface FormProgressProps {
  currentStep: number;
}

export function FormProgress({ currentStep }: FormProgressProps) {
  return (
    <>
      <div className='flex items-center justify-between'>
        {steps.map((item) => (
          <div
            key={item.number}
            className='flex flex-1 items-center last:flex-none'
          >
            <div
              className={[
                'flex size-8 shrink-0 items-center justify-center rounded-full border text-sm font-medium',
                currentStep >= item.number ?
                  'border-primary bg-primary text-primary-foreground'
                : 'border-muted bg-background text-muted-foreground',
              ].join(' ')}
            >
              {currentStep > item.number ?
                <CheckCircle2 className='size-4' />
              : item.number}
            </div>

            {item.number < 3 && (
              <div
                className={[
                  'mx-2 h-px flex-1',
                  currentStep > item.number ? 'bg-primary' : 'bg-border',
                ].join(' ')}
              />
            )}
          </div>
        ))}
      </div>

      <div className='grid grid-cols-3 gap-2 text-center text-xs text-muted-foreground'>
        {steps.map((item) => (
          <span
            key={item.number}
            className={
              currentStep === item.number ? 'font-medium text-foreground' : ''
            }
          >
            {item.label}
          </span>
        ))}
      </div>
    </>
  );
}
