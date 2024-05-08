import Navbar from '@/components/Navbar/Navbar';
import { Box } from '@mantine/core';
import React, { PropsWithChildren } from 'react';

const DashboardLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box display="flex">
      <Navbar />
      {children}
    </Box>
  );
};

export default DashboardLayout;
