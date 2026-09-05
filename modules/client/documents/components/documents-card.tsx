'use client';

import {
  CheckCircle2,
  Clock3,
  Download,
  Eye,
  FileText,
  MoreHorizontal,
  Printer,
  Upload,
  XCircle,
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

function getStatusConfig(status: string) {
  switch (status) {
    case 'Verified':
      return {
        icon: CheckCircle2,
        label: 'Verified',
        className:
          'border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-900/50 dark:bg-emerald-950/40 dark:text-emerald-400',
      };

    case 'Pending Review':
      return {
        icon: Clock3,
        label: 'Pending Review',
        className:
          'border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-900/50 dark:bg-amber-950/40 dark:text-amber-400',
      };

    case 'Rejected':
      return {
        icon: XCircle,
        label: 'Rejected',
        className:
          'border-red-200 bg-red-50 text-red-700 dark:border-red-900/50 dark:bg-red-950/40 dark:text-red-400',
      };

    case 'Missing':
      return {
        icon: Upload,
        label: 'Missing',
        className: 'border-border bg-muted text-muted-foreground',
      };

    default:
      return {
        icon: FileText,
        label: status,
        className: 'border-border bg-muted text-muted-foreground',
      };
  }
}

export function DocumentCard({ document, onPreview }: DocumentCardProps) {
  const canView = Boolean(document.fileUrl);

  const status = getStatusConfig(document.status);
  const StatusIcon = status.icon;

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
    <Card className='group flex h-full min-h-[320px] flex-col overflow-hidden transition-shadow duration-200 hover:shadow-md'>
      {/* Header */}
      <CardHeader className='border-b px-5 py-4'>
        <div className='flex items-start justify-between gap-4'>
          <div className='flex min-w-0 items-start gap-3'>
            {/* File Icon */}
            <div className='flex size-11 shrink-0 items-center justify-center rounded-lg border bg-muted/60'>
              <FileText className='size-5 text-muted-foreground' />
            </div>

            {/* Document Name */}
            <div className='min-w-0 pt-0.5'>
              <h3 className='truncate text-sm font-semibold'>
                {document.name}
              </h3>

              <p className='mt-1 text-xs text-muted-foreground'>
                {document.category}
              </p>
            </div>
          </div>

          {/* Status */}
          <Badge
            variant='outline'
            className={`shrink-0 gap-1.5 px-2.5 py-1 text-[11px] font-medium ${status.className}`}
          >
            <StatusIcon className='size-3.5' />
            {status.label}
          </Badge>
        </div>
      </CardHeader>

      {/* Content */}
      <CardContent className='flex-1 px-5 py-4'>
        {/* Description */}
        <p className='min-h-[42px] text-sm leading-5 text-muted-foreground'>
          {document.description}
        </p>

        {/* Metadata */}
        <div className='mt-5 overflow-hidden rounded-lg border bg-muted/20'>
          {/* Requirement */}
          <div className='flex items-center justify-between gap-4 border-b px-3.5 py-2.5'>
            <span className='text-xs text-muted-foreground'>Requirement</span>

            <span className='text-xs font-medium'>
              {document.required ? 'Required' : 'Optional'}
            </span>
          </div>

          {/* File */}
          {document.fileName && (
            <div className='flex items-center justify-between gap-4 border-b px-3.5 py-2.5'>
              <span className='text-xs text-muted-foreground'>File</span>

              <span
                className='max-w-[170px] truncate text-xs font-medium'
                title={document.fileName}
              >
                {document.fileName}
              </span>
            </div>
          )}

          {/* Size */}
          {document.fileSize && (
            <div className='flex items-center justify-between gap-4 border-b px-3.5 py-2.5'>
              <span className='text-xs text-muted-foreground'>Size</span>

              <span className='text-xs font-medium'>{document.fileSize}</span>
            </div>
          )}

          {/* Uploaded */}
          {document.uploadedAt && (
            <div className='flex items-center justify-between gap-4 px-3.5 py-2.5'>
              <span className='text-xs text-muted-foreground'>Uploaded</span>

              <span className='text-xs font-medium'>{document.uploadedAt}</span>
            </div>
          )}
        </div>

        {/* Verified Information */}
        {document.status === 'Verified' && document.verifiedAt && (
          <div className='mt-3 flex items-center gap-2 text-xs text-muted-foreground'>
            <CheckCircle2 className='size-3.5 text-emerald-600' />

            <span>Verified on {document.verifiedAt}</span>
          </div>
        )}

        {/* Rejection Reason */}
        {document.status === 'Rejected' && document.rejectionReason && (
          <div className='mt-3 rounded-lg border border-red-200 bg-red-50/70 px-3.5 py-3 dark:border-red-900/50 dark:bg-red-950/30'>
            <div className='flex items-start gap-2'>
              <XCircle className='mt-0.5 size-4 shrink-0 text-red-600 dark:text-red-400' />

              <div className='min-w-0'>
                <p className='text-xs font-semibold text-red-700 dark:text-red-400'>
                  Rejection reason
                </p>

                <p className='mt-1 text-xs leading-5 text-red-600 dark:text-red-400'>
                  {document.rejectionReason}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Missing State */}
        {document.status === 'Missing' && (
          <div className='mt-3 rounded-lg border border-dashed bg-muted/30 px-3.5 py-3'>
            <div className='flex items-center gap-2'>
              <Upload className='size-4 text-muted-foreground' />

              <div>
                <p className='text-xs font-medium'>Document required</p>

                <p className='mt-0.5 text-xs text-muted-foreground'>
                  Upload this document to continue.
                </p>
              </div>
            </div>
          </div>
        )}
      </CardContent>

      {/* Actions */}
      <CardFooter className='border-t bg-muted/20 px-5 py-3'>
        {canView ?
          <div className='flex w-full items-center gap-2'>
            <Button
              type='button'
              variant='outline'
              className='flex-1 gap-2'
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
              aria-label={`Download ${document.name}`}
              title='Download'
            >
              <Download className='size-4' />
            </Button>

            <Button
              type='button'
              variant='outline'
              size='icon'
              onClick={handlePrint}
              aria-label={`Print ${document.name}`}
              title='Print'
            >
              <Printer className='size-4' />
            </Button>

            <Button
              type='button'
              variant='outline'
              size='icon'
              aria-label={`More actions for ${document.name}`}
              title='More actions'
            >
              <MoreHorizontal className='size-4' />
            </Button>
          </div>
        : <Button type='button' className='w-full gap-2'>
            <Upload className='size-4' />
            Upload Document
          </Button>
        }
      </CardFooter>
    </Card>
  );
}
