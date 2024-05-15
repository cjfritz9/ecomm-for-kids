import React from 'react';
import { Card, Image, Text, Group, Badge, Button, Stack, Skeleton } from '@mantine/core';
import classes from './ProductCard.module.css';

const LoadingCard: React.FC = () => {
  return (
    <Skeleton className={classes.card}>
      <Card withBorder radius="md" className={classes.card}>
        <Card.Section className={classes.imageSection}></Card.Section>

        <Group justify="space-between" mt="md" className={classes.titleSection}>
          <div>
            <Text fw={500}>Lorem ipsum dolor sit amet consectetur</Text>
          </div>
          <Badge variant="outline">ACTIVE</Badge>
        </Group>

        <Card.Section className={classes.section} mt="md">
          <Group gap={32} mb={-8}>
            <Stack className={classes.productInfo}>
              <Text fz="sm" c="dimmed" className={classes.label}>
                Price Range
              </Text>
              $151
            </Stack>
            <Stack className={classes.productInfo}>
              <Text fz="sm" c="dimmed" className={classes.label}>
                Variants
              </Text>
              100
            </Stack>
            <Stack className={classes.productInfo}>
              <Text fz="sm" c="dimmed" className={classes.label}>
                Stock
              </Text>
              151
            </Stack>
          </Group>
        </Card.Section>

        <Card.Section className={classes.section}>
          <Group gap={30}>
            <Button radius="xl" style={{ flex: 1 }}>
              More Details
            </Button>
          </Group>
        </Card.Section>
      </Card>
    </Skeleton>
  );
};

export default LoadingCard;
