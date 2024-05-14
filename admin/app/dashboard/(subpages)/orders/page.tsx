import OrdersTable from '@/components/Orders/OrdersTable';
import { Box, Title } from '@mantine/core';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import React from 'react';
import { redirect } from 'next/navigation';

const OrdersPage: React.FC = async () => {
  const token = cookies().get('accessToken');
  if (!token) {
    redirect('/login');
  }
  const decoded = jwt.verify(token.value, process.env.JWT_SECRET!) as {
    userId: string;
    storeId: string;
  };
  const res = await fetch(`http://localhost:3000/api/shopify/orders/store/${decoded.storeId}`);
  const orders = await res.json();
  return (
    <Box p="sm" style={{ overflowY: 'scroll' }}>
      <Title>Orders</Title>
      <OrdersTable data={orders.data} />
    </Box>
  );
};

export default OrdersPage;
