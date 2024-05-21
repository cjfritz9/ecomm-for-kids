import Image from 'next/image';
import React from 'react';
import avatar from '@/public/assets/avatar.svg';
import avatarBg from '@/public/assets/hero-avatar-bg.svg';

const HeroImage: React.FC = () => {
  return (
    <div className='relative flex justify-center'>
      <Image
        src={avatarBg.src}
        width={600}
        height={600}
        alt='backdrop gradient'
        className='absolute top-4'
      />
      <Image
        src={avatar.src}
        width={782}
        height={782}
        alt='KidCorp Avatar'
        className='z-[1]'
      />
    </div>
  );
};

export default HeroImage;
