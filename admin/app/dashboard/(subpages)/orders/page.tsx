import OrdersTable from '@/components/Orders/OrdersTable';
import { Box, Title } from '@mantine/core';
import React from 'react';

const OrdersPage: React.FC = () => {
  return (
    <Box p="sm" style={{overflowY: 'scroll'}}>
      <Title>Orders</Title>
      <OrdersTable
        data={[
          { email: 'test@test.com', company: 'The Company', name: 'Greg Abbot' },
          { email: 'test2@test.com', company: 'A Company', name: 'Rod Long' },
        ]}
      />
    </Box>
  );
};

export default OrdersPage;
