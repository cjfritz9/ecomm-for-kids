'use client';

import React, { useEffect, useState } from 'react';
import { Container } from '@mantine/core';
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

const data = [
  { link: '/', label: 'Home', icon: IconHome },
  { link: '/orders', label: 'Orders', icon: IconInbox },
  { link: '/products', label: 'Products', icon: IconTags },
  { link: '/customers', label: 'Customers', icon: IconFriends },
  { link: '/analytics', label: 'Analytics', icon: IconGraph },
  { link: '/customize', label: 'Customize', icon: IconPaint },
  { link: '/marketing', label: 'Marketing', icon: IconClick },
];

const Navbar: React.FC = () => {
  const [active, setActive] = useState('');
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    const res = await fetch('/api/logout', {
      method: 'POST'
    });

    const result = await res.json();

    router.push('/login');
  };

  const links = data.map((item) => (
    <Link
      className={classes.link}
      data-active={item.label === active || undefined}
      href={'/dashboard' + item.link}
      key={item.label}
      onClick={() => setActive(item.label)}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span className={classes.linkLabel}>{item.label}</span>
    </Link>
  ));

  useEffect(() => {
    if (pathname === '/dashboard') {
      setActive('Home');
    } else {
      data.map((item) => {
        if (pathname.includes(item.label.toLowerCase())) {
          setActive(item.label);
        }
      });
    }
  }, [pathname]);

  return (
    <Container className={classes.navContainer}>
      <nav className={classes.navbar}>
        <div className={classes.navbarMain}>{links}</div>

        <div className={classes.footer}>
          <a href="/dashboard/settings" className={classes.link}>
            <IconSettings className={classes.linkIcon} stroke={1.5} />
            <span className={classes.linkLabel}>Settings</span>
          </a>

          <a href="#" className={classes.link} onClick={handleLogout}>
            <IconLogout className={classes.linkIcon} stroke={1.5} />
            <span className={classes.linkLabel}>Logout</span>
          </a>
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
