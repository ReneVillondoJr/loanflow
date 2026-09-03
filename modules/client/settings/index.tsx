'use client';

import { SettingsHeader } from './components/header';
import { AccountPreferencesCard } from './components/account-preferences-card';
import { NotificationSettingsCard } from './components/notification-settings-card';
import { SecurityCard } from './components/security-card';
import { DangerZoneCard } from './components/danger-zone-card';

import { useSettings } from './hooks/use-settings';

export default function SettingsModule() {
  const {
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
  } = useSettings();

  return (
    <div className='space-y-6'>
      <SettingsHeader />

      <div className='grid gap-6'>
        <AccountPreferencesCard
          preferences={preferences}
          saving={saving}
          onChange={updatePreference}
          onSave={savePreferences}
        />

        <NotificationSettingsCard
          notifications={notifications}
          saving={saving}
          onChange={updateNotification}
          onSave={saveNotifications}
        />

        <SecurityCard
          security={security}
          saving={saving}
          onChange={updateSecurity}
          onSave={saveSecurity}
        />

        <DangerZoneCard />
      </div>
    </div>
  );
}
