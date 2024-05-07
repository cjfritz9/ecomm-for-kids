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
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { IoLogoFacebook } from 'react-icons/io';
import PasswordWithMeter from '../PasswordWithMeter/PasswordWithMeter';
import { validateSignup } from '@/lib/utils/auth';
import { FormStatus } from '@/@types/auth';
import { registerUser } from '@/app/api/requests/auth';

const SignupForm: React.FC = () => {
  const [formData, setFormData] = useState({ email: '', password: '', passwordConfirm: '' });
  const [formStatus, setFormStatus] = useState<FormStatus>({ isValid: null, message: '' });

  const handleSubmit = async () => {
    const { success, uiMessage } = validateSignup(formData);

    if (success) {
      const result = await registerUser({ email: formData.email, password: formData.password });

      console.log(result);

      if (result && result.status === 'ok') {
        setFormStatus({ isValid: true, message: uiMessage });
      } else if (result && result.status === 'error') {
        setFormStatus({ isValid: false, message: result.message });
      } else {
        setFormStatus({ isValid: false, message: 'Server Error, try again soon' });
      }
    } else {
      setFormStatus({ isValid: false, message: uiMessage });
    }
  };

  return (
    <Stack w={{ base: '100%', xs: 'fit-content' }}>
      <Title>SiteName</Title>
      <Fieldset legend="Sign Up" w={{ base: '100%', xs: '400px' }}>
        <TextInput
          label="Email"
          placeholder="Email"
          required
          onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
          onFocus={() => setFormStatus({ isValid: null, message: '' })}
        />
        <PasswordWithMeter
          onUpdateFormData={setFormData}
          onUpdateFormStatus={setFormStatus}
          value={formData.password}
        />
        <PasswordInput
          label="Confirm Password"
          placeholder="Re-enter password"
          required
          mt="md"
          onFocus={() => setFormStatus({ isValid: null, message: '' })}
          onChange={(e) => setFormData((prev) => ({ ...prev, passwordConfirm: e.target.value }))}
        />
        <Flex mt="xs">
          <Text size="xs" mr="4px">
            Already have an account?
          </Text>
          <Link href="/login" style={{ fontSize: '12px' }}>
            Log in
          </Link>
        </Flex>
        <Button
          fullWidth
          bg={formStatus.isValid ? 'green.6' : formStatus.isValid === false ? 'red.6' : undefined}
          c={formStatus.isValid !== null ? 'black' : undefined}
          mt="lg"
          disabled={
            formStatus.isValid === false ||
            !formData.email ||
            !formData.password ||
            !formData.passwordConfirm
          }
          onClick={handleSubmit}
        >
          {formStatus.isValid !== null && formStatus.message ? formStatus.message : 'Signup'}
        </Button>
        <Divider my="lg" label="or" />
        <Stack>
          <Button fullWidth p="4" w="100%" display="flex" style={{ border: 0 }}>
            <Box bg="white" h="100%" w="100%" mr="md">
              <FcGoogle style={{ height: '100%', width: '100%' }} />
            </Box>
            <Text>Sign up with Google</Text>
          </Button>
          <Button fullWidth p="0" w="100%" display="flex" style={{ border: 0 }}>
            <Box bg="" h="100%" w="100%" mr="sm">
              <IoLogoFacebook style={{ height: '100%', width: '100%' }} />
            </Box>
            <Text>Sign up with Facebook</Text>
          </Button>
        </Stack>
      </Fieldset>
    </Stack>
  );
};

export default SignupForm;
