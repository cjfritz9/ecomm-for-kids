import React from 'react';
import Subtitle from '../UI/Subtitle';
import ProductsPreview from '../ProductsPreview/ProductsPreview';
import AnimatedArrows from './AnimatedArrows';

interface Props {
  products: any;
}

const IdeaCenter: React.FC<Props> = ({ products }) => {
  return (
    <>
      <div className='text-center max-w-[742px] mb-[88px]'>
        <AnimatedArrows />
        <Subtitle content='IDEA CENTER' level={3} extraStyles='mb-4' />
        <h2 className='font-bold text-[56px] leading-[64px] mb-6'>
          Where your ideas can come to life
        </h2>
        <p className='font-[500] text-lg'>
          You can make your big dreams happen when you use KidCorp! It&apos;s a
          special place where you can show off what you love and sell it to
          other people. You can sell toys, drawings, or anything you think
          others would like!
        </p>
      </div>
      <ProductsPreview products={products} />
    </>
  );
};

export default IdeaCenter;
