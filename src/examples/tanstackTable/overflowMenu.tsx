import { useState, useMemo } from 'react';
import { createColumnHelper, getCoreRowModel, useReactTable, type Row } from '@tanstack/react-table';
import {
  ListItem,
  MenuItem,
  OverflowMenu,
  RowAction,
  TooltipHoc,
  UnorderedList,
  type RenderOptionProps,
} from '@admiral-ds/react-ui';
import DeleteOutline from '@admiral-ds/icons/build/system/DeleteOutline.svg?react';

import { defaultOptions, TanstackTable, CellText, type MetaRowProps } from '#examples/-helpers/tanstackTable';
import { ExampleSection, PStyled } from '#examples/-helpers';

const TooltipedRowAction = TooltipHoc(RowAction);

interface Person extends MetaRowProps<Person> {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
}

const items = [
  {
    id: '1',
    display: 'Вывести имя',
  },
  {
    id: '2',
    display: 'Вывести возраст',
  },
  {
    id: '3',
    display: 'Вывести статус',
  },
];

const Menu = ({ row, onVisibilityChange }: { row: Row<Person>; onVisibilityChange?: (isVisible: boolean) => void }) => {
  const model = useMemo(() => {
    return items.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItem dimension="m" {...options} key={item.id} role="option">
          {item.display}
        </MenuItem>
      ),
    }));
  }, []);

  return (
    <OverflowMenu
      onSelectItem={(id) => {
        if (id === '1') alert(row.original.firstName);
        if (id === '2') alert(row.original.age);
        if (id === '3') alert(row.original.status);
      }}
      onVisibilityChange={onVisibilityChange}
      aria-label="Overflow Menu component"
      dimension="m"
      isVertical
      items={model}
    />
  );
};

const defaultData: Person[] = [
  {
    firstName: 'tanner',
    lastName: 'linsleyss',
    age: 24,
    visits: 100,
    status: 'In Relationship',
    progress: 50,
    meta: {
      overflowMenuRender: (row: Row<Person>, onVisibilityChange?: (isVisible: boolean) => void) => (
        <Menu row={row} onVisibilityChange={onVisibilityChange} />
      ),
    },
  },
  {
    firstName: 'tandy',
    lastName: 'miller',
    age: 40,
    visits: 40,
    status: 'Single',
    progress: 80,
    meta: {
      actionRender: () => (
        <TooltipedRowAction renderContent={() => `Delete`} onClick={() => console.log('row action happens')}>
          <DeleteOutline />
        </TooltipedRowAction>
      ),
    },
  },
  {
    firstName: 'joe',
    lastName: 'dirte',
    age: 45,
    visits: 20,
    status: 'Complicated',
    progress: 10,
    meta: {
      overflowMenuRender: (row: Row<Person>, onVisibilityChange?: (isVisible: boolean) => void) => (
        <Menu row={row} onVisibilityChange={onVisibilityChange} />
      ),
    },
  },
];

const columnHelper = createColumnHelper<Person>();

const columns = [
  columnHelper.accessor('firstName', {
    header: 'FirstName',
    cell: (info) => <CellText>{info.renderValue()}</CellText>,
    size: 141,
  }),
  columnHelper.accessor((row) => row.lastName, {
    id: 'lastName',
    cell: (info) => <CellText>{info.renderValue()}</CellText>,
    header: 'Last Name',
    size: 149,
  }),
  columnHelper.accessor('age', {
    header: 'Age',
    cell: (info) => <CellText>{info.renderValue()}</CellText>,
    size: 100,
  }),
  columnHelper.accessor('visits', {
    header: 'Visits',
    cell: (info) => <CellText>{info.renderValue()}</CellText>,
    size: 150,
  }),
  columnHelper.accessor('status', {
    header: 'Status',
    cell: (info) => <CellText>{info.renderValue()}</CellText>,
    size: 150,
  }),
  columnHelper.accessor('progress', {
    header: 'Profile Progress',
    cell: (info) => <CellText>{info.renderValue()}</CellText>,
  }),
];

export const WithOverflowMenu = () => {
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
        text={
          <>
            <PStyled>
              Опционально со строками можно производить набор действий через OverflowMenu, которое по умолчанию
              появляется при ховере над строкой. При этом, чтобы не накладываться на возможный текст, под иконкой меню
              добавляется квадратная подложка белого цвета.
            </PStyled>
            <PStyled>
              Для того чтобы задать для строки OverflowMenu необходимо для строки прописать функцию overflowMenuRender.
              Входные параметры функции: сама строка и колбек onVisibilityChange. Колбек необходимо вызывать при
              открытии/закрытии меню для того, чтобы таблица могла управлять видимостью OverflowMenu. В качестве
              результата функция должна возвращать компонент OverflowMenu. Размер OverflowMenu следует задавать согласно
              правилу:
            </PStyled>
            <PStyled>
              <UnorderedList dimension="s">
                <ListItem>
                  для таблицы с dimension="s" или dimension="m" используется OverflowMenu c dimension="m"
                </ListItem>
                <ListItem>
                  для таблицы с dimension="l" или dimension="xl" используется OverflowMenu c dimension="l"
                </ListItem>
              </UnorderedList>
            </PStyled>
            <PStyled>
              Если подразумевается только одно действие над строкой, то вместо overflowMenuRender следует использовать
              функцию actionRender. На вход функция получает саму строку, а возвращает компонент RowAction
              (экспортируется из библиотеки Admiral), внутрь которого необходимо передать иконку для обозначения
              действия над строкой.
            </PStyled>
            <PStyled>
              Опционально допускается, чтобы OverflowMenu и иконки одиночных действий были видны постоянно, а не только
              по ховеру. Данное поведение можно задать с помощью параметра showRowsActions. Если showRowsActions=true,
              то все иконки меню и иконки одиночных действий во всех строках таблицы отображаются постоянно. При этом в
              строки, для которых не заданы действия, добавляется подложка, для того чтобы визуально был выделен столбец
              с действиями над строками
            </PStyled>
          </>
        }
      />
      <ExampleSection header="Пример с иконками действий над строками, которые видны только по ховеру">
        <TanstackTable table={table} />
      </ExampleSection>
      <ExampleSection header="Пример с постоянно видимыми иконками действий над строками">
        <TanstackTable table={table} showRowsActions />
      </ExampleSection>
    </>
  );
};
