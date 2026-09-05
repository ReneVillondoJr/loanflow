'use client';

import { useMemo, useState } from 'react';

import { SETTINGS_DATA } from '@/modules/admin/settings/data/settings';

import type {
  AccountSettings,
  ApplicationSettings,
  IntegrationSettings,
  NotificationSettings,
  RoleSettings,
  SecuritySettings,
  SettingsSection,
  SystemSettings,
  UpdateAccountInput,
  UpdateApplicationInput,
  UpdateIntegrationInput,
  UpdateNotificationInput,
  UpdateRoleInput,
  UpdateSecurityInput,
  UpdateSystemInput,
} from '@/modules/admin/settings/types/settings';

export function useSettings() {
  const [activeSection, setActiveSection] =
    useState<SettingsSection>('ACCOUNT');

  const [account, setAccount] = useState<AccountSettings>(
    SETTINGS_DATA.account,
  );

  const [security, setSecurity] = useState<SecuritySettings>(
    SETTINGS_DATA.security,
  );

  const [notifications, setNotifications] = useState<NotificationSettings>(
    SETTINGS_DATA.notifications,
  );

  const [applications, setApplications] = useState<ApplicationSettings>(
    SETTINGS_DATA.applications,
  );

  const [system, setSystem] = useState<SystemSettings>(SETTINGS_DATA.system);

  const [roles, setRoles] = useState<RoleSettings[]>(SETTINGS_DATA.roles);

  const [integrations, setIntegrations] = useState<IntegrationSettings[]>(
    SETTINGS_DATA.integrations,
  );

  const [isSaving, setIsSaving] = useState(false);

  const [savedAt, setSavedAt] = useState<string | null>(null);

  const save = () => {
    setIsSaving(true);

    window.setTimeout(() => {
      setIsSaving(false);
      setSavedAt(new Date().toISOString());
    }, 500);
  };

  const updateAccount = (updates: UpdateAccountInput) => {
    setAccount((current) => ({
      ...current,
      ...updates,
    }));
  };

  const updateSecurity = (updates: UpdateSecurityInput) => {
    setSecurity((current) => ({
      ...current,
      ...updates,
    }));
  };

  const updateNotifications = (updates: UpdateNotificationInput) => {
    setNotifications((current) => ({
      ...current,
      ...updates,
    }));
  };

  const updateApplications = (updates: UpdateApplicationInput) => {
    setApplications((current) => ({
      ...current,
      ...updates,
    }));
  };

  const updateSystem = (updates: UpdateSystemInput) => {
    setSystem((current) => ({
      ...current,
      ...updates,
    }));
  };

  const updateRole = ({ role, permissions }: UpdateRoleInput) => {
    setRoles((current) =>
      current.map((item) => {
        if (item.role !== role) {
          return item;
        }

        return {
          ...item,
          permissions: item.permissions.map((permission) => ({
            ...permission,
            enabled: permissions.includes(permission.id),
          })),
        };
      }),
    );
  };

  const updateRolePermission = (
    role: RoleSettings['role'],
    permissionId: string,
    enabled: boolean,
  ) => {
    setRoles((current) =>
      current.map((item) => {
        if (item.role !== role) {
          return item;
        }

        return {
          ...item,
          permissions: item.permissions.map((permission) =>
            permission.id === permissionId ?
              {
                ...permission,
                enabled,
              }
            : permission,
          ),
        };
      }),
    );
  };

  const updateIntegration = ({
    id,
    enabled,
    status,
  }: UpdateIntegrationInput) => {
    setIntegrations((current) =>
      current.map((integration) =>
        integration.id === id ?
          {
            ...integration,
            ...(enabled !== undefined && {
              enabled,
            }),
            ...(status !== undefined && {
              status,
            }),
          }
        : integration,
      ),
    );
  };

  const toggleNotification = (key: keyof NotificationSettings) => {
    setNotifications((current) => ({
      ...current,
      [key]: !current[key],
    }));
  };

  const toggleApplicationSetting = (
    key:
      | 'autoAssignApplications'
      | 'autoScoreApplications'
      | 'requireManualReview'
      | 'allowMultipleApplications',
  ) => {
    setApplications((current) => ({
      ...current,
      [key]: !current[key],
    }));
  };

  const getRole = (role: RoleSettings['role']) => {
    return roles.find((item) => item.role === role);
  };

  const getIntegration = (id: string) => {
    return integrations.find((integration) => integration.id === id);
  };

  const connectedIntegrations = useMemo(
    () =>
      integrations.filter((integration) => integration.status === 'CONNECTED'),
    [integrations],
  );

  const settings = useMemo(
    () => ({
      account,
      security,
      notifications,
      applications,
      system,
      roles,
      integrations,
    }),
    [
      account,
      security,
      notifications,
      applications,
      system,
      roles,
      integrations,
    ],
  );

  return {
    activeSection,
    setActiveSection,

    account,
    security,
    notifications,
    applications,
    system,
    roles,
    integrations,

    settings,

    isSaving,
    savedAt,

    connectedIntegrations,

    updateAccount,
    updateSecurity,
    updateNotifications,
    updateApplications,
    updateSystem,

    updateRole,
    updateRolePermission,
    updateIntegration,

    toggleNotification,
    toggleApplicationSetting,

    getRole,
    getIntegration,

    save,
  };
}
