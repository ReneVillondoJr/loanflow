'use client';

import { SettingsHeader } from './components/header';
import { SettingsNavigation } from './components/navigation';
import { AccountSettingsForm } from './components/account-settings';
import { SecuritySettingsForm } from './components/security-settings';
import { NotificationSettingsForm } from './components/notification-settings';
import { ApplicationSettingsForm } from './components/application-settings';
import { SystemSettingsForm } from './components/system-settings';
import { RoleSettingsPanel } from './components/role-settings';
import { IntegrationSettingsPanel } from './components/integration-settings';
import { DangerZone } from './components/danger-zone';

import { useSettings } from './hooks/use-settings';

export function SettingsPage() {
  const {
    activeSection,
    setActiveSection,

    account,
    security,
    notifications,
    applications,
    system,
    roles,
    integrations,

    isSaving,

    updateAccount,
    updateSecurity,
    updateNotifications,
    updateApplications,
    updateSystem,
    updateRolePermission,
    updateIntegration,

    save,
  } = useSettings();

  const renderSection = () => {
    switch (activeSection) {
      case 'ACCOUNT':
        return (
          <AccountSettingsForm
            settings={account}
            onChange={updateAccount}
            onSave={save}
            isSaving={isSaving}
          />
        );

      case 'SECURITY':
        return (
          <SecuritySettingsForm
            settings={security}
            onChange={updateSecurity}
            onSave={save}
            isSaving={isSaving}
          />
        );

      case 'NOTIFICATIONS':
        return (
          <NotificationSettingsForm
            settings={notifications}
            onChange={updateNotifications}
            onSave={save}
            isSaving={isSaving}
          />
        );

      case 'APPLICATIONS':
        return (
          <ApplicationSettingsForm
            settings={applications}
            onChange={updateApplications}
            onSave={save}
            isSaving={isSaving}
          />
        );

      case 'SYSTEM':
        return (
          <SystemSettingsForm
            settings={system}
            onChange={updateSystem}
            onSave={save}
            isSaving={isSaving}
          />
        );

      case 'ROLES':
        return (
          <RoleSettingsPanel
            roles={roles}
            onPermissionChange={updateRolePermission}
          />
        );

      case 'INTEGRATIONS':
        return (
          <IntegrationSettingsPanel
            integrations={integrations}
            onChange={(id, enabled) =>
              updateIntegration({
                id,
                enabled,
              })
            }
          />
        );

      case 'DANGER':
        return <DangerZone />;

      default:
        return null;
    }
  };

  return (
    <div className='space-y-6'>
      <SettingsHeader />

      <div className='flex flex-col gap-6 lg:flex-row lg:items-start'>
        <SettingsNavigation
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />

        <div className='min-w-0 flex-1'>
          <div className='rounded-lg border bg-card p-5 sm:p-6'>
            {renderSection()}
          </div>
        </div>
      </div>
    </div>
  );
}
