import React from 'react';
import Button from '../Button/Button';
import Link from 'next/link';
import Subtitle from '../UI/Subtitle';
import { TextGenerateEffect } from '../UI/TextGenerateEffect';

const CTA: React.FC = () => {
  return (
    <div className='flex flex-col max-w-[668px] gap-4'>
      <Subtitle content='LEARN & EARN ONLINE' level={1} extraStyles='fade-in-ltr' />
      <TextGenerateEffect words='Be the boss of your own KidCorp!' />

      <p className='font-[500] text-lg fade-in-ttb'>
        Learn how to run a real business and make real money for yourself or
        your favorite charity. With KidCorp’s instant store creator, easily
        build your own eCommerce website. Decide what you want to sell and make
        it all yours with the help of a grown-up. Let people know about your
        store using KidCorp’s simple tools. Then, we’ll prepare and ship the
        product you’ve sold. You can keep track of what you’ve earned and learn
        how to earn even more!
      </p>
      <Link href='/create-your-store' className='w-fit'>
        <Button extraStyles={['w-fit', 'mt-6', 'fade-in']}>Get Started</Button>
      </Link>
    </div>
  );
};

export default CTA;
