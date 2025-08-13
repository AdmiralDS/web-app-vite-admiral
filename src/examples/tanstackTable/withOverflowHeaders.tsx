import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import {
  Body,
  HeaderTr,
  HeaderCellTh,
  HeaderWrapper,
  TableContainer,
  BodyTr,
  CellTd,
  ThWrapper,
  RowLine,
} from '#examples/-helpers/tanstackTable/styled';
import styled from 'styled-components';
import { TitleText } from '#examples/-helpers/tanstackTable/TitleText';
import { useState } from 'react';

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

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  margin: 20px;
  overflow: hidden;
  background: var(--admiral-color-Neutral_Neutral00, ${(p) => p.theme.color['Neutral/Neutral 00']});
`;

const columnHelper = createColumnHelper<Person>();

const columns = [
  columnHelper.accessor('firstName', {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.lastName, {
    id: 'lastName',
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Last Name1</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('age', {
    header: () => 'Age LongLong Title',
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('visits', {
    header: () => <span>Visits</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('status', {
    header: 'Status',
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('progress', {
    header: 'Profile Progress',
    footer: (info) => info.column.id,
  }),
];

export const WithOverflowHeaders = () => {
  const [data, _setData] = useState(() => [...defaultData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Wrapper>
      <TableContainer>
        <HeaderWrapper>
          {table.getHeaderGroups().map((headerGroup) => (
            <HeaderTr $dimension="m" key={headerGroup.id}>
              {headerGroup.headers.map((header, id) => {
                return (
                  <HeaderCellTh style={{ maxWidth: '100px' }} $dimension="m" key={header.id}>
                    <ThWrapper $dimension="m">
                      <TitleText
                        lineClamp={1}
                        title={
                          header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())
                        }
                      />
                      {headerGroup.headers.length !== id + 1 && <RowLine />}
                    </ThWrapper>
                  </HeaderCellTh>
                );
              })}
            </HeaderTr>
          ))}
        </HeaderWrapper>
        <Body>
          {table.getRowModel().rows.map((row) => (
            <BodyTr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <CellTd $dimension="m" key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </CellTd>
              ))}
            </BodyTr>
          ))}
        </Body>
      </TableContainer>
    </Wrapper>
  );
};
