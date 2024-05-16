'use client';

import { ProductsContext } from '@/context/ProductsProvider';
import { StoreContext } from '@/context/StoreProvider';
import { fetchNextProductsPage, fetchPrevProductsPage } from '@/lib/utils/client-requests';
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
  const { pageInfo, products, setPageInfo, setProducts } = useContext(ProductsContext);
  const { collectionId } = useContext(StoreContext);

  const handlePrevious = async () => {
    if (!collectionId || !pageInfo.startCursor) return;
    let savedProducts = products;
    setProducts(null);
    setCurrentPage((prev) => prev - 1);
    const prevProductData = await fetchPrevProductsPage(collectionId, pageInfo.startCursor);
    if (prevProductData) {
      setProducts(prevProductData.products);
      setPageInfo(prevProductData.pageInfo);
    } else {
      setProducts(savedProducts);
    }
  };

  const handleNext = async () => {
    if (!collectionId || !pageInfo.endCursor) return;
    window?.scrollTo(0, 0);
    let savedProducts = products;
    setProducts(null);
    setCurrentPage((prev) => prev + 1);
    const nextProductData = await fetchNextProductsPage(collectionId, pageInfo.endCursor);
    if (nextProductData) {
      setProducts(nextProductData.products);
      setPageInfo(nextProductData.pageInfo);
    } else {
      setProducts(savedProducts);
    }
  };

  return (
    <Pagination.Root
      total={0}
      value={currentPage}
      onPreviousPage={handlePrevious}
      onNextPage={handleNext}
      size="xl"
    >
      <Flex>
        <PaginationPrevious />
        <PaginationControl>{currentPage}</PaginationControl>
        <PaginationNext disabled={pageInfo.hasNextPage === false} />
      </Flex>
    </Pagination.Root>
  );
};

export default ProductsPagination;
