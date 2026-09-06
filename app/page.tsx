import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export default async function HomePage() {
  const role = (await cookies()).get('loanflow-role')?.value;

  if (!role) {
    redirect('/auth/login');
  }

  redirect(role === 'ADMIN' ? '/admin' : '/clients/dashboard');
}
