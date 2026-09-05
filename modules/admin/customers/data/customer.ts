import { UserRole } from '@/generated/prisma/client';

import { prisma } from '@/lib/prisma';

import type {
  Customer,
  CustomerStatus,
} from '@/modules/admin/customers/types/customer';

function getCustomerStatus(): CustomerStatus {
  return 'ACTIVE';
}

export async function getCustomers(): Promise<Customer[]> {
  const users = await prisma.user.findMany({
    where: {
      role: UserRole.CUSTOMER,
    },
    orderBy: {
      createdAt: 'desc',
    },
    select: {
      id: true,
      name: true,
      email: true,
      createdAt: true,
      customer: true,
    },
  });

  return users.map((user) => ({
    id: user.id,
    name: user.name ?? 'Unnamed Customer',
    email: user.email,
    image: null,
    phone: null,
    status: getCustomerStatus(),
    createdAt: user.createdAt,
    applicationsCount: 0,
    activeLoans: 0,
  }));
}

export async function getCustomerById(id: string): Promise<Customer | null> {
  const user = await prisma.user.findFirst({
    where: {
      id,
      role: UserRole.CUSTOMER,
    },
    select: {
      id: true,
      name: true,
      email: true,
      createdAt: true,
      customer: true,
    },
  });

  if (!user) {
    return null;
  }

  return {
    id: user.id,
    name: user.name ?? 'Unnamed Customer',
    email: user.email,
    image: null,
    phone: null,
    status: getCustomerStatus(),
    createdAt: user.createdAt,
    applicationsCount: 0,
    activeLoans: 0,
  };
}
