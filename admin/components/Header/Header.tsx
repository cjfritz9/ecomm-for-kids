'use client';

import { Container, Group, Burger, Text, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Header.module.css';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '@/context/AuthProvider';
import StoresMenu from './StoresMenu';

const Header: React.FC = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <header className={classes.header}>
      <Container size="100%" className={classes.inner}>
        <Text>LOGO</Text>
        {isLoggedIn === true ? (
          <StoresMenu />
        ) : (
          <Group justify="center" visibleFrom="xs">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>
        )}

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
};

export default Header;
