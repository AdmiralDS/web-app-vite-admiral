import * as React from 'react';

import { createColumnHelper, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { ExampleSection, PStyled } from '#examples/-helpers';
import { CellText, TanstackTable, defaultOptions } from '#examples/-helpers/tanstackTable';
import { T } from '@admiral-ds/react-ui';

type Transaction = {
  type: string;
  date: string;
  amount: string;
  currency: string;
  rate: string;
  status: string;
};

const defaultData: Transaction[] = [
  {
    type: 'МНО',
    date: new Date('2021-03-23').toLocaleDateString(),
    amount: new Intl.NumberFormat().format(32_500_000_000),
    currency: 'RUB',
    rate: '7 %',
    status: 'Выполнено',
  },
  {
    type: 'МНО',
    date: new Date('2021-03-23').toLocaleDateString(),
    amount: new Intl.NumberFormat().format(50_000_000),
    currency: 'USD',
    rate: '3 %',
    status: 'В ожидании',
  },
  {
    type: 'МНО',
    date: new Date('2021-05-12').toLocaleDateString(),
    amount: new Intl.NumberFormat().format(700_000_000),
    currency: 'XRP',
    rate: '7 %',
    status: 'Выполнено',
  },
  {
    type: 'МНО',
    date: new Date('2021-03-23').toLocaleDateString(),
    amount: new Intl.NumberFormat().format(4_000_000),
    currency: 'USDT',
    rate: '5 %',
    status: 'Выполнено',
  },
];

const columnHelper = createColumnHelper<Transaction>();

const columns = [
  columnHelper.accessor('type', {
    header: 'Тип сделки',
    cell: (info) => <CellText>{info.getValue()}</CellText>,
    size: 141,
  }),
  columnHelper.accessor('date', {
    header: 'Дата сделки',
    cell: (info) => <CellText>{info.getValue()}</CellText>,
    size: 149,
  }),
  columnHelper.accessor('amount', {
    header: 'Сумма',
    cell: (info) => <CellText>{info.getValue()}</CellText>,
    size: 150,
    meta: { cellAlign: 'right' },
  }),
  columnHelper.accessor('currency', {
    header: 'Валюта',
    cell: (info) => <CellText>{info.renderValue()}</CellText>,
  }),
  columnHelper.accessor('rate', {
    header: 'Ставка',
    cell: (info) => <CellText>{info.renderValue()}</CellText>,
    size: 96,
    meta: { cellAlign: 'right' },
  }),
  columnHelper.accessor('status', {
    header: 'Статус',
    cell: (info) => <CellText>{info.renderValue()}</CellText>,
    size: 110,
  }),
];

type Person = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
};

const defaultData2: Person[] = [
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

const columnHelper2 = createColumnHelper<Person>();

const columns2 = [
  columnHelper2.group({
    id: 'hello',
    header: 'Hello',
    columns: [
      columnHelper2.accessor('firstName', {
        cell: (info) => <CellText>{info.getValue()}</CellText>,
        header: 'firstName',
      }),
      columnHelper2.accessor((row) => row.lastName, {
        id: 'lastName',
        cell: (info) => <CellText>{info.getValue()}</CellText>,
        header: 'Last Name',
      }),
    ],
  }),
  columnHelper2.group({
    header: 'Info',
    columns: [
      columnHelper2.accessor('age', {
        header: 'Age',
        cell: (info) => <CellText>{info.getValue()}</CellText>,
      }),
      columnHelper2.group({
        header: 'More Info',
        columns: [
          columnHelper2.accessor('visits', {
            header: 'Visits',
            cell: (info) => <CellText>{info.getValue()}</CellText>,
          }),
          columnHelper2.accessor('status', {
            header: 'Status',
            cell: (info) => <CellText>{info.getValue()}</CellText>,
          }),
          columnHelper2.accessor('progress', {
            header: 'Profile Progress',
            cell: (info) => <CellText>{info.getValue()}</CellText>,
          }),
        ],
      }),
    ],
  }),
];

export const StickyColumnsExample = () => {
  const [data, _setData] = React.useState(() => [...defaultData]);
  const [data2, _setData2] = React.useState(() => [...defaultData2]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    initialState: {
      columnPinning: {
        left: ['type', 'date'],
        right: ['status'],
      },
    },
    ...defaultOptions,
  });

  const table2 = useReactTable({
    data: data2,
    columns: columns2,
    getCoreRowModel: getCoreRowModel(),
    initialState: {
      columnPinning: {
        left: ['firstName', 'lastName'],
        // right: ['age', 'visits', 'status', 'progress'],
      },
    },
    ...defaultOptions,
  });

  return (
    <ExampleSection
      text={
        <T font="Body/Body 1 Long" as="div">
          <PStyled>
            При необходимости можно “закреплять” столбцы таблицы. Фиксированные столбцы располагаются по левому краю
            таблицы и идут друг за другом. Чтобы определить для таблицы список фиксированных столбцов, необходимо при
            создании объекта таблицы определить начальное состояние initialState, где в свойстве columnPinning.left
            необходимо указать массив с id тех колонок, которые должны быть зафиксированны по левому краю.
          </PStyled>
          <PStyled>
            В случае, если вы хотите зафиксировать позицию многоуровневого заголовка, то в columnPinning.left необходимо
            указывать id тех колонок, которые имеют наибольший уровень вложенности в рамках данного многоуровневого
            заголовка.
          </PStyled>
          <PStyled>
            Столбцы с чекбоксами, стрелками, OverflowMenu и иконками одиночных действий (если задан параметр
            showRowsActions=true) являются фиксированными по умолчанию. Столбец с OverflowMenu и иконками одиночных
            действий является единственным столбцом, который позиционируется по правому краю таблицы.
          </PStyled>
        </T>
      }
    >
      <TanstackTable table={table} />
      <div style={{ width: '100%', height: '40px' }} />
      <TanstackTable table={table2} showBorders greyHeader showDividerForLastColumn />
    </ExampleSection>
  );
};
