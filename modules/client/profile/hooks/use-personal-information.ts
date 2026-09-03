'use client';

import { useState } from 'react';

import type { PersonalInformation } from '../types/profile';

interface UsePersonalInformationProps {
  defaultValues?: Partial<PersonalInformation>;
}

export function usePersonalInformation(
  props: UsePersonalInformationProps = {},
) {
  const { defaultValues } = props;

  const [values, setValues] = useState<PersonalInformation>({
    firstName: defaultValues?.firstName ?? '',
    middleName: defaultValues?.middleName ?? '',
    lastName: defaultValues?.lastName ?? '',
    dateOfBirth: defaultValues?.dateOfBirth ?? '',
  });

  function updateField<K extends keyof PersonalInformation>(
    field: K,
    value: PersonalInformation[K],
  ) {
    setValues((previous) => ({
      ...previous,
      [field]: value,
    }));
  }

  return {
    values,
    updateField,
  };
}
