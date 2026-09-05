'use client';

import {
  Bell,
  FileCheck2,
  KeyRound,
  Link2,
  Lock,
  Settings2,
  ShieldCheck,
  SlidersHorizontal,
  User,
} from 'lucide-react';

import { cn } from '@/lib/utils';

import type { SettingsSection } from '@/modules/admin/settings/types/settings';

interface SettingsNavigationProps {
  activeSection: SettingsSection;
  onSectionChange: (section: SettingsSection) => void;
}

const ITEMS: Array<{
  value: SettingsSection;
  label: string;
  description: string;
  icon: typeof User;
}> = [
  {
    value: 'ACCOUNT',
    label: 'Account',
    description: 'Profile and contact details',
    icon: User,
  },
  {
    value: 'SECURITY',
    label: 'Security',
    description: 'Password and authentication',
    icon: ShieldCheck,
  },
  {
    value: 'NOTIFICATIONS',
    label: 'Notifications',
    description: 'Alerts and preferences',
    icon: Bell,
  },
  {
    value: 'APPLICATIONS',
    label: 'Applications',
    description: 'Loan processing defaults',
    icon: FileCheck2,
  },
  {
    value: 'SYSTEM',
    label: 'System',
    description: 'Global system preferences',
    icon: Settings2,
  },
  {
    value: 'ROLES',
    label: 'Roles & Permissions',
    description: 'Access control',
    icon: Lock,
  },
  {
    value: 'INTEGRATIONS',
    label: 'Integrations',
    description: 'Connected services',
    icon: Link2,
  },
  {
    value: 'DANGER',
    label: 'Danger Zone',
    description: 'Destructive actions',
    icon: SlidersHorizontal,
  },
];

export function SettingsNavigation({
  activeSection,
  onSectionChange,
}: SettingsNavigationProps) {
  return (
    <nav className='w-full lg:w-64 lg:shrink-0'>
      <div className='grid gap-1 sm:grid-cols-2 lg:grid-cols-1'>
        {ITEMS.map((item) => {
          const Icon = item.icon;
          const active = activeSection === item.value;

          return (
            <button
              key={item.value}
              type='button'
              onClick={() => onSectionChange(item.value)}
              className={cn(
                'flex w-full items-start gap-3 rounded-lg px-3 py-3 text-left transition-colors',
                active ? 'bg-muted' : 'hover:bg-muted/60',
              )}
            >
              <Icon
                className={cn(
                  'mt-0.5 size-4 shrink-0',
                  active ? 'text-foreground' : 'text-muted-foreground',
                )}
              />

              <span className='min-w-0'>
                <span className='block text-sm font-medium'>{item.label}</span>

                <span className='mt-0.5 block text-xs text-muted-foreground'>
                  {item.description}
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
