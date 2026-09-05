'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import type { LoanProduct } from '../types/loan-product';

import { LoanProductRowActions } from './row-actions';

import { LoanProductStatusBadge } from './status-badge';

interface LoanProductsTableProps {
  products: LoanProduct[];

  onUpdate: (product: LoanProduct) => void;

  onToggleStatus: (id: string) => void;

  onDelete: (id: string) => void;
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
    maximumFractionDigits: 0,
  }).format(value);
}

export function LoanProductsTable({
  products,
  onUpdate,
  onToggleStatus,
  onDelete,
}: LoanProductsTableProps) {
  return (
    <div className='overflow-hidden rounded-xl border bg-card'>
      <div className='overflow-x-auto'>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>

              <TableHead>Category</TableHead>

              <TableHead>Loan Amount</TableHead>

              <TableHead>Term</TableHead>

              <TableHead>Interest Rate</TableHead>

              <TableHead>Applications</TableHead>

              <TableHead>Status</TableHead>

              <TableHead className='w-[70px]' />
            </TableRow>
          </TableHeader>

          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <div>
                    <p className='font-medium'>{product.name}</p>

                    <p className='text-xs text-muted-foreground'>
                      {product.code}
                    </p>
                  </div>
                </TableCell>

                <TableCell>{product.category}</TableCell>

                <TableCell>
                  {formatCurrency(product.minAmount)}

                  {' - '}

                  {formatCurrency(product.maxAmount)}
                </TableCell>

                <TableCell>
                  {product.minTerm} - {product.maxTerm} months
                </TableCell>

                <TableCell>{product.interestRate}%</TableCell>

                <TableCell>{product.applications}</TableCell>

                <TableCell>
                  <LoanProductStatusBadge status={product.status} />
                </TableCell>

                <TableCell>
                  <LoanProductRowActions
                    product={product}
                    onUpdate={onUpdate}
                    onToggleStatus={onToggleStatus}
                    onDelete={onDelete}
                  />
                </TableCell>
              </TableRow>
            ))}

            {products.length === 0 && (
              <TableRow>
                <TableCell
                  colSpan={8}
                  className='h-40 text-center text-muted-foreground'
                >
                  No loan products found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
