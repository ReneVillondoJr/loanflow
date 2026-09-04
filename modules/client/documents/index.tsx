'use client';

import { useState } from 'react';

import { DocumentFilters } from './components/filters';
import { DocumentHeader } from './components/header';
import { DocumentList } from './components/list';
import { DocumentPreviewDialog } from './components/preview-dialog';
import { DocumentStats } from './components/stats';
import { UploadDocumentDialog } from './components/upload-document-dialog';

import { documentStats } from './data/documents';

import { useDocuments } from './hooks/use-documents';

import type { ClientDocument } from './types/documents';

export default function DocumentsModule() {
  const { documents, search, setSearch, status, setStatus } = useDocuments();

  const [selectedDocument, setSelectedDocument] =
    useState<ClientDocument | null>(null);

  const [previewOpen, setPreviewOpen] = useState(false);
  const [uploadOpen, setUploadOpen] = useState(false);

  function handlePreview(document: ClientDocument) {
    setSelectedDocument(document);
    setPreviewOpen(true);
  }

  return (
    <div className='space-y-6'>
      <DocumentHeader onUpload={() => setUploadOpen(true)} />

      <DocumentStats stats={documentStats} />

      <DocumentFilters
        search={search}
        onSearchChange={setSearch}
        status={status}
        onStatusChange={setStatus}
      />

      <DocumentList documents={documents} onPreview={handlePreview} />

      <DocumentPreviewDialog
        document={selectedDocument}
        open={previewOpen}
        onOpenChange={setPreviewOpen}
      />

      <UploadDocumentDialog open={uploadOpen} onOpenChange={setUploadOpen} />
    </div>
  );
}
