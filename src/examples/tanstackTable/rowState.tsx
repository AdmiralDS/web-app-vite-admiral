import { createColumnHelper, getCoreRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table';
import { useState } from 'react';
import { ListItem, UnorderedList } from '@admiral-ds/react-ui';

import { CellText, defaultOptions, TanstackTable, type MetaRowProps } from '#examples/-helpers/tanstackTable';
import { ExampleSection, PStyled } from '#examples/-helpers';

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
    cell: (info) => <CellText>{info.renderValue()}</CellText>,
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

export const RowState = () => {
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
          <PStyled>Для каждой строки могут быть заданы следующие состояния: </PStyled>
          <PStyled as="div">
            <UnorderedList dimension="s">
              <ListItem>selected - строка выбрана, чекбокс в строке проставлен;</ListItem>
              <ListItem>disabled - строка задизейблена;</ListItem>
              <ListItem>
                hover - строка окрашивается при ховере. Данная окраска должна применяться, если строка кликабельна и
                ведет к каким-либо действиям.
              </ListItem>
            </UnorderedList>
          </PStyled>
          <PStyled>
            Также строке можно задать определенный статус, в соответствии с которым она будет окрашена. Чтобы задать
            статус для строки необходимо использовать параметр status, где в качестве значения указывается строка с
            названием статуса. По умолчанию таблица предоставляет два статуса: error и success. Также пользователь может
            создать свои кастомные статусы, для этого нужно передать параметр из цветовой палитры ДС Адмирал или любой
            другой цвет в формате строки.
          </PStyled>
        </>
      }
    >
      <TanstackTable table={table} />
    </ExampleSection>
  );
};
