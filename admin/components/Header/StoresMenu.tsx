import { AuthContext } from '@/context/AuthProvider';
import { Menu, Button, Loader } from '@mantine/core';
import { useContext, useEffect, useState } from 'react';

const StoresMenu: React.FC = () => {
  const [stores, setStores] = useState([]);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    if (token.userId) {
      (async () => {
        const res = await fetch(`/api/stores/users/${token.userId}`);
        const userStores = await res.json();

        if (userStores && userStores.statusMessage === 'ok' && Array.isArray(userStores.data)) {
          setStores(userStores.data);
        }
      })();
    }
  }, [token.userId]);

  const [activeStore, ...otherStores] = stores as any[];

  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Button>
          {activeStore ? activeStore.name : <Loader size={24} color="white" type="dots" />}
        </Button>
      </Menu.Target>

      {otherStores.length > 0 && (
        <Menu.Dropdown>
          {otherStores.map((store) => (
            <Menu.Item key={store.id}>{store.name}</Menu.Item>
          ))}
        </Menu.Dropdown>
      )}
    </Menu>
  );
};

export default StoresMenu;
