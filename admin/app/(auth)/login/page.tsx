import React from 'react';

import { Metadata } from 'next';
import { Center } from '@mantine/core';
import LoginForm from '@/components/Forms/Auth/Login/LoginForm';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken'
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Login',
};

const LoginPage: React.FC = () => {
  const token = cookies().get('accessToken');
  let decoded = null;
  if (token) {
    decoded = jwt.verify(token.value, process.env.JWT_SECRET!);
  }
  if (decoded) {
    redirect('/dashboard')
  }
  return (
    <Center h="100dvh" w="100dvw" px="1rem">
      <LoginForm />
    </Center>
  );
};

export default LoginPage;
