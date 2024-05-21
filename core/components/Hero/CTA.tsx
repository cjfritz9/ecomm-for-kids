import React from 'react';
import Button from '../Button/Button';
import Link from 'next/link';

const CTA: React.FC = () => {
  return (
    <div className='flex flex-col max-w-[668px] gap-4'>
      <h1 className='text-primary font-semibold tracking-widest text-2xl leading-9'>
        LEARN & EARN ONLINE
      </h1>
      <h2 className='font-[700] text-[88px] leading-[96px] text-wrap'>
        Be the boss of your own KidCorp!
      </h2>
      <p className='font-[500] text-lg'>
        Learn how to run a real business and make real money for yourself or
        your favorite charity. With KidCorp’s instant store creator, easily
        build your own eCommerce website. Decide what you want to sell and make
        it all yours with the help of a grown-up. Let people know about your
        store using KidCorp’s simple tools. Then, we’ll prepare and ship the
        product you’ve sold. You can keep track of what you’ve earned and learn
        how to earn even more!
      </p>
      <Link href='/create-your-store' className='w-fit'>
      <Button extraStyles={['w-fit']}>Get Started</Button>
      </Link>
    </div>
  );
};

export default CTA;
