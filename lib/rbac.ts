import { NextResponse } from 'next/server';

import { auth } from '@/auth';

import type { UserRole } from '@/generated/prisma/client';
import type { Session } from 'next-auth';

type AuthResult =
  | {
      session: Session;
      error: null;
    }
  | {
      session: null;
      error: NextResponse;
    };

/**
 * Ensures a request is authenticated.
 * Use inside Route Handlers.
 */
export async function requireAuth(): Promise<AuthResult> {
  const session = await auth();

  if (!session?.user) {
    return {
      session: null,
      error: NextResponse.json({ error: 'Unauthorized' }, { status: 401 }),
    };
  }

  return {
    session,
    error: null,
  };
}

/**
 * Ensures a request is authenticated AND
 * the user's role is in the allow list.
 */
export async function requireRole(
  allowedRoles: UserRole[],
): Promise<AuthResult> {
  const result = await requireAuth();

  if (result.error) {
    return result;
  }

  if (!allowedRoles.includes(result.session.user.role)) {
    return {
      session: null,
      error: NextResponse.json({ error: 'Forbidden' }, { status: 403 }),
    };
  }

  return result;
}

/**
 * Higher number = more privileged.
 */
export const ROLE_HIERARCHY: Record<UserRole, number> = {
  CUSTOMER: 0,
  LOAN_OFFICER: 1,
  UNDERWRITER: 2,
  ADMIN: 3,
  SUPER_ADMIN: 4,
};

/**
 * Checks whether a user has at least
 * the required role level.
 */
export function hasMinimumRole(
  userRole: UserRole,
  minimumRole: UserRole,
): boolean {
  return ROLE_HIERARCHY[userRole] >= ROLE_HIERARCHY[minimumRole];
}

/**
 * All staff roles.
 */
export const STAFF_ROLES: UserRole[] = [
  'LOAN_OFFICER',
  'UNDERWRITER',
  'ADMIN',
  'SUPER_ADMIN',
];
