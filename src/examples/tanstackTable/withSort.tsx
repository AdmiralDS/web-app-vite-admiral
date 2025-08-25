import { createColumnHelper, getCoreRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table';
import styled from 'styled-components';
import { useState } from 'react';

import { Link, T } from '@admiral-ds/react-ui';
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
  overflow: hidden;
  background: var(--admiral-color-Neutral_Neutral00, ${(p) => p.theme.color['Neutral/Neutral 00']});
`;

const columnHelper = createColumnHelper<Person>();

const columns = [
  columnHelper.accessor('firstName', {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
    header: 'firstName',
    enableSorting: false,
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
    sortDescFirst: false,
  }),
  columnHelper.accessor('visits', {
    header: 'Visits',
    sortDescFirst: false,
  }),
  columnHelper.accessor('status', {
    header: 'Status',
    enableSorting: false,
    meta: { extraText: 'Description Status Description Status Description Status' },
  }),
  columnHelper.accessor('progress', {
    header: 'Profile Progress',
    sortDescFirst: false,
  }),
];

export const WithSort = () => {
  const [data, _setData] = useState(() => [...defaultData]);

  const tableSingleSort = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    enableMultiSort: false,
  });

  const tableWithMultiSort = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    //для включения мультисортировки кликом мыши(по умолчанию включается кликом с shiftKey)
    isMultiSortEvent: () => true,
  });

  const tables = [tableSingleSort, tableWithMultiSort];

  return (
    <>
      <T font="Body/Body 1 Long" as="div">
        <ul style={{ lineHeight: '190%' }}>
          <li>
            <i>sortingFn</i>: функция для создания кастомной сортировки.
          </li>
          <li>
            <i>sortDescFirst</i>: флаг для отображения при первом клике сортировки от большего к меньшему (Некоторые
            данные в таблице с сортировкой по умолчанию могут иметь различные порядки отображения при первом клике).
          </li>
          <li>
            <i>enableSorting</i>: флаг отключения сортировки в конкретном столбце.
          </li>
          <li>
            <i>enableMultiSort</i>: флаг отключения мульти сортировки в конкретном столбце. По умолчанию
            мультисортировка включена во всей таблице (для отключения во всей таблице этот флаг нужно передать в
            useReactTable).
          </li>
          <li>
            <i>invertSorting</i>: флаг флаг изменения порядка сортировки
          </li>
        </ul>
        <div style={{ display: 'flex' }}>
          Дополнительная документация настроек сортировки по
          <Link
            style={{ marginLeft: '4px' }}
            href="https://tanstack.com/table/latest/docs/guide/sorting"
            target="_blank"
          >
            ссылке
          </Link>
        </div>
      </T>
      {tables.map((table, id) => {
        return (
          <div key={id} style={{ display: 'flex', flexDirection: 'column' }}>
            <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '20px' }}>
              {id === 0 ? 'Single sort.' : 'Milti sort.'}
            </T>
            <Wrapper>
              <TanstackTable table={table} headerLineClamp={3} headerExtraLineClamp={2} />
            </Wrapper>
          </div>
        );
      })}
    </>
  );
};
