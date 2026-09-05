'use client';

import { LoanProductsFilters } from './components/filters';
import { LoanProductsHeader } from './components/header';
import { LoanProductsStats } from './components/stats';
import { LoanProductsTable } from './components/table';
import { useLoanProducts } from './hooks/use-loan-product';

export default function LoanProducts() {
  const {
    filteredProducts,
    filters,
    stats,
    updateSearch,
    updateCategory,
    updateStatus,
    resetFilters,
    updateProduct,
    toggleStatus,
    deleteProduct,
  } = useLoanProducts();

  return (
    <div className='space-y-6'>
      <LoanProductsHeader />

      <LoanProductsStats stats={stats} />

      <LoanProductsFilters
        filters={filters}
        onSearchChange={updateSearch}
        onCategoryChange={updateCategory}
        onStatusChange={updateStatus}
        onReset={resetFilters}
      />

      <LoanProductsTable
        products={filteredProducts}
        onUpdate={updateProduct}
        onToggleStatus={toggleStatus}
        onDelete={deleteProduct}
      />
    </div>
  );
}
