import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getExpandedRowModel,
  type Row,
  type ColumnDef,
  type RowData,
} from '@tanstack/react-table';
import styled from 'styled-components';
import { useState } from 'react';
import { Link } from '@admiral-ds/react-ui';

import { ExampleSection, PStyled } from '#examples/-helpers';
import {
  CellText,
  ExpandCell,
  TanstackTable,
  HeaderCellWrapper,
  defaultOptions,
  type MetaRowProps,
  ExpandCellWrapper,
} from '#examples/-helpers/tanstackTable';

interface Person extends MetaRowProps<Person> {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
}

const ExpandedRowContent = styled.div`
  display: flex;
  flex: 1 0 auto;
  box-sizing: border-box;
  padding: 0 12px 11px 12px;
`;
const WrapperExpand = styled.div`
  width: 100%;
  background: var(--admiral-color-Cyan_Cyan10, ${(p) => p.theme.color['Cyan/Cyan 10']});
  padding: 16px;
`;
const Content = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  padding-left: 16px;
  background: var(--admiral-color-Special_ElevatedBG, ${(p) => p.theme.color['Special/Elevated BG']});
  & > div {
    margin-bottom: 8px;
  }
`;

const expandedRowRender = ({ row }: { row: Row<Person> }) => {
  return (
    <ExpandedRowContent>
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
    </ExpandedRowContent>
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
    meta: { expandedRowRender },
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
    meta: { expandedRowRender },
  },
];

const dimension = 'm';
const columns: ColumnDef<Person>[] = [
  {
    id: 'expand-column', // required id
    header: () => (
      <HeaderCellWrapper>
        <ExpandCellWrapper $dimension={dimension} />
      </HeaderCellWrapper>
    ),
    cell: ({ row }) => {
      const original = row.original as RowData & MetaRowProps<Person>;

      return row.getCanExpand() && original.meta?.expandedRowRender ? (
        <ExpandCell
          dimension={dimension}
          style={{ margin: 0, flexShrink: 0 }}
          isOpened={row.getIsExpanded()}
          disabled={original.meta?.disabled}
          onClick={row.getToggleExpandedHandler()}
        />
      ) : (
        <ExpandCellWrapper $dimension={dimension} />
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

export const ExpandedRow = () => {
  const [data, _setData] = useState(() => [...defaultData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getRowCanExpand: () => true,
    getExpandedRowModel: getExpandedRowModel(),
    ...defaultOptions,
    initialState: {
      columnPinning: {
        left: ['expand-column'],
      },
    },
  });

  return (
    <ExampleSection
      text={
        <>
          <PStyled>
            Отображение столбца детализации (столбец со стрелками) регулируется пользователем, в столбец необходимо
            передавать <i>id: 'expand-column'</i>. Стрелка позволяет развернуть строку и посмотреть более
            детализированную информацию о строке.
          </PStyled>
          <PStyled>
            C помощью функции expandedRowRender происходит рендер развернутой части строки (рендер детализированной
            информации).
          </PStyled>
          <PStyled>
            Дополнительная документация по
            <Link
              style={{ display: 'inline', marginLeft: '4px' }}
              href="https://tanstack.com/table/latest/docs/guide/expanding"
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
