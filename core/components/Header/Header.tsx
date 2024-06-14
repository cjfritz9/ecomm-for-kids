import React from 'react';
import { BRAND } from '@/lib/utils/config';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../Button/Button';

const Header: React.FC = () => {
  return (
    <section className='w-full py-5 px-8 sm:px-20 flex justify-center'>
      <div className='max-w-[1512px] flex w-full justify-between'>
        <Link href='/' prefetch={false}>
          <Image
            src={BRAND.logo.src}
            height={40}
            width={134}
            alt='KidCorp Logo'
          />
        </Link>
        <div className='flex sm:w-[336px] justify-between'>
          <Link
            href='https://kidcorp-admin-staging.cjfritz.dev/login'
            className='hidden sm:block'
          >
            <button className='btn btn-ghost h-[60px] font-[600] text-lg px-8 py-4'>
              Login
            </button>
          </Link>
          <Link
            href='https://kidcorp-admin-staging.cjfritz.dev/signup'
            className='hidden sm:block'
          >
            <Button>Create account</Button>
          </Link>
          <Link href='http://localhost:3001/login'>
            <button className='btn btn-ghost h-[60px] font-[600] text-lg px-0 py-4 block sm:hidden'>
              Login
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Header;
