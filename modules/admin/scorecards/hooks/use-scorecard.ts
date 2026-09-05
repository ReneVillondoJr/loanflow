'use client';

import { useMemo, useState } from 'react';

import { scorecards as initialScorecards } from '@/modules/admin/scorecards/data/scorecard';

import type {
  CreateScorecardInput,
  Scorecard,
  ScorecardFilters,
  ScorecardStats,
  UpdateScorecardInput,
} from '@/modules/admin/scorecards/types/scorecard';

const PAGE_SIZE = 10;

export function useScorecards() {
  const [scorecards, setScorecards] = useState<Scorecard[]>(initialScorecards);

  const [filters, setFilters] = useState<ScorecardFilters>({
    search: '',
    status: 'ALL',
    type: 'ALL',
  });

  const [page, setPage] = useState(1);

  const filteredScorecards = useMemo(() => {
    const search = filters.search.trim().toLowerCase();

    return scorecards.filter((scorecard) => {
      const matchesSearch =
        !search ||
        scorecard.name.toLowerCase().includes(search) ||
        scorecard.description.toLowerCase().includes(search) ||
        scorecard.type.toLowerCase().includes(search);

      const matchesStatus =
        filters.status === 'ALL' || scorecard.status === filters.status;

      const matchesType =
        filters.type === 'ALL' || scorecard.type === filters.type;

      return matchesSearch && matchesStatus && matchesType;
    });
  }, [filters, scorecards]);

  const pageCount = Math.max(
    1,
    Math.ceil(filteredScorecards.length / PAGE_SIZE),
  );

  const currentPage = Math.min(page, pageCount);

  const paginatedScorecards = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return filteredScorecards.slice(start, start + PAGE_SIZE);
  }, [currentPage, filteredScorecards]);

  const stats: ScorecardStats = useMemo(() => {
    const active = scorecards.filter((item) => item.status === 'ACTIVE').length;

    const inactive = scorecards.filter(
      (item) => item.status === 'INACTIVE',
    ).length;

    const draft = scorecards.filter((item) => item.status === 'DRAFT').length;

    const scored = scorecards.filter((item) => item.applicationsScored > 0);

    const averageScore =
      scored.length > 0 ?
        Math.round(
          scored.reduce((sum, item) => sum + item.averageScore, 0) /
            scored.length,
        )
      : 0;

    const averageApprovalRate =
      scored.length > 0 ?
        Number(
          (
            scored.reduce((sum, item) => sum + item.approvalRate, 0) /
            scored.length
          ).toFixed(1),
        )
      : 0;

    return {
      total: scorecards.length,
      active,
      inactive,
      draft,
      averageScore,
      averageApprovalRate,
    };
  }, [scorecards]);

  function updateFilters(updates: Partial<ScorecardFilters>) {
    setFilters((current) => ({
      ...current,
      ...updates,
    }));

    setPage(1);
  }

  function resetFilters() {
    setFilters({
      search: '',
      status: 'ALL',
      type: 'ALL',
    });

    setPage(1);
  }

  function getScorecard(id: string) {
    return scorecards.find((item) => item.id === id);
  }

  function createScorecard(input: CreateScorecardInput) {
    const now = new Date().toISOString().split('T')[0];

    const newScorecard: Scorecard = {
      id: `sc-${Date.now()}`,
      name: input.name,
      description: input.description,
      type: input.type,
      status: 'DRAFT',
      minScore: input.minScore,
      maxScore: input.maxScore,
      passingScore: input.passingScore,
      rulesCount: 0,
      applicationsScored: 0,
      averageScore: 0,
      approvalRate: 0,
      version: 1,
      createdBy: 'Current User',
      updatedAt: now,
      createdAt: now,
      rules: [],
      versions: [
        {
          version: 1,
          createdAt: now,
          createdBy: 'Current User',
          notes: 'Initial scorecard created.',
        },
      ],
    };

    setScorecards((current) => [newScorecard, ...current]);
    setPage(1);
  }

  function updateScorecard(input: UpdateScorecardInput) {
    setScorecards((current) =>
      current.map((scorecard) =>
        scorecard.id === input.id ?
          {
            ...scorecard,
            name: input.name,
            description: input.description,
            type: input.type,
            minScore: input.minScore,
            maxScore: input.maxScore,
            passingScore: input.passingScore,
            updatedAt: new Date().toISOString().split('T')[0],
          }
        : scorecard,
      ),
    );
  }

  function deleteScorecard(id: string) {
    setScorecards((current) =>
      current.filter((scorecard) => scorecard.id !== id),
    );
  }

  function toggleStatus(id: string) {
    setScorecards((current) =>
      current.map((scorecard) => {
        if (scorecard.id !== id) {
          return scorecard;
        }

        return {
          ...scorecard,
          status: scorecard.status === 'ACTIVE' ? 'INACTIVE' : 'ACTIVE',
        };
      }),
    );
  }

  return {
    scorecards,
    filteredScorecards,
    paginatedScorecards,
    filters,
    stats,
    page: currentPage,
    pageCount,
    pageSize: PAGE_SIZE,
    updateFilters,
    resetFilters,
    setPage,
    getScorecard,
    createScorecard,
    updateScorecard,
    deleteScorecard,
    toggleStatus,
  };
}
