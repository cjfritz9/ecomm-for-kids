'use client';

import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import { useRouter, useSearchParams } from 'next/navigation';
import Questionnaire from './Questionnaire/Questionnaire';
import PageButtons from './PageButtons';

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
  }, [searchParams]);

  const handleUpdateStep = (toStep: number) => {
    setStep(toStep);
    if (toStep === 0) {
      router.push('/create-your-store');
    } else {
      router.push(`?step=${toStep}`);
    }
  };

  if (isLoading)
    return <span className='loading loading-spinner loading-lg mt-12'></span>;

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
        <PageButtons
          buttonData={{ next: { toStep: 1, text: "Let's Go!" } }}
          handleUpdate={handleUpdateStep}
        />
      </div>
    );
  }

  if (step === 1) {
    return (
      <div className='p-12'>
        <div className='prose text-3xl font-[500] mb-12'>
          <h4 className='fade-in-ltr'>Answer a few easy questions</h4>
        </div>
        <Questionnaire />
        <PageButtons
          buttonData={{ back: { toStep: 0}, next: { toStep: 2 } }}
          handleUpdate={handleUpdateStep}
        />
      </div>
    );
  }
};

export default StoreGenerator;
