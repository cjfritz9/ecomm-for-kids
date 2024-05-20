'use client';
import { useRouter } from 'next/navigation';
import classes from './Navbar.module.css';

import React, { useContext, useState } from 'react';
import { IconLogout } from '@tabler/icons-react';
import { Center, Loader } from '@mantine/core';
import { AuthContext } from '@/context/AuthProvider';

const LogoutButton: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { reset: authReset } = useContext(AuthContext);
  const router = useRouter();

  const handleLogout = async () => {
    setLoading(true);
    await fetch('/api/logout', {
      method: 'POST',
    });
    authReset();
    router.push('/login');
    setLoading(false);
  };
  return (
    <a href="#" className={classes.link} onClick={handleLogout}>
      {loading ? (
        <>
          <Loader color="blue" size="sm" className={classes.linkIcon} />
          <span className={classes.linkLabel}>Logging you out</span>
        </>
      ) : (
        <>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span className={classes.linkLabel}>Logout</span>
        </>
      )}
    </a>
  );
};

export default LogoutButton;
