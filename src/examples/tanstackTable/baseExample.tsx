import * as React from 'react';

import { createColumnHelper, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { TanstackTable } from '#examples/-helpers/tanstackTable/Table';
import { CellText } from '#examples/-helpers/tanstackTable/style';
import { ExampleSection, PStyled } from '#examples/-helpers';

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
  }),
  columnHelper.accessor('date', {
    header: 'Дата сделки',
    cell: (info) => <CellText>{info.getValue()}</CellText>,
  }),
  columnHelper.accessor('amount', {
    header: 'Сумма',
    cell: (info) => <CellText>{info.getValue()}</CellText>,
    meta: { cellAlign: 'right' },
  }),
  columnHelper.accessor('currency', {
    header: 'Валюта',
    cell: (info) => <CellText>{info.renderValue()}</CellText>,
  }),
  columnHelper.accessor('rate', {
    header: 'Ставка',
    cell: (info) => <CellText>{info.renderValue()}</CellText>,
    meta: { cellAlign: 'right' },
  }),
  columnHelper.accessor('status', {
    header: 'Статус',
    cell: (info) => <CellText>{info.renderValue()}</CellText>,
  }),
];

export const BaseExample = () => {
  const [data, _setData] = React.useState(() => [...defaultData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    enableSorting: false,
  });

  return (
    <ExampleSection
      text={
        <>
          <PStyled>
            Контент ячеек не имеет внутренних отступов. Вы можете использовать styled-компонент CellText, который
            предоставляет дефолтные отступы, либо можете оборачивать контент ячейки в свою обертку
          </PStyled>
        </>
      }
    >
      <TanstackTable table={table} gridTemplateColumns="141px 149px 150px 100px 96px 110px" />
    </ExampleSection>
  );
};
