'use client';

import React, { useEffect, useState } from 'react';
import { Accordion, Button, Container } from '@mantine/core';
import {
  IconLogout,
  IconHome,
  IconInbox,
  IconTags,
  IconFriends,
  IconPaint,
  IconGraph,
  IconClick,
  IconSettings,
} from '@tabler/icons-react';
import classes from './Navbar.module.css';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import LogoutButton from './LogoutButton';

const defaultLinks = [
  { link: '/', label: 'Home', icon: IconHome },
  { link: '/orders', label: 'Orders', icon: IconInbox },
  { link: '/products', label: 'Products', icon: IconTags },
  { link: '/customers', label: 'Customers', icon: IconFriends },
];

const advancedLinks = [
  { link: '/stats', label: 'Stats', icon: IconGraph },
  { link: '/marketing', label: 'Marketing', icon: IconClick },
  { link: '/customize', label: 'Customize', icon: IconPaint },
];

const Navbar: React.FC = () => {
  const [active, setActive] = useState('');
  const [accordionValue, setAccordionValue] = useState('');
  const pathname = usePathname();
  const router = useRouter();

  const handleAdvancedClick = () => {
    setAccordionValue((prev) => (prev === '' ? 'advanced' : ''));
  };

  const links = defaultLinks.map((item) => (
    <Link
      className={classes.link}
      data-active={item.label === active || undefined}
      href={'/dashboard' + item.link}
      key={item.label}
      onClick={() => setActive(item.label)}
      prefetch={false}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span className={classes.linkLabel}>{item.label}</span>
    </Link>
  ));

  const advLinks = advancedLinks.map((item) => (
    <Link
      className={classes.link}
      data-active={item.label === active || undefined}
      href={'/dashboard' + item.link}
      key={item.label}
      onClick={() => setActive(item.label)}
      prefetch={false}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span className={classes.linkLabel}>{item.label}</span>
    </Link>
  ));

  useEffect(() => {
    if (pathname === '/dashboard' || pathname === '/') {
      setActive('Home');
    } else {
      [...defaultLinks, ...advancedLinks].map((item) => {
        if (pathname.includes(item.label.toLowerCase())) {
          setActive(item.label);
        }
      });
    }

    if (
      pathname.includes('stats') ||
      pathname.includes('customize') ||
      pathname.includes('marketing')
    ) {
      setAccordionValue('advanced');
    }
  }, [pathname]);

  return (
    <Container className={classes.navContainer}>
      <nav className={classes.navbar}>
        <div className={classes.navbarMain}>
          {links}
          <Accordion
            value={accordionValue}
            defaultValue=""
            styles={{
              root: { marginTop: '1rem' },
              item: { border: '0px' },
              content: { padding: 0 },
            }}
          >
            <Accordion.Item value="advanced">
              <Accordion.Control onClick={handleAdvancedClick}>Advanced</Accordion.Control>
              <Accordion.Panel>{advLinks}</Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </div>

        <div className={classes.footer}>
          <a href="/dashboard/settings" className={classes.link}>
            <IconSettings className={classes.linkIcon} stroke={1.5} />
            <span className={classes.linkLabel}>Settings</span>
          </a>

          <LogoutButton />
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
