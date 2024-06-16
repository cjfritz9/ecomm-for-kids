import Footer from '@/components/Footer.tsx/Footer';
import Header from '@/components/Header/Header';
import StoreGenerator from '@/components/StoreGenerator/StoreGenerator';
import React from 'react';

const CreateYourStorePage: React.FC = async () => {
  return (
    <main className='bg-gradient-to-r w-full min-h-[100dvh] from-[#F9F0E5] to-[#E9FEFD]'>
      <Header />
      <section className='flex flex-col items-center my-16 min-h-[100dvh]'>
        <h1 className='font-[700] text-[64px] leading-[64px] sm:text-[64px] sm:leading-[72px] text-wrap'>
          Create Your Store
        </h1>
        <StoreGenerator />
      </section>
      <Footer />
    </main>
  );
};

export default CreateYourStorePage;
