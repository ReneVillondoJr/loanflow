'use client';

import { useState } from 'react';

import {
  defaultAccountPreferences,
  defaultNotificationSettings,
  defaultSecuritySettings,
} from '../data/settings';

import type {
  AccountPreferences,
  NotificationSettings,
  SecuritySettings,
} from '../types/settings';

export function useSettings() {
  const [preferences, setPreferences] = useState<AccountPreferences>(
    defaultAccountPreferences,
  );

  const [notifications, setNotifications] = useState<NotificationSettings>(
    defaultNotificationSettings,
  );

  const [security, setSecurity] = useState<SecuritySettings>(
    defaultSecuritySettings,
  );

  const [saving, setSaving] = useState(false);

  function updatePreference<K extends keyof AccountPreferences>(
    key: K,
    value: AccountPreferences[K],
  ) {
    setPreferences((current) => ({
      ...current,
      [key]: value,
    }));
  }

  function updateNotification<K extends keyof NotificationSettings>(
    key: K,
    value: NotificationSettings[K],
  ) {
    setNotifications((current) => ({
      ...current,
      [key]: value,
    }));
  }

  function updateSecurity<K extends keyof SecuritySettings>(
    key: K,
    value: SecuritySettings[K],
  ) {
    setSecurity((current) => ({
      ...current,
      [key]: value,
    }));
  }

  async function savePreferences() {
    setSaving(true);

    try {
      console.log('Saving preferences:', preferences);

      await new Promise((resolve) => setTimeout(resolve, 500));
    } finally {
      setSaving(false);
    }
  }

  async function saveNotifications() {
    setSaving(true);

    try {
      console.log('Saving notifications:', notifications);

      await new Promise((resolve) => setTimeout(resolve, 500));
    } finally {
      setSaving(false);
    }
  }

  async function saveSecurity() {
    setSaving(true);

    try {
      console.log('Saving security:', security);

      await new Promise((resolve) => setTimeout(resolve, 500));
    } finally {
      setSaving(false);
    }
  }

  return {
    preferences,
    notifications,
    security,
    saving,
    updatePreference,
    updateNotification,
    updateSecurity,
    savePreferences,
    saveNotifications,
    saveSecurity,
  };
}
