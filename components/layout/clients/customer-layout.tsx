'use client';

import { useState } from 'react';

import { CustomerHeader } from './customer-header';
import { CustomerMobileSidebar } from './customer-mobile-sidebar';
import { CustomerSidebar } from './customer-sidebar';

interface CustomerLayoutProps {
  children: React.ReactNode;
}

export function CustomerLayout({ children }: CustomerLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className='min-h-screen bg-muted/30'>
      <div className='flex min-h-screen'>
        {/* Desktop Sidebar */}
        <CustomerSidebar />

        {/* Mobile Sidebar */}
        <CustomerMobileSidebar
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        />

        {/* Main Content Area */}
        <div className='flex min-w-0 flex-1 flex-col'>
          {/* Header */}
          <CustomerHeader onMenuClick={() => setMobileMenuOpen(true)} />

          {/* Content */}
          <main className='flex-1'>
            <div className='mx-auto w-full max-w-[1400px] px-4 py-6 sm:px-6 lg:px-8'>
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
