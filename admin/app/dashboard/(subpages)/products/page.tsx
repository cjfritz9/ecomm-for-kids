import ProductsPagination from '@/components/Products/Pagination';
import Products from '@/components/Products/Products';
import ProductsProvider from '@/context/ProductsProvider';
import { getUserTokenData } from '@/lib/utils/cookies';
import { getCollectionById } from '@/shopify/models/collection.model';
import { getStoreProductsByOwnerId } from '@/shopify/models/stores.model';
import React from 'react';

const ProductsPage: React.FC = async () => {
  const token = getUserTokenData();
  let initialProductsData: any;
  if (token) {
    initialProductsData = await getStoreProductsByOwnerId(token.userId)
  }
  return (
    <ProductsProvider>
      <Products initialProductsData={initialProductsData} />
    </ProductsProvider>
  );
};

export default ProductsPage;
