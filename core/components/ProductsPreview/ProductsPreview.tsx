import { getFeaturedProducts } from '@/lib/requests';
import Image from 'next/image';
import React from 'react';

const ProductsPreview: React.FC = async () => {
  const products = await getFeaturedProducts();

  if (!products || !Array.isArray(products)) {
    return <Error />;
  }

  return (
    <div className='flex flex-wrap gap-4 max-w-[1352px]'>
      {products.map((product, i) => (
        <ProductCard key={product.id} data={product} index={i} />
      ))}
    </div>
  );
};

interface CardProps {
  data: {
    id: string;
    title: string;
    description: string;
    featuredImage: {
      url: string;
      altText: string | null;
    };
  };
  index: number;
}

const ProductCard: React.FC<CardProps> = ({ data, index }) => {
  const { title, description, featuredImage } = data;
  const isSmall = index === 1 || index === 2;
  return (
    <div
      className={`h-[334px] group relative overflow-clip p-6 rounded-3xl bg-gradient-to-r from-base-200 from-50% to-transparent ${
        isSmall ? 'w-[43%]' : 'w-[55%]'
      }`}
    >
      <div
        className={`bg-white rounded-3xl p-6 ${
          isSmall ? 'w-[307px]' : 'w-[436px]'
        }`}
      >
        <p className='text-secondary font-bold text-2xl mb-2'>{title}</p>
        <p className='font-[500] text-lg'>{description}</p>
        <Image
          src={featuredImage.url}
          width={344}
          height={344}
          alt={featuredImage.altText ?? ''}
          className='-z-[1] absolute right-0 top-0 group-hover:scale-110 transition-transform duration-300'
        />
      </div>
    </div>
  );
};

const Error: React.FC = () => {
  return <p>Error finding products, try refreshing the page.</p>;
};

export default ProductsPreview;
