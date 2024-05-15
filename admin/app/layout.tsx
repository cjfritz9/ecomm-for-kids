import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '../theme';
import { Metadata } from 'next';
import jwt from 'jsonwebtoken';
import Header from '@/components/Header/Header';
import AuthProvider from '@/context/AuthProvider';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import StoreProvider from '@/context/StoreProvider';
import { getServerSideStoreData } from './api/utils';

export const metadata: Metadata = {
  title: {
    template: '%s | E-commerce For Kids',
    default: 'E-commerce For Kids',
  },
  description: '',
};

export default async function RootLayout({ children }: { children: any }) {
  const token = cookies().get('accessToken');
  let decoded: any = null;
  let storeData: any;
  if (token) {
    decoded = jwt.verify(token.value, process.env.JWT_SECRET!);
  }

  if (decoded) {
    const storeDataRes = await getServerSideStoreData(decoded.userId);
    if (storeDataRes) {
      storeData = storeDataRes;
    }
  }

  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <AuthProvider token={decoded}>
            <StoreProvider storeDataServer={storeData}>
              <Header />
              {children}
            </StoreProvider>
          </AuthProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
