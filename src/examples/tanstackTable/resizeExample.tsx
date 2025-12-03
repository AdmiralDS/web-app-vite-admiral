import { useState } from 'react';
import { createColumnHelper, getCoreRowModel, useReactTable } from '@tanstack/react-table';

import { CellText, defaultOptions, TanstackTable } from '#examples/-helpers/tanstackTable';
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
    enableResizing: false,
    meta: { gridColumnTemplate: '1fr' },
  }),
];

export const ResizeExample = () => {
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
        <>
          <PStyled>
            По умолчанию у всех колонок (кроме чекбоксов/стрелок/оверфлоу меню) включен ресайз. Включением/отключением
            ресайза можно управлять через глобальную опцию таблицы enableColumnResizing или через индивидуальный
            параметр каждой колонки enableResizing.
          </PStyled>
          <PStyled>
            Когда у колонки включен ресайз, ширина колонки управляется через параметр колонки size (minsize, maxsize при
            желании). Значением size может быть ТОЛЬКО ЧИСЛО, которое равно ширине колонки в пикселях (px). Ресайзинг
            колонки не предполагает относительных величин ширины (никаких %, fr, em, min-content, max-content). Объект
            defaultOptions включает в себя дефолтные настройки size/minsize/maxsize, при желании их можно менять.
          </PStyled>
          <PStyled>
            Если вам необходимо задать ширину колонки не только в пикселях, то вы должны отключить ресайз колонки и
            задать в параметре meta.gridTemplateColumn желаемое значение ширины, например, meta.gridTemplateColumn:
            '1fr'
          </PStyled>
        </>
      }
    >
      <TanstackTable table={table} />
    </ExampleSection>
  );
};
