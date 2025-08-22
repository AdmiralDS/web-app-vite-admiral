import { createColumnHelper, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import styled from 'styled-components';
import { useState } from 'react';

import { TanstackTable } from '#examples/-helpers/tanstackTable/Table';

type Person = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
};

const defaultData: Person[] = [
  {
    firstName: 'tanner',
    lastName: 'linsley',
    age: 24,
    visits: 100,
    status: 'In Relationship',
    progress: 50,
  },
  {
    firstName: 'tandy',
    lastName: 'miller',
    age: 40,
    visits: 40,
    status: 'Single',
    progress: 80,
  },
  {
    firstName: 'joe',
    lastName: 'dirte',
    age: 45,
    visits: 20,
    status: 'Complicated',
    progress: 10,
  },
];

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  margin: 20px;
  overflow: hidden;
  background: var(--admiral-color-Neutral_Neutral00, ${(p) => p.theme.color['Neutral/Neutral 00']});
`;

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
    header: 'Last Name Last Name Last Name Last Name',
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('age', {
    header: 'Age LongLong Title',
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('visits', {
    header: 'Visits',
  }),
  columnHelper.accessor('status', {
    header: 'Status',
    meta: { extraText: 'Description Status Description Status Description Status' },
  }),
  columnHelper.accessor('progress', {
    header: 'Profile Progress',
  }),
];

export const WithLineClampInHeader = ({}) => {
  const [data, _setData] = useState(() => [...defaultData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    enableSorting: false,
  });

  return (
    <Wrapper>
      <TanstackTable table={table} headerLineClamp={3} headerExtraLineClamp={2} />
    </Wrapper>
  );
};
