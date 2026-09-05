import type {
  AccountSettings,
  ApplicationSettings,
  IntegrationSettings,
  NotificationSettings,
  RoleSettings,
  SecuritySettings,
  SystemSettings,
} from '@/modules/admin/settings/types/settings';

export const DEFAULT_ACCOUNT_SETTINGS: AccountSettings = {
  firstName: 'Admin',
  lastName: 'User',
  email: 'admin@loanflow.com',
  phone: '+63 900 000 0000',
  jobTitle: 'System Administrator',
  department: 'Administration',
};

export const DEFAULT_SECURITY_SETTINGS: SecuritySettings = {
  twoFactorEnabled: true,
  loginAlerts: true,
  sessionTimeout: '1_HOUR',
  passwordExpiry: '90_DAYS',
  requireStrongPassword: true,
};

export const DEFAULT_NOTIFICATION_SETTINGS: NotificationSettings = {
  emailNotifications: true,
  inAppNotifications: true,
  smsNotifications: false,

  newApplication: true,
  applicationStatus: true,
  manualReview: true,
  paymentReminder: true,
  systemAlerts: true,
  securityAlerts: true,
};

export const DEFAULT_APPLICATION_SETTINGS: ApplicationSettings = {
  autoAssignApplications: true,
  autoScoreApplications: true,
  requireManualReview: true,
  allowMultipleApplications: false,
  maxActiveApplications: 3,
  defaultLoanTerm: 36,
  defaultCurrency: 'PHP',
  minimumCreditScore: 600,
};

export const DEFAULT_SYSTEM_SETTINGS: SystemSettings = {
  companyName: 'LoanFlow',
  companyEmail: 'admin@loanflow.com',
  supportEmail: 'support@loanflow.com',
  supportPhone: '+63 900 000 0000',
  timezone: 'Asia/Manila',
  language: 'EN',
  dateFormat: 'MM/DD/YYYY',
  theme: 'SYSTEM',
  currency: 'PHP',
};

