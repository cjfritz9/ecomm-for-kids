import { Stack, Title } from '@mantine/core';
import React from 'react';

const MarketingPage: React.FC = async () => {
  return (
    <Stack w="100%" p="sm">
      <Title>Marketing (Advanced Section for older kiddos & more curious minds)</Title>
      <Stack>
        <Title order={2}>This area will contain some marketing tools</Title>
        <p>I've got to experiment with various ideas for marketing tools and campaigns.</p>
        <p>For now I am considering just adding some generic campaigns that can be turned on or off.</p>
        <p></p>
      </Stack>
    </Stack>
  );
};

export default MarketingPage;
