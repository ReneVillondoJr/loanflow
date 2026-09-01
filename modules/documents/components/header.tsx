'use client';

import { Plus, Upload } from 'lucide-react';

import { Button } from '@/components/ui/button';

interface DocumentHeaderProps {
  onUpload: () => void;
}

export function DocumentHeader({ onUpload }: DocumentHeaderProps) {
  return (
    <section className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
      <div className='min-w-0'>
        <h1 className='text-2xl font-semibold tracking-tight'>My Documents</h1>

        <p className='mt-1 text-sm text-muted-foreground'>
          Upload and manage documents required for your loan applications.
        </p>
      </div>

      <Button type='button' onClick={onUpload} className='w-full sm:w-auto'>
        <Upload className='size-4' />
        Upload Document
      </Button>
    </section>
  );
}
