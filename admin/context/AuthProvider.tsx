'use client';

import React, { useEffect, useState } from 'react';
import { AuthProperties } from '@/@types/context';

interface Props extends React.PropsWithChildren {
  token: any | null;
}

const baseContext: AuthProperties = {
  email: '',
  setEmail: (email) => undefined,
  token: '',
  setToken: (token) => undefined,
  isLoggedIn: false,
  setIsLoggedIn: (bool) => undefined,
};

export const AuthContext = React.createContext<AuthProperties>(baseContext);

const AuthProvider: React.FC<Props> = ({ token: existingToken, children }) => {
  console.log({ existingToken });
  const [email, setEmail] = useState(baseContext.email);
  const [token, setToken] = useState(existingToken ?? baseContext.token);
  const [isLoggedIn, setIsLoggedIn] = useState(baseContext.isLoggedIn);

  useEffect(() => {
    if (existingToken) {
      setIsLoggedIn(true);
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        email,
        setEmail,
        token,
        setToken,
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
