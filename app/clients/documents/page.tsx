'use client';

import { useState } from 'react';

import {
  DocumentFilters,
  DocumentHeader,
  DocumentList,
  DocumentPreviewDialog,
  DocumentStats,
  UploadDocumentDialog,
  documentStats,
  useDocuments,
} from '@/modules/documents';

import type { ClientDocument } from '@/modules/documents';

export default function ClientDocumentsPage() {
  const { documents, search, setSearch, status, setStatus } = useDocuments();

  const [selectedDocument, setSelectedDocument] =
    useState<ClientDocument | null>(null);

  const [previewOpen, setPreviewOpen] = useState(false);

  const [uploadOpen, setUploadOpen] = useState(false);

  const handlePreview = (document: ClientDocument) => {
    setSelectedDocument(document);
    setPreviewOpen(true);
  };

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
