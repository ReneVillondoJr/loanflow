import type { ReactNode } from 'react';

import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

import { CustomerLayout } from '@/components/layout/clients/customer-layout';

export default async function ClientLayout({
  children,
}: {
  children: ReactNode;
}) {
  const cookieStore = await cookies();
  const role = cookieStore.get('loanflow-role')?.value;
  const email = decodeURIComponent(
    cookieStore.get('loanflow-email')?.value ?? '',
  );
  const name = decodeURIComponent(
    cookieStore.get('loanflow-name')?.value ?? 'Demo Client',
  );

  if (!role) {
    redirect('/auth/login');
  }

  if (role !== 'CUSTOMER') {
    redirect('/admin');
  }

  return (
    <CustomerLayout
      user={{
        name,
        email,
      }}
    >
      {children}
    </CustomerLayout>
  );
}
