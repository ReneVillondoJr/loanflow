'use client';

import { useState } from 'react';

import { useManualReviews } from '@/modules/admin/manual-reviews/hooks/use-manual-review';

import { ManualReviewsHeader } from './components/header';
import { ManualReviewsStats } from './components/stats';
import { ManualReviewsToolbar } from './components/toolbar';
import { ManualReviewsTable } from './components/table';
import { ManualReviewDialog } from './components/review-dialog';
import { ManualReviewViewDialog } from './components/view-dialog';

import type {
  ManualReview,
  ManualReviewDecision,
} from '@/modules/admin/manual-reviews/types/manual-review';

export function ManualReviews() {
  const {
    paginatedReviews,
    filters,
    stats,
    page,
    pageCount,
    pageSize,
    filteredReviews,
    updateFilters,
    resetFilters,
    setPage,
    reviewApplication,
    startReview,
    escalateReview,
  } = useManualReviews();

  const [selectedReview, setSelectedReview] = useState<ManualReview | null>(
    null,
  );

  const [viewOpen, setViewOpen] = useState(false);

  const [decisionOpen, setDecisionOpen] = useState(false);

  const [decision, setDecision] = useState<ManualReviewDecision>('APPROVE');

  function handleView(review: ManualReview) {
    setSelectedReview(review);
    setViewOpen(true);
  }

  function handleDecision(
    review: ManualReview,
    nextDecision: ManualReviewDecision,
  ) {
    setSelectedReview(review);
    setDecision(nextDecision);
    setDecisionOpen(true);
  }

  function handleDecisionSubmit(
    nextDecision: ManualReviewDecision,
    notes: string,
  ) {
    if (!selectedReview) {
      return;
    }

    reviewApplication({
      id: selectedReview.id,
      decision: nextDecision,
      notes,
    });

    setDecisionOpen(false);
    setSelectedReview(null);
  }

  function handlePageChange(nextPage: number) {
    const safePage = Math.min(Math.max(nextPage, 1), pageCount);

    setPage(safePage);
  }

  return (
    <div className='w-full space-y-6'>
      <ManualReviewsHeader pendingCount={stats.pending + stats.inReview} />

      <ManualReviewsStats stats={stats} />

      <div className='space-y-4'>
        <div>
          <h2 className='text-lg font-semibold tracking-tight'>Review Queue</h2>

          <p className='text-sm text-muted-foreground'>
            Applications requiring manual underwriting review.
          </p>
        </div>

        <ManualReviewsToolbar
          filters={filters}
          onFilterChange={updateFilters}
          onReset={resetFilters}
        />

        <ManualReviewsTable
          reviews={paginatedReviews}
          total={filteredReviews.length}
          page={page}
          pageCount={pageCount}
          pageSize={pageSize}
          onPageChange={handlePageChange}
          onView={handleView}
          onStart={startReview}
          onApprove={(review) => handleDecision(review, 'APPROVE')}
          onReject={(review) => handleDecision(review, 'REJECT')}
          onEscalate={escalateReview}
        />
      </div>

      <ManualReviewViewDialog
        open={viewOpen}
        review={selectedReview}
        onOpenChange={(open) => {
          setViewOpen(open);

          if (!open) {
            setSelectedReview(null);
          }
        }}
      />

      <ManualReviewDialog
        open={decisionOpen}
        review={selectedReview}
        decision={decision}
        onOpenChange={(open) => {
          setDecisionOpen(open);

          if (!open) {
            setSelectedReview(null);
          }
        }}
        onSubmit={handleDecisionSubmit}
      />
    </div>
  );
}

export default ManualReviews;
