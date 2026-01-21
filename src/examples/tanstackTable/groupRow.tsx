import {
  createColumnHelper,
  getCoreRowModel,
  getExpandedRowModel,
  useReactTable,
  type ExpandedState,
} from '@tanstack/react-table';
import { useMemo, useState } from 'react';

import {
  CellText,
  defaultOptions,
  TanstackTable,
  CheckboxCell,
  ExpandCell,
  HeaderCellWrapper,
  HeaderCell,
  ExpandContentWrapper,
  type MetaRowProps,
  type TanstackTableProps,
} from '#examples/-helpers/tanstackTable';
import { ExampleSection, PStyled } from '#examples/-helpers';

interface Transaction extends MetaRowProps<Transaction> {
  type?: string;
  date?: string;
  amount?: string;
  currency?: string;
  rate?: string;
  status?: string;
}

const defaultData: Transaction[] = [
  {
    meta: {
      groupTitle: 'Title first groupRow',
      subRows: [
        {
          meta: {
            groupTitle: 'Title second groupRow',
            subRows: [
              {
                type: 'МНО',
                date: new Date('2021-03-23').toLocaleDateString(),
                amount: new Intl.NumberFormat().format(32_500_000_000),
                currency: 'RUB',
                rate: '10 %',
                status: 'Выполнено',
              },
            ],
          },
        },
        {
          type: 'МНО',
          date: new Date('2021-03-23').toLocaleDateString(),
          amount: new Intl.NumberFormat().format(32_500_000_000),
          currency: 'RUB',
          rate: '10 %',
          status: 'Выполнено',
        },
        {
          type: 'МНО',
          date: new Date('2021-03-23').toLocaleDateString(),
          amount: new Intl.NumberFormat().format(32_500_000_000),
          currency: 'RUB',
          rate: '10 %',
          status: 'Выполнено',
          meta: {
            subRows: [
              {
                type: 'МНО',
                date: new Date('2021-03-23').toLocaleDateString(),
                amount: new Intl.NumberFormat().format(32_500_000_000),
                currency: 'RUB',
                rate: '10 %',
                status: 'Выполнено',
              },
            ],
          },
        },
      ],
    },
  },
  {
    type: 'МНО',
    date: new Date('2021-03-23').toLocaleDateString(),
    amount: new Intl.NumberFormat().format(32_500_000_000),
    currency: 'RUB',
    rate: '7 %',
    status: 'Выполнено',
    meta: {
      subRows: [
        {
          type: 'МНО',
          date: new Date('2021-03-23').toLocaleDateString(),
          amount: new Intl.NumberFormat().format(32_500_000_000),
          currency: 'RUB',
          rate: '10 %',
          status: 'Выполнено',
        },
        {
          type: 'МНО',
          date: new Date('2021-03-23').toLocaleDateString(),
          amount: new Intl.NumberFormat().format(32_500_000_000),
          currency: 'RUB',
          rate: '10 %',
          status: 'Выполнено',
          meta: {
            subRows: [
              {
                type: 'МНО',
                date: new Date('2021-03-23').toLocaleDateString(),
                amount: new Intl.NumberFormat().format(32_500_000_000),
                currency: 'RUB',
                rate: '10 %',
                status: 'Выполнено',
              },
            ],
          },
        },
      ],
    },
  },
  {
    type: 'МНО',
    date: new Date('2021-03-23').toLocaleDateString(),
    amount: new Intl.NumberFormat().format(50_000_000),
    currency: 'USD',
    rate: '3 %',
    status: 'В ожидании',
  },
  {
    type: 'МНО',
    date: new Date('2021-05-12').toLocaleDateString(),
    amount: new Intl.NumberFormat().format(700_000_000),
    currency: 'XRP',
    rate: '7 %',
    status: 'Выполнено',
  },
  {
    type: 'МНО',
    date: new Date('2021-03-23').toLocaleDateString(),
    amount: new Intl.NumberFormat().format(4_000_000),
    currency: 'USDT',
    rate: '5 %',
    status: 'Выполнено',
  },
];

