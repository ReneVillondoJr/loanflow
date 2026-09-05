'use client';

import { useMemo, useState } from 'react';

import { decisioningData, initialDecisioningFilters } from '../data/decision';

import type {
  DecisioningFilters,
  DecisioningStats,
  DecisionStatus,
  LoanDecision,
  RiskLevel,
} from '../types/decision';

export function useDecisioning() {
  const [decisions, setDecisions] = useState<LoanDecision[]>(decisioningData);

  const [filters, setFilters] = useState<DecisioningFilters>(
    initialDecisioningFilters,
  );

  const filteredDecisions = useMemo(() => {
    const search = filters.search.trim().toLowerCase();

    return decisions.filter((decision) => {
      const matchesSearch =
        !search ||
        decision.customer.name.toLowerCase().includes(search) ||
        decision.customer.email.toLowerCase().includes(search) ||
        decision.application.applicationNumber.toLowerCase().includes(search);

      const matchesStatus =
        filters.status === 'ALL' || decision.status === filters.status;

      const matchesRiskLevel =
        filters.riskLevel === 'ALL' || decision.riskLevel === filters.riskLevel;

      const matchesLoanType =
        filters.loanType === 'ALL' ||
        decision.application.loanType === filters.loanType;

      return (
        matchesSearch && matchesStatus && matchesRiskLevel && matchesLoanType
      );
    });
  }, [decisions, filters]);

  const stats = useMemo<DecisioningStats>(() => {
    return {
      total: decisions.length,

      pending: decisions.filter((decision) => decision.status === 'PENDING')
        .length,

      approved: decisions.filter((decision) => decision.status === 'APPROVED')
        .length,

      rejected: decisions.filter((decision) => decision.status === 'REJECTED')
        .length,

      manualReview: decisions.filter(
        (decision) => decision.status === 'MANUAL_REVIEW',
      ).length,
    };
  }, [decisions]);

  function updateFilters(updates: Partial<DecisioningFilters>) {
    setFilters((previous) => ({
      ...previous,
      ...updates,
    }));
  }

  function resetFilters() {
    setFilters(initialDecisioningFilters);
  }

  function updateDecision(id: string, updates: Partial<LoanDecision>) {
    setDecisions((previous) =>
      previous.map((decision) =>
        decision.id === id ?
          {
            ...decision,
            ...updates,
            updatedAt: new Date().toISOString().split('T')[0],
          }
        : decision,
      ),
    );
  }

  function approveDecision(id: string) {
    updateDecision(id, {
      status: 'APPROVED',

      decidedAt: new Date().toISOString().split('T')[0],
    });
  }

  function rejectDecision(id: string, notes?: string) {
    updateDecision(id, {
      status: 'REJECTED',

      notes,

      recommendedAmount: 0,

      recommendedTerm: 0,

      interestRate: 0,

      decidedAt: new Date().toISOString().split('T')[0],
    });
  }

  function sendToManualReview(id: string) {
    updateDecision(id, {
      status: 'MANUAL_REVIEW',
    });
  }

  function updateRiskLevel(id: string, riskLevel: RiskLevel) {
    updateDecision(id, {
      riskLevel,
    });
  }

  function updateStatus(id: string, status: DecisionStatus) {
    updateDecision(id, {
      status,
    });
  }

  return {
    decisions,

    filteredDecisions,

    filters,

    stats,

    updateFilters,

    resetFilters,

    updateDecision,

    approveDecision,

    rejectDecision,

    sendToManualReview,

    updateRiskLevel,

    updateStatus,
  };
}
