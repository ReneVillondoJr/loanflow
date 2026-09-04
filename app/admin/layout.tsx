import type { ReactNode } from 'react';
import { redirect } from 'next/navigation';

import { auth } from '@/auth';

import { AdminHeader } from '@/components/layout/admin/header';
import { AdminSidebar } from '@/components/layout/admin/sidebar';

export default async function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await auth();

  if (!session?.user) {
    redirect('/auth/login');
  }

  const allowedRoles = ['SUPER_ADMIN', 'ADMIN', 'LOAN_OFFICER', 'UNDERWRITER'];

  if (!allowedRoles.includes(session.user.role)) {
    redirect('/client');
  }

  return (
    <div className='min-h-screen bg-background'>
      <AdminSidebar />

      <div className='lg:pl-64'>
        <AdminHeader user={session.user} />

        <main className='min-h-[calc(100vh-4rem)] p-4 md:p-6 lg:p-8'>
          {children}
        </main>
      </div>
    </div>
  );
}
