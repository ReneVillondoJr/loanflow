import { PrismaPg } from '@prisma/adapter-pg';

import { PrismaClient } from '@/generated/prisma/client';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

let prismaClient: PrismaClient | undefined;

function createPrismaClient() {
  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    throw new Error(
      'DATABASE_URL is not defined. Check your .env file or deployment environment variables.',
    );
  }

  const adapter = new PrismaPg({
    connectionString,
  });

  const client =
    prismaClient ??
    globalForPrisma.prisma ??
    new PrismaClient({
      adapter,
    });

  prismaClient = client;

  if (process.env.NODE_ENV !== 'production') {
    globalForPrisma.prisma = client;
  }

  return client;
}

export const prisma = new Proxy({} as PrismaClient, {
  get(_target, property, receiver) {
    return Reflect.get(createPrismaClient(), property, receiver);
  },
});
