import React from 'react';
import {
  Box,
  Button,
  Center,
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

const SignupPage: React.FC = () => {
  return (
    <Center h="100dvh" w="100dvw" px="1rem">
      <Stack w={{ base: '100%', xs: 'fit-content' }}>
        <Title>SiteName</Title>
        <Fieldset legend="Signup" w={{ base: '100%', xs: '400px' }} bg="gray.1">
          <TextInput label="Email" placeholder="Email" required />
          <PasswordInput label="Password" placeholder="Password" required mt="md" />
          <Flex mt="xs">
            <Text size="xs" mr="4px">
              Already have an account?
            </Text>
            <Link href="/login" style={{ fontSize: '12px' }}>
              Log in
            </Link>
          </Flex>
          <Button fullWidth mt="lg">
            Signup
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
    </Center>
  );
};

export default SignupPage;
