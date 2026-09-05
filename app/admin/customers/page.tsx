import Customers from '@/modules/admin/customers/index';

import { getCustomers } from '@/modules/admin/customers/data/customer';

export default async function CustomersPage() {
  const customers = await getCustomers();

  const stats = {
    total: customers.length,

    active: customers.filter((customer) => customer.status === 'ACTIVE').length,

    pending: customers.filter((customer) => customer.status === 'PENDING')
      .length,

    inactive: customers.filter((customer) => customer.status === 'INACTIVE')
      .length,
  };

  return <Customers customers={customers} stats={stats} />;
}
