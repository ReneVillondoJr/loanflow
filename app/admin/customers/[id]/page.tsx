import { notFound } from 'next/navigation';

import { CustomerDetails } from '@/modules/admin/customers/components/customer-details';

import { getCustomerById } from '@/modules/admin/customers/data/customer';

interface CustomerDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function CustomerDetailsPage({
  params,
}: CustomerDetailsPageProps) {
  const { id } = await params;

  const customer = await getCustomerById(id);

  if (!customer) {
    notFound();
  }

  return <CustomerDetails customer={customer} />;
}
