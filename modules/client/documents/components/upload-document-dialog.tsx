'use client';

import { useRef, useState } from 'react';

import { FileUp, Upload, X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface UploadDocumentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function UploadDocumentDialog({
  open,
  onOpenChange,
}: UploadDocumentDialogProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];

    if (!selectedFile) {
      return;
    }

    setFile(selectedFile);
  };

  const handleUpload = () => {
    if (!file) {
      return;
    }

    console.log('Upload file:', file);

    setFile(null);

    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='sm:max-w-lg'>
        <DialogHeader>
          <DialogTitle>Upload Document</DialogTitle>

          <DialogDescription>
            Upload a PDF or image document for verification.
          </DialogDescription>
        </DialogHeader>

        <div className='space-y-5'>
          <div className='space-y-2'>
            <Label htmlFor='document-name'>Document Name</Label>

            <Input
              id='document-name'
              placeholder='Example: Certificate of Employment'
            />
          </div>

          <div className='space-y-2'>
            <Label>Select File</Label>

            <input
              ref={inputRef}
              type='file'
              accept='.pdf,image/png,image/jpeg,image/jpg'
              className='hidden'
              onChange={handleFileChange}
            />

            {!file ?
              <button
                type='button'
                onClick={() => inputRef.current?.click()}
                className='flex min-h-[160px] w-full flex-col items-center justify-center rounded-lg border border-dashed p-6 transition-colors hover:bg-muted/50'
              >
                <div className='flex size-11 items-center justify-center rounded-full bg-muted'>
                  <FileUp className='size-5 text-muted-foreground' />
                </div>

                <p className='mt-3 text-sm font-medium'>
                  Click to select a file
                </p>

                <p className='mt-1 text-xs text-muted-foreground'>
                  PDF, PNG, or JPG
                </p>
              </button>
            : <div className='flex items-center justify-between gap-3 rounded-md border p-3'>
                <div className='flex min-w-0 items-center gap-3'>
                  <FileUp className='size-5 shrink-0 text-muted-foreground' />

                  <div className='min-w-0'>
                    <p className='truncate text-sm font-medium'>{file.name}</p>

                    <p className='text-xs text-muted-foreground'>
                      {(file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </div>

                <Button
                  type='button'
                  variant='ghost'
                  size='icon'
                  onClick={() => setFile(null)}
                >
                  <X className='size-4' />
                </Button>
              </div>
            }
          </div>

          <div className='flex flex-col-reverse gap-2 sm:flex-row sm:justify-end'>
            <Button
              type='button'
              variant='outline'
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button type='button' onClick={handleUpload} disabled={!file}>
              <Upload className='size-4' />
              Upload Document
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
