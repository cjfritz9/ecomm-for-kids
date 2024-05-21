import Image from 'next/image';
import React from 'react';
import hero from '@/public/assets/hero-main.svg'

const HeroImage: React.FC = () => {
  return (
    <div className='flex justify-center'>
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
