import Products from '@/components/Products/Products';
import ProductsProvider from '@/context/ProductsProvider';
import React from 'react';

const ProductsPage: React.FC = async () => {
  return (
    <ProductsProvider>
      <Products />
    </ProductsProvider>
  );
};

export default ProductsPage;
