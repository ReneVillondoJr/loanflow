'use client';

import { ContactInformationForm } from './components/contact-information-form';
import { PersonalInformationForm } from './components/personal-information-form';
import { ProfileCard } from './components/profile-card';
import { ProfileHeader } from './components/header';
import { ProfileSecurityCard } from './components/profile-security-card';

import { customerProfileData } from './data/profile';

export default function ProfileModule() {
  const profile = customerProfileData;

  return (
    <div className='space-y-6'>
      <ProfileHeader />

      <ProfileCard
        name={profile.name}
        email={profile.email}
        image={profile.image}
        role={profile.role}
      />

      <div className='grid gap-6 xl:grid-cols-2'>
        <PersonalInformationForm defaultValues={profile.personalInformation} />

        <ContactInformationForm defaultValues={profile.contactInformation} />
      </div>

      <ProfileSecurityCard />
    </div>
  );
}