export const DEFAULT_ROLE_SETTINGS: RoleSettings[] = [
  {
    role: 'SUPER_ADMIN',
    name: 'Super Administrator',
    description:
      'Full access to all LoanFlow features and system configuration.',
    permissions: [
      {
        id: 'users.view',
        label: 'View Users',
        description: 'View all system users.',
        enabled: true,
      },
      {
        id: 'users.manage',
        label: 'Manage Users',
        description: 'Create, edit, and deactivate users.',
        enabled: true,
      },
      {
        id: 'applications.view',
        label: 'View Applications',
        description: 'View loan applications.',
        enabled: true,
      },
      {
        id: 'applications.manage',
        label: 'Manage Applications',
        description: 'Manage loan applications.',
        enabled: true,
      },
      {
        id: 'scorecards.manage',
        label: 'Manage Scorecards',
        description: 'Create and manage scorecards.',
        enabled: true,
      },
      {
        id: 'reports.view',
        label: 'View Reports',
        description: 'View system reports.',
        enabled: true,
      },
      {
        id: 'settings.manage',
        label: 'Manage Settings',
        description: 'Manage system configuration.',
        enabled: true,
      },
    ],
  },

  {
    role: 'ADMIN',
    name: 'Administrator',
    description:
      'Manage applications, users, reports, and operational settings.',
    permissions: [
      {
        id: 'users.view',
        label: 'View Users',
        description: 'View system users.',
        enabled: true,
      },
      {
        id: 'users.manage',
        label: 'Manage Users',
        description: 'Manage users.',
        enabled: true,
      },
      {
        id: 'applications.view',
        label: 'View Applications',
        description: 'View loan applications.',
        enabled: true,
      },
      {
        id: 'applications.manage',
        label: 'Manage Applications',
        description: 'Manage loan applications.',
        enabled: true,
      },
      {
        id: 'scorecards.manage',
        label: 'Manage Scorecards',
        description: 'Manage scorecards.',
        enabled: true,
      },
      {
        id: 'reports.view',
        label: 'View Reports',
        description: 'View reports.',
        enabled: true,
      },
      {
        id: 'settings.manage',
        label: 'Manage Settings',
        description: 'Manage operational settings.',
        enabled: false,
      },
    ],
  },

  {
    role: 'LOAN_OFFICER',
    name: 'Loan Officer',
    description: 'Review and manage assigned loan applications.',
    permissions: [
      {
        id: 'users.view',
        label: 'View Users',
        description: 'View customer information.',
        enabled: true,
      },
      {
        id: 'users.manage',
        label: 'Manage Users',
        description: 'Manage users.',
        enabled: false,
      },
      {
        id: 'applications.view',
        label: 'View Applications',
        description: 'View loan applications.',
        enabled: true,
      },
      {
        id: 'applications.manage',
        label: 'Manage Applications',
        description: 'Process assigned applications.',
        enabled: true,
      },
      {
        id: 'scorecards.manage',
        label: 'Manage Scorecards',
        description: 'Manage scorecards.',
        enabled: false,
      },
      {
        id: 'reports.view',
        label: 'View Reports',
        description: 'View operational reports.',
        enabled: true,
      },
      {
        id: 'settings.manage',
        label: 'Manage Settings',
        description: 'Manage system settings.',
        enabled: false,
      },
    ],
  },

  {
    role: 'UNDERWRITER',
    name: 'Underwriter',
    description: 'Review risk, scorecards, and loan decisions.',
    permissions: [
      {
        id: 'users.view',
        label: 'View Users',
        description: 'View customer information.',
        enabled: true,
      },
      {
        id: 'users.manage',
        label: 'Manage Users',
        description: 'Manage users.',
        enabled: false,
      },
      {
        id: 'applications.view',
        label: 'View Applications',
        description: 'View loan applications.',
        enabled: true,
      },
      {
        id: 'applications.manage',
        label: 'Manage Applications',
        description: 'Review and make loan decisions.',
        enabled: true,
      },
      {
        id: 'scorecards.manage',
        label: 'Manage Scorecards',
        description: 'Manage risk scorecards.',
        enabled: true,
      },
      {
        id: 'reports.view',
        label: 'View Reports',
        description: 'View risk reports.',
        enabled: true,
      },
      {
        id: 'settings.manage',
        label: 'Manage Settings',
        description: 'Manage system settings.',
        enabled: false,
      },
    ],
  },

  {
    role: 'CUSTOMER',
    name: 'Customer',
    description: 'Access personal profile and loan applications.',
    permissions: [
      {
        id: 'users.view',
        label: 'View Users',
        description: 'View profile.',
        enabled: false,
      },
      {
        id: 'users.manage',
        label: 'Manage Users',
        description: 'Manage users.',
        enabled: false,
      },
      {
        id: 'applications.view',
        label: 'View Applications',
        description: 'View own applications.',
        enabled: true,
      },
      {
        id: 'applications.manage',
        label: 'Manage Applications',
        description: 'Create and manage own applications.',
        enabled: true,
      },
      {
        id: 'scorecards.manage',
        label: 'Manage Scorecards',
        description: 'Manage scorecards.',
        enabled: false,
      },
      {
        id: 'reports.view',
        label: 'View Reports',
        description: 'View reports.',
        enabled: false,
      },
      {
        id: 'settings.manage',
        label: 'Manage Settings',
        description: 'Manage system settings.',
        enabled: false,
      },
    ],
  },
];

export const DEFAULT_INTEGRATIONS: IntegrationSettings[] = [
  {
    id: 'credit-bureau',
    name: 'Credit Bureau',
    description: 'Credit scoring and credit history verification.',
    provider: 'Credit Bureau API',
    status: 'CONNECTED',
    enabled: true,
    lastSync: '2026-09-05T08:30:00.000Z',
  },
  {
    id: 'payment-gateway',
    name: 'Payment Gateway',
    description: 'Process loan payments and disbursements.',
    provider: 'Payment Gateway',
    status: 'CONNECTED',
    enabled: true,
    lastSync: '2026-09-05T07:45:00.000Z',
  },
  {
    id: 'email-service',
    name: 'Email Service',
    description: 'Send transactional and notification emails.',
    provider: 'Email Provider',
    status: 'CONNECTED',
    enabled: true,
    lastSync: '2026-09-05T09:00:00.000Z',
  },
  {
    id: 'sms-service',
    name: 'SMS Service',
    description: 'Send SMS notifications and alerts.',
    provider: 'SMS Provider',
    status: 'DISCONNECTED',
    enabled: false,
  },
];

export const SETTINGS_DATA = {
  account: DEFAULT_ACCOUNT_SETTINGS,
  security: DEFAULT_SECURITY_SETTINGS,
  notifications: DEFAULT_NOTIFICATION_SETTINGS,
  applications: DEFAULT_APPLICATION_SETTINGS,
  system: DEFAULT_SYSTEM_SETTINGS,
  roles: DEFAULT_ROLE_SETTINGS,
  integrations: DEFAULT_INTEGRATIONS,
};
