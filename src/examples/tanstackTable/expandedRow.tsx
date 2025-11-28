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

import { ExampleSection, PStyled } from '#examples/-helpers';

import {
  CellText,
  ExpandCell,
  ExpandedRowContent,
  ExpandIcon,
  ExpandIconPlacement,
  TanstackTable,
  WrapperTitleCell,
  type MetaRowProps,
} from '#examples/-helpers/tanstackTable';
import { Link, T } from '@admiral-ds/react-ui';

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

const dimension = 'm';
const columns: ColumnDef<Person>[] = [
  {
    id: 'expand-column', // required id
    header: () => (
      <WrapperTitleCell className="th">
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

export const ExpandedRow = () => {
  const [data, _setData] = useState(() => [...defaultData]);

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
    <ExampleSection
      text={
        <T font="Body/Body 1 Long" as="div">
          <PStyled>
            Отображение столбца детализации (столбец со стрелками) регулируется пользователем, в столбец необходимо
            передавать <i>id: 'expand-column'</i>. Стрелка позволяет развернуть строку и посмотреть более
            детализированную информацию о строке.
          </PStyled>
          <PStyled>
            C помощью функции expandedRowRender происходит рендер развернутой части строки (рендер детализированной
            информации).
          </PStyled>
          <div style={{ display: 'flex' }}>
            Дополнительная документация по
            <Link
              style={{ marginLeft: '4px' }}
              href="https://tanstack.com/table/latest/docs/guide/expanding"
              target="_blank"
            >
              ссылке
            </Link>
          </div>
        </T>
      }
    >
      <TanstackTable table={table} />
    </ExampleSection>
  );
};
