import { useState } from 'react';
import { createColumnHelper, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { UnorderedList, ListItem } from '@admiral-ds/react-ui';

import { ExampleSection, PStyled } from '#examples/-helpers';
import { CellText, TanstackTable, defaultOptions } from '#examples/-helpers/tanstackTable';

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

export const BaseExample = () => {
  const [data, _setData] = useState(() => [...defaultData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    ...defaultOptions,
  });

  return (
    <>
      <ExampleSection
        header="FAQs"
        text={
          <>
            <PStyled>
              Компонент TanstackTable - это таблица, реализованная на основе библиотеки @tanstack/react-table с
              применением стилей из дизайн-системы Адмирал 2.1. Данное решение - пример того, как можно кастомизировать
              сторонние библиотеки под дизайн-систему Адмирал.
            </PStyled>
            <PStyled as="div">
              <UnorderedList dimension="s">
                <ListItem>
                  Почему таблица не поддерживает табличные теги (table, tbody, tr, td и т.д.), используя вместо этого
                  верстку на div-элементах?
                  <UnorderedList dimension="s" styleType="virgule">
                    <ListItem>
                      Во-первых, при построении таблицы через стандартные табличные теги возникают сложности в строгом
                      определении ширины столбцов, что особенно критично при ресайзе. Даже при явно заданной ширине
                      столбца через тег COL или параметр width, фактическая ширина столбца может отличаться.
                    </ListItem>
                    <ListItem>
                      Во-вторых, при разработке функционала фиксированных колонок, было решено оборачивать фиксированные
                      ячейки в строке в отдельный контейнер с position: sticky. Это позволяет один раз задать позицию
                      (координаты left: 0 или right:0) для всего контейнера вместо того, чтобы многократно пересчитывать
                      позицию каждой отдельной фиксированной ячейки. Такой подход улучшает производительность
                      компонента, но не применим в сочетании с табличной вёрсткой, так как табличная разметка не
                      предполагает использование промежуточных оберток между уровнями строк (tr) и ячеек (td).
                    </ListItem>
                  </UnorderedList>
                </ListItem>
                <ListItem>
                  Поддерживает ли таблица функционал Copy/Paste данных, то есть можно ли выделить часть табличных
                  данных, скопировать их и перенести в табличном виде в инструменты подобные Excel и наоборот?
                  <UnorderedList dimension="s" styleType="virgule">
                    <ListItem>
                      Так как разметка таблица реализована на div-элементах, встроенная поддержка Copy/Paste функции
                      отсутствует.
                    </ListItem>
                  </UnorderedList>
                </ListItem>
              </UnorderedList>
            </PStyled>
          </>
        }
      >
        <TanstackTable table={table} />
      </ExampleSection>
      <ExampleSection text="P.S. Отдельная благодарность Андрею Поповскому за помощь в работе с Tanstack Table. " />
    </>
  );
};
