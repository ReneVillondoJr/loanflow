'use client';

import { useMemo, useState } from 'react';

import { loanProductsData } from '../data/loan-product';

import type {
  LoanProduct,
  LoanProductCategory,
  LoanProductFilters,
  LoanProductStatus,
} from '../types/loan-product';

const initialFilters: LoanProductFilters = {
  search: '',
  category: 'ALL',
  status: 'ALL',
};

export function useLoanProducts() {
  const [products, setProducts] = useState<LoanProduct[]>(loanProductsData);

  const [filters, setFilters] = useState<LoanProductFilters>(initialFilters);

  const filteredProducts = useMemo(() => {
    const search = filters.search.toLowerCase().trim();

    return products.filter((product) => {
      const matchesSearch =
        !search ||
        product.name.toLowerCase().includes(search) ||
        product.code.toLowerCase().includes(search) ||
        product.description.toLowerCase().includes(search);

      const matchesCategory =
        filters.category === 'ALL' || product.category === filters.category;

      const matchesStatus =
        filters.status === 'ALL' || product.status === filters.status;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [products, filters]);

  const stats = useMemo(() => {
    return {
      total: products.length,

      active: products.filter((product) => product.status === 'ACTIVE').length,

      inactive: products.filter((product) => product.status === 'INACTIVE')
        .length,

      draft: products.filter((product) => product.status === 'DRAFT').length,
    };
  }, [products]);

  function updateSearch(search: string) {
    setFilters((previous) => ({
      ...previous,
      search,
    }));
  }

  function updateCategory(category: LoanProductCategory | 'ALL') {
    setFilters((previous) => ({
      ...previous,
      category,
    }));
  }

  function updateStatus(status: LoanProductStatus | 'ALL') {
    setFilters((previous) => ({
      ...previous,
      status,
    }));
  }

  function resetFilters() {
    setFilters({
      ...initialFilters,
    });
  }

  function addProduct(product: LoanProduct) {
    setProducts((previous) => [...previous, product]);
  }

  function updateProduct(updatedProduct: LoanProduct) {
    setProducts((previous) =>
      previous.map((product) => {
        if (product.id !== updatedProduct.id) {
          return product;
        }

        return {
          ...updatedProduct,
          updatedAt: new Date().toISOString().split('T')[0],
        };
      }),
    );
  }

  function toggleStatus(id: string) {
    setProducts((previous) =>
      previous.map((product) => {
        if (product.id !== id) {
          return product;
        }

        const nextStatus: LoanProductStatus =
          product.status === 'ACTIVE' ? 'INACTIVE' : 'ACTIVE';

        return {
          ...product,
          status: nextStatus,
          updatedAt: new Date().toISOString().split('T')[0],
        };
      }),
    );
  }

  function deleteProduct(id: string) {
    setProducts((previous) => previous.filter((product) => product.id !== id));
  }

  return {
    products,
    filteredProducts,
    filters,
    stats,

    updateSearch,
    updateCategory,
    updateStatus,
    resetFilters,

    addProduct,
    updateProduct,
    toggleStatus,
    deleteProduct,
  };
}
