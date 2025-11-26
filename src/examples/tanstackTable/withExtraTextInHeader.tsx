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
    header: 'Размер M',
    cell: (info) => <CellText>{info.getValue()}</CellText>,
    size: 131,
    meta: { extraText: 'Add text' },
  }),
  columnHelper.accessor('second', {
    header: 'Column title',
    cell: (info) => <CellText>{info.getValue()}</CellText>,
    size: 250,
    meta: { extraText: 'Add text. Текст длиннее основного' },
  }),
  columnHelper.accessor('third', {
    header: 'Column title',
    cell: (info) => <CellText>{info.getValue()}</CellText>,
    size: 158,
    meta: { extraText: 'Add text', cellAlign: 'right' },
  }),
  columnHelper.accessor('forth', {
    header: 'Column title',
    size: 146,
    cell: (info) => <CellText>{info.getValue()}</CellText>,
    meta: { extraText: 'Add text' },
  }),
];

export const WithExtraTextInHeader = () => {
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
          При необходимости в заголовке таблицы можно включать дополнительный текст с помощью параметра extraText.
        </T>
      }
    >
      <TanstackTable table={table} />
    </ExampleSection>
  );
};
