'use client';

import React, { useContext, useEffect, useState } from 'react';
import { ProductsProperties } from '@/@types/context';
import StoreProvider from './StoreProvider';

const baseContext: ProductsProperties = {
  products: null,
  setProducts: (products) => undefined,
  pageInfo: {
    hasNextPage: false,
    hasPrevPage: false,
    endCursor: null,
    startCursor: null,
  },
  setPageInfo: (pageInfo) => undefined,
};

export const ProductsContext = React.createContext<ProductsProperties>(baseContext);

const ProductsProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [products, setProducts] = useState(baseContext.products);
  const [pageInfo, setPageInfo] = useState(baseContext.pageInfo);

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        pageInfo,
        setPageInfo,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
