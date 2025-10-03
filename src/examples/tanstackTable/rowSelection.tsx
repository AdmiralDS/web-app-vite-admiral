import { getCoreRowModel, getSortedRowModel, useReactTable, type ColumnDef } from '@tanstack/react-table';
import { useMemo, useState } from 'react';

import { TanstackTable } from '#examples/-helpers/tanstackTable/Table';
import { CheckboxField } from '@admiral-ds/react-ui';
import { ExampleSection } from '#examples/-helpers';
import { CellText } from '#examples/-helpers/tanstackTable/style';

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

export const RowSelection = () => {
  const [data, _setData] = useState(() => [...defaultData]);
  const [rowSelection, setRowSelection] = useState({});

  const columns = useMemo<ColumnDef<Person>[]>(
    () => [
      {
        id: 'checkbox-column', // required id
        header: ({ table }) => (
          <CheckboxField
            dimension="s"
            type="checkbox"
            {...{
              checked: table.getIsAllRowsSelected(),
              indeterminate: table.getIsSomeRowsSelected(),
              onChange: table.getIsSomeRowsSelected()
                ? () => setRowSelection({})
                : table.getToggleAllRowsSelectedHandler(),
            }}
          />
        ),
        cell: ({ row }) => (
          <div>
            <CheckboxField
              dimension="s"
              {...{
                checked: row.getIsSelected(),
                disabled: !row.getCanSelect(),
                indeterminate: row.getIsSomeSelected(),
                onChange: row.getToggleSelectedHandler(),
              }}
            />
          </div>
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
    getSortedRowModel: getSortedRowModel(),
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
  });

  return (
    <ExampleSection>
      <TanstackTable table={table} />
    </ExampleSection>
  );
};
