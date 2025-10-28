import * as React from 'react';

import { createColumnHelper, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { ExampleSection, PStyled } from '#examples/-helpers';
import { CellText, defaultOptions, TanstackTable } from '#examples/-helpers/tanstackTable';

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
    size: 141,
  }),
  columnHelper.accessor('date', {
    header: 'Дата сделки',
    cell: (info) => <CellText>{info.getValue()}</CellText>,
    size: 149,
  }),
  columnHelper.accessor('amount', {
    header: 'Сумма',
    cell: (info) => <CellText>{info.getValue()}</CellText>,
    size: 150,
    meta: { cellAlign: 'right' },
  }),
  columnHelper.accessor('currency', {
    header: 'Валюта',
    cell: (info) => <CellText>{info.renderValue()}</CellText>,
  }),
  columnHelper.accessor('rate', {
    header: 'Ставка',
    cell: (info) => <CellText>{info.renderValue()}</CellText>,
    size: 96,
    meta: { cellAlign: 'right' },
  }),
  columnHelper.accessor('status', {
    header: 'Статус',
    cell: (info) => <CellText>{info.renderValue()}</CellText>,
    size: 110,
  }),
];

export const StyleExample = () => {
  const [data, _setData] = React.useState(() => [...defaultData]);

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
          <PStyled>Cуществует ряд параметров, влияющих на внешний вид таблицы:</PStyled>
          <PStyled>- dimension - параметр, регулирующий размер таблицы;</PStyled>
          <PStyled>- greyHeader - параметр, с помощью которого можно окрашивать шапку таблицы в серый цвет;</PStyled>
          <PStyled>
            - showDividerForLastColumn - параметр, который отвечает за отображение вертикальной полосы разделителя для
            последнего столбца таблицы. По умолчанию параметр равен false, то есть разделитель не отображается;
          </PStyled>
          <PStyled>
            - showLastRowUnderline - параметр, который управляет отображением серой линии подчеркивания для последней
            строки таблицы. По умолчанию параметр равен true, то есть линия отображается;
          </PStyled>
          <PStyled>
            - showBorders - параметр, который управляет отображением границ между ячейками таблицы и обводки всей
            таблицы. По умолчанию параметр равен false, последняя колонка будет иметь границы справа только, если
            параметр showDividerForLastColumn равен true;
          </PStyled>
          <PStyled>
            - spacingBetweenItems - параметр, который влияет на внешний вид заголовка и отвечает одновременно за размер
            правого бокового отступа внутри заголовка и за расстояние между иконкой фильтра (при её наличии) и остальным
            содержимым заголовка (описание параметра в макетах). По умолчанию минимальное значение 12, для таблиц S и M,
            и 16 для таблиц L и XL. В коде предусмотрено, что правый боковой отступ можно менять только в большую
            сторону в сравнении с дефолтным значением, а расстояние между иконкой фильтра и остальным содержимым
            заголовка можно как уменьшать, так и увеличивать с помощью spacingBetweenItems.
          </PStyled>
        </>
      }
    >
      <TanstackTable table={table} greyHeader showBorders />
    </ExampleSection>
  );
};
