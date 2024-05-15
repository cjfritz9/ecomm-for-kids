'use client';

import { ProductsContext } from '@/context/ProductsProvider';
import { StoreContext } from '@/context/StoreProvider';
import { Flex } from '@mantine/core';
import React, { useContext, useEffect } from 'react';
import ProductCard from './Cards/ProductCard';
import LoadingCard from './Cards/LoadingCard';

const Products: React.FC = () => {
  const { products, setProducts, setPageInfo } = useContext(ProductsContext);
  const { collectionId } = useContext(StoreContext);

  useEffect(() => {
    if (!collectionId) return;
    (async () => {
      if (!products) {
        const res = await fetch(`/api/shopify/collection/${collectionId}`);
        const collection = await res.json();
        console.log(collection);
        if (collection?.data?.products) {
          setProducts(collection.data.products);
        }
        if (collection?.data?.pageInfo) {
          setPageInfo(collection.data.pageInfo);
        }
      }
    })();
  }, [collectionId]);

  return <Flex style={{ flexWrap: 'wrap', gap: '1.25rem', padding: '2rem' }}>
    {products ? products[0] && products.map((product: any) => (
      <ProductCard
        key={product.id}
        title={product.title}
        status={product.status}
        priceRange={product.priceRangeV2}
        variantsCount={product.variantsCount}
        totalInventory={product.totalInventory}
        image={product.featuredImage}
      />
    )) : Array.from(Array(10)).map((_, i) => (
      <LoadingCard key={i} />
    ))}
  </Flex>;
};

export default Products;
