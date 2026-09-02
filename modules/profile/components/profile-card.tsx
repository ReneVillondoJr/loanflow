import { BadgeCheck, Mail, User } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { Badge } from '@/components/ui/badge';

import { Card, CardContent } from '@/components/ui/card';

interface ProfileCardProps {
  name: string;

  email: string;

  image?: string | null;

  role?: string;
}

export function ProfileCard({
  name,
  email,
  image,
  role = 'Customer',
}: ProfileCardProps) {
  const initials = name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((item) => item[0])
    .join('')
    .toUpperCase();

  return (
    <Card>
      <CardContent className='p-6'>
        <div className='flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left'>
          <Avatar className='size-20 shrink-0'>
            <AvatarImage src={image ?? ''} alt={name} />

            <AvatarFallback className='bg-primary text-lg font-semibold text-primary-foreground'>
              {initials || <User className='size-8' />}
            </AvatarFallback>
          </Avatar>

          <div className='min-w-0 flex-1'>
            <div className='flex flex-col items-center gap-2 sm:items-start'>
              <h2 className='text-xl font-semibold tracking-tight'>{name}</h2>

              <Badge variant='secondary' className='gap-1'>
                <BadgeCheck className='size-3.5' />
                {role}
              </Badge>
            </div>

            <div className='mt-3 flex items-center justify-center gap-2 text-sm text-muted-foreground sm:justify-start'>
              <Mail className='size-4 shrink-0' />

              <span className='truncate'>{email}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
