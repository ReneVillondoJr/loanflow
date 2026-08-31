import { auth } from '@/auth';
import { LogoutButton } from '@/components/logout-button';
import { STAFF_ROLES } from '@/lib/rbac';

export default async function DashboardPage() {
  const session = await auth();

  // Middleware already guarantees a session exists here, but keep a guard
  // for defense-in-depth / type narrowing.
  if (!session?.user) return null;

  const isStaff = STAFF_ROLES.includes(session.user.role);

  return (
    <div className='mx-auto mt-16 max-w-2xl px-4'>
      <div className='mb-6 flex items-center justify-between'>
        <h1 className='text-2xl font-semibold'>
          Welcome, {session.user.name ?? session.user.email}
        </h1>
        <LogoutButton />
      </div>

      <p className='text-sm text-gray-600'>
        Role: <span className='font-medium'>{session.user.role}</span>
      </p>

      {isStaff && (
        <p className='mt-4 text-sm text-gray-600'>
          You have staff access — see /admin/applications for the review queue.
        </p>
      )}
    </div>
  );
}
