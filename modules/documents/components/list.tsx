'use client';

import { FileQuestion } from 'lucide-react';

import type { ClientDocument } from '../types/documents';

import { DocumentCard } from './documents-card';

interface DocumentListProps {
  documents: ClientDocument[];
  onPreview: (document: ClientDocument) => void;
}

export function DocumentList({ documents, onPreview }: DocumentListProps) {
  if (documents.length === 0) {
    return (
      <div className='flex min-h-[300px] flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center'>
        <div className='flex size-12 items-center justify-center rounded-full bg-muted'>
          <FileQuestion className='size-6 text-muted-foreground' />
        </div>

        <h3 className='mt-4 font-semibold'>No documents found</h3>

        <p className='mt-1 text-sm text-muted-foreground'>
          Try changing your search or filter.
        </p>
      </div>
    );
  }

  return (
    <section className='grid gap-4 md:grid-cols-2 xl:grid-cols-3'>
      {documents.map((document) => (
        <DocumentCard
          key={document.id}
          document={document}
          onPreview={onPreview}
        />
      ))}
    </section>
  );
}
