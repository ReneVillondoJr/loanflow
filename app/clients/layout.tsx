import type { ReactNode } from 'react';

import { redirect } from 'next/navigation';

import { auth } from '@/auth';

import { CustomerLayout } from '@/components/layout/clients/customer-layout';

export default async function ClientLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await auth();

  // Not logged in
  if (!session?.user) {
    redirect('/auth/login');
  }

  // Only CUSTOMER can access /clients
  if (session.user.role !== 'CUSTOMER') {
    redirect('/admin/dashboard');
  }

  return (
    <CustomerLayout
      user={{
        name: session.user.name,
        email: session.user.email,
        image: session.user.image,
      }}
    >
      {children}
    </CustomerLayout>
  );
}
