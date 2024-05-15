'use client';

import React, { useContext, useEffect, useState } from 'react';
import { StoreProperties } from '@/@types/context';
import { AuthContext } from './AuthProvider';

interface Props extends React.PropsWithChildren {
  storeDataServer:
    | {
        name: string;
        storeId: string;
        collectionId: string;
      }
    | undefined;
}

const baseContext: StoreProperties = {
  name: null,
  setName: (name) => undefined,
  storeId: null,
  setStoreId: (storeId) => undefined,
  collectionId: null,
  setCollectionId: (collectionId) => undefined,
};

export const StoreContext = React.createContext<StoreProperties>(baseContext);

const StoreProvider: React.FC<Props> = ({ children, storeDataServer }) => {
  const [name, setName] = useState(storeDataServer?.name ?? null);
  const [storeId, setStoreId] = useState(storeDataServer?.storeId ?? null);
  const [collectionId, setCollectionId] = useState(storeDataServer?.collectionId ?? null);
  const { token, isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    if (token && isLoggedIn && (!name || !storeId || !collectionId)) {
    }
  });

  return (
    <StoreContext.Provider
      value={{
        name,
        setName,
        storeId,
        setStoreId,
        collectionId,
        setCollectionId,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
