'use client';

import { useState, type ReactNode } from 'react';

import { CustomerHeader } from '@/components/layout/clients/customer-header';
import { CustomerSidebar } from '@/components/layout/clients/customer-sidebar';

interface CustomerUser {
  name?: string | null;
  email?: string | null;
  image?: string | null;
}

interface CustomerLayoutProps {
  children: ReactNode;
  user: CustomerUser;
}

export function CustomerLayout({ children, user }: CustomerLayoutProps) {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className='min-h-screen bg-background'>
      <CustomerSidebar
        open={mobileSidebarOpen}
        onOpenChange={setMobileSidebarOpen}
      />

      <div className='lg:pl-64'>
        <CustomerHeader
          user={user}
          onMenuClick={() => setMobileSidebarOpen(true)}
        />

        <main className='min-h-[calc(100vh-4rem)] p-4 md:p-6 lg:p-8'>
          {children}
        </main>
      </div>
    </div>
  );
}
