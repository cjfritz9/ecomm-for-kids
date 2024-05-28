import Image from 'next/image';
import React from 'react';
import hero from '@/public/assets/hero-main.svg'

const HeroImage: React.FC = () => {
  return (
    <div className='justify-center flex mt-12 sm:mt-0'>
      <Image
        src={hero.src}
        width={670}
        height={670}
        alt='KidCorp Avatar'
        className='z-[1]'
      />
    </div>
  );
};

export default HeroImage;
