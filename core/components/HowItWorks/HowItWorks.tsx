'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import eyebrow from '@/public/assets/how-it-works-eyebrow.svg';

const HowItWorks: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className='flex flex-col gap-[72px]'>
      <div className='flex flex-col items-center gap-6'>
        <Image src={eyebrow.src} height={16} width={120} alt='Wavy accent' />
        <h4 className='text-white text-[56px] leading-[64px] font-bold'>
          How it works:
        </h4>
      </div>
      <div className='flex border rounded-3xl'>
        <Card
          active={activeIndex === 0}
          borders={activeIndex - 1 !== 0 ? 'border-r' : ''}
          number={1}
          title='Sign up'
          body='First, create an account. You will use this to log in when you visit.'
          handleHover={() => setActiveIndex(0)}
        />
        <Card
          active={activeIndex === 1}
          borders={activeIndex !== 1 && activeIndex !== 2 ? 'border-r' : ''}
          number={2}
          title='Answer questions'
          body='Next, we will guide you through customizing your store. '
          handleHover={() => setActiveIndex(1)}
        />
        <Card
          active={activeIndex === 2}
          borders={activeIndex !== 2 && activeIndex !== 3 ? 'border-r' : ''}
          number={3}
          title='Choose products'
          body='Choose what you want to sell from our cool list of ideas.'
          handleHover={() => setActiveIndex(2)}
        />
        <Card
          active={activeIndex === 3}
          borders=''
          number={4}
          title='Start selling'
          body='Finally, publish your products to your store so you can start earning!'
          handleHover={() => setActiveIndex(3)}
        />
      </div>
    </div>
  );
};

interface CardProps {
  active: boolean;
  number: number;
  title: string;
  body: string;
  borders: string;
  handleHover: () => void;
}

const Card: React.FC<CardProps> = ({
  active,
  borders,
  number,
  title,
  body,
  handleHover
}) => {
  return (
    <div
      className={`p-6 px-16 text-center gap-4 -mx-4 -my-[1px] flex flex-col items-center transition-all duration-300 ${
        active ? 'bg-white rounded-[22px]' : `bg-transparent ${borders}`
      }`}
      onMouseEnter={handleHover}
    >
      <div
        className={`rounded-full w-16 flex items-center justify-center h-16 border-white border p-2${
          active ? ' bg-primary' : ' bg-transparent'
        }`}
      >
        <p className='text-3xl text-white font-bold'>{number}</p>
      </div>
      <p
        className={`text-2xl font-bold${
          active ? ' text-secondary' : ' text-white'
        }`}
      >
        {title}
      </p>
      <p
        className={`text-lg max-w-[290px] font-[500]${
          active ? '' : ' text-white'
        }`}
      >
        {body}
      </p>
    </div>
  );
};

export default HowItWorks;
