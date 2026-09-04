export interface AccountPreferences {
  language: string;
  timezone: string;
  dateFormat: string;
}

export interface NotificationSettings {
  applicationUpdates: boolean;
  paymentReminders: boolean;
  documentReminders: boolean;
  marketingEmails: boolean;
}

export interface SecuritySettings {
  loginNotifications: boolean;
  twoFactorAuthentication: boolean;
}

export interface SettingsState {
  preferences: AccountPreferences;
  notifications: NotificationSettings;
  security: SecuritySettings;
}
