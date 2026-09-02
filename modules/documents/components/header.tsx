'use client';

import { Upload } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { PageHeader } from '@/components/page-header';

interface DocumentHeaderProps {
  onUpload: () => void;
}

export function DocumentHeader({ onUpload }: DocumentHeaderProps) {
  return (
    <PageHeader
      title='My Documents'
      description='Upload and manage documents required for your loan applications.'
      action={
        <Button
          type='button'
          onClick={onUpload}
          className='h-10 w-full gap-2 sm:w-auto'
        >
          <Upload className='size-4' />
          Upload Document
        </Button>
      }
    />
  );
}
