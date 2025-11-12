import * as React from 'react';

import { getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { CellText, TanstackTable } from '#examples/-helpers/tanstackTable';
import { ExampleSection } from '#examples/-helpers';

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

const makeData = () =>
  [...Array(1000)].map(() => ({
    ...Object.fromEntries(makeColumns().map((col) => [col.accessorKey, date])),
  }));

export const FixedVirtualScrollExample = () => {
  const [data, _setData] = React.useState(() => makeData());
  //todo при ресейзе будет неправильное отображение горизонтального скролла
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
