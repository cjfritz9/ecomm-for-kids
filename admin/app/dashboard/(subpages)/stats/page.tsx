import { Center, Stack, Title } from '@mantine/core';
import React from 'react';

const AnalyticsPage: React.FC = async () => {
  return (
    <Stack w="100%" p="sm">
      <Title>Stats (Advanced Section for older kiddos & more curious minds) </Title>

      <Stack>
        <Title order={2}>This area will contain more in-depth stats</Title>
        <p>
          Being a part of the "advanced" pages I am thinking about adding some graphs, charts, etc.
        </p>
        <p>Another feature I've been experimenting with is generating a variety of reports on-demand.</p>
        <p>The user could fill out a fairly simple form, such as selecting from recent orders, within the date range of today and one month ago. The report would begin to generate and when available it could show a display or possibly be a download.</p>
        <p>They could do a variety of things with different data, such as generate the orders from a specific customer within a date range, etc.</p>
        <p>The ideas go on. I want it to remain fairly simple but be a bit more on the advanced side to add more learning opportunities to this part of the application.</p>
      </Stack>
    </Stack>
  );
};

export default AnalyticsPage;
