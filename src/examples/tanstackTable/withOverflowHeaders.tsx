import { createColumnHelper, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { useState } from 'react';

import { ExampleSection } from '#examples/-helpers';
import { CellText, defaultOptions, TanstackTable } from '#examples/-helpers/tanstackTable';
import { T } from '@admiral-ds/react-ui';

type Column = {
  first: string;
  second: string;
  third: string;
  forth: string;
};

const defaultData: Column[] = [...Array(4).keys()].map((_item) => ({
  first: 'Cell text',
  second: 'Cell text',
  third: 'Cell text',
  forth: 'Cell text',
}));

const columnHelper = createColumnHelper<Column>();

const columns = [
  columnHelper.accessor('first', {
    header: 'Column title',
    cell: (info) => <CellText>{info.getValue()}</CellText>,
    size: 146,
  }),
  columnHelper.accessor('second', {
    header: 'Column title',
    cell: (info) => <CellText>{info.getValue()}</CellText>,
    size: 146,
  }),
  columnHelper.accessor('third', {
    header: 'Длинный текст очень для этой колонки',
    cell: (info) => <CellText>{info.getValue()}</CellText>,
    size: 204,
  }),
  columnHelper.accessor('forth', {
    header: 'Column title',
    cell: (info) => <CellText>{info.getValue()}</CellText>,
    size: 146,
  }),
];

export const WithOverflowHeaders = () => {
  const [data, _setData] = useState(() => [...defaultData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    ...defaultOptions,
  });

  return (
    <ExampleSection
      text={
        <T font="Body/Body 1 Long" as="div">
          Заголовки таблицы по умолчанию выводятся в одну строку и при нехватке места сокращаются с помощью троеточия,
          при наведении появляется тултип с полным текстом
        </T>
      }
    >
      <TanstackTable table={table} />
    </ExampleSection>
  );
};
