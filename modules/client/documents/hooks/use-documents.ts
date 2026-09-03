'use client';

import { useMemo, useState } from 'react';

import { documents } from '../data/documents';
import type { ClientDocument, DocumentStatus } from '../types/documents';

export function useDocuments() {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState<DocumentStatus | 'All'>('All');

  const filteredDocuments = useMemo(() => {
    return documents.filter((document) => {
      const matchesSearch =
        document.name.toLowerCase().includes(search.toLowerCase()) ||
        document.category.toLowerCase().includes(search.toLowerCase());

      const matchesStatus = status === 'All' || document.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [search, status]);

  return {
    documents: filteredDocuments,
    allDocuments: documents,
    search,
    setSearch,
    status,
    setStatus,
  };
}

export type { ClientDocument };
