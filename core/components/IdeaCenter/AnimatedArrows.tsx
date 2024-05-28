'use client';

import { useInView } from 'framer-motion';
import Image from 'next/image';
import React, { useRef } from 'react';
import arrow3 from '@/public/assets/arrow-3.svg';
import arrow4 from '@/public/assets/arrow-4.svg';

const AnimatedArrows: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { margin: '100px 0px -200px 0px' });

  return (
    <div ref={containerRef}>
      <Image
        src={arrow3.src}
        height={212}
        width={365}
        alt='dotted arrow'
        className={`absolute -left-72 top-72 sm:top-16 sm:left-0 pointer-events-none${
          isInView ? ' arrow-draw-in-3' : ' hidden'
        }`}
      />
      <Image
        src={arrow4.src}
        height={118}
        width={380}
        alt='dotted arrow'
        className={`absolute -right-72 top-12 sm:top-24 sm:right-0 pointer-events-none${
          isInView ? ' arrow-draw-in-4' : ' hidden'
        }`}
      />
    </div>
  );
};

export default AnimatedArrows;
