'use client';

import { CheckCircle2, CircleOff, Link2 } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';

import type { IntegrationSettings } from '@/modules/admin/settings/types/settings';

interface IntegrationSettingsProps {
  integrations: IntegrationSettings[];
  onChange: (id: string, enabled: boolean) => void;
}

export function IntegrationSettingsPanel({
  integrations,
  onChange,
}: IntegrationSettingsProps) {
  return (
    <section className='space-y-6'>
      <div>
        <h2 className='text-lg font-semibold'>Integrations</h2>

        <p className='mt-1 text-sm text-muted-foreground'>
          Manage external services connected to LoanFlow.
        </p>
      </div>

      <div className='grid gap-4'>
        {integrations.map((integration) => {
          const connected = integration.status === 'CONNECTED';

          return (
            <div
              key={integration.id}
              className='flex flex-col gap-4 rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between'
            >
              <div className='flex min-w-0 items-start gap-3'>
                <div className='flex size-9 shrink-0 items-center justify-center rounded-md bg-muted'>
                  <Link2 className='size-4' />
                </div>

                <div className='min-w-0'>
                  <div className='flex flex-wrap items-center gap-2'>
                    <h3 className='text-sm font-semibold'>
                      {integration.name}
                    </h3>

                    <Badge variant={connected ? 'secondary' : 'outline'}>
                      {connected ?
                        <>
                          <CheckCircle2 className='mr-1 size-3' />
                          Connected
                        </>
                      : <>
                          <CircleOff className='mr-1 size-3' />
                          Disconnected
                        </>
                      }
                    </Badge>
                  </div>

                  <p className='mt-1 text-xs text-muted-foreground'>
                    {integration.description}
                  </p>

                  <p className='mt-2 text-xs text-muted-foreground'>
                    Provider: {integration.provider}
                  </p>
                </div>
              </div>

              <div className='flex items-center gap-3'>
                <Switch
                  checked={integration.enabled}
                  onCheckedChange={(checked) =>
                    onChange(integration.id, checked)
                  }
                />

                <Button type='button' variant='outline' className='h-10'>
                  Configure
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
