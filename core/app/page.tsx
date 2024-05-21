import Image from 'next/image';
import Header from '@/components/Header/Header';
import CTA from '@/components/Hero/CTA';
import HeroImage from '@/components/Hero/HeroImage';
import TextWithImage from '@/components/TextWithImage/TextWithImage';

import arrow1 from '@/public/assets/arrow-1.svg';
import arrow2 from '@/public/assets/arrow-2.svg';
import avatarLearnWhileMakingMoney from '@/public/assets/learn-while-making-money-avatar.svg';
import yellowEyebrow from '@/public/assets/eyebrow-yellow.svg';
import HowItWorks from '@/components/HowItWorks/HowItWorks';
import IdeaCenter from '@/components/IdeaCenter/IdeaCenter';

export default function Home() {
  return (
    <main className='flex flex-col items-center w-full overflow-x-clip'>
      <div className='bg-gradient-to-r w-full from-[#F9F0E5] to-[#E9FEFD]'>
        <Header />
        <section className='flex relative flex-col items-center px-20 justify-center w-full pt-[36px]'>
          <div className='flex items-center max-w-[1512px] w-full justify-between pb-[120px]'>
            <CTA />
            <HeroImage />
            <Image
              src={arrow1.src}
              height={318}
              width={185}
              alt='dotted arrow'
              className='absolute bottom-4 left-0'
            />
            <Image
              src={arrow2.src}
              height={321}
              width={347}
              alt='dotted arrow'
              className='absolute right-0 bottom-0'
            />
          </div>
          <div
            className='w-[100dvw] h-[15px]'
            style={{
              backgroundImage: 'url("/assets/hero-wave-border.svg")',
              backgroundRepeat: 'repeat-x'
            }}
          />
        </section>
      </div>
      <section className='flex bg-accent relative flex-col items-center px-20 justify-center w-full py-[112px]'>
        <HowItWorks />
      </section>
      <section className='flex relative flex-col items-center px-20 justify-center w-full py-[112px]'>
        <IdeaCenter />
      </section>
      <section className='flex relative flex-col items-center px-20 justify-center p-14 pt-0 bg-gradient-to-r w-full from-[#F9F0E5] to-[#E9FEFD]'>
        <div
          className='w-[100dvw] h-[15px] mb-14 -mt-[1px]'
          style={{
            backgroundImage: 'url("/assets/wave-reversed.svg")',
            backgroundRepeat: 'repeat-x'
          }}
        />
        <TextWithImage
          reversed
          image={
            <Image
              src={avatarLearnWhileMakingMoney.src}
              height={554}
              width={554}
              alt='Avatar with shirts and coins'
              className='z-[1] relative'
            />
          }
          eyebrow={
            <Image
              src={yellowEyebrow.src}
              height={16.7}
              width={120}
              alt='Wavy accent element'
            />
          }
          title='Learn about business while earning money'
          body="We want you to have fun while you learn. You'll learn how to run an online store, but it won't feel like school at all! It's like playing a game where you get to be the boss and get paid!"
        />
      </section>
    </main>
  );
}
