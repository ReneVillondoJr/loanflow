import { CheckCircle2, ClipboardClock, FileText, XCircle } from 'lucide-react';

import type { DecisioningStats as DecisioningStatsType } from '../types/decision';

interface DecisioningStatsProps {
  stats: DecisioningStatsType;
}

interface StatCardProps {
  label: string;

  value: number;

  icon: React.ReactNode;

  description: string;
}

function StatCard({ label, value, icon, description }: StatCardProps) {
  return (
    <div className='rounded-xl border bg-card p-5 shadow-sm'>
      <div className='flex items-start justify-between gap-4'>
        <div>
          <p className='text-sm font-medium text-muted-foreground'>{label}</p>

          <p className='mt-2 text-2xl font-semibold tracking-tight'>{value}</p>
        </div>

        <div className='flex size-10 items-center justify-center rounded-lg bg-muted'>
          {icon}
        </div>
      </div>

      <p className='mt-3 text-xs text-muted-foreground'>{description}</p>
    </div>
  );
}

export function DecisioningStats({ stats }: DecisioningStatsProps) {
  return (
    <div className='grid gap-4 sm:grid-cols-2 xl:grid-cols-4'>
      <StatCard
        label='Total Decisions'
        value={stats.total}
        icon={<FileText className='size-4 text-muted-foreground' />}
        description='Applications in the decisioning system'
      />

      <StatCard
        label='Pending Review'
        value={stats.pending}
        icon={<ClipboardClock className='size-4 text-amber-600' />}
        description='Waiting for a decision'
      />

      <StatCard
        label='Approved'
        value={stats.approved}
        icon={<CheckCircle2 className='size-4 text-emerald-600' />}
        description='Applications approved'
      />

      <StatCard
        label='Rejected'
        value={stats.rejected}
        icon={<XCircle className='size-4 text-red-600' />}
        description='Applications not approved'
      />
    </div>
  );
}
