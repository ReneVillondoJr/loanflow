'use client';

import { useState, type FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

export default function RegisterPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  function update(field: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const res = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setError(
        typeof data.error === 'string' ?
          data.error
        : 'Could not create your account. Please check your details.',
      );
      setLoading(false);
      return;
    }

    // Auto sign in after successful registration.
    const result = await signIn('credentials', {
      email: form.email,
      password: form.password,
      redirect: false,
    });

    setLoading(false);

    if (result?.error) {
      router.push('/login');
      return;
    }

    router.push('/dashboard');
  }

  return (
    <div className='mx-auto mt-16 max-w-sm px-4'>
      <h1 className='mb-6 text-2xl font-semibold'>Create an account</h1>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div className='flex gap-3'>
          <div className='flex-1'>
            <label className='block text-sm font-medium'>First name</label>
            <input
              required
              value={form.firstName}
              onChange={update('firstName')}
              className='mt-1 w-full rounded border px-3 py-2'
            />
          </div>
          <div className='flex-1'>
            <label className='block text-sm font-medium'>Last name</label>
            <input
              required
              value={form.lastName}
              onChange={update('lastName')}
              className='mt-1 w-full rounded border px-3 py-2'
            />
          </div>
        </div>
        <div>
          <label className='block text-sm font-medium'>Email</label>
          <input
            type='email'
            required
            value={form.email}
            onChange={update('email')}
            className='mt-1 w-full rounded border px-3 py-2'
          />
        </div>
        <div>
          <label className='block text-sm font-medium'>Phone (optional)</label>
          <input
            value={form.phone}
            onChange={update('phone')}
            className='mt-1 w-full rounded border px-3 py-2'
          />
        </div>
        <div>
          <label className='block text-sm font-medium'>Password</label>
          <input
            type='password'
            required
            minLength={8}
            value={form.password}
            onChange={update('password')}
            className='mt-1 w-full rounded border px-3 py-2'
          />
        </div>
        {error && <p className='text-sm text-red-600'>{error}</p>}
        <button
          type='submit'
          disabled={loading}
          className='w-full rounded bg-black px-3 py-2 text-white disabled:opacity-50'
        >
          {loading ? 'Creating account...' : 'Create account'}
        </button>
      </form>
    </div>
  );
}
