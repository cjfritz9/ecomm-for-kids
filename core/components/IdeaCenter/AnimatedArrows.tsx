'use client';

import { useInView } from 'framer-motion';
import Image from 'next/image';
import React, { useRef } from 'react';
import arrow3 from '@/public/assets/arrow-3.svg';
import arrow4 from '@/public/assets/arrow-4.svg';

const AnimatedArrows: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { margin: '300px 0px 0px 0px' });

  return (
    <div ref={containerRef}>
      <Image
        src={arrow3.src}
        height={212}
        width={365}
        alt='dotted arrow'
        className={`absolute -left-72 top-[412px] sm:top-80 sm:-left-56 lg:top-64 lg:-left-44 xl:top-16 xl:left-0 pointer-events-none${
          isInView ? ' arrow-draw-in-3' : ' hidden'
        }`}
      />
      <Image
        src={arrow4.src}
        height={118}
        width={380}
        alt='dotted arrow'
        className={`absolute -right-72 top-12 sm:top-24 sm:-right-44 lg:top-24 lg:-right-32 xl:top-24 xl:right-0 pointer-events-none${
          isInView ? ' arrow-draw-in-4' : ' hidden'
        }`}
      />
    </div>
  );
};

export default AnimatedArrows;
