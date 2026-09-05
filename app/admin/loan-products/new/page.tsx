import type { Metadata } from 'next';

import { AddLoanProductForm } from '@/modules/admin/loan-products/components/add-loan-product-form';

export const metadata: Metadata = {
  title: 'Add Loan Product',
  description: 'Create and configure a new loan product.',
};

export default function NewLoanProductPage() {
  return (
    <div className='space-y-6'>
      <AddLoanProductForm />
    </div>
  );
}
