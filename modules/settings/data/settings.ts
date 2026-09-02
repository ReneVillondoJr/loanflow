import type {
  AccountPreferences,
  NotificationSettings,
  SecuritySettings,
} from '../types/settings';

export const defaultAccountPreferences: AccountPreferences = {
  language: 'English',
  timezone: 'Asia/Manila',
  dateFormat: 'MM/DD/YYYY',
};

export const defaultNotificationSettings: NotificationSettings = {
  applicationUpdates: true,
  paymentReminders: true,
  documentReminders: true,
  marketingEmails: false,
};

export const defaultSecuritySettings: SecuritySettings = {
  loginNotifications: true,
  twoFactorAuthentication: false,
};

export const languageOptions = [
  {
    value: 'English',
    label: 'English',
  },
];

export const timezoneOptions = [
  {
    value: 'Asia/Manila',
    label: 'Philippine Time (UTC+8)',
  },
  {
    value: 'Asia/Singapore',
    label: 'Singapore Time (UTC+8)',
  },
  {
    value: 'Asia/Tokyo',
    label: 'Japan Time (UTC+9)',
  },
];

export const dateFormatOptions = [
  {
    value: 'MM/DD/YYYY',
    label: 'MM/DD/YYYY',
  },
  {
    value: 'DD/MM/YYYY',
    label: 'DD/MM/YYYY',
  },
  {
    value: 'YYYY-MM-DD',
    label: 'YYYY-MM-DD',
  },
];
