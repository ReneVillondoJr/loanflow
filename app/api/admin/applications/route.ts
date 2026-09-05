import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { requireRole, STAFF_ROLES } from '@/lib/rbac';

// GET /api/admin/applications - staff-only view of all loan applications
export async function GET() {
  const { error } = await requireRole(STAFF_ROLES);
  if (error) return error;

  const applications = await prisma.loanApplication.findMany({
    include: { customer: true, loanProduct: true },
    orderBy: { createdAt: 'desc' },
  });

  return NextResponse.json({ applications });
}
