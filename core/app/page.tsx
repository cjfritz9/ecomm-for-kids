import Image from 'next/image';
import Header from '@/components/Header/Header';
import CTA from '@/components/Hero/CTA';
import HeroImage from '@/components/Hero/HeroImage';
import TextWithImage from '@/components/TextWithImage/TextWithImage';

import arrow1 from '@/public/assets/arrow-1.svg';
import arrow2 from '@/public/assets/arrow-2.svg';
import avatarGetStarted from '@/public/assets/avatar-get-started.svg';
import avatarGetStartedBg from '@/public/assets/avatar-get-started-bg.svg';
import getStartedEyebrow from '@/public/assets/get-started-eyebrow.svg';
import HowItWorks from '@/components/HowItWorks/HowItWorks';

export default function Home() {
  return (
    <main className='flex flex-col items-center w-full overflow-x-clip'>
      <div className='bg-gradient-to-r w-full from-[#F9F0E5] to-[#E9FEFD]'>
        <Header />
        <section className='flex relative flex-col items-center px-20 justify-center w-full -mt-7'>
          <div className='flex items-center max-w-[1512px] w-full justify-between'>
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
              className='absolute right-0 -top-24'
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
      <section className='flex relative flex-col items-center px-20 justify-center w-full my-14'>
        <TextWithImage
          image={
            <Image
              src={avatarGetStarted.src}
              height={554}
              width={554}
              alt='Avatar with shirts and coins'
              className='z-[1] relative'
            />
          }
          imageBg={
            <Image
              src={avatarGetStartedBg.src}
              height={472}
              width={472}
              alt='Gradient behind avatar'
              className='absolute bottom-10'
            />
          }
          eyebrow={
            <Image
              src={getStartedEyebrow.src}
              height={16.7}
              width={120}
              alt='Wavy accent element'
            />
          }
          title="Let's open your own online store"
          body="With the power of KidCorp's online store creator, you can make your very own e-commerce website! It's like having your own shop, but on the internet. You get to decide what you want to sell and make it all yours with the help of a grown-up."
        />
      </section>
      <section className='flex bg-accent relative flex-col items-center px-20 justify-center w-full py-[112px]'>
        <HowItWorks />

      </section>
    </main>
  );
}
