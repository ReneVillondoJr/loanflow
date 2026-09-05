export type SettingsSection =
  | 'ACCOUNT'
  | 'SECURITY'
  | 'NOTIFICATIONS'
  | 'APPLICATIONS'
  | 'SYSTEM'
  | 'ROLES'
  | 'INTEGRATIONS'
  | 'DANGER';

export type ThemeMode = 'LIGHT' | 'DARK' | 'SYSTEM';

export type DateFormat = 'MM/DD/YYYY' | 'DD/MM/YYYY' | 'YYYY-MM-DD';

export type Currency = 'USD' | 'PHP' | 'EUR' | 'GBP';

export type Language = 'EN' | 'FIL';

export type SessionTimeout =
  | '15_MINUTES'
  | '30_MINUTES'
  | '1_HOUR'
  | '4_HOURS'
  | '8_HOURS';

export type PasswordExpiry = '30_DAYS' | '60_DAYS' | '90_DAYS' | 'NEVER';

export type UserRole =
  | 'SUPER_ADMIN'
  | 'ADMIN'
  | 'LOAN_OFFICER'
  | 'UNDERWRITER'
  | 'CUSTOMER';

export type NotificationChannel = 'EMAIL' | 'IN_APP' | 'SMS';

export type NotificationSettings = {
  emailNotifications: boolean;
  inAppNotifications: boolean;
  smsNotifications: boolean;

  newApplication: boolean;
  applicationStatus: boolean;
  manualReview: boolean;
  paymentReminder: boolean;
  systemAlerts: boolean;
  securityAlerts: boolean;
};

export type AccountSettings = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  jobTitle: string;
  department: string;
  avatar?: string;
};

export type SecuritySettings = {
  twoFactorEnabled: boolean;
  loginAlerts: boolean;
  sessionTimeout: SessionTimeout;
  passwordExpiry: PasswordExpiry;
  requireStrongPassword: boolean;
};

export type ApplicationSettings = {
  autoAssignApplications: boolean;
  autoScoreApplications: boolean;
  requireManualReview: boolean;
  allowMultipleApplications: boolean;
  maxActiveApplications: number;
  defaultLoanTerm: number;
  defaultCurrency: Currency;
  minimumCreditScore: number;
};

export type SystemSettings = {
  companyName: string;
  companyEmail: string;
  supportEmail: string;
  supportPhone: string;
  timezone: string;
  language: Language;
  dateFormat: DateFormat;
  theme: ThemeMode;
  currency: Currency;
};

export type RolePermission = {
  id: string;
  label: string;
  description: string;
  enabled: boolean;
};

export type RoleSettings = {
  role: UserRole;
  name: string;
  description: string;
  permissions: RolePermission[];
};

export type IntegrationStatus = 'CONNECTED' | 'DISCONNECTED' | 'ERROR';

export type IntegrationSettings = {
  id: string;
  name: string;
  description: string;
  provider: string;
  status: IntegrationStatus;
  enabled: boolean;
  lastSync?: string;
};

export type SettingsData = {
  account: AccountSettings;
  security: SecuritySettings;
  notifications: NotificationSettings;
  applications: ApplicationSettings;
  system: SystemSettings;
  roles: RoleSettings[];
  integrations: IntegrationSettings[];
};

export type UpdateAccountInput = Partial<AccountSettings>;

export type UpdateSecurityInput = Partial<SecuritySettings>;

export type UpdateNotificationInput = Partial<NotificationSettings>;

export type UpdateApplicationInput = Partial<ApplicationSettings>;

export type UpdateSystemInput = Partial<SystemSettings>;

export type UpdateRoleInput = {
  role: UserRole;
  permissions: string[];
};

export type UpdateIntegrationInput = {
  id: string;
  enabled?: boolean;
  status?: IntegrationStatus;
};
