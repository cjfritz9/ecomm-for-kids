import { Center, Loader } from '@mantine/core';
import React from 'react'

const DashboardLoading: React.FC = () => {
  return (
    <Center w='100%' h='400px'>
      <Loader color="gray" type="bars" size="xl" />
    </Center>
  );
}

export default DashboardLoading;