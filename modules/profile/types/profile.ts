export interface PersonalInformation {
  firstName: string;
  middleName: string;
  lastName: string;
  dateOfBirth: string;
}

export interface ContactInformation {
  email: string;
  phone: string;
  address: string;
  city: string;
}

export interface CustomerProfile {
  id: string;

  name: string;

  email: string;

  image?: string | null;

  role: string;

  personalInformation: PersonalInformation;

  contactInformation: ContactInformation;
}
