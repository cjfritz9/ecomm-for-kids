import React, { PropsWithChildren } from 'react';
import { Box } from '@mantine/core';
import Navbar from '@/components/Navbar/Navbar';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

const DashboardLayout: React.FC<PropsWithChildren> = ({ children }) => {
  // const headersList = headers();
  // const referer = headersList.get('referer');

  
  // if (referer !== null && !referer.includes('localhost:3001')) {
  //   redirect('/confirm-login');
  // }

  return (
    <Box display="flex">
      <Navbar />
      {children}
    </Box>
  );
};

export default DashboardLayout;
