import { Center, Stack, Title } from '@mantine/core';
import React from 'react'

const Home: React.FC = () => {
  return (
    <Stack w='100%' p='sm'>
      <Title>Home</Title>
        <Stack>
          <Title order={2}>This area will contain quick bits of information about the store</Title>
          <p>Recent orders, easy to understand stats, insights, recommendations, etc.</p>
          <p>In general it will be kept very simple. Like the Shopify Admin Home but with a lot less going on.</p>
        </Stack>
    </Stack>
  );
}

export default Home;