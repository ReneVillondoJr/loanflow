'use client';

import { ShieldCheck } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';

import type {
  RoleSettings,
  UserRole,
} from '@/modules/admin/settings/types/settings';

interface RoleSettingsProps {
  roles: RoleSettings[];
  onPermissionChange: (
    role: UserRole,
    permissionId: string,
    enabled: boolean,
  ) => void;
}

const ROLE_LABELS: Record<UserRole, string> = {
  SUPER_ADMIN: 'Super Admin',
  ADMIN: 'Administrator',
  LOAN_OFFICER: 'Loan Officer',
  UNDERWRITER: 'Underwriter',
  CUSTOMER: 'Customer',
};

export function RoleSettingsPanel({
  roles,
  onPermissionChange,
}: RoleSettingsProps) {
  return (
    <section className='space-y-6'>
      <div>
        <h2 className='text-lg font-semibold'>Roles & Permissions</h2>

        <p className='mt-1 text-sm text-muted-foreground'>
          Control what each role can access in LoanFlow.
        </p>
      </div>

      <div className='space-y-4'>
        {roles.map((role) => (
          <div key={role.role} className='rounded-lg border'>
            <div className='flex flex-col gap-3 border-b p-4 sm:flex-row sm:items-center sm:justify-between'>
              <div className='flex items-start gap-3'>
                <div className='flex size-9 items-center justify-center rounded-md bg-muted'>
                  <ShieldCheck className='size-4' />
                </div>

                <div>
                  <div className='flex flex-wrap items-center gap-2'>
                    <h3 className='text-sm font-semibold'>{role.name}</h3>

                    <Badge variant='outline'>{ROLE_LABELS[role.role]}</Badge>
                  </div>

                  <p className='mt-1 text-xs text-muted-foreground'>
                    {role.description}
                  </p>
                </div>
              </div>
            </div>

            <div className='divide-y'>
              {role.permissions.map((permission) => (
                <div
                  key={permission.id}
                  className='flex items-center justify-between gap-4 px-4 py-3'
                >
                  <div className='min-w-0'>
                    <p className='text-sm font-medium'>{permission.label}</p>

                    <p className='mt-0.5 text-xs text-muted-foreground'>
                      {permission.description}
                    </p>
                  </div>

                  <Switch
                    checked={permission.enabled}
                    onCheckedChange={(checked) =>
                      onPermissionChange(role.role, permission.id, checked)
                    }
                    disabled={role.role === 'SUPER_ADMIN'}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
