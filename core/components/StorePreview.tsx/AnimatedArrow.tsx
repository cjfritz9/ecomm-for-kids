'use client';

import { useInView } from 'framer-motion';
import Image from 'next/image';
import React, { useRef } from 'react';
import arrow from '@/public/assets/arrow-2.svg';

const AnimatedArrow: React.FC = () => {
  const ref = useRef<HTMLImageElement>(null);
  const isInView = useInView(ref, { margin: '100px 0px -400px 0px', once: true });

  return (
    <div ref={ref}>
      <Image
        // ref={ref}
        src={arrow.src}
        height={185.1}
        width={284}
        alt='arrow for effect'
        className={`absolute left-0${
          isInView ? ' arrow-draw-in-2' : ' hidden'
        }`}
      />
    </div>
  );
};

export default AnimatedArrow;
