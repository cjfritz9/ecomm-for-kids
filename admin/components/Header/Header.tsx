'use client';

import { Container, Group, Burger, Text, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Header.module.css';

const Header: React.FC = () => {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <header className={classes.header}>
      <Container size="100%" className={classes.inner}>
        <Text>LOGO</Text>

        <Group justify="center" visibleFrom="xs">
          <Button variant="default">Log in</Button>
          <Button>Sign up</Button>
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
};

export default Header;
