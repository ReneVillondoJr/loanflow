'use client';

import {
  Download,
  Eye,
  FileText,
  MoreHorizontal,
  Printer,
  Upload,
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';

import type { ClientDocument } from '../types/documents';

interface DocumentCardProps {
  document: ClientDocument;
  onPreview: (document: ClientDocument) => void;
}

function getStatusClass(status: string) {
  switch (status) {
    case 'Verified':
      return 'border-emerald-200 bg-emerald-50 text-emerald-700';

    case 'Pending Review':
      return 'border-amber-200 bg-amber-50 text-amber-700';

    case 'Rejected':
      return 'border-red-200 bg-red-50 text-red-700';

    case 'Missing':
      return 'border-border bg-muted text-muted-foreground';

    default:
      return '';
  }
}

export function DocumentCard({ document, onPreview }: DocumentCardProps) {
  const canView = Boolean(document.fileUrl);

  const handleDownload = () => {
    if (!document.fileUrl) {
      return;
    }

    window.open(document.fileUrl, '_blank');
  };

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

  return (
    <Card className='flex min-h-[260px] flex-col'>
      <CardHeader className='flex-row items-start justify-between gap-4 space-y-0'>
        <div className='flex min-w-0 items-start gap-3'>
          <div className='flex size-10 shrink-0 items-center justify-center rounded-md bg-muted'>
            <FileText className='size-5 text-muted-foreground' />
          </div>

          <div className='min-w-0'>
            <p className='truncate font-semibold'>{document.name}</p>

            <p className='mt-1 text-sm text-muted-foreground'>
              {document.category}
            </p>
          </div>
        </div>

        <Badge variant='outline' className={getStatusClass(document.status)}>
          {document.status}
        </Badge>
      </CardHeader>

      <CardContent className='flex-1'>
        <p className='text-sm leading-6 text-muted-foreground'>
          {document.description}
        </p>

        <div className='mt-5 space-y-2 text-sm'>
          <div className='flex items-center justify-between gap-4'>
            <span className='text-muted-foreground'>Requirement</span>

            <span className='font-medium'>
              {document.required ? 'Required' : 'Optional'}
            </span>
          </div>

          {document.fileName && (
            <div className='flex items-center justify-between gap-4'>
              <span className='text-muted-foreground'>File</span>

              <span className='max-w-[180px] truncate font-medium'>
                {document.fileName}
              </span>
            </div>
          )}

          {document.fileSize && (
            <div className='flex items-center justify-between gap-4'>
              <span className='text-muted-foreground'>Size</span>

              <span className='font-medium'>{document.fileSize}</span>
            </div>
          )}

          {document.uploadedAt && (
            <div className='flex items-center justify-between gap-4'>
              <span className='text-muted-foreground'>Uploaded</span>

              <span className='font-medium'>{document.uploadedAt}</span>
            </div>
          )}
        </div>

        {document.status === 'Rejected' && document.rejectionReason && (
          <div className='mt-4 rounded-md border border-red-200 bg-red-50 p-3'>
            <p className='text-xs font-medium text-red-700'>Rejection reason</p>

            <p className='mt-1 text-xs leading-5 text-red-600'>
              {document.rejectionReason}
            </p>
          </div>
        )}
      </CardContent>

      <CardFooter className='flex flex-wrap gap-2'>
        {canView ?
          <>
            <Button
              type='button'
              variant='outline'
              className='flex-1'
              onClick={() => onPreview(document)}
            >
              <Eye className='size-4' />
              View
            </Button>

            <Button
              type='button'
              variant='outline'
              size='icon'
              onClick={handleDownload}
              aria-label='Download document'
            >
              <Download className='size-4' />
            </Button>

            <Button
              type='button'
              variant='outline'
              size='icon'
              onClick={handlePrint}
              aria-label='Print document'
            >
              <Printer className='size-4' />
            </Button>
          </>
        : <Button type='button' variant='outline' className='w-full'>
            <Upload className='size-4' />
            Upload Document
          </Button>
        }
      </CardFooter>
    </Card>
  );
}
