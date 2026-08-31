import type { ReactNode } from 'react';
import { CustomerLayout } from '@/components/layout/clients/customer-layout';
interface ClientLayoutProps {
  children: ReactNode;
}
export default function ClientLayout({ children }: ClientLayoutProps) {
  return <CustomerLayout>{children}</CustomerLayout>;
}
