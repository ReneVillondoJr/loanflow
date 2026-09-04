import { redirect } from 'next/navigation';

import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';

export default async function ClientPage() {
  const session = await auth();

  if (!session?.user?.id) {
    redirect('/auth/login');
  }

  const user = await prisma.user.findUnique({
    where: {
      id: session.user.id,
    },
    include: {
      customer: true,
    },
  });

  if (!user) {
    redirect('/auth/login');
  }

  return (
    <div>
      <h1>Welcome, {user.name}</h1>

      <p>Email: {user.email}</p>

      <p>Customer ID: {user.customer?.id}</p>
    </div>
  );
}
