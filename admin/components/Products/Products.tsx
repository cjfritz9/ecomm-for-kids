'use client';

import { ProductsContext } from '@/context/ProductsProvider';
import { StoreContext } from '@/context/StoreProvider';
import { Alert, Flex, Stack, Text } from '@mantine/core';
import React, { useContext, useEffect } from 'react';
import ProductCard from './Cards/ProductCard';
import LoadingCard from './Cards/LoadingCard';
import { getCollectionById } from '@/shopify/models/collection.model';
import ProductsPagination from './Pagination';
import { IconInfoCircle } from '@tabler/icons-react';

interface Props {
  initialProductsData: Awaited<ReturnType<typeof getCollectionById>>;
}

const Products: React.FC<Props> = ({ initialProductsData }) => {
  const { products, setProducts, setPageInfo } = useContext(ProductsContext);
  const { collectionId } = useContext(StoreContext);

  useEffect(() => {
    if (initialProductsData) {
      setProducts(initialProductsData.products);
      setPageInfo(initialProductsData.pageInfo);
    } else {
      if (!collectionId) return;
      (async () => {
        if (!products) {
          const res = await fetch(`/api/shopify/collection/${collectionId}`);
          const collection = await res.json();
          if (collection?.data?.products) {
            setProducts(collection.data.products);
          }
          if (collection?.data?.pageInfo) {
            setPageInfo(collection.data.pageInfo);
          }
        }
      })();
    }
  }, [collectionId]);

  return (
    <Stack p="xl">
      <Alert variant="light" title="Coming soon" color="blue" icon={<IconInfoCircle />}>
        The interface will be cleaned up and each product will be clickable to view/edit its
        information
      </Alert>

      <Flex style={{ flexWrap: 'wrap', gap: '1.25rem' }}>
        {products
          ? products[0] &&
            products.map((product: any) => (
              <ProductCard
                key={product.id}
                title={product.title}
                status={product.status}
                priceRange={product.priceRangeV2}
                variantsCount={product.variantsCount}
                totalInventory={product.totalInventory}
                image={product.featuredImage}
              />
            ))
          : Array.from(Array(10)).map((_, i) => <LoadingCard key={i} />)}
      </Flex>
      <ProductsPagination />
    </Stack>
  );
};

export default Products;
