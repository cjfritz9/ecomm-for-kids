import Image from 'next/image';
import React from 'react';
import preview from '@/public/assets/store-preview.png';
import arrow from '@/public/assets/arrow-2.svg'
import AnimatedArrow from './AnimatedArrow';

const StorePreview: React.FC = () => {
  return (
    <div className=''>
      <AnimatedArrow />
      <Image
        src={preview.src}
        height={592}
        width={1352}
        alt='Preview of a KidCorp store'
        className='z-10 hover:scale-110 transition-transform duration-300'
      />
    </div>
  );
};

export default StorePreview;
