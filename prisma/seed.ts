import 'dotenv/config';

import bcrypt from 'bcryptjs';

import { PrismaPg } from '@prisma/adapter-pg';

import { PrismaClient, UserRole } from '../generated/prisma/client';

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error('DATABASE_URL is not defined. Check your .env file.');
}

const adapter = new PrismaPg({
  connectionString,
});

const prisma = new PrismaClient({
  adapter,
});

const PASSWORD = 'Password123!';

async function main() {
  console.log('🌱 Starting LoanFlow database seed...');

  const hashedPassword = await bcrypt.hash(PASSWORD, 12);

  const users = [
    {
      name: 'Super Admin',
      email: 'superadmin@loanflow.local',
      role: UserRole.SUPER_ADMIN,
    },
    {
      name: 'System Admin',
      email: 'admin@loanflow.local',
      role: UserRole.ADMIN,
    },
    {
      name: 'Loan Officer',
      email: 'loanofficer@loanflow.local',
      role: UserRole.LOAN_OFFICER,
    },
    {
      name: 'Credit Underwriter',
      email: 'underwriter@loanflow.local',
      role: UserRole.UNDERWRITER,
    },
    {
      name: 'Demo Customer',
      email: 'customer@loanflow.local',
      role: UserRole.CUSTOMER,
    },
  ];

  for (const user of users) {
    const createdUser = await prisma.user.upsert({
      where: {
        email: user.email,
      },

      update: {
        name: user.name,
        password: hashedPassword,
        role: user.role,
      },

      create: {
        name: user.name,
        email: user.email,
        password: hashedPassword,
        role: user.role,
      },
    });

    console.log(`✓ ${createdUser.role}: ${createdUser.email}`);
  }

  console.log('');
  console.log('✅ LoanFlow database seed completed!');
  console.log('');
  console.log('Login accounts:');
  console.log('────────────────────────────────────────');
  console.log('SUPER_ADMIN  → superadmin@loanflow.local');
  console.log('ADMIN        → admin@loanflow.local');
  console.log('LOAN_OFFICER → loanofficer@loanflow.local');
  console.log('UNDERWRITER  → underwriter@loanflow.local');
  console.log('CUSTOMER     → customer@loanflow.local');
  console.log('────────────────────────────────────────');
  console.log(`Password: ${PASSWORD}`);
}

main()
  .catch((error) => {
    console.error('');
    console.error('❌ Seed failed:');
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
