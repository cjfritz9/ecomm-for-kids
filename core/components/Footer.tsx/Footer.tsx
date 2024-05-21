import React from 'react';
import { BRAND } from '@/lib/config';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <div className='w-full flex flex-col items-center gap-4 bg-primary py-8'>
      <Image
        src={BRAND.altLogo.src}
        width={132}
        height={40}
        alt='KidCorp Logo'
      />
      <p className='text-white text-sm leading-[18px]'>©2024 KidCorp. All rights reserved.</p>
    </div>
  );
};

export default Footer;
