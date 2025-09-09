import { createColumnHelper, getCoreRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table';
import styled from 'styled-components';
import { useState } from 'react';

import { TanstackTable, type MetaRowProps } from '#examples/-helpers/tanstackTable/Table';

interface Person extends MetaRowProps<Person> {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
}

const defaultData: Person[] = [
  {
    firstName: 'tanner',
    lastName: 'linsley',
    age: 24,
    visits: 100,
    status: 'hover',
    progress: 50,
    meta: { hover: true },
  },
  {
    firstName: 'tandy',
    lastName: 'miller',
    age: 40,
    visits: 40,
    status: 'disabled',
    progress: 80,
    meta: { disabled: true },
  },
  {
    firstName: 'joe',
    lastName: 'dirte',
    age: 45,
    visits: 20,
    status: 'success',
    progress: 10,
    meta: { status: 'success' },
  },
  {
    firstName: 'joe',
    lastName: 'dirte',
    age: 45,
    visits: 20,
    status: 'error',
    progress: 10,
    meta: { status: 'error' },
  },
  {
    firstName: 'joe',
    lastName: 'dirte',
    age: 45,
    visits: 20,
    status: 'Attention/Attention 20',
    progress: 10,
    meta: { status: 'Attention/Attention 20' },
  },
  {
    firstName: 'joe',
    lastName: 'dirte',
    age: 45,
    visits: 20,
    status: '#D4BBFF',
    progress: 10,
    meta: { status: '#D4BBFF' },
  },
];

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  overflow: hidden;
  background: var(--admiral-color-Neutral_Neutral00, ${(p) => p.theme.color['Neutral/Neutral 00']});
`;

export const RowState = () => {
  const [data, _setData] = useState(() => [...defaultData]);

  const columnHelper = createColumnHelper<Person>();

  const columns = [
    columnHelper.accessor('firstName', {
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
      header: 'firstName',
    }),
    columnHelper.accessor((row) => row.lastName, {
      id: 'lastName',
      cell: (info) => <i>{info.getValue()}</i>,
      header: 'Last Name',
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor('age', {
      header: 'Age',
      cell: (info) => info.renderValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor('visits', {
      header: 'Visits',
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor('status', {
      header: 'Status',
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor('progress', {
      header: 'Profile Progress',
      footer: (info) => info.column.id,
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <Wrapper>
      <TanstackTable table={table} />
    </Wrapper>
  );
};
