import type { ReactNode } from 'react';
import { redirect } from 'next/navigation';

import { auth } from '@/auth';

import { AdminHeader } from '@/components/layout/admin/header';
import { AdminSidebar } from '@/components/layout/admin/sidebar';

const ADMIN_ROLES = [
  'SUPER_ADMIN',
  'ADMIN',
  'LOAN_OFFICER',
  'UNDERWRITER',
] as const;

type AdminRole = (typeof ADMIN_ROLES)[number];

function isAdminRole(role: unknown): role is AdminRole {
  return typeof role === 'string' && ADMIN_ROLES.includes(role as AdminRole);
}

export default async function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await auth();

  // Authentication
  if (!session?.user) {
    redirect('/auth/login');
  }

  // Authorization
  if (!isAdminRole(session.user.role)) {
    redirect('/client');
  }

  return (
    <div className='min-h-screen bg-background'>
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main application area */}
      <div className='min-h-screen lg:pl-64'>
        {/* Header */}
        <AdminHeader user={session.user} />

        {/* Page content */}
        <main className='min-h-[calc(100vh-4rem)]'>
          <div className='mx-auto w-full max-w-[1600px] px-4 py-6 sm:px-6 lg:px-8'>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
