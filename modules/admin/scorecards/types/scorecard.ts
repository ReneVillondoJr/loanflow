export type ScorecardStatus = 'ACTIVE' | 'INACTIVE' | 'DRAFT';

export type ScorecardType =
  | 'PERSONAL_LOAN'
  | 'AUTO_LOAN'
  | 'HOME_LOAN'
  | 'BUSINESS_LOAN'
  | 'CREDIT_CARD';

export type ScorecardVersion = {
  version: number;
  createdAt: string;
  createdBy: string;
  notes?: string;
};

export type ScorecardRule = {
  id: string;
  name: string;
  field: string;
  operator:
    | 'EQUALS'
    | 'NOT_EQUALS'
    | 'GREATER_THAN'
    | 'LESS_THAN'
    | 'GREATER_THAN_OR_EQUAL'
    | 'LESS_THAN_OR_EQUAL'
    | 'BETWEEN'
    | 'CONTAINS';
  value: string | number;
  points: number;
};

export type Scorecard = {
  id: string;
  name: string;
  description: string;
  type: ScorecardType;
  status: ScorecardStatus;
  minScore: number;
  maxScore: number;
  passingScore: number;
  rulesCount: number;
  applicationsScored: number;
  averageScore: number;
  approvalRate: number;
  version: number;
  createdBy: string;
  updatedAt: string;
  createdAt: string;
  rules: ScorecardRule[];
  versions: ScorecardVersion[];
};

export type ScorecardFilters = {
  search: string;
  status: 'ALL' | ScorecardStatus;
  type: 'ALL' | ScorecardType;
};

export type ScorecardStats = {
  total: number;
  active: number;
  inactive: number;
  draft: number;
  averageScore: number;
  averageApprovalRate: number;
};

export type CreateScorecardInput = {
  name: string;
  description: string;
  type: ScorecardType;
  minScore: number;
  maxScore: number;
  passingScore: number;
};

export type UpdateScorecardInput = CreateScorecardInput & {
  id: string;
};
