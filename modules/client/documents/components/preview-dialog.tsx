'use client';

import { Download, ExternalLink, Printer } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

import type { ClientDocument } from '../types/documents';

interface DocumentPreviewDialogProps {
  document: ClientDocument | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DocumentPreviewDialog({
  document,
  open,
  onOpenChange,
}: DocumentPreviewDialogProps) {
  if (!document) {
    return null;
  }

  const handlePrint = () => {
    if (!document.fileUrl) {
      return;
    }

    const printWindow = window.open(document.fileUrl, '_blank');

    if (!printWindow) {
      return;
    }

    printWindow.addEventListener('load', () => {
      printWindow.print();
    });
  };

  const handleDownload = () => {
    if (!document.fileUrl) {
      return;
    }

    window.open(document.fileUrl, '_blank');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='max-h-[90vh] max-w-5xl overflow-hidden'>
        <DialogHeader>
          <DialogTitle>{document.name}</DialogTitle>

          <DialogDescription>
            {document.fileName ?? 'Document preview'}
          </DialogDescription>
        </DialogHeader>

        <div className='flex flex-wrap gap-2 border-b pb-4'>
          <Button
            type='button'
            variant='outline'
            size='sm'
            onClick={handleDownload}
          >
            <Download className='size-4' />
            Download
          </Button>

          <Button
            type='button'
            variant='outline'
            size='sm'
            onClick={handlePrint}
          >
            <Printer className='size-4' />
            Print
          </Button>

          {document.fileUrl && (
            <Button
              type='button'
              variant='outline'
              size='sm'
              onClick={() => window.open(document.fileUrl, '_blank')}
            >
              <ExternalLink className='size-4' />
              Open
            </Button>
          )}
        </div>

        <div className='h-[65vh] overflow-hidden rounded-md border bg-muted'>
          {document.fileUrl ?
            <iframe
              src={document.fileUrl}
              title={document.name}
              className='h-full w-full'
            />
          : <div className='flex h-full items-center justify-center p-6 text-center text-sm text-muted-foreground'>
              No document file is available.
            </div>
          }
        </div>
      </DialogContent>
    </Dialog>
  );
}
