import type { CustomerProfile } from '../types/profile';

export const customerProfileData: CustomerProfile = {
  id: 'customer-001',

  name: 'Customer Name',

  email: 'customer@email.com',

  image: null,

  role: 'Customer',

  personalInformation: {
    firstName: 'Customer',
    middleName: '',
    lastName: 'Name',
    dateOfBirth: '',
  },

  contactInformation: {
    email: 'customer@email.com',
    phone: '',
    address: '',
    city: '',
  },
};
