import React from 'react';
import { Center } from '@mantine/core';
import { FcGoogle } from 'react-icons/fc';
import { IoLogoFacebook } from 'react-icons/io';
import Link from 'next/link';
import jwt from 'jsonwebtoken';
import { Metadata } from 'next';
import SignupForm from '@/components/Forms/Auth/Signup/SignupForm';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Signup',
};

const SignupPage: React.FC = () => {
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
      <SignupForm />
    </Center>
  );
};

export default SignupPage;
