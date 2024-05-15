import React from 'react';
import { Card, Image, Text, Group, Badge, Button, Stack } from '@mantine/core';
import classes from './ProductCard.module.css';

interface Props {
  title: string;
  priceRange: {
    min: string;
    max: string;
  };
  status: string;
  totalInventory: number;
  variantsCount: {
    count: number;
    precision: string;
  };
  image: {
    url: string;
    altText: string;
  };
}

const ProductCard: React.FC<Props> = ({
  title,
  priceRange,
  status,
  totalInventory,
  variantsCount,
  image,
}) => {
  const price =
    priceRange.min === priceRange.max
      ? `$${priceRange.min.replace('.0', '')}`
      : `$${priceRange.min.replace('.0', '')}-$${priceRange.max.replace('.0', '')}`;
  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section className={classes.imageSection}>
        <Image
          src={image.url}
          alt={image.altText}
          height={240}
          width={300}
          className={classes.coverImage}
        />
      </Card.Section>

      <Group justify="space-between" mt="md" className={classes.titleSection}>
        <div>
          <Text fw={500}>{title.length > 60 ? title.slice(0, 57) + '...' : title}</Text>
        </div>
        <Badge variant="outline" color={status === 'ACTIVE' ? 'green.7' : 'red.7'}>
          {status}
        </Badge>
      </Group>

      <Card.Section className={classes.section} mt="md">
        <Group gap={20} mb={-8}>
          <Stack className={classes.productInfo}>
            <Text fz="sm" c="dimmed" className={classes.label}>
              {price.includes('-') ? 'Price Range' : 'Price'}
            </Text>

            {price}
          </Stack>
          <Stack className={classes.productInfo}>
            <Text fz="sm" c="dimmed" className={classes.label}>
              Variants
            </Text>
            {variantsCount.precision !== 'EXACT' && '~'}
            {variantsCount.count}
          </Stack>
          <Stack className={classes.productInfo}>
            <Text fz="sm" c="dimmed" className={classes.label}>
              Stock
            </Text>
            {totalInventory}
          </Stack>
        </Group>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Group gap={30}>
          {/* <div>
            <Text fz="xl" fw={700} style={{ lineHeight: 1 }}>
              {totalInventory}
            </Text>
            <Text fz="sm" c="dimmed" fw={500} style={{ lineHeight: 1 }} mt={3}>
              in stock
            </Text>
          </div> */}

          <Button radius="xl" style={{ flex: 1 }}>
            More Details
          </Button>
        </Group>
      </Card.Section>
    </Card>
  );
};

export default ProductCard;
