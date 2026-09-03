import { ApplicationForm } from '@/modules/client/applications/components/applications-form';

export default function NewApplicationPage() {
  return (
    <div className='mx-auto w-full max-w-5xl'>
      <div className='mb-8'>
        <h1 className='text-2xl font-semibold tracking-tight'>
          Apply for a Loan
        </h1>

        <p className='mt-1 text-sm text-muted-foreground'>
          Complete the application below. You can save your progress and return
          later.
        </p>
      </div>

      <ApplicationForm />
    </div>
  );
}
