import { Badge } from '@/components/ui/badge';

import type { RiskLevel } from '../types/decision';

interface RiskLevelBadgeProps {
  riskLevel: RiskLevel;
}

const riskConfig: Record<
  RiskLevel,
  {
    label: string;
    className: string;
  }
> = {
  LOW: {
    label: 'Low Risk',

    className:
      'border-transparent bg-emerald-100 text-emerald-700 hover:bg-emerald-100',
  },

  MEDIUM: {
    label: 'Medium Risk',

    className:
      'border-transparent bg-amber-100 text-amber-700 hover:bg-amber-100',
  },

  HIGH: {
    label: 'High Risk',

    className:
      'border-transparent bg-orange-100 text-orange-700 hover:bg-orange-100',
  },

  VERY_HIGH: {
    label: 'Very High Risk',

    className: 'border-transparent bg-red-100 text-red-700 hover:bg-red-100',
  },
};

export function RiskLevelBadge({ riskLevel }: RiskLevelBadgeProps) {
  const config = riskConfig[riskLevel];

  return (
    <Badge variant='secondary' className={config.className}>
      {config.label}
    </Badge>
  );
}
