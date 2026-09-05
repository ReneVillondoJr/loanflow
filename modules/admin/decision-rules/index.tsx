'use client';

import { DecisioningHeader } from './components/header';
import { DecisioningStats } from './components/stats';
import { DecisioningFilters } from './components/filters';
import { DecisioningTable } from './components/table';

import { useDecisioning } from './hooks/use-decision';

export function DecisionRules() {
  const {
    filteredDecisions,
    filters,
    stats,
    updateFilters,
    resetFilters,
    updateStatus,
  } = useDecisioning();

  return (
    <div className='space-y-6'>
      <DecisioningHeader />

      <DecisioningStats stats={stats} />

      <DecisioningFilters
        filters={filters}
        onUpdateFilters={updateFilters}
        onReset={resetFilters}
      />

      <DecisioningTable
        decisions={filteredDecisions}
        onUpdateStatus={updateStatus}
      />
    </div>
  );
}
