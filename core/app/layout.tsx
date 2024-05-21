import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header/Header';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '900'],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title:
    'KidCorp - Create Your Own Online Store | Fun & Educational E-Commerce for Kids',
  description:
    'KidCorp empowers kids aged 7+ to start their own online store with ease. Answer a few questions to generate a store with automated product sourcing, order fulfillment, a custom logo, and more. Learn about business while having fun with our playful mascot guiding you every step of the way. Get started today!'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}
