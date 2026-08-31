import { NextResponse } from 'next/server';
import { auth } from '@/auth';

const STAFF_ROLES = ['ADMIN', 'SUPER_ADMIN', 'LOAN_OFFICER', 'UNDERWRITER'];

export default auth((req) => {
  const { pathname } = req.nextUrl;
  const isLoggedIn = !!req.auth;
  const role = req.auth?.user?.role;

  const isAuthPage =
    pathname.startsWith('/login') || pathname.startsWith('/register');
  const isAdminRoute =
    pathname.startsWith('/admin') || pathname.startsWith('/api/admin');
  const isCustomerRoute = pathname.startsWith('/dashboard');

  // Already logged in users shouldn't see login/register pages again.
  if (isAuthPage) {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL('/dashboard', req.url));
    }
    return NextResponse.next();
  }

  // Anything under /admin or /dashboard requires a session.
  if ((isAdminRoute || isCustomerRoute) && !isLoggedIn) {
    const loginUrl = new URL('/login', req.url);
    loginUrl.searchParams.set('callbackUrl', pathname);
    return NextResponse.redirect(loginUrl);
  }

  // /admin additionally requires a staff role.
  if (isAdminRoute && role && !STAFF_ROLES.includes(role)) {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  return NextResponse.next();
});

// Only run middleware where it's actually needed.
export const config = {
  matcher: [
    '/dashboard/:path*',
    '/admin/:path*',
    '/api/admin/:path*',
    '/login',
    '/register',
  ],
};
