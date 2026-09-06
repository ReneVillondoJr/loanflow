'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, Loader2, LockKeyhole, Mail } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Input } from '@/components/ui/input';

import { Label } from '@/components/ui/label';

export function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError('');
    setIsLoading(true);

    const normalizedEmail = email.trim().toLowerCase();
    const role = normalizedEmail.includes('admin') ? 'ADMIN' : 'CUSTOMER';

    document.cookie = `loanflow-role=${role}; path=/; max-age=28800`;
    document.cookie = `loanflow-email=${encodeURIComponent(normalizedEmail)}; path=/; max-age=28800`;
    document.cookie = `loanflow-name=${encodeURIComponent(role === 'ADMIN' ? 'Demo Admin' : 'Demo Client')}; path=/; max-age=28800`;

    router.replace(role === 'ADMIN' ? '/admin' : '/clients/dashboard');
    setIsLoading(false);
  }

  return (
    <Card className='border-border/60 shadow-sm'>
      <CardHeader className='space-y-3 text-center'>
        <div className='mx-auto flex size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground'>
          <LockKeyhole className='size-6' />
        </div>

        <div className='space-y-1'>
          <CardTitle className='text-2xl'>Welcome back</CardTitle>

          <CardDescription>Sign in to your LoanFlow account</CardDescription>
        </div>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className='space-y-5'>
          {/* Error */}
          {error && (
            <Alert variant='destructive'>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {/* Email */}
          <div className='space-y-2'>
            <Label htmlFor='email'>Email address</Label>

            <div className='relative'>
              <Mail className='absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground' />

              <Input
                id='email'
                name='email'
                type='email'
                placeholder='you@example.com'
                autoComplete='email'
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className='pl-10'
                disabled={isLoading}
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className='space-y-2'>
            <div className='flex items-center justify-between'>
              <Label htmlFor='password'>Password</Label>

              <Link
                href='/forgot-password'
                className='text-sm font-medium text-primary hover:underline'
              >
                Forgot password?
              </Link>
            </div>

            <div className='relative'>
              <LockKeyhole className='absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground' />

              <Input
                id='password'
                name='password'
                type={showPassword ? 'text' : 'password'}
                placeholder='Enter your password'
                autoComplete='current-password'
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className='pr-10 pl-10'
                disabled={isLoading}
                required
              />

              <button
                type='button'
                onClick={() => setShowPassword((value) => !value)}
                className='absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground'
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                disabled={isLoading}
              >
                {showPassword ?
                  <EyeOff className='size-4' />
                : <Eye className='size-4' />}
              </button>
            </div>
          </div>

          {/* Submit */}
          <Button type='submit' className='w-full' disabled={isLoading}>
            {isLoading ?
              <>
                <Loader2 className='size-4 animate-spin' />
                Signing in...
              </>
            : 'Sign in'}
          </Button>

          {/* Register */}
          <div className='text-center text-sm text-muted-foreground'>
            Don&apos;t have an account?{' '}
            <Link
              href='/clients/register'
              className='font-medium text-primary hover:underline'
            >
              Create an account
            </Link>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
