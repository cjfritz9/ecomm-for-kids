'use client';

import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import { useRouter, useSearchParams } from 'next/navigation';
import Questionnaire from './Questionnaire/Questionnaire';

const StoreGenerator: React.FC = () => {
  const [step, setStep] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const paramsStep = searchParams.get('step');

    if (!paramsStep) {
      setIsLoading(false);
      return;
    }

    if (!isNaN(+paramsStep) && +paramsStep !== step) {
      setStep(+paramsStep);
      setIsLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  const handleUpdateStep = (toStep: number) => {
    if (toStep === 0) {
      router.push('/create-your-store');
    } else {
      router.push(`?step=${toStep}`);
    }
    setStep(toStep);
  };

  if (isLoading) return null;

  if (step === 0) {
    return (
      <div className='p-12'>
        <div className='prose text-2xl font-[500] mb-12'>
          <ol>
            <li>Answer a few easy questions</li>
            <li>Let our store generator create your store</li>
            <li>Customize</li>
            <li>Create your account</li>
            <li>Launch your store & start earning!</li>
          </ol>
        </div>
        <div className='flex w-full justify-between'>
          <div></div>
          <div onClick={() => handleUpdateStep(1)}>
            <Button>Let&apos;s go!</Button>
          </div>
        </div>
      </div>
    );
  }

  if (step === 1) {
    return (
      <div className='p-12'>
        <div className='prose text-3xl font-[500] mb-12'>
          <h4 className='fade-in'>Answer a few easy questions</h4>
        </div>
        <Questionnaire />
        <div className='flex w-full justify-between'>
          <div onClick={() => handleUpdateStep(0)}>
            <Button>Back</Button>
          </div>
          <div onClick={() => handleUpdateStep(2)}>
            <Button>Next</Button>
          </div>
        </div>
      </div>
    );
  }
};

export default StoreGenerator;
