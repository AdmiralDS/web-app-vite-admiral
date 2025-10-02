import * as React from 'react';

import { getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { TanstackTable } from '#examples/-helpers/tanstackTable/Table';
import { CellText } from '#examples/-helpers/tanstackTable/style';
import { ExampleSection } from '#examples/-helpers';

export type Person = ReturnType<typeof makeData>[0];

const makeColumns = () =>
  [...Array(1000)].map((_, i) => {
    return {
      accessorKey: i.toString(),
      header: 'Column ' + i.toString(),
      cell: (info: any) => <CellText>{info.renderValue()}</CellText>,
      // size: Math.floor(Math.random() * 150) + 100,
    };
  });

const date = new Date('2020-08-06').toLocaleDateString();

export const makeData = () =>
  [...Array(1000)].map(() => ({
    ...Object.fromEntries(makeColumns().map((col) => [col.accessorKey, date])),
  }));

export const FixedVirtualScrollExample = () => {
  const [data, _setData] = React.useState(() => makeData());

  const table = useReactTable({
    data,
    columns: makeColumns(),
    getCoreRowModel: getCoreRowModel(),
    enableSorting: false,
  });

  return (
    <ExampleSection text="1000row, 1000colums">
      <TanstackTable
        table={table}
        style={{ height: '500px' }}
        //при использовнании fixedColumnWidth: 100
        virtualScroll={{ fixedRowHeight: 40, vertical: true, horizontal: true, fixedColumnWidth: 150 }}
      />
    </ExampleSection>
  );
};
