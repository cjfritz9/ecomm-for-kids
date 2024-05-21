import React from 'react';
import Button from '../Button/Button';

const CTA: React.FC = () => {
  return (
    <div className='flex flex-col max-w-[554px] gap-4'>
      <h1 className='text-primary font-semibold tracking-widest text-2xl leading-9'>
        LEARN & EARN ONLINE
      </h1>
      <h2 className='font-[700] text-[88px] leading-[96px] text-wrap'>
        Start your adventure at KidCorp!
      </h2>
      <Button extraStyles={['w-fit']}>Get Started</Button>
    </div>
  );
};

export default CTA;
