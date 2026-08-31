import { LoginForm } from '@/components/auth/login-form';

export default function LoginPage() {
  return (
    <main className='min-h-screen bg-muted/30'>
      <div className='flex min-h-screen items-center justify-center p-4 sm:p-6'>
        <div className='w-full max-w-md'>
          <LoginForm />
        </div>
      </div>
    </main>
  );
}
