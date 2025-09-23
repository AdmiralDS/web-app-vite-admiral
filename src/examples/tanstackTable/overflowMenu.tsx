import * as React from 'react';

import { createColumnHelper, getCoreRowModel, useReactTable, type Row } from '@tanstack/react-table';
import styled from 'styled-components';
import { TanstackTable, type MetaRowProps } from '#examples/-helpers/tanstackTable/Table';
import { MenuItem, OverflowMenu, RowAction, TooltipHoc, type RenderOptionProps } from '@admiral-ds/react-ui';
import DeleteOutline from '@admiral-ds/icons/build/system/DeleteOutline.svg?react';
import { CellText } from '#examples/-helpers/tanstackTable/style';
import { ExampleSection } from '#examples/-helpers';
const TooltipedRowAction = TooltipHoc(RowAction);

interface Person extends MetaRowProps<Person> {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
}

const items = [
  {
    id: '1',
    display: 'Вывести имя',
  },
  {
    id: '2',
    display: 'Вывести возраст',
  },
  {
    id: '3',
    display: 'Вывести статус',
  },
];

const Menu = ({ row, onVisibilityChange }: { row: Row<Person>; onVisibilityChange?: (isVisible: boolean) => void }) => {
  const model = React.useMemo(() => {
    return items.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItem dimension="m" {...options} key={item.id} role="option">
          {item.display}
        </MenuItem>
      ),
    }));
  }, []);

  return (
    <OverflowMenu
      onSelectItem={(id) => {
        if (id === '1') alert(row.original.firstName);
        if (id === '2') alert(row.original.age);
        if (id === '3') alert(row.original.status);
      }}
      onVisibilityChange={onVisibilityChange}
      aria-label="Overflow Menu component"
      dimension="m"
      isVertical
      items={model}
    />
  );
};

const defaultData: Person[] = [
  {
    firstName: 'tanner',
    lastName: 'linsleyss',
    age: 24,
    visits: 100,
    status: 'In Relationship',
    progress: 50,
    meta: {
      overflowMenuRender: (row: Row<Person>, onVisibilityChange?: (isVisible: boolean) => void) => (
        <Menu row={row} onVisibilityChange={onVisibilityChange} />
      ),
    },
  },
  {
    firstName: 'tandy',
    lastName: 'miller',
    age: 40,
    visits: 40,
    status: 'Single',
    progress: 80,
    meta: {
      actionRender: () => (
        <TooltipedRowAction renderContent={() => `Delete`} onClick={() => console.log('row action happens')}>
          <DeleteOutline />
        </TooltipedRowAction>
      ),
    },
  },
  {
    firstName: 'joe',
    lastName: 'dirte',
    age: 45,
    visits: 20,
    status: 'Complicated',
    progress: 10,
    meta: {
      overflowMenuRender: (row: Row<Person>, onVisibilityChange?: (isVisible: boolean) => void) => (
        <Menu row={row} onVisibilityChange={onVisibilityChange} />
      ),
    },
  },
];

const columnHelper = createColumnHelper<Person>();

const columns = [
  columnHelper.accessor('firstName', {
    cell: (info) => <CellText>{info.renderValue()}</CellText>,
  }),
  columnHelper.accessor((row) => row.lastName, {
    id: 'lastName',
    cell: (info) => <CellText>{info.renderValue()}</CellText>,
    header: 'Last Name',
  }),
  columnHelper.accessor('age', {
    header: 'Age',
    cell: (info) => <CellText>{info.renderValue()}</CellText>,
  }),
  columnHelper.accessor('visits', {
    header: 'Visits',
    cell: (info) => <CellText>{info.renderValue()}</CellText>,
  }),
  columnHelper.accessor('status', {
    header: 'Status',
    cell: (info) => <CellText>{info.renderValue()}</CellText>,
  }),
  columnHelper.accessor('progress', {
    header: 'Profile Progress',
    cell: (info) => <CellText>{info.renderValue()}</CellText>,
  }),
];

export const WithOverflowMenu = () => {
  const [data, _setData] = React.useState(() => [...defaultData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    enableSorting: false,
  });

  return (
    <>
      <ExampleSection text="Пример с иконками действий над строками, которые видны только по ховеру">
        <TanstackTable table={table} gridTemplateColumns="100px 100px 100px 100px 130px 100px 1fr" />
      </ExampleSection>
      <ExampleSection text="Пример с постоянно видимыми иконками действий над строками">
        <TanstackTable table={table} showRowsActions gridTemplateColumns="100px 100px 100px 100px 130px 100px 1fr" />
      </ExampleSection>
    </>
  );
};
