import { createColumnHelper, getCoreRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table';

import { useState } from 'react';
import { TanstackTable, defaultOptions } from '#examples/-helpers/tanstackTable/Table';
import { CellText } from '#examples/-helpers/tanstackTable/style';
import { ExampleSection, PStyled } from '#examples/-helpers';

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

const columnHelper = createColumnHelper<Person>();

const columns = [
  columnHelper.group({
    id: 'hello',
    header: 'Hello',
    columns: [
      columnHelper.accessor('firstName', {
        cell: (info) => <CellText>{info.getValue()}</CellText>,
        header: 'firstName',
      }),
      columnHelper.accessor((row) => row.lastName, {
        id: 'lastName',
        cell: (info) => <CellText>{info.getValue()}</CellText>,
        header: 'Last Name',
      }),
    ],
  }),
  columnHelper.group({
    header: 'Info',
    columns: [
      columnHelper.accessor('age', {
        header: 'Age',
        cell: (info) => <CellText>{info.getValue()}</CellText>,
      }),
      columnHelper.group({
        header: 'More Info',
        columns: [
          columnHelper.accessor('visits', {
            header: 'Visits',
            cell: (info) => <CellText>{info.getValue()}</CellText>,
          }),
          columnHelper.accessor('status', {
            header: 'Status',
            cell: (info) => <CellText>{info.getValue()}</CellText>,
          }),
          columnHelper.accessor('progress', {
            header: 'Profile Progress',
            cell: (info) => <CellText>{info.getValue()}</CellText>,
          }),
        ],
      }),
    ],
  }),
];

export const GroupHeaders = () => {
  const [data, _setData] = useState(() => [...defaultData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    ...defaultOptions,
  });

  return (
    <ExampleSection
      text={
        <>
          <PStyled>
            Таблица предоставляет функционал многоуровневых заголовков. При этом способе компоновки заголовков, шапка
            таблицы окрашивается в серый цвет, для этого используйте параметр greyHeader. Также можно отрисовывать шапку
            таблицы на белом фоне при условии, что в таблице будет включено отображение границ через параметр
            showBorders.
          </PStyled>
        </>
      }
    >
      <TanstackTable table={table} greyHeader showDividerForLastColumn />
    </ExampleSection>
  );
};
