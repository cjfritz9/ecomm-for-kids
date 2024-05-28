'use client';

import { useInView } from 'framer-motion';
import Image from 'next/image';
import React, { useRef } from 'react';
import arrow from '@/public/assets/arrow-2.svg';

const AnimatedArrow: React.FC = () => {
  const ref = useRef<HTMLImageElement>(null);
  const isInView = useInView(ref, { margin: '100px 0px -200px 0px', once: true });

  return (
    <div ref={ref}>
      <Image
        // ref={ref}
        src={arrow.src}
        height={185.1}
        width={284}
        alt='arrow for effect'
        className={`absolute sm:left-0 -left-28 sm:top-0 -top-24 pointer-events-none${
          isInView ? ' arrow-draw-in-2' : ' hidden'
        }`}
      />
    </div>
  );
};

export default AnimatedArrow;
