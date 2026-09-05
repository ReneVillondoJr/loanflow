'use client';

import { useRouter } from 'next/navigation';

import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

import type { QuickActionsProps } from '../types/dashboard';

export function QuickActions({ actions }: QuickActionsProps) {
  const router = useRouter();

  const handleAction = (href?: string) => {
    if (!href) return;

    router.push(href);
  };

  return (
    <Card>
      <CardHeader>
        <h2 className='text-base font-semibold'>Quick Actions</h2>

        <p className='text-sm text-muted-foreground'>
          Frequently used administrative actions.
        </p>
      </CardHeader>

      <CardContent className='space-y-3'>
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Button
              key={action.id}
              type='button'
              variant='outline'
              className='h-auto w-full justify-start gap-3 p-3 text-left'
              onClick={() => handleAction(action.href)}
            >
              <div className='flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted'>
                <Icon className='size-4 text-muted-foreground' />
              </div>

              <div className='min-w-0 flex-1'>
                <p className='truncate text-sm font-medium'>{action.label}</p>

                <p className='truncate text-xs text-muted-foreground'>
                  {action.description}
                </p>
              </div>

              <ArrowRight className='size-4 shrink-0 text-muted-foreground' />
            </Button>
          );
        })}
      </CardContent>
    </Card>
  );
}
