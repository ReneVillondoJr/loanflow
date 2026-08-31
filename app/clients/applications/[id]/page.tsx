import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Clock3, FileText } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default async function ApplicationDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className='space-y-8'>
      <div className='flex items-center gap-4'>
        <Button variant='ghost' size='icon'>
          <Link href='/dashboard/applications'>
            <ArrowLeft className='size-4' />
          </Link>
        </Button>

        <div>
          <p className='text-sm text-muted-foreground'>Application</p>

          <h1 className='text-2xl font-semibold'>{id}</h1>
        </div>

        <Badge className='ml-auto'>Under Review</Badge>
      </div>

      <div className='grid gap-6 lg:grid-cols-3'>
        <Card className='lg:col-span-2'>
          <CardHeader>
            <CardTitle>Application Progress</CardTitle>
          </CardHeader>

          <CardContent>
            <div className='space-y-6'>
              <TimelineItem
                icon={CheckCircle2}
                title='Application Submitted'
                description='Your application has been successfully submitted.'
                completed
              />

              <TimelineItem
                icon={CheckCircle2}
                title='Document Verification'
                description='Your submitted documents have been received.'
                completed
              />

              <TimelineItem
                icon={Clock3}
                title='Credit & Risk Assessment'
                description='Our decision engine is evaluating your application.'
              />

              <TimelineItem
                icon={Clock3}
                title='Final Decision'
                description='A final decision will be available after assessment.'
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Loan Summary</CardTitle>
          </CardHeader>

          <CardContent className='space-y-4'>
            <Summary label='Loan Product' value='Personal Loan' />

            <Summary label='Requested Amount' value='₱150,000' />

            <Summary label='Term' value='24 months' />

            <Summary label='Purpose' value='Home Improvement' />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Documents</CardTitle>
        </CardHeader>

        <CardContent>
          <div className='space-y-3'>
            <Document name='Government ID' status='Verified' />

            <Document name='Proof of Income' status='Verified' />

            <Document name='Bank Statement' status='Pending' />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function TimelineItem({
  icon: Icon,
  title,
  description,
  completed = false,
}: {
  icon: typeof CheckCircle2;
  title: string;
  description: string;
  completed?: boolean;
}) {
  return (
    <div className='flex gap-4'>
      <div className='mt-0.5'>
        <Icon
          className={`size-5 ${
            completed ? 'text-green-600' : 'text-muted-foreground'
          }`}
        />
      </div>

      <div>
        <p className='text-sm font-medium'>{title}</p>

        <p className='mt-1 text-sm text-muted-foreground'>{description}</p>
      </div>
    </div>
  );
}

function Summary({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className='text-xs text-muted-foreground'>{label}</p>

      <p className='mt-1 text-sm font-medium'>{value}</p>
    </div>
  );
}

function Document({ name, status }: { name: string; status: string }) {
  return (
    <div className='flex items-center justify-between rounded-lg border p-4'>
      <div className='flex items-center gap-3'>
        <FileText className='size-4 text-muted-foreground' />

        <span className='text-sm font-medium'>{name}</span>
      </div>

      <Badge variant='secondary'>{status}</Badge>
    </div>
  );
}
