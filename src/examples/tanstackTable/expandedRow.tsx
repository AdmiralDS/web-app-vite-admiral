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

import { TanstackTable, type MetaRowProps } from '#examples/-helpers/tanstackTable/Table';
import { IconPlacement } from '@admiral-ds/react-ui';
import ChevronDownOutline from '@admiral-ds/icons/build/system/ChevronDownOutline.svg?react';
import { ExampleSection } from '#examples/-helpers';

export const ExpandIcon = styled(ChevronDownOutline)<{ $isOpened?: boolean }>`
  transition: transform 0.3s ease-in-out;
  transform: rotate(${(p) => (p.$isOpened ? 180 : 0)}deg);
`;

export const ExpandIconPlacement = styled(IconPlacement)`
  margin: 0;
  flex-shrink: 0;
`;

export const ExpandCell = styled.div`
  width: 44px;
  padding: 10px 0px 9px 12px;

  box-sizing: border-box;
  overflow: hidden;
  text-align: start;
`;

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

  const columns: ColumnDef<Person>[] = [
    {
      id: 'expand-column', // required id
      header: () => null,
      cell: ({ row }) => {
        const original = row.original as RowData & MetaRowProps<Person>;

        return (
          row.getCanExpand() && (
            <ExpandCell>
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
      cell: ({ row, getValue }) => (
        <div
          style={{
            // Since rows are flattened by default,
            // we can use the row.depth property
            // and paddingLeft to visually indicate the depth
            // of the row
            paddingLeft: `${row.depth * 2}rem`,
          }}
        >
          {getValue<string>()}
        </div>
      ),
    },
    {
      accessorFn: (row) => row.lastName,
      id: 'lastName',
      cell: (info) => info.getValue(),
      header: 'Last Name',
    },
    {
      accessorKey: 'age',
      header: 'Age',
    },
    {
      accessorKey: 'visits',
      header: 'Visits',
    },
    {
      accessorKey: 'status',
      header: 'Status',
    },
    {
      accessorKey: 'progress',
      header: 'Profile Progress',
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
