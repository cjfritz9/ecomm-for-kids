import OrdersTable from '@/components/Orders/OrdersTable';
import { Alert, Box, Text, Title } from '@mantine/core';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import React from 'react';
import { redirect } from 'next/navigation';
import CustomersTable from '@/components/Customers/CustomersTable';
import { getUserTokenData } from '@/lib/utils/cookies';
import config from '@/lib/utils/config';
import { IconInfoCircle } from '@tabler/icons-react';

const CustomersPage: React.FC = async () => {
  const token = getUserTokenData();
  if (!token) {
    redirect('/login');
  }
  const res = await fetch(`${config.baseUrl}/shopify/customers/store/${token.storeId}`);
  const result = await res.json();

  return (
    <Box p="sm" style={{ overflowY: 'scroll' }}>
      <Alert variant="light" title='Coming soon' color="blue" icon={<IconInfoCircle />}>
         The interface will be cleaned up and each customer will be clickable to view/edit their information
      </Alert>
      <Title>Customers</Title>

      <CustomersTable data={result.data.customers} />
    </Box>
  );
};

export default CustomersPage;
