import {
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  type Row,
  getExpandedRowModel,
  type ColumnDef,
  type RowData,
} from '@tanstack/react-table';
import styled from 'styled-components';
import { useState } from 'react';

import { ExampleSection } from '#examples/-helpers';
import {
  CellText,
  ExpandCell,
  ExpandIcon,
  ExpandIconPlacement,
  WrapperTitleCell,
} from '#examples/-helpers/tanstackTable/style';
import { TanstackTable, type MetaRowProps } from '#examples/-helpers/tanstackTable';

interface Person extends MetaRowProps<Person> {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
}

const expandedRowRender = ({ row }: { row: Row<Person> }) => {
  return (
    <WrapperExpand>
      <Content>
        <div>firstName: {row.original.firstName}</div>
        <div>lastName: {row.original.lastName}</div>
        <div>age: {row.original.age}</div>
        <div>visits: {row.original.visits}</div>
        <div>status: {row.original.status}</div>
        <div>progress: {row.original.progress}</div>
      </Content>
    </WrapperExpand>
  );
};

const defaultData: Person[] = [
  {
    firstName: 'tanner',
    lastName: 'linsley',
    age: 24,
    visits: 100,
    status: 'In Relationship',
    progress: 50,
    meta: { expandedRowRender: expandedRowRender },
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
    meta: { expandedRowRender: expandedRowRender },
  },
];

const WrapperExpand = styled.div`
  display: flex;
  width: 100%;
  background: var(--admiral-color-Cyan_Cyan10, ${(p) => p.theme.color['Cyan/Cyan 10']});
  padding: 16px;
`;
const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  padding-left: 16px;
  background: var(--admiral-color-Special_ElevatedBG, ${(p) => p.theme.color['Special/Elevated BG']});
  & > div {
    margin-bottom: 8px;
  }
`;

export const ExpandedRow = () => {
  const [data, _setData] = useState(() => [...defaultData]);

  const dimension = 'm';

  const columns: ColumnDef<Person>[] = [
    {
      id: 'expand-column', // required id
      header: () => (
        <WrapperTitleCell>
          <ExpandCell $dimension={dimension} />
        </WrapperTitleCell>
      ),
      cell: ({ row }) => {
        const original = row.original as RowData & MetaRowProps<Person>;

        return (
          row.getCanExpand() && (
            <ExpandCell $dimension={dimension}>
              {original.meta?.expandedRowRender && (
                <ExpandIconPlacement
                  style={{ margin: 0, flexShrink: 0 }}
                  dimension="mBig"
                  disabled={original.meta?.disabled}
                  highlightFocus={false}
                  onClick={row.getToggleExpandedHandler()}
                >
                  <ExpandIcon $isOpened={row.getIsExpanded()} aria-hidden />
                </ExpandIconPlacement>
              )}
            </ExpandCell>
          )
        );
      },
    },
    {
      accessorKey: 'firstName',
      header: 'First Name',
      cell: ({ getValue }) => <CellText>{getValue<string>()}</CellText>,
    },
    {
      accessorFn: (row) => row.lastName,
      id: 'lastName',
      cell: ({ getValue }) => <CellText>{getValue<string>()}</CellText>,
      header: 'Last Name',
    },
    {
      accessorKey: 'age',
      header: 'Age',
      cell: ({ getValue }) => <CellText>{getValue<string>()}</CellText>,
    },
    {
      accessorKey: 'visits',
      header: 'Visits',
      cell: ({ getValue }) => <CellText>{getValue<string>()}</CellText>,
    },
    {
      accessorKey: 'status',
      header: 'Status',
      cell: ({ getValue }) => <CellText>{getValue<string>()}</CellText>,
    },
    {
      accessorKey: 'progress',
      header: 'Profile Progress',
      cell: ({ getValue }) => <CellText>{getValue<string>()}</CellText>,
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getRowCanExpand: () => true,
    getExpandedRowModel: getExpandedRowModel(),
    initialState: {
      columnPinning: {
        left: ['expand-column'],
      },
    },
  });

  return (
    <ExampleSection>
      <TanstackTable table={table} />
    </ExampleSection>
  );
};
