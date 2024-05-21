import OrdersTable from '@/components/Orders/OrdersTable';
import { Box, Title } from '@mantine/core';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import React from 'react';
import { redirect } from 'next/navigation';
import CustomersTable from '@/components/Customers/CustomersTable';
import { getUserTokenData } from '@/lib/utils/cookies';

const CustomersPage: React.FC = async () => {
  const token = getUserTokenData();
  if (!token) {
    redirect('/login');
  }
  const res = await fetch(`http://localhost:3001/api/shopify/customers/store/${token.storeId}`);
  const result = await res.json();

  return (
    <Box p="sm" style={{ overflowY: 'scroll' }}>
      <Title>Customers</Title>
      <CustomersTable data={result.data.customers} />
    </Box>
  );
};

export default CustomersPage;
