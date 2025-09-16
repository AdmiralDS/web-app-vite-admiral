import {
  createColumnHelper,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
  type Column,
  type ColumnFiltersState,
} from '@tanstack/react-table';
import styled from 'styled-components';
import { useState } from 'react';

import { TanstackTable } from '#examples/-helpers/tanstackTable/Table';
import { Button, DateField, FieldSet, RadioButton, T, TextInput } from '@admiral-ds/react-ui';
import AcceptSolid from '@admiral-ds/icons/build/category/AcceptSolid.svg?react';

interface Person {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  dateOfBirth: string;
}

const defaultData: Person[] = [
  {
    firstName: 'tanner',
    lastName: 'linsley',
    age: 24,
    visits: 100,
    status: 'In Relationship',
    dateOfBirth: new Date('2001-08-06').toLocaleDateString(),
  },
  {
    firstName: 'tandy',
    lastName: 'miller',
    age: 40,
    visits: 40,
    status: 'Single',
    dateOfBirth: new Date('1985-08-06').toLocaleDateString(),
  },
  {
    firstName: 'joe',
    lastName: 'dirte',
    age: 45,
    visits: 20,
    status: 'Complicated',
    dateOfBirth: new Date('1980-11-06').toLocaleDateString(),
  },
];

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  overflow: hidden;
  background: var(--admiral-color-Neutral_Neutral00, ${(p) => p.theme.color['Neutral/Neutral 00']});
`;

const WrapperFilter = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  max-width: 300px;
`;
const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 28px;
  & > button:first-child {
    margin-right: 8px;
  }
`;

export const FilterExample = () => {
  const [data, _setData] = useState(() => [...defaultData]);

  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selected, setSelected] = useState<string>('');

  const columnHelper = createColumnHelper<Person>();

  const onFilterMenuClickOutside = (closeMenu: () => void) => closeMenu();

  const renderInputFilter = (closeMenu: () => void, column: Column<any, unknown>) => (
    <WrapperFilter>
      <TextInput
        value={inputValue}
        onChange={(e: any) => {
          setInputValue((e.target as HTMLInputElement).value);
        }}
      />
      <ButtonWrapper>
        <Button
          dimension="m"
          onClick={() => {
            closeMenu();
            column.setFilterValue(inputValue);
          }}
        >
          Применить
        </Button>
        <Button
          dimension="m"
          onClick={() => {
            closeMenu();
            setInputValue('');
            column.setFilterValue('');
          }}
        >
          Очистить
        </Button>
      </ButtonWrapper>
    </WrapperFilter>
  );

  const renderDateFilter = (closeMenu: () => void, column: Column<any, unknown>) => (
    <WrapperFilter>
      <DateField
        label="Выберите дату:"
        value={selectedDate}
        onChange={(e: any) => {
          setSelectedDate((e.target as HTMLInputElement).value);
        }}
      />
      <ButtonWrapper>
        <Button
          dimension="m"
          onClick={() => {
            closeMenu();
            column.setFilterValue(selectedDate);
          }}
        >
          Применить
        </Button>
        <Button
          dimension="m"
          onClick={() => {
            closeMenu();
            column.setFilterValue('');
          }}
        >
          Очистить
        </Button>
      </ButtonWrapper>
    </WrapperFilter>
  );

  const renderNumFilter = (closeMenu: () => void, column: any) => (
    <WrapperFilter>
      <FieldSet
        legend="Варианты фильтрации:"
        onChange={(e) => {
          setSelected((e.target as HTMLInputElement).value);
        }}
      >
        <RadioButton value="1" name="test" defaultChecked={'1' === selected}>
          Больше 30
        </RadioButton>
        <RadioButton value="2" name="test" defaultChecked={'2' === selected}>
          Меньше 30
        </RadioButton>
      </FieldSet>
      <ButtonWrapper>
        <Button
          dimension="m"
          onClick={() => {
            closeMenu();
            column.setFilterValue(selected);
          }}
        >
          Применить
        </Button>
        <Button
          dimension="m"
          onClick={() => {
            closeMenu();
            column.setFilterValue('');
          }}
        >
          Очистить
        </Button>
      </ButtonWrapper>
    </WrapperFilter>
  );

  const columns = [
    columnHelper.accessor('firstName', {
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
      header: 'firstName',
      enableColumnFilter: false,
    }),
    columnHelper.accessor((row) => row.lastName, {
      id: 'lastName',
      cell: (info) => <i>{info.getValue()}</i>,
      header: 'Last Name',
      footer: (info) => info.column.id,
      meta: { cellAlign: 'right', filter: { renderFilter: renderInputFilter, onFilterMenuClickOutside } },
    }),
    columnHelper.accessor('age', {
      header: 'Age',
      cell: (info) => info.renderValue(),
      footer: (info) => info.column.id,
      meta: { filter: { renderFilter: renderNumFilter, onFilterMenuClickOutside } },
      filterFn: (row, _, filterValue) => (filterValue === '1' ? row.original.age > 30 : row.original.age <= 30),
    }),
    columnHelper.accessor('visits', {
      header: 'Visits',
      footer: (info) => info.column.id,
      meta: {
        filter: {
          renderFilter: () => (
            <WrapperFilter>
              <T font="Body/Body 2 Long" as="div">
                Пример кастомизации иконки фильтра с помощью функции renderFilterIcon
              </T>
            </WrapperFilter>
          ),
          onFilterMenuClickOutside,
          renderFilterIcon: () => <AcceptSolid />,
          onFilterMenuClose: () => console.log('filter menu close'),
          onFilterMenuOpen: () => console.log('filter menu open'),
        },
      },
    }),
    columnHelper.accessor('dateOfBirth', {
      header: 'Date Of Birth',
      footer: (info) => info.column.id,
      meta: { filter: { renderFilter: renderDateFilter, onFilterMenuClickOutside } },
    }),
    columnHelper.accessor('status', {
      header: 'Status',
      footer: (info) => info.column.id,
      enableColumnFilter: false,
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    filterFns: {},
    state: {
      columnFilters,
    },
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(), //client side filtering
  });

  return (
    <Wrapper>
      <TanstackTable table={table} />
    </Wrapper>
  );
};
