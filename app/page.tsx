import { redirect } from 'next/navigation';

import { auth } from '@/auth';

export default async function HomePage() {
  const session = await auth();

  if (!session?.user) {
    redirect('/auth/login');
  }

  switch (session.user.role) {
    case 'SUPER_ADMIN':
    case 'ADMIN':
    case 'LOAN_OFFICER':
    case 'UNDERWRITER':
      redirect('/admin/dashboard');

    case 'CUSTOMER':
      redirect('/clients/dashboard');

    default:
      redirect('/auth/login');
  }
}
