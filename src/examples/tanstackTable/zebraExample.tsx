import { createColumnHelper, getCoreRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table';
import { useState } from 'react';

import { ExampleSection, PStyled } from '#examples/-helpers';
import { CellText, defaultOptions, TanstackTable } from '#examples/-helpers/tanstackTable';
import { T } from '@admiral-ds/react-ui';

interface Person {
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

export const ZebraExample = () => {
  const [data, _setData] = useState(() => [...defaultData]);

  const columnHelper = createColumnHelper<Person>();

  const columns = [
    columnHelper.accessor('firstName', {
      header: 'firstName',
      cell: (info) => <CellText>{info.getValue()}</CellText>,
    }),
    columnHelper.accessor((row) => row.lastName, {
      id: 'lastName',
      header: 'Last Name',
      cell: (info) => (
        <CellText>
          <i>{info.getValue()}</i>
        </CellText>
      ),
    }),
    columnHelper.accessor('age', {
      header: 'Age',
      cell: (info) => <CellText>{info.getValue()}</CellText>,
    }),
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
  ];

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
        <T font="Body/Body 1 Long" as="div">
          <PStyled>
            Опционально, для лучшей визуальной сепарации строк, их можно окрашивать через одну в цвет вторичного фона
            (Neutral 05). Используйте для этого параметр greyZebraRows. Окраска начинается со второй строки, считая от
            заголовка таблицы или группы.
          </PStyled>
          <PStyled>
            Для консистентности рекомендуется заголовок таблицы тоже окрашивать в серый цвет (параметр greyHeader).
          </PStyled>
        </T>
      }
    >
      <TanstackTable table={table} greyHeader greyZebraRows />
    </ExampleSection>
  );
};
