import Link from 'next/link';

import { ArrowRight } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import type { QuickAction } from '../types/dashboard';

interface QuickActionsProps {
  actions: QuickAction[];
}

export function QuickActions({ actions }: QuickActionsProps) {
  return (
    <Card className='h-fit'>
      <CardHeader>
        <CardTitle className='text-base'>Quick Actions</CardTitle>

        <p className='text-sm text-muted-foreground'>Common actions</p>
      </CardHeader>

      <CardContent className='space-y-3'>
        {actions.map((action) => (
          <Link
            key={action.href}
            href={action.href}
            className='
              flex
              h-10
              w-full
              items-center
              justify-between
              rounded-md
              border
              bg-background
              px-3.5
              text-sm
              font-medium
              transition-colors
              hover:bg-muted
            '
          >
            <span>{action.title}</span>

            <ArrowRight className='size-4 shrink-0' />
          </Link>
        ))}
      </CardContent>
    </Card>
  );
}
