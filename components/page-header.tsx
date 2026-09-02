import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface PageHeaderProps {
  title: string;
  description?: string;
  icon?: ReactNode;
  badge?: ReactNode;
  action?: ReactNode;
  className?: string;
}

export function PageHeader({
  title,
  description,
  icon,
  badge,
  action,
  className,
}: PageHeaderProps) {
  return (
    <section
      className={cn(
        'flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between',
        className,
      )}
    >
      {/* Header content */}
      <div className='min-w-0'>
        <div className='flex items-center gap-3'>
          {icon && (
            <div className='flex size-10 shrink-0 items-center justify-center rounded-md bg-muted'>
              {icon}
            </div>
          )}

          <div className='min-w-0'>
            <div className='flex flex-wrap items-center gap-2'>
              <h1 className='text-2xl font-semibold tracking-tight'>{title}</h1>

              {badge}
            </div>

            {description && (
              <p className='mt-1 text-sm text-muted-foreground'>
                {description}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Optional action */}
      {action && <div className='shrink-0'>{action}</div>}
    </section>
  );
}
