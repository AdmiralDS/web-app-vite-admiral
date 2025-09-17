import { createColumnHelper, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { useState } from 'react';

import { TanstackTable } from '#examples/-helpers/tanstackTable/Table';
import { ExampleSection } from '#examples/-helpers';
import { CellText } from '#examples/-helpers/tanstackTable/style';

type Person = {
  first: string;
  second: string;
  third: string;
  forth: string;
};

const defaultData: Person[] = [...Array(4).keys()].map((_item) => ({
  first: 'Cell text',
  second: 'Cell text',
  third: 'Cell text',
  forth: 'Cell text',
}));

const columnHelper = createColumnHelper<Person>();

const columns = [
  columnHelper.accessor('first', {
    header: 'Column title',
    cell: (info) => <CellText>{info.getValue()}</CellText>,
  }),
  columnHelper.accessor('second', {
    header: 'Column title',
    cell: (info) => <CellText>{info.getValue()}</CellText>,
  }),
  columnHelper.accessor('third', {
    header: 'Длинный текст очень для этой колонки',
    cell: (info) => <CellText>{info.getValue()}</CellText>,
  }),
  columnHelper.accessor('forth', {
    header: 'Column title',
    cell: (info) => <CellText>{info.getValue()}</CellText>,
  }),
];

export const WithOverflowHeaders = () => {
  const [data, _setData] = useState(() => [...defaultData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    enableSorting: false,
  });

  return (
    <ExampleSection>
      <TanstackTable table={table} gridTemplateColumns="146px 146px 204px 146px" />
    </ExampleSection>
  );
};
