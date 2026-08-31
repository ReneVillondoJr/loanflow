import { AdminHeader } from '@/components/layout/header';
import { AdminSidebar } from '@/components/layout/sidebar';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='min-h-screen bg-muted/30'>
      <AdminSidebar />

      <div className='lg:pl-64'>
        <AdminHeader />

        <main className='min-h-screen'>
          <div className='mx-auto w-full max-w-[1600px] p-4 sm:p-5 md:p-6 lg:p-8'>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
