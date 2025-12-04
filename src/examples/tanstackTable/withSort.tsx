import { createColumnHelper, getCoreRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table';
import { useState } from 'react';
import { Link, ListItem, UnorderedList } from '@admiral-ds/react-ui';

import { ExampleSection, PStyled } from '#examples/-helpers';
import { CellText, defaultOptions, TanstackTable } from '#examples/-helpers/tanstackTable';

type Person = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
};

const defaultData: Person[] = [
  {
    firstName: 'tanner',
    lastName: 'linsley',
    age: 24,
    visits: 100,
    status: 'In Relationship',
    progress: 50,
  },
  {
    firstName: 'tandy',
    lastName: 'miller',
    age: 40,
    visits: 40,
    status: 'Single',
    progress: 80,
  },
  {
    firstName: 'joe',
    lastName: 'dirte',
    age: 45,
    visits: 20,
    status: 'Complicated',
    progress: 10,
  },
];

const columnHelper = createColumnHelper<Person>();

const columns = [
  columnHelper.accessor('firstName', {
    cell: (info) => <CellText>{info.getValue()}</CellText>,
    header: 'firstName',
    enableSorting: false,
  }),

  columnHelper.accessor((row) => row.lastName, {
    id: 'lastName',
    cell: (info) => (
      <CellText>
        <i>{info.getValue()}</i>
      </CellText>
    ),
    header: 'Last Name Last Name Last Name Last Name',
    size: 150,
  }),
  columnHelper.accessor('age', {
    header: 'Age LongLong Title',
    cell: (info) => <CellText>{info.getValue()}</CellText>,
    sortDescFirst: false,
    size: 150,
  }),
  columnHelper.accessor('visits', {
    header: 'Visits',
    cell: (info) => <CellText>{info.getValue()}</CellText>,
    sortDescFirst: false,
  }),
  columnHelper.accessor('status', {
    header: 'Status',
    cell: (info) => <CellText>{info.getValue()}</CellText>,
    enableSorting: false,
    size: 150,
    meta: { extraText: 'Description Status Description Status Description Status' },
  }),
  columnHelper.accessor('progress', {
    header: 'Profile Progress',
    cell: (info) => <CellText>{info.getValue()}</CellText>,
    sortDescFirst: false,
    enableResizing: false,
    meta: { gridColumnTemplate: '1fr' },
  }),
];

export const WithSort = () => {
  const [data, _setData] = useState(() => [...defaultData]);

  const tableSingleSort = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    ...defaultOptions,
    enableSorting: true,
    enableMultiSort: false,
  });

  const tableWithMultiSort = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    //для включения мультисортировки кликом мыши (по умолчанию включается кликом с shiftKey)
    isMultiSortEvent: () => true,
    ...defaultOptions,
    enableSorting: true,
  });

  return (
    <>
      <ExampleSection
        text={
          <>
            <PStyled>
              Если к сортируемому столбцу пока не применена сортировка, то значок-стрелка виден только при наведении на
              область заголовка и окрашивается в серый цвет. Если сортировка включена (первое нажатие - сортировка по
              возрастанию), то ее значок-стрелка остается видимым при снятии фокуса с заголовка и окрашивается в синий
              цвет. При повторном нажатии происходит сортировка в обратном порядке (стрелка меняет направление, по
              убыванию). При третьем нажатии сортировка отменяется.
            </PStyled>
            <PStyled>
              Дизайн-системой предусматривается многоуровневая сортировка. Рекомендуется использовать не более ДВУХ
              уровней. Логика сортировки (взаимосвязи) выстраивается пользователем. При этом у иконок сортировки
              появляются цифры, обозначающие порядок (приоритет) сортировки.
            </PStyled>
            <PStyled>
              <UnorderedList dimension="s">
                <ListItem>sortingFn - функция для создания кастомной сортировки;</ListItem>
                <ListItem>
                  sortDescFirst - параметр для отображения при первом клике сортировки от большего к меньшему (Некоторые
                  данные в таблице с сортировкой по умолчанию могут иметь различные порядки отображения при первом
                  клике);
                </ListItem>
                <ListItem>enableSorting - параметр отключения сортировки в конкретном столбце;</ListItem>
                <ListItem>
                  enableMultiSort - параметр отключения мультисортировки в конкретном столбце. По умолчанию
                  мультисортировка включена во всей таблице (для отключения во всей таблице этот флаг нужно передать в
                  useReactTable);
                </ListItem>
                <ListItem>invertSorting - параметр изменения порядка сортировки.</ListItem>
              </UnorderedList>
            </PStyled>
            <PStyled>
              Дополнительная документация настроек сортировки по
              <Link
                style={{ display: 'inline', marginLeft: '4px' }}
                href="https://tanstack.com/table/latest/docs/guide/sorting"
                target="_blank"
                dimension="s"
              >
                ссылке
              </Link>
            </PStyled>
            <PStyled>В примерах используется сортировка предоставляемая Tanstack table.</PStyled>
          </>
        }
      />
      <ExampleSection header="Single sort">
        <TanstackTable table={tableSingleSort} headerLineClamp={3} headerExtraLineClamp={2} />
      </ExampleSection>
      <ExampleSection header="Milti sort">
        <TanstackTable table={tableWithMultiSort} headerLineClamp={3} headerExtraLineClamp={2} />
      </ExampleSection>
    </>
  );
};
