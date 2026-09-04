'use client';

import { useState, type FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setError(null);
    setLoading(true);

    try {
      const result = await signIn('credentials', {
        email: email.trim(),
        password,
        redirect: false,
      });

      if (!result || result.error) {
        setError('Invalid email or password');
        setLoading(false);
        return;
      }

      /*
       * Always go to "/".
       *
       * app/page.tsx checks the logged-in user's role
       * and redirects them to the correct portal:
       *
       * SUPER_ADMIN  -> /admin/dashboard
       * ADMIN        -> /admin/dashboard
       * LOAN_OFFICER -> /admin/dashboard
       * UNDERWRITER  -> /admin/dashboard
       * CUSTOMER      -> /clients/dashboard
       */
      router.replace('/');
      router.refresh();
    } catch (error) {
      console.error('Login error:', error);

      setError('Something went wrong. Please try again.');
      setLoading(false);
    }
  }

  return (
    <div className='mx-auto mt-16 max-w-sm px-4'>
      <h1 className='mb-6 text-2xl font-semibold'>Log in</h1>

      <form onSubmit={handleSubmit} className='space-y-4'>
        {/* Email */}
        <div>
          <label htmlFor='email' className='block text-sm font-medium'>
            Email
          </label>

          <input
            id='email'
            name='email'
            type='email'
            required
            autoComplete='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='mt-1 w-full rounded border px-3 py-2 outline-none focus:ring-2 focus:ring-primary'
            placeholder='you@example.com'
            disabled={loading}
          />
        </div>

        {/* Password */}
        <div>
          <label htmlFor='password' className='block text-sm font-medium'>
            Password
          </label>

          <input
            id='password'
            name='password'
            type='password'
            required
            autoComplete='current-password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='mt-1 w-full rounded border px-3 py-2 outline-none focus:ring-2 focus:ring-primary'
            placeholder='••••••••'
            disabled={loading}
          />
        </div>

        {/* Error */}
        {error && (
          <p role='alert' className='text-sm text-red-600'>
            {error}
          </p>
        )}

        {/* Submit */}
        <button
          type='submit'
          disabled={loading}
          className='w-full rounded bg-black px-3 py-2 text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50'
        >
          {loading ? 'Logging in...' : 'Log in'}
        </button>
      </form>
    </div>
  );
}
