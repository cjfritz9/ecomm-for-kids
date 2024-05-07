import React from 'react';
import { Center } from '@mantine/core';
import { FcGoogle } from 'react-icons/fc';
import { IoLogoFacebook } from 'react-icons/io';
import Link from 'next/link';
import { Metadata } from 'next';
import SignupForm from '@/components/Forms/Signup/SignupForm';

export const metadata: Metadata = {
  title: 'Signup',
};

const SignupPage: React.FC = () => {
  return (
    <Center h="100dvh" w="100dvw" px="1rem">
      <SignupForm />
    </Center>
  );
};

export default SignupPage;
