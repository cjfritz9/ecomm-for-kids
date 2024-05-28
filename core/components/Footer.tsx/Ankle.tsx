import React from 'react';
import Button from '../Button/Button';
import Link from 'next/link';

const Ankle: React.FC = () => {
  return (
    <div className='bg-[#1B9CA44D] w-full py-[104px] justify-center flex'>
      <div className='max-w-[1352px] mx-8 sm:mx-20 flex flex-col lg:flex-row w-full justify-between items-center'>
        <p className='font-[700] text-center lg:text-left text-[32px] leading-[32px]'>
          Let&apos;s create your store today!
        </p>
        <Link href='/create-your-store' className='w-fit mt-12 lg:mt-0'>
          <Button>Get started</Button>
        </Link>
      </div>
    </div>
  );
};

export default Ankle;
