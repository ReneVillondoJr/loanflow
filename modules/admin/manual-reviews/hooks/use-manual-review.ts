'use client';

import { useMemo, useState } from 'react';

import { manualReviews as initialManualReviews } from '@/modules/admin/manual-reviews/data/manual-review';

import type {
  AssignReviewInput,
  ManualReview,
  ManualReviewFilters,
  ManualReviewStats,
  ReviewApplicationInput,
} from '@/modules/admin/manual-reviews/types/manual-review';

const PAGE_SIZE = 10;

export function useManualReviews() {
  const [reviews, setReviews] = useState<ManualReview[]>(initialManualReviews);

  const [filters, setFilters] = useState<ManualReviewFilters>({
    search: '',
    status: 'ALL',
    priority: 'ALL',
    loanType: 'ALL',
    riskLevel: 'ALL',
  });

  const [page, setPage] = useState(1);

  const filteredReviews = useMemo(() => {
    const search = filters.search.trim().toLowerCase();

    return reviews.filter((review) => {
      const matchesSearch =
        !search ||
        review.applicant.name.toLowerCase().includes(search) ||
        review.applicant.email.toLowerCase().includes(search) ||
        review.applicationId.toLowerCase().includes(search) ||
        review.reason.toLowerCase().includes(search);

      const matchesStatus =
        filters.status === 'ALL' || review.status === filters.status;

      const matchesPriority =
        filters.priority === 'ALL' || review.priority === filters.priority;

      const matchesLoanType =
        filters.loanType === 'ALL' || review.loanType === filters.loanType;

      const matchesRisk =
        filters.riskLevel === 'ALL' || review.riskLevel === filters.riskLevel;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesPriority &&
        matchesLoanType &&
        matchesRisk
      );
    });
  }, [filters, reviews]);

  const pageCount = Math.max(1, Math.ceil(filteredReviews.length / PAGE_SIZE));

  const currentPage = Math.min(page, pageCount);

  const paginatedReviews = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;

    return filteredReviews.slice(start, start + PAGE_SIZE);
  }, [currentPage, filteredReviews]);

  const stats: ManualReviewStats = useMemo(() => {
    const pending = reviews.filter(
      (review) => review.status === 'PENDING',
    ).length;

    const inReview = reviews.filter(
      (review) => review.status === 'IN_REVIEW',
    ).length;

    const approved = reviews.filter(
      (review) => review.status === 'APPROVED',
    ).length;

    const rejected = reviews.filter(
      (review) => review.status === 'REJECTED',
    ).length;

    const urgent = reviews.filter(
      (review) =>
        review.priority === 'URGENT' &&
        !['APPROVED', 'REJECTED'].includes(review.status),
    ).length;

    const averageDaysPending =
      reviews.length > 0 ?
        Number(
          (
            reviews.reduce((total, review) => total + review.daysPending, 0) /
            reviews.length
          ).toFixed(1),
        )
      : 0;

    return {
      total: reviews.length,
      pending,
      inReview,
      approved,
      rejected,
      urgent,
      averageDaysPending,
    };
  }, [reviews]);

  function updateFilters(updates: Partial<ManualReviewFilters>) {
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
      priority: 'ALL',
      loanType: 'ALL',
      riskLevel: 'ALL',
    });

    setPage(1);
  }

  function getReview(id: string) {
    return reviews.find((review) => review.id === id);
  }

  function reviewApplication(input: ReviewApplicationInput) {
    setReviews((current) =>
      current.map((review) =>
        review.id === input.id ?
          {
            ...review,
            status:
              input.decision === 'APPROVE' ? 'APPROVED'
              : input.decision === 'REJECT' ? 'REJECTED'
              : input.decision === 'ESCALATE' ? 'ESCALATED'
              : 'IN_REVIEW',
            decision: input.decision,
            decisionNotes: input.notes,
            updatedAt: new Date().toISOString().split('T')[0],
          }
        : review,
      ),
    );
  }

  function assignReview(input: AssignReviewInput) {
    setReviews((current) =>
      current.map((review) =>
        review.id === input.id ?
          {
            ...review,
            assignedTo: input.assignedTo,
            status: review.status === 'PENDING' ? 'IN_REVIEW' : review.status,
            updatedAt: new Date().toISOString().split('T')[0],
          }
        : review,
      ),
    );
  }

  function startReview(id: string) {
    setReviews((current) =>
      current.map((review) =>
        review.id === id ?
          {
            ...review,
            status: 'IN_REVIEW',
            updatedAt: new Date().toISOString().split('T')[0],
          }
        : review,
      ),
    );
  }

  function escalateReview(id: string) {
    setReviews((current) =>
      current.map((review) =>
        review.id === id ?
          {
            ...review,
            status: 'ESCALATED',
            priority: 'URGENT',
            decision: 'ESCALATE',
            updatedAt: new Date().toISOString().split('T')[0],
          }
        : review,
      ),
    );
  }

  return {
    reviews,
    filteredReviews,
    paginatedReviews,
    filters,
    stats,

    page: currentPage,
    pageCount,
    pageSize: PAGE_SIZE,

    updateFilters,
    resetFilters,
    setPage,

    getReview,
    reviewApplication,
    assignReview,
    startReview,
    escalateReview,
  };
}
