export type DocumentStatus =
  | 'Verified'
  | 'Pending Review'
  | 'Rejected'
  | 'Missing';

export type DocumentCategory =
  | 'Identification'
  | 'Income'
  | 'Financial'
  | 'Loan';

export interface ClientDocument {
  id: string;
  name: string;
  description: string;
  category: DocumentCategory;
  status: DocumentStatus;
  required: boolean;
  fileName?: string;
  fileSize?: string;
  uploadedAt?: string;
  verifiedAt?: string;
  rejectionReason?: string;
  fileUrl?: string;
}

export interface DocumentStat {
  title: string;
  value: string;
  description: string;
}
