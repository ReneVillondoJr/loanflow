import { ArrowLeft, ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';

interface FormActionsProps {
  step: number;
  isSubmitting: boolean;
  onPrevious: () => void;
  onNext: () => void;
}

export function FormActions({
  step,
  isSubmitting,
  onPrevious,
  onNext,
}: FormActionsProps) {
  return (
    <div className='flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between'>
      <Button
        type='button'
        variant='outline'
        onClick={onPrevious}
        disabled={step === 1 || isSubmitting}
        className='w-full sm:w-auto'
      >
        <ArrowLeft className='size-4' />
        Back
      </Button>

      {step < 3 ?
        <Button type='button' onClick={onNext} className='w-full sm:w-auto'>
          Continue
          <ArrowRight className='size-4' />
        </Button>
      : <Button
          type='submit'
          disabled={isSubmitting}
          className='w-full sm:w-auto'
        >
          {isSubmitting ? 'Submitting...' : 'Submit Application'}
        </Button>
      }
    </div>
  );
}
