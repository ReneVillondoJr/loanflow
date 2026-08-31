import type { ReactNode } from 'react';
import { redirect } from 'next/navigation';

import { auth } from '@/auth';

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await auth();

  if (!session?.user) {
    redirect('/auth/login');
  }

  return (
    <div className='min-h-screen bg-muted/30'>
      <main className='min-h-screen'>
        <div className='mx-auto w-full max-w-[1600px] p-4 sm:p-5 md:p-6 lg:p-8'>
          {children}
        </div>
      </main>
    </div>
  );
}
