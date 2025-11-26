import { createColumnHelper, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { useState } from 'react';

import { ExampleSection, PStyled } from '#examples/-helpers';
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
    meta: { extraText: 'Add text' },
  }),
  columnHelper.accessor('second', {
    header: 'Текст в две строки',
    cell: (info) => <CellText>{info.getValue()}</CellText>,
    size: 120,
    meta: { extraText: 'Add text. Текст длиннее основного. Следующая строка.' },
  }),
  columnHelper.accessor('third', {
    header: 'Column title',
    cell: (info) => <CellText>{info.getValue()}</CellText>,
    size: 150,
    meta: { extraText: 'Add text', cellAlign: 'right' },
  }),
  columnHelper.accessor('forth', {
    header: 'Column title',
    cell: (info) => <CellText>{info.getValue()}</CellText>,
    size: 180,
    meta: { extraText: 'Add text. Текст длиннее основного. Следующая строка.' },
  }),
];

export const WithLineClampInHeader = ({}) => {
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
          <PStyled>
            Заголовки таблицы по умолчанию выводятся в одну строку и при нехватке места сокращаются с помощью троеточия.
            Управлять высотой заголовков позволяют параметры headerLineClamp и headerExtraLineClamp:
          </PStyled>
          <PStyled>- headerLineClamp - задаёт максимальное количество строк основого текста в заголовке;</PStyled>
          <PStyled>
            - headerExtraLineClamp - задаёт максимальное количество строк дополнительного текста в заголовке.
          </PStyled>
          В примере ниже используется headerLineClamp = 2 и headerExtraLineClamp = 3
        </T>
      }
    >
      <TanstackTable table={table} headerLineClamp={2} headerExtraLineClamp={3} />
    </ExampleSection>
  );
};
