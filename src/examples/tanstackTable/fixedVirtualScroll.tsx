import * as React from 'react';

import { getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { CellText, TanstackTable } from '#examples/-helpers/tanstackTable';
import { ExampleSection, columnFlexMixin } from '#examples/-helpers';

const date = new Date('2020-08-06').toLocaleDateString();

const makeColumns1 = () =>
  [...Array(2)].map((_, i) => {
    return {
      accessorKey: i.toString(),
      header: 'Column ' + i.toString(),
      cell: (info: any) => <CellText>{info.renderValue()}</CellText>,
      size: 300,
    };
  });

const makeRows1 = () =>
  [...Array(1000)].map(() => ({
    ...Object.fromEntries(makeColumns1().map((col) => [col.accessorKey, date])),
  }));

const makeColumns2 = () =>
  [...Array(2)].map((_, i) => {
    return {
      accessorKey: (i + 2).toString(),
      header: 'Column ' + i.toString(),
      cell: (info: any) => info.renderValue(),
      size: 300,
    };
  });

const rowsVariable = new Array(1000).fill(true).map(() => 40 + Math.round(Math.random() * 100));

const makeRows2 = () =>
  rowsVariable.map((rowHeight) => ({
    ...Object.fromEntries(
      makeColumns2().map((col) => [
        col.accessorKey,
        // 1px - вычитаем ширину нижнего подчеркивания строки
        <CellText style={{ height: `${rowHeight - 1}px` }}>{date}</CellText>,
      ]),
    ),
  }));

export const FixedVirtualScrollExample = () => {
  const [data, _setData] = React.useState(() => makeRows1());
  const [data2, _setData2] = React.useState(() => makeRows2());

  const table1 = useReactTable({
    data,
    columns: makeColumns1(),
    getCoreRowModel: getCoreRowModel(),
    enableSorting: false,
  });

  const table2 = useReactTable({
    data: data2,
    columns: makeColumns2(),
    getCoreRowModel: getCoreRowModel(),
    enableSorting: false,
  });

  return (
    <>
      <ExampleSection
        header="Fixed vertical virtualization"
        text="Документация к виртуализации при фиксированной высоте строки"
        cssMixin={columnFlexMixin}
      >
        <TanstackTable
          table={table1}
          greyHeader
          style={{ height: '500px' }}
          virtualScroll={{ fixedRowHeight: () => 40, vertical: true }}
        />
      </ExampleSection>
      <ExampleSection
        header="Variable vertical virtualization"
        text="Документация к примеру, когда строки переменной фиксированной высоты"
        cssMixin={columnFlexMixin}
      >
        <TanstackTable
          table={table2}
          greyHeader
          style={{ height: '500px' }}
          virtualScroll={{ fixedRowHeight: (index) => rowsVariable[index], vertical: true }}
        />
      </ExampleSection>
    </>
  );
};
