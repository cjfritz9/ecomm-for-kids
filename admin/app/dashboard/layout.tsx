import React, { PropsWithChildren } from 'react';
import { Box } from '@mantine/core';
import Navbar from '@/components/Navbar/Navbar';

const DashboardLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box display="flex">
      <Navbar />
      {children}
    </Box>
  );
};

export default DashboardLayout;