export const GroupRowExample = () => {
  const [data, _setData] = useState(() => [...defaultData]);
  const [expanded, setExpanded] = useState<ExpandedState>({});
  const [expanded2, setExpanded2] = useState<ExpandedState>({});
  const [rowSelection, setRowSelection] = useState({});

  const dimension: TanstackTableProps<Transaction>['dimension'] = 'm';

  const columnHelper = createColumnHelper<Transaction>();

  const columns = useMemo(
    () => [
      columnHelper.accessor('type', {
        header: 'Тип сделки',
        cell: ({ row, getValue }) => {
          return (
            <ExpandContentWrapper $depth={row.getCanExpand() ? row.depth : row.depth + 1} $dimension={dimension}>
              {row.getCanExpand() && (
                <ExpandCell
                  dimension={dimension}
                  onClick={row.getToggleExpandedHandler()}
                  isOpened={row.getIsExpanded()}
                />
              )}
              <CellText>{getValue<boolean>()}</CellText>
            </ExpandContentWrapper>
          );
        },
        size: 141,
      }),
      columnHelper.accessor('date', {
        header: 'Дата сделки',
        cell: (info) => <CellText>{info.getValue()}</CellText>,
        size: 149,
      }),
      columnHelper.accessor('amount', {
        header: 'Сумма',
        cell: (info) => <CellText>{info.getValue()}</CellText>,
        size: 150,
        meta: { cellAlign: 'right' },
      }),
      columnHelper.accessor('currency', {
        header: 'Валюта',
        cell: (info) => <CellText>{info.renderValue()}</CellText>,
      }),
      columnHelper.accessor('rate', {
        header: 'Ставка',
        cell: (info) => <CellText>{info.renderValue()}</CellText>,
        size: 96,
        meta: { cellAlign: 'right' },
      }),
      columnHelper.accessor('status', {
        header: 'Статус',
        cell: (info) => <CellText>{info.renderValue()}</CellText>,
        size: 110,
      }),
    ],
    [],
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    state: {
      expanded,
    },
    onExpandedChange: setExpanded,
    getSubRows: (row) => row.meta?.subRows,
    getExpandedRowModel: getExpandedRowModel(),
    ...defaultOptions,
  });

  const columns2 = useMemo(
    () => [
      columnHelper.accessor('type', {
        header: ({ table, header }) => {
          return (
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
              <HeaderCell
                style={{
                  display: 'flex',
                  flex: 'unset',
                  position: 'unset',
                  width: `calc(100% - ${dimension === 'm' || dimension === 's' ? '44' : '56'}px)`,
                }}
                header={header}
                dimension={dimension}
                showResizer
                headerLineClamp={1}
                headerExtraLineClamp={1}
                title="Тип сделки"
              />
            </HeaderCellWrapper>
          );
        },
        cell: ({ row, getValue }) => {
          const rowSelected = row.getIsAllSubRowsSelected();
          const rowIndeterminate = row.getIsSomeSelected();
          const isRowHaveSubRows = row.getCanExpand();

          const handleToggleSubRows = () => {
            row.subRows.forEach((subRow) => {
              rowSelected || rowIndeterminate ? subRow.toggleSelected(false) : subRow.toggleSelected(true);
            });
          };

          return (
            <ExpandContentWrapper $depth={isRowHaveSubRows ? row.depth : row.depth + 1} $dimension={dimension}>
              {isRowHaveSubRows && (
                <ExpandCell
                  dimension={dimension}
                  isOpened={row.getIsExpanded()}
                  onClick={row.getToggleExpandedHandler()}
                />
              )}
              <CheckboxCell
                dimension={dimension}
                {...{
                  checked: isRowHaveSubRows ? rowSelected : row.getIsSelected(),
                  disabled: !isRowHaveSubRows && !row.getCanSelect(),
                  indeterminate: rowIndeterminate,
                  onChange: isRowHaveSubRows ? handleToggleSubRows : row.getToggleSelectedHandler(),
                }}
              />
              <CellText>{getValue<boolean>()}</CellText>
            </ExpandContentWrapper>
          );
        },
        size: 141,
      }),
      columnHelper.accessor('date', {
        header: 'Дата сделки',
        cell: (info) => <CellText>{info.getValue()}</CellText>,
        size: 149,
      }),
      columnHelper.accessor('amount', {
        header: 'Сумма',
        cell: (info) => <CellText>{info.getValue()}</CellText>,
        size: 150,
        meta: { cellAlign: 'right' },
      }),
      columnHelper.accessor('currency', {
        header: 'Валюта',
        cell: (info) => <CellText>{info.renderValue()}</CellText>,
      }),
      columnHelper.accessor('rate', {
        header: 'Ставка',
        cell: (info) => <CellText>{info.renderValue()}</CellText>,
        size: 96,
        meta: { cellAlign: 'right' },
      }),
      columnHelper.accessor('status', {
        header: 'Статус',
        cell: (info) => <CellText>{info.renderValue()}</CellText>,
        size: 110,
      }),
    ],
    [],
  );

  const table2 = useReactTable({
    data,
    columns: columns2,
    getCoreRowModel: getCoreRowModel(),
    state: {
      rowSelection,
      expanded: expanded2,
    },
    onExpandedChange: setExpanded2,
    getSubRows: (row) => row.meta?.subRows,
    onRowSelectionChange: setRowSelection,
    getExpandedRowModel: getExpandedRowModel(),
    enableRowSelection: (row) => !row.original.meta?.groupTitle && !row.original.meta?.subRows,
    ...defaultOptions,
  });

  return (
    <>
      <ExampleSection
        text={
          <PStyled>
            Строки в таблице можно группировать под общим заголовком. Для того чтобы задать группу строк, нужно в
            массиве с данными в строке добавить параметр meta передать subRows с параметрами строки или с заголовком
            группы.
          </PStyled>
        }
      />
      <ExampleSection header="Обычный пример">
        <TanstackTable table={table} />
      </ExampleSection>
      <ExampleSection
        header="Пример с чекбоксами"
        text={
          <>
            <PStyled>
              Группировку можно использовать вместе с чекбоксами. Если вы используете заголовки групп, то для
              корректного отображения чекбоксов необходимо в таблицу передавать параметр showCheckboxTitleGroup.
            </PStyled>
            <PStyled>
              Пример подходит для сценария, когда строка с данными, в которой есть подстроки, является заголовком, а её
              вложенность детализацией.
            </PStyled>
          </>
        }
      >
        <TanstackTable table={table2} showCheckboxTitleGroup />
      </ExampleSection>
    </>
  );
};
