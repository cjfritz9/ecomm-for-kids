'use client';
import { useEffect } from 'react';
import { motion, stagger, useAnimate } from 'framer-motion';
import { cn } from '@/lib/utils/cn';

export const TextGenerateEffect = ({
  words,
  className
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  const [scope2, animate2] = useAnimate();
  let wordsArray = words.split(' ');

  useEffect(() => {
    animate2(
      'h2',
      {
        opacity: 1
      },
      { delay: .3 }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scope2.current]);

  useEffect(() => {
    animate(
      'span',
      {
        opacity: 1
      },
      {
        duration: 2,
        delay: stagger(0.2)
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope2}>
        <motion.h2 ref={scope} className='opacity-0'>
          {wordsArray.map((word, idx) => {
            return (
              <motion.span
                key={word + idx}
                className='font-[700] text-[64px] leading-[64px] sm:text-[88px] sm:leading-[96px] text-wrap opacity-0'
              >
                {word}{' '}
              </motion.span>
            );
          })}
        </motion.h2>
      </motion.div>
    );
  };

  return (
    <div className={cn('font-bold', className)}>
      <div className='mt-4'>
        <div className=' dark:text-white text-black text-2xl leading-snug tracking-wide'>
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
