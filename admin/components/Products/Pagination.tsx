'use client';

import { ProductsContext } from '@/context/ProductsProvider';
import {
  Flex,
  Pagination,
  PaginationControl,
  PaginationNext,
  PaginationPrevious,
} from '@mantine/core';
import React, { useContext, useState } from 'react';

const ProductsPagination: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [lockButtons, setLockButtons] = useState(false);
  const { pageInfo, setPageInfo, setProducts } = useContext(ProductsContext);

  const handlePrevious = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    setCurrentPage((prev) => prev + 1);
    
  };

  return (
    <Pagination.Root
      total={totalPages}
      value={currentPage}
      onPreviousPage={handlePrevious}
      onNextPage={handleNext}
      disabled={lockButtons}
    >
      <Flex>
        <PaginationPrevious />
        <PaginationControl>{currentPage}</PaginationControl>
        <PaginationNext />
      </Flex>
    </Pagination.Root>
  );
};

export default ProductsPagination;
