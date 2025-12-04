import { useState } from 'react';
import { getCoreRowModel, useReactTable } from '@tanstack/react-table';

import { CellText, TanstackTable, defaultOptions } from '#examples/-helpers/tanstackTable';
import { ExampleSection, PStyled } from '#examples/-helpers';

const date = new Date('2020-08-06').toLocaleDateString();

const columns1 = [...Array(2)].map((_, i) => {
  return {
    accessorKey: i.toString(),
    header: 'Column ' + i.toString(),
    cell: (info: any) => <CellText>{info.renderValue()}</CellText>,
    size: 300,
  };
});
const rows1 = [...Array(1000)].map(() => ({
  ...Object.fromEntries(columns1.map((col) => [col.accessorKey, date])),
}));

const columns2 = [...Array(2)].map((_, i) => {
  return {
    accessorKey: (i + 2).toString(),
    header: 'Column ' + i.toString(),
    cell: (info: any) => info.renderValue(),
    size: 300,
  };
});
const rowsVariable = new Array(1000).fill(true).map(() => 40 + Math.round(Math.random() * 100));
const rows2 = rowsVariable.map((rowHeight) => ({
  ...Object.fromEntries(
    columns2.map((col) => [
      col.accessorKey,
      // 1px - вычитаем ширину нижнего подчеркивания строки
      <CellText style={{ height: `${rowHeight - 1}px` }}>{date}</CellText>,
    ]),
  ),
}));

export const FixedVirtualScrollExample = () => {
  const [data, _setData] = useState(rows1);
  const [data2, _setData2] = useState(rows2);

  const table1 = useReactTable({
    data,
    columns: columns1,
    getCoreRowModel: getCoreRowModel(),
    ...defaultOptions,
  });

  const table2 = useReactTable({
    data: data2,
    columns: columns2,
    getCoreRowModel: getCoreRowModel(),
    ...defaultOptions,
  });

  return (
    <>
      <ExampleSection
        text={
          <>
            <PStyled>
              В случае если в таблице необходимо отобразить большое количество строк, возможно использовать функцию
              виртуального скролла. Компонент предоставляет два вида виртуального скролла: виртуальный скролл для строк
              с фиксированной высотой и виртуальный скролл для строк с динамической высотой.
            </PStyled>
            <PStyled>
              Для того чтобы активировать виртуальный скролл для строк с фиксированной высотой, необходимо задать
              параметр virtualScroll={'{{vertical: true}}'}. По умолчанию высота фиксированной строки вычисляется в
              зависимости от переданного в таблицу параметра dimension. Например, для размера таблицы m высота строки по
              умолчанию составляет 40px (если содержимое ячеек занимает одну строку в высоту и для ячеек не было задано
              каких-то кастомных стилей), для размеров s - 32px, l - 48px, xl - 56px. Для того чтобы изменить дефолтную
              высоты строки, необходимо передать в virtualScroll параметр fixedRowHeight с нужным значением.
            </PStyled>
            <PStyled>
              Примечание: таблица обязательно должна иметь четко заданную высоту. Это нужно для того, чтобы тело таблицы
              не растягивалось до размера её содержимого.
            </PStyled>
          </>
        }
      />
      <ExampleSection header="Пример виртуализации с фиксированной высотой строки">
        <TanstackTable
          table={table1}
          greyHeader
          style={{ height: '350px' }}
          virtualScroll={{ fixedRowHeight: () => 40, vertical: true }}
        />
      </ExampleSection>
      <ExampleSection
        header="Пример виртуализации с переменной фиксированной высотой строки"
        text="Функция fixedRowHeight в качестве входного параметра получает индекс строки, который может быть использован для фиксирования строк с различной высотой."
      >
        <TanstackTable
          table={table2}
          greyHeader
          style={{ height: '350px' }}
          virtualScroll={{ fixedRowHeight: (index) => rowsVariable[index], vertical: true }}
        />
      </ExampleSection>
    </>
  );
};
