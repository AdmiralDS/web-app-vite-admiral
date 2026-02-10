import { getCoreRowModel, useReactTable, type ColumnDef } from '@tanstack/react-table';
import { useMemo, useState } from 'react';
import { Link, ListItem, UnorderedList } from '@admiral-ds/react-ui';

import {
  CellText,
  defaultOptions,
  TanstackTable,
  CheckboxCell,
  HeaderCellWrapper,
} from '#examples/-helpers/tanstackTable';
import { ExampleSection, PStyled } from '#examples/-helpers';

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
const dimension = 'm';

export const RowSelection = () => {
  const [data, _setData] = useState(() => [...defaultData]);
  const [rowSelection, setRowSelection] = useState({});

  const columns = useMemo<ColumnDef<Person>[]>(
    () => [
      {
        id: 'checkbox-column', // required id
        header: ({ table }) => (
          <HeaderCellWrapper>
            <CheckboxCell
              dimension={dimension}
              {...{
                checked: table.getIsAllRowsSelected(),
                indeterminate: table.getIsSomeRowsSelected(),
                onChange: table.getIsSomeRowsSelected()
                  ? () => setRowSelection({})
                  : table.getToggleAllRowsSelectedHandler(),
              }}
            />
          </HeaderCellWrapper>
        ),
        cell: ({ row }) => (
          <CheckboxCell
            dimension={dimension}
            {...{
              checked: row.getIsSelected(),
              disabled: !row.getCanSelect(),
              indeterminate: row.getIsSomeSelected(),
              onChange: row.getToggleSelectedHandler(),
            }}
          />
        ),
      },
      {
        id: 'firstName',
        header: 'First Name',
        cell: ({ row }) => <CellText>{row.original.firstName}</CellText>,
      },
      { id: 'lastName', header: 'Last Name', cell: ({ row }) => <CellText>{row.original.lastName}</CellText> },
      { id: 'age', header: 'Age', cell: ({ row }) => <CellText>{row.original.age}</CellText> },
      { id: 'visits', header: 'Visits', cell: ({ row }) => <CellText>{row.original.visits}</CellText> },
      { id: 'status', header: 'Status', cell: ({ row }) => <CellText>{row.original.status}</CellText> },
      { id: 'progress', header: 'Progress', cell: ({ row }) => <CellText>{row.original.progress}</CellText> },
    ],
    [],
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    state: {
      rowSelection,
    },
    enableRowSelection: true, //enable row selection for all rows
    // enableRowSelection: row => row.original.age > 18, // or enable row selection conditionally per row
    onRowSelectionChange: setRowSelection,
    initialState: {
      columnPinning: {
        left: ['checkbox-column'],
      },
    },
    ...defaultOptions,
  });

  return (
    <ExampleSection
      text={
        <>
          <PStyled>
            Чекбокс в шапке таблицы позволяет выбрать все строки (если не выбрано ни одной строки), либо отменить
            выбранные до этого строки. Отображение столбца с чекбоксами регулируется пользователем, в столбец необходимо
            передавать <i>id: 'checkbox-column'</i>.
          </PStyled>
          <PStyled as="div">
            <UnorderedList dimension="s">
              <ListItem>
                Если необходимо отключить чекбокс отдельных строк, то следует в useReactTable передать{' '}
                <i>
                  <code>enableRowSelection: (row) {`=>`} условие</code>
                </i>
                .
              </ListItem>
              <ListItem>
                Если нужно включить выбор только одной строки, то в useReactTable нужно передать{' '}
                <i>
                  <code>enableMultiRowSelection: false</code>
                </i>
                .
              </ListItem>
            </UnorderedList>
          </PStyled>
          <PStyled>
            Дополнительная документация по
            <Link
              style={{ display: 'inline', marginLeft: '4px' }}
              href="https://tanstack.com/table/latest/docs/guide/row-selection"
              target="_blank"
              dimension="s"
            >
              ссылке
            </Link>
          </PStyled>
        </>
      }
    >
      <TanstackTable table={table} />
    </ExampleSection>
  );
};
