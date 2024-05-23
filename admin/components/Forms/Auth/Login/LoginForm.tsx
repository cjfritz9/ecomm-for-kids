'use client';

import React, { useContext, useState } from 'react';
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
import { loginUser, registerUser } from '@/app/api/requests/auth';
import { useRouter } from 'next/navigation';
import { AuthContext } from '@/context/AuthProvider';
import { StoreContext } from '@/context/StoreProvider';

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [formStatus, setFormStatus] = useState<FormStatus>({ isValid: null, message: '' });
  const { setIsLoggedIn, setToken } = useContext(AuthContext);
  const { setName, setStoreId, setCollectionId } = useContext(StoreContext);

  const router = useRouter();

  const handleSubmit = async () => {
    const result = await loginUser({ email: formData.email, password: formData.password });
    if (result && result.status === 'ok') {
      setFormStatus({ isValid: true, message: 'Success' });
      setIsLoggedIn(true);
      setToken(result.data.token);
      setName(result.data.store.name)
      setStoreId(result.data.store.id)
      setCollectionId(result.data.store.collectionId)
      setTimeout(() => {
        router.push('/dashboard');
      }, 1000);
    } else if (result && result.status === 'error') {
      setFormStatus({ isValid: false, message: result.message });
    } else {
      setFormStatus({ isValid: false, message: 'Server Error, try again soon' });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div>
      <Stack
        w={{ base: '100%', xs: 'fit-content' }}
        style={{ opacity: formStatus.isValid ? 0 : 1, transition: 'opacity 1s ease' }}
      >
        <Title>KidCorp</Title>
        <Fieldset legend="Login" w={{ base: '100%', xs: '400px' }}>
          <TextInput
            label="Email"
            placeholder="Email"
            required
            autoComplete="username"
            onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
            onFocus={() => setFormStatus({ isValid: null, message: '' })}
          />
          <PasswordInput
            label="Password"
            placeholder="Password"
            required
            mt="md"
            autoComplete="current-password"
            onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
            onKeyDown={handleKeyDown}
            onFocus={() => setFormStatus({ isValid: null, message: '' })}
          />
          <Flex mt="xs">
            <Text size="xs" mr="4px">
              Don't have an account?
            </Text>
            <Link href="/signup" style={{ fontSize: '12px' }}>
              Sign up
            </Link>
          </Flex>
          <Button
            fullWidth
            bg={formStatus.isValid ? 'green.6' : formStatus.isValid === false ? 'red.6' : undefined}
            c={formStatus.isValid !== null ? 'black' : undefined}
            mt="lg"
            disabled={formStatus.isValid === false || !formData.email || !formData.password}
            onClick={handleSubmit}
          >
            {formStatus.isValid !== null && formStatus.message ? formStatus.message : 'Login'}
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
