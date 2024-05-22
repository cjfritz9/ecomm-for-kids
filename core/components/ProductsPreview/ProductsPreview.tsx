'use client';

import { motion, stagger, useAnimate, useInView } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect } from 'react';

interface Props {
  products: any;
}

const ProductsPreview: React.FC<Props> = ({ products }) => {
  const [scope, animate] = useAnimate();
  const inView = useInView(scope, {margin: "0px 0px -200px 0px"})

  useEffect(() => {
    if (inView) {

      animate(
        'span',
        {
          opacity: 1,
          x: '24px'
        },
        {
          duration: 1,
          delay: stagger(0.5)
        }
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scope.current]);

  if (!products || !Array.isArray(products)) {
    return <Error />;
  }

  return (
    <div ref={scope} className='flex flex-wrap gap-4 max-w-[1352px]'>
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
    <span className={`-translate-x-6 opacity-0 h-fit ${
      isSmall ? 'w-[43%]' : 'w-[55%]'
    }`}>
      <div
        className={`h-[334px] group relative overflow-clip p-6 rounded-3xl bg-gradient-to-r from-base-200 from-50% to-transparent`}
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
            className='-z-[1] absolute mix-blend-multiply right-0 top-0 group-hover:scale-110 transition-transform duration-300'
          />
        </div>
      </div>
    </span>
  );
};

const Error: React.FC = () => {
  return <p>Error finding products, try refreshing the page.</p>;
};

export default ProductsPreview;
