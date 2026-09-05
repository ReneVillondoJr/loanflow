'use client';

import { useState } from 'react';

import { useScorecards } from '@/modules/admin/scorecards/hooks/use-scorecard';

import { ScorecardsHeader } from './components/header';
import { ScorecardsStats } from './components/stats';
import { ScorecardsToolbar } from './components/toolbar';
import { ScorecardsTable } from './components/table';
import { ScorecardFormDialog } from './components/form-dialog';
import { ScorecardViewDialog } from './components/view-dialog';
import { ScorecardDeleteDialog } from './components/delete-dialog';

import type {
  CreateScorecardInput,
  Scorecard,
  UpdateScorecardInput,
} from '@/modules/admin/scorecards/types/scorecard';

export function Scorecards() {
  const {
    scorecards,
    paginatedScorecards,
    filters,
    stats,
    page,
    pageCount,
    pageSize,
    updateFilters,
    resetFilters,
    setPage,
    createScorecard,
    updateScorecard,
    deleteScorecard,
    toggleStatus,
  } = useScorecards();

  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const [formOpen, setFormOpen] = useState(false);
  const [viewOpen, setViewOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const [editingScorecard, setEditingScorecard] = useState<Scorecard | null>(
    null,
  );

  const [viewingScorecard, setViewingScorecard] = useState<Scorecard | null>(
    null,
  );

  const [deletingScorecard, setDeletingScorecard] = useState<Scorecard | null>(
    null,
  );

  function handleCreate() {
    setEditingScorecard(null);
    setFormOpen(true);
  }

  function handleView(scorecard: Scorecard) {
    setViewingScorecard(scorecard);
    setViewOpen(true);
  }

  function handleEdit(scorecard: Scorecard) {
    setEditingScorecard(scorecard);
    setFormOpen(true);
  }

  function handleDelete(scorecard: Scorecard) {
    setDeletingScorecard(scorecard);
    setDeleteOpen(true);
  }

  function handleFormSubmit(
    input: CreateScorecardInput & {
      id?: string;
    },
  ) {
    if (input.id) {
      const updateInput: UpdateScorecardInput = {
        id: input.id,
        name: input.name,
        description: input.description,
        type: input.type,
        minScore: input.minScore,
        maxScore: input.maxScore,
        passingScore: input.passingScore,
      };

      updateScorecard(updateInput);

      setEditingScorecard(null);
      return;
    }

    createScorecard({
      name: input.name,
      description: input.description,
      type: input.type,
      minScore: input.minScore,
      maxScore: input.maxScore,
      passingScore: input.passingScore,
    });
  }

  function handleToggleStatus(id: string) {
    toggleStatus(id);
  }

  function handleConfirmDelete() {
    if (!deletingScorecard) {
      return;
    }

    const id = deletingScorecard.id;

    deleteScorecard(id);

    setSelectedIds((current) =>
      current.filter((selectedId) => selectedId !== id),
    );

    setDeletingScorecard(null);
    setDeleteOpen(false);
  }

  function handleFilterChange(updates: Parameters<typeof updateFilters>[0]) {
    updateFilters(updates);

    setSelectedIds([]);
  }

  function handleResetFilters() {
    resetFilters();

    setSelectedIds([]);
  }

  function handlePageChange(nextPage: number) {
    const safePage = Math.min(Math.max(nextPage, 1), pageCount);

    setPage(safePage);
    setSelectedIds([]);
  }

  return (
    <div className='w-full space-y-6'>
      <ScorecardsHeader onCreate={handleCreate} />

      <ScorecardsStats stats={stats} />

      <div className='flex flex-col gap-4'>
        <div>
          <h2 className='text-lg font-semibold tracking-tight'>Scorecards</h2>

          <p className='text-sm text-muted-foreground'>
            Manage credit scoring models and decisioning criteria.
          </p>
        </div>

        <ScorecardsToolbar
          filters={filters}
          onFilterChange={handleFilterChange}
          onReset={handleResetFilters}
        />

        <ScorecardsTable
          scorecards={paginatedScorecards}
          selectedIds={selectedIds}
          onSelectedIdsChange={setSelectedIds}
          onView={handleView}
          onEdit={handleEdit}
          onToggleStatus={handleToggleStatus}
          onDelete={handleDelete}
          page={page}
          pageCount={pageCount}
          onPageChange={handlePageChange}
          pageSize={pageSize}
        />
      </div>

      <ScorecardFormDialog
        open={formOpen}
        scorecard={editingScorecard}
        onOpenChange={(open) => {
          setFormOpen(open);

          if (!open) {
            setEditingScorecard(null);
          }
        }}
        onSubmit={handleFormSubmit}
      />

      <ScorecardViewDialog
        open={viewOpen}
        scorecard={viewingScorecard}
        onOpenChange={(open) => {
          setViewOpen(open);

          if (!open) {
            setViewingScorecard(null);
          }
        }}
      />

      <ScorecardDeleteDialog
        open={deleteOpen}
        scorecard={deletingScorecard}
        onOpenChange={(open) => {
          setDeleteOpen(open);

          if (!open) {
            setDeletingScorecard(null);
          }
        }}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
}

export default Scorecards;
