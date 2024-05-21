import OrdersTable from '@/components/Orders/OrdersTable';
import { Alert, Box, Text, Title } from '@mantine/core';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import React from 'react';
import { redirect } from 'next/navigation';
import config from '@/lib/utils/config';
import { IconInfoCircle } from '@tabler/icons-react';

const OrdersPage: React.FC = async () => {
  const token = cookies().get('accessToken');
  if (!token) {
    redirect('/login');
  }
  const decoded = jwt.verify(token.value, process.env.JWT_SECRET!) as {
    userId: string;
    storeId: string;
  };
  const res = await fetch(`${config.baseUrl}/shopify/orders/store/${decoded.storeId}`);
  const orders = await res.json();
  return (
    <Box p="sm" style={{ overflowY: 'scroll' }}>
      <Alert variant="light" title="Coming soon" color="blue" icon={<IconInfoCircle />}>
        The interface will be cleaned up and each order will be clickable to view/edit its
        information
      </Alert>
      <Title>Orders</Title>
      <OrdersTable data={orders.data} />
    </Box>
  );
};

export default OrdersPage;
