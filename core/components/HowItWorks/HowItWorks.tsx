'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import eyebrow from '@/public/assets/eyebrow-yellow.svg';
import num1 from '@/public/assets/how-it-works-numbers/how-1.svg';
import num2 from '@/public/assets/how-it-works-numbers/how-2.svg';
import num3 from '@/public/assets/how-it-works-numbers/how-3.svg';
import num4 from '@/public/assets/how-it-works-numbers/how-4.svg';
import num1Active from '@/public/assets/how-it-works-numbers/how-1-active.svg';
import num2Active from '@/public/assets/how-it-works-numbers/how-2-active.svg';
import num3Active from '@/public/assets/how-it-works-numbers/how-3-active.svg';
import num4Active from '@/public/assets/how-it-works-numbers/how-4-active.svg';

const HowItWorks: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className='flex flex-col gap-[72px]'>
      <div className='flex flex-col items-center gap-6'>
        <Image src={eyebrow.src} height={16} width={120} alt='Wavy accent' />
        <h4 className='text-white text-[44px] sm:text-[56px] sm:leading-[64px] font-bold'>
          How it works:
        </h4>
      </div>
      <div className='flex lg:flex-row flex-col border rounded-3xl'>
        <Card
          active={activeIndex === 0}
          borders={activeIndex - 1 !== 0 ? 'border-b lg:border-r' : ''}
          numberSrc={num1.src}
          activeNumberSrc={num1Active.src}
          title='Sign up'
          body='First, create an account. You will use this to log in when you visit.'
          handleHover={() => setActiveIndex(0)}
        />
        <Card
          active={activeIndex === 1}
          borders={activeIndex !== 1 && activeIndex !== 2 ? 'border-b lg:border-r' : ''}
          numberSrc={num2.src}
          activeNumberSrc={num2Active.src}
          title='Answer questions'
          body='Next, we will guide you through customizing your store. '
          handleHover={() => setActiveIndex(1)}
        />
        <Card
          active={activeIndex === 2}
          borders={activeIndex !== 2 && activeIndex !== 3 ? 'border-b lg:border-r' : ''}
          numberSrc={num3.src}
          activeNumberSrc={num3Active.src}
          title='Choose products'
          body='Choose what you want to sell from our cool list of ideas.'
          handleHover={() => setActiveIndex(2)}
        />
        <Card
          active={activeIndex === 3}
          borders=''
          numberSrc={num4.src}
          activeNumberSrc={num4Active.src}
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
  numberSrc: string;
  activeNumberSrc: string;
  title: string;
  body: string;
  borders: string;
  handleHover: () => void;
}

const Card: React.FC<CardProps> = ({
  active,
  borders,
  numberSrc,
  activeNumberSrc,
  title,
  body,
  handleHover
}) => {
  return (
    <div
      className={`p-6 px-16 text-center gap-4 lg:-mx-4 -my-[1px] flex flex-col items-center transition-all duration-300 ${
        active ? 'bg-white rounded-[22px]' : `bg-transparent ${borders}`
      }`}
      onMouseEnter={handleHover}
    >
      <Image
        src={active ? activeNumberSrc : numberSrc}
        height={72}
        width={72}
        alt='section number'
      />
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
