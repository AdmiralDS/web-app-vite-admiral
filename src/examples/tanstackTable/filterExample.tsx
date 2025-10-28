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

import { Button, DateField, FieldSet, Link, RadioButton, T, TextInput } from '@admiral-ds/react-ui';
import AcceptSolid from '@admiral-ds/icons/build/category/AcceptSolid.svg?react';
import { ExampleSection, PStyled } from '#examples/-helpers';
import { CellText, defaultOptions, TanstackTable } from '#examples/-helpers/tanstackTable';

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
      cell: (info) => <CellText>{info.renderValue()}</CellText>,
      footer: (info) => info.column.id,
      header: 'firstName',
      enableColumnFilter: false,
      size: 140,
    }),
    columnHelper.accessor((row) => row.lastName, {
      id: 'lastName',
      cell: (info) => <CellText>{info.renderValue()}</CellText>,
      header: 'Last Name',
      footer: (info) => info.column.id,
      meta: { cellAlign: 'right', filter: { renderFilter: renderInputFilter, onFilterMenuClickOutside } },
      size: 160,
    }),
    columnHelper.accessor('age', {
      header: 'Age',
      cell: (info) => <CellText>{info.renderValue()}</CellText>,
      footer: (info) => info.column.id,
      meta: { filter: { renderFilter: renderNumFilter, onFilterMenuClickOutside } },
      filterFn: (row, _, filterValue) => (filterValue === '1' ? row.original.age > 30 : row.original.age <= 30),
      size: 100,
    }),
    columnHelper.accessor('visits', {
      header: 'Visits',
      footer: (info) => info.column.id,
      cell: (info) => <CellText>{info.renderValue()}</CellText>,
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
      size: 120,
    }),
    columnHelper.accessor('dateOfBirth', {
      header: 'Date Of Birth',
      footer: (info) => info.column.id,
      meta: { filter: { renderFilter: renderDateFilter, onFilterMenuClickOutside } },
      cell: (info) => <CellText>{info.renderValue()}</CellText>,
      size: 160,
    }),
    columnHelper.accessor('status', {
      header: 'Status',
      footer: (info) => info.column.id,
      cell: (info) => <CellText>{info.renderValue()}</CellText>,
      enableColumnFilter: false,
      size: 140,
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
    ...defaultOptions,
    enableSorting: true,
  });

  return (
    <ExampleSection
      text={
        <T font="Body/Body 1 Long" as="div">
          <PStyled>
            Опционально в заголовках можно включать фильтрацию столбцов. При этом у заголовка будет появляться иконка
            фильтрации, по нажатию на которую будет открываться меню фильтрации.
          </PStyled>
          <PStyled>
            Для того чтобы задать фильтр для столбца достаточно задать для него параметр renderFilter - функцию, которая
            будет отрисовывать содержимое меню фильтра. Данная функция имеет в качестве входного параметра:
          </PStyled>
          <PStyled>closeMenu - колбек, при вызове которого происходит закрытие меню фильтра;</PStyled>
          <PStyled>
            Для создания кастомной фильтрации в столбец нужно передавать параметр filterFn, которое будте возвращать
            условие фильтра
          </PStyled>
          <PStyled>
            Меню фильтра является произвольным и полностью контролируется пользователем. Закрытие меню и установка
            фильтра в активное/неактивное состояние производится пользователем внутри функции renderFilter с помощью
            вышеописанных колбеков. С помощью параметров filterMenuAlignSelf, filterMenuClassName, filterMenuCssMixin и
            filterMenuStyle пользователь также может управлять выравниваем фильтра, добавлять className и изменять его
            стили.
          </PStyled>
          <PStyled>
            Иконка фильтрации может быть любой (шестеренка, фильтр и т.д.). По умолчанию в качестве иконки фильтра
            используется иконка MoreHorizontalOutline. Дефолтную иконку можно заменить с помощью параметра
            renderFilterIcon.
          </PStyled>
          <PStyled>
            Кроме того для столбца можно задать колбеки onFilterMenuOpen и onFilterMenuClose, которые будут срабатывать
            соответственно при открытии и закрытии меню фильтра. А также для столбца можно задать колбек
            onFilterMenuClickOutside, который будет срабатывать при клике вне меню фильтра. Данный колбек имеет в
            качестве входных параметров объект со свойством closeMenu и параметр event.
          </PStyled>
          <div style={{ display: 'flex' }}>
            Дополнительная документация по
            <Link
              style={{ marginLeft: '4px' }}
              href="https://tanstack.com/table/latest/docs/guide/column-filtering"
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
