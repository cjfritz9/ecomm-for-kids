'use client';

import { BRAND } from '@/lib/utils/config';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { IoChevronUp } from 'react-icons/io5';
import Button from '../Button/Button';

const SlimHeader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScroll = () => {
    if (window.scrollY > 800) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div className='w-full py-2 px-20 flex justify-center sticky top-0 z-10 bg-white'>
        <div className='max-w-[1512px] flex w-full justify-between'>
          <Image
            src={BRAND.logo.src}
            height={40}
            width={134}
            alt='KidCorp Logo'
          />
          <div className='flex w-[336px] justify-between'>
            <Link href='http://localhost:3001/login'>
              <button className='btn btn-ghost h-[60px] font-[600] text-lg px-8 py-4'>
                Login
              </button>
            </Link>
            <Link href='http://localhost:3001/signup'>
              <Button>Create account</Button>
            </Link>
          </div>
        </div>
      </div>
      <div
        className='rounded-full cursor-pointer z-10 w-16 h-16 flex items-center justify-center bg-secondary fixed bottom-14 right-14'
        onClick={handleScrollTop}
      >
        <IoChevronUp size={40} color='white' />
      </div>
    </>
  );
};

export default SlimHeader;
