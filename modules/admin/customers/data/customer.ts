import type {
  Customer,
  CustomerStatus,
} from '@/modules/admin/customers/types/customer';

const getCustomerStatus = (): CustomerStatus => {
  return 'ACTIVE';
};

const customers: Customer[] = [
  {
    id: 'customer-001',
    name: 'Ana Garcia',
    email: 'ana.garcia@example.com',
    image: null,
    phone: '+63 920 456 7890',
    status: getCustomerStatus(),
    createdAt: new Date('2026-08-31'),
    applicationsCount: 3,
    activeLoans: 1,
  },
  {
    id: 'customer-002',
    name: 'Juan Dela Cruz',
    email: 'juan.delacruz@example.com',
    image: null,
    phone: '+63 917 234 5678',
    status: getCustomerStatus(),
    createdAt: new Date('2026-08-29'),
    applicationsCount: 2,
    activeLoans: 1,
  },
  {
    id: 'customer-003',
    name: 'Maria Santos',
    email: 'maria.santos@example.com',
    image: null,
    phone: '+63 905 345 6789',
    status: getCustomerStatus(),
    createdAt: new Date('2026-08-27'),
    applicationsCount: 1,
    activeLoans: 0,
  },
  {
    id: 'customer-004',
    name: 'Carlos Reyes',
    email: 'carlos.reyes@example.com',
    image: null,
    phone: '+63 918 456 7890',
    status: getCustomerStatus(),
    createdAt: new Date('2026-08-24'),
    applicationsCount: 4,
    activeLoans: 2,
  },
  {
    id: 'customer-005',
    name: 'Sofia Mendoza',
    email: 'sofia.mendoza@example.com',
    image: null,
    phone: '+63 927 567 8901',
    status: getCustomerStatus(),
    createdAt: new Date('2026-08-21'),
    applicationsCount: 2,
    activeLoans: 1,
  },
  {
    id: 'customer-006',
    name: 'Miguel Torres',
    email: 'miguel.torres@example.com',
    image: null,
    phone: '+63 936 678 9012',
    status: getCustomerStatus(),
    createdAt: new Date('2026-08-18'),
    applicationsCount: 1,
    activeLoans: 0,
  },
  {
    id: 'customer-007',
    name: 'Isabella Cruz',
    email: 'isabella.cruz@example.com',
    image: null,
    phone: '+63 945 789 0123',
    status: getCustomerStatus(),
    createdAt: new Date('2026-08-15'),
    applicationsCount: 3,
    activeLoans: 1,
  },
  {
    id: 'customer-008',
    name: 'Daniel Flores',
    email: 'daniel.flores@example.com',
    image: null,
    phone: '+63 956 890 1234',
    status: getCustomerStatus(),
    createdAt: new Date('2026-08-12'),
    applicationsCount: 2,
    activeLoans: 0,
  },
];

export async function getCustomers(): Promise<Customer[]> {
  return [...customers].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );
}

export async function getCustomerById(id: string): Promise<Customer | null> {
  return customers.find((customer) => customer.id === id) ?? null;
}
