import { createColumnHelper, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { useState } from 'react';

import { TanstackTable } from '#examples/-helpers/tanstackTable/Table';
import { ExampleSection } from '#examples/-helpers';
import { CellText } from '#examples/-helpers/tanstackTable/style';

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
    meta: { extraText: 'Add text' },
  }),
  columnHelper.accessor('second', {
    header: 'Текст в две строки',
    cell: (info) => <CellText>{info.getValue()}</CellText>,
    meta: { extraText: 'Add text. Текст длиннее основного. Следующая строка.' },
  }),
  columnHelper.accessor('third', {
    header: 'Column title',
    cell: (info) => <CellText>{info.getValue()}</CellText>,
    meta: { extraText: 'Add text', cellAlign: 'right' },
  }),
  columnHelper.accessor('forth', {
    header: 'Column title',
    cell: (info) => <CellText>{info.getValue()}</CellText>,
    meta: { extraText: 'Add text. Текст длиннее основного. Следующая строка.' },
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
    <ExampleSection>
      <TanstackTable
        table={table}
        headerLineClamp={2}
        headerExtraLineClamp={3}
        gridTemplateColumns="100px 120px 150px 180px"
      />
    </ExampleSection>
  );
};
