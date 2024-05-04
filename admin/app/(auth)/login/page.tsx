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

const LoginPage: React.FC = () => {
  return (
    <Center h="100dvh" w="100dvw" px="1rem">
      <Stack w={{ base: '100%', xs: 'fit-content' }}>
        <Title>SiteName</Title>
        <Fieldset legend="Login" w={{ base: '100%', xs: '400px' }} bg="gray.1">
          <TextInput label="Email" placeholder="Email" required />
          <PasswordInput label="Password" placeholder="Password" required mt="md" />
          <Flex mt="xs">
            <Text size="xs" mr="4px">
              Don't have an account?
            </Text>
            <Link href="/signup" style={{ fontSize: '12px' }}>
              Sign up
            </Link>
          </Flex>
          <Button fullWidth mt="lg">
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
    </Center>
  );
};

export default LoginPage;
