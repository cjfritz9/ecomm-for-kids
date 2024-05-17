'use client';

import { useState } from 'react';
import {
  Table,
  ScrollArea,
  UnstyledButton,
  Group,
  Text,
  Center,
  TextInput,
  rem,
  keys,
  Box,
} from '@mantine/core';
import { IconSelector, IconChevronDown, IconChevronUp, IconSearch } from '@tabler/icons-react';
import { MdVerified } from "react-icons/md";
import classes from './CustomersTable.module.css';
import { RowData } from '@/@types/customers';

interface Props {
  data: RowData[];
}

interface ThProps {
  children: React.ReactNode;
  reversed: boolean;
  sorted: boolean;
  onSort(): void;
  setWidth?: number;
}

function Th({ children, reversed, sorted, onSort, setWidth }: ThProps) {
  const Icon = sorted ? (reversed ? IconChevronUp : IconChevronDown) : IconSelector;
  return (
    <Table.Th className={classes.th} style={setWidth ? { width: setWidth} : {}}>
      <UnstyledButton onClick={onSort} className={classes.control}>
        <Group justify="space-between">
          <Text fw={500} fz="sm">
            {children}
          </Text>
          <Center className={classes.icon}>
            <Icon style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
          </Center>
        </Group>
      </UnstyledButton>
    </Table.Th>
  );
}

function filterData(data: RowData[], search: string) {
  const query = search.toLowerCase().trim();
  return data.filter((item) =>
    keys(data[0]).some((key) => item[key].toLowerCase().includes(query))
  );
}

function sortData(
  data: RowData[],
  payload: { sortBy: keyof RowData | null; reversed: boolean; search: string }
) {
  const { sortBy } = payload;

  if (!sortBy) {
    return filterData(data, payload.search);
  }

  return filterData(
    [...data].sort((a, b) => {
      if (payload.reversed) {
        return b[sortBy].localeCompare(a[sortBy]);
      }

      return a[sortBy].localeCompare(b[sortBy]);
    }),
    payload.search
  );
}

const CustomersTable: React.FC<Props> = ({ data }) => {
  const [search, setSearch] = useState('');
  const [sortedData, setSortedData] = useState(data);
  const [sortBy, setSortBy] = useState<keyof RowData | null>(null);
  const [reverseSortDirection, setReverseSortDirection] = useState(false);

  const setSorting = (field: keyof RowData) => {
    const reversed = field === sortBy ? !reverseSortDirection : false;
    setReverseSortDirection(reversed);
    setSortBy(field);
    setSortedData(sortData(data, { sortBy: field, reversed, search }));
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setSearch(value);
    setSortedData(sortData(data, { sortBy, reversed: reverseSortDirection, search: value }));
  };

  const rows = sortedData.map((row, i) => (
    <Table.Tr key={i}>
      <Table.Td>{row.displayName}</Table.Td>
      <Table.Td>{row.createdAt}</Table.Td>
      <Table.Td>{row.numberOfOrders}</Table.Td>
      <Table.Td>{row.subscriptionState}</Table.Td>
      <Table.Td>{row.verifiedEmail ? <MdVerified size={20} color='var(--mantine-primary-color-filled)' /> : null}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Box>
      <TextInput
        placeholder="Search by any field"
        my="md"
        leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
        value={search}
        onChange={handleSearchChange}
      />
      <ScrollArea type="auto" styles={{ scrollbar: { margin: '0px 8px' } }}>
        <Box className={classes.container}>
          <Table
            horizontalSpacing="md"
            verticalSpacing="md"
            layout="fixed"
            miw={800}
            style={{ overflow: 'scroll' }}
          >
            <Table.Tbody>
              <Table.Tr bg="gray.1">
                <Th
                  sorted={sortBy === 'displayName'}
                  reversed={reverseSortDirection}
                  onSort={() => setSorting('displayName')}
                >
                  Customer
                </Th>
                <Th
                  sorted={sortBy === 'createdAt'}
                  reversed={reverseSortDirection}
                  onSort={() => setSorting('createdAt')}
                >
                  Date Joined
                </Th>
                <Th
                  sorted={sortBy === 'numberOfOrders'}
                  reversed={reverseSortDirection}
                  onSort={() => setSorting('numberOfOrders')}
                >
                  Total Orders
                </Th>
                <Th
                  sorted={sortBy === 'subscriptionState'}
                  reversed={reverseSortDirection}
                  onSort={() => setSorting('subscriptionState')}
                >
                  Subscription Status
                </Th>
                <Th
                  sorted={sortBy === 'verifiedEmail'}
                  reversed={reverseSortDirection}
                  onSort={() => setSorting('verifiedEmail')}
                  setWidth={160}
                >
                  Verified Email
                </Th>
              </Table.Tr>
            </Table.Tbody>
            <Table.Tbody>
              {rows.length > 0 ? (
                rows
              ) : (
                <Table.Tr>
                  <Table.Td>
                    <Text fw={500} ta="center">
                      Nothing found
                    </Text>
                  </Table.Td>
                </Table.Tr>
              )}
            </Table.Tbody>
          </Table>
        </Box>
      </ScrollArea>
    </Box>
  );
};

export default CustomersTable;
