import React from 'react';

import { Metadata } from 'next';
import { Center } from '@mantine/core';
import LoginForm from '@/components/Forms/Login/LoginForm';

export const metadata: Metadata = {
  title: 'Login',
};

const LoginPage: React.FC = () => {
  return (
    <Center h="100dvh" w="100dvw" px="1rem">
      <LoginForm />
    </Center>
  );
};

export default LoginPage;
