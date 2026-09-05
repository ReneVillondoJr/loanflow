import type { Metadata } from 'next';

import LoanProducts from '@/modules/admin/loan-products';

export const metadata: Metadata = {
  title: 'Loan Products',
  description: 'Manage loan products, interest rates, terms, and availability.',
};

export default function LoanProductsPage() {
  return <LoanProducts />;
}
