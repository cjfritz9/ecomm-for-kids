import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '../theme';
import { Metadata } from 'next';
import jwt from 'jsonwebtoken';
import Header from '@/components/Header/Header';
import AuthProvider from '@/context/AuthProvider';
import { cookies, headers } from 'next/headers';
import { redirect } from 'next/navigation';
import StoreProvider from '@/context/StoreProvider';
import { getServerSideStoreData } from './api/utils';
import { getUserTokenData } from '@/lib/utils/cookies';

export const metadata: Metadata = {
  title: {
    template: '%s | E-commerce For Kids',
    default: 'E-commerce For Kids',
  },
  description: '',
};

export default async function RootLayout({ children }: { children: any }) {
  const token = getUserTokenData();
  let storeData: any;

  if (token) {
    const storeDataRes = await getServerSideStoreData(token.userId);
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
          <AuthProvider token={token}>
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
