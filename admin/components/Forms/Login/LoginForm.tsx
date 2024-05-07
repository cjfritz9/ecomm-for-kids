'use client';

import React, { useState } from 'react';
import {
  Box,
  Button,
  Divider,
  Fieldset,
  Flex,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import { FcGoogle } from 'react-icons/fc';
import { IoLogoFacebook } from 'react-icons/io';
import Link from 'next/link';
import { FormStatus } from '@/@types/auth';
import { validateLogin } from '@/lib/utils/auth';

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [formStatus, setFormStatus] = useState<FormStatus>({ isValid: null, message: '' });

  const handleSubmit = async () => {
    
  };

  return (
    <div>
      <Stack w={{ base: '100%', xs: 'fit-content' }}>
        <Title>SiteName</Title>
        <Fieldset legend="Login" w={{ base: '100%', xs: '400px' }}>
          <TextInput
            label="Email"
            placeholder="Email"
            required
            onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
          />
          <PasswordInput
            label="Password"
            placeholder="Password"
            required
            mt="md"
            onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
          />
          <Flex mt="xs">
            <Text size="xs" mr="4px">
              Don't have an account?
            </Text>
            <Link href="/signup" style={{ fontSize: '12px' }}>
              Sign up
            </Link>
          </Flex>
          <Button fullWidth mt="lg" disabled={!formData.email || !formData.password} onClick={handleSubmit}>
            Login
          </Button>
          <Divider my="lg" label="or" />
          <Stack>
            <Button fullWidth p="4" w="100%" display="flex" style={{ border: 0 }}>
              <Box bg="white" h="100%" w="100%" mr="md">
                <FcGoogle style={{ height: '100%', width: '100%' }} />
              </Box>
              <Text>Log in with Google</Text>
            </Button>
            <Button fullWidth p="0" w="100%" display="flex" style={{ border: 0 }}>
              <Box bg="" h="100%" w="100%" mr="sm">
                <IoLogoFacebook style={{ height: '100%', width: '100%' }} />
              </Box>
              <Text>Log in with Facebook</Text>
            </Button>
          </Stack>
        </Fieldset>
      </Stack>
    </div>
  );
};

export default LoginForm;
