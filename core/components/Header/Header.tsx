import React from 'react';
import { BRAND } from '@/lib/config';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../Button/Button';

const Header: React.FC = () => {
  return (
    <section className='w-full py-5 px-20 flex justify-center'>
      <div className='max-w-[1512px] flex w-full justify-between'>
        <Image
          src={BRAND.logo.src}
          height={40}
          width={134}
          alt='KidCorp Logo'
        />
        <div className='flex w-[336px] justify-between'>
          <Link href='https://admin.kidcorp.com/login'>
            <button className='btn btn-ghost h-[60px] font-[600] text-lg px-8 py-4'>
              Login
            </button>
          </Link>
          <Link href='https://admin.kidcorp.com/signup'>
            <Button>Create account</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Header;
