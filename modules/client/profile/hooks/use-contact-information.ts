'use client';

import { useState } from 'react';

import type { ContactInformation } from '../types/profile';

interface UseContactInformationProps {
  defaultValues?: Partial<ContactInformation>;
}

export function useContactInformation(props: UseContactInformationProps = {}) {
  const { defaultValues } = props;

  const [values, setValues] = useState<ContactInformation>({
    email: defaultValues?.email ?? '',
    phone: defaultValues?.phone ?? '',
    address: defaultValues?.address ?? '',
    city: defaultValues?.city ?? '',
  });

  function updateField<K extends keyof ContactInformation>(
    field: K,
    value: ContactInformation[K],
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
