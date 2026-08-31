'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ActionButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'default';
  icon?: React.ReactNode;
  showArrow?: boolean;
  fullWidth?: boolean;
  className?: string;
}

export function ActionButton({
  label,
  href,
  onClick,
  variant = 'secondary',
  size = 'default',
  icon,
  showArrow = false,
  fullWidth = false,
  className,
}: ActionButtonProps) {
  const variants = {
    primary:
      'border-primary bg-primary text-primary-foreground hover:bg-primary/90',

    secondary: 'border-border bg-background text-foreground hover:bg-muted',

    ghost:
      'border-transparent bg-transparent text-muted-foreground hover:bg-muted hover:text-foreground',
  };

  const sizes = {
    sm: 'h-9 text-xs',
    default: 'h-10 text-sm',
  };

  const buttonClasses = cn(
    'group',
    'rounded-md border font-medium shadow-none',
    'whitespace-nowrap transition-colors duration-150',
    variants[variant],
    sizes[size],
    fullWidth && 'w-full',
    className,
  );

  const content = (
    <span className='flex w-full min-w-0 items-center justify-between gap-3'>
      <span className='flex min-w-0 items-center gap-2'>
        {icon && (
          <span className='flex size-4 shrink-0 items-center justify-center'>
            {icon}
          </span>
        )}

        <span className='truncate'>{label}</span>
      </span>

      {showArrow && (
        <ArrowRight
          className='size-4 shrink-0 transition-transform duration-150 group-hover:translate-x-0.5'
          strokeWidth={1.8}
        />
      )}
    </span>
  );

  if (href) {
    return (
      <Button
        variant='outline'
        className={cn(buttonClasses, fullWidth && 'w-full p-0')}
      >
        <Link href={href} className='flex h-full w-full items-center px-3.5'>
          {content}
        </Link>
      </Button>
    );
  }

  return (
    <Button
      type='button'
      variant='outline'
      onClick={onClick}
      className={buttonClasses}
    >
      {content}
    </Button>
  );
}
