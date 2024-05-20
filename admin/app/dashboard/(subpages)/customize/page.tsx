import { Stack, Title } from '@mantine/core';
import Link from 'next/link';
import React from 'react';

const CustomizePage: React.FC = async () => {
  return (
    <Stack w="100%" p="sm">
      <Title>Customize (Advanced Section for older kiddos & more curious minds)</Title>
      <Stack>
        <Title order={2}>This area will contain some customization options</Title>
        <p>
          This will be a place they can experiment with different theme colors, change the logo,
          store name, etc.
        </p>
        <p>
          In the future it would be a fun idea to integrate{' '}
          <Link href="https://www.builder.io">Builder.io</Link>
        </p>
        <p>
          Depending on the complexities when I get to this stage of making the generated stores &
          themes, I will be trying to build that system with Builder.io from the start. Depending on
          whether it seems like a good idea or not, we can then expose the ability to make those
          kinds of theme design capabilities to the kids in this section.
        </p>
      </Stack>
    </Stack>
  );
};

export default CustomizePage;
