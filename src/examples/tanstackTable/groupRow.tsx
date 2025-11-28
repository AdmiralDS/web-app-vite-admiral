import {
  createColumnHelper,
  getCoreRowModel,
  getExpandedRowModel,
  useReactTable,
  type ExpandedState,
} from '@tanstack/react-table';
import {
  CellText,
  defaultOptions,
  TanstackTable,
  CheckboxCell,
  ExpandCell,
  ExpandIcon,
  ExpandIconPlacement,
  WrapperTitleCell,
  WrapperExpandContent,
  type MetaRowProps,
  type TanstackTableProps,
  CellTh,
} from '#examples/-helpers/tanstackTable';
import { ExampleSection, PStyled } from '#examples/-helpers';
import { useState, useMemo } from 'react';
import { CheckboxField, T } from '@admiral-ds/react-ui';

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

const columnHelper = createColumnHelper<Transaction>();

export const GroupRowExample = () => {
  const [data, _setData] = useState(() => [...defaultData]);
  const [expanded, setExpanded] = useState<ExpandedState>({});
  const [expanded2, setExpanded2] = useState<ExpandedState>({});
  const [rowSelection, setRowSelection] = useState({});

  const dimension: TanstackTableProps<Transaction>['dimension'] = 'm';

  const columns = useMemo(
    () => [
      columnHelper.accessor('type', {
        header: 'Тип сделки',
        cell: ({ row, getValue }) => {
          return (
            <WrapperExpandContent $depth={row.getCanExpand() ? row.depth : row.depth + 1} $dimension={dimension}>
              {row.getCanExpand() && (
                <ExpandCell $dimension={dimension}>
                  <ExpandIconPlacement
                    dimension={dimension === 'm' || dimension === 's' ? 'mBig' : 'lBig'}
                    highlightFocus={false}
                    onClick={row.getToggleExpandedHandler()}
                  >
                    <ExpandIcon $isOpened={row.getIsExpanded()} aria-hidden />
                  </ExpandIconPlacement>
                </ExpandCell>
              )}
              <CellText>{getValue<boolean>()}</CellText>
            </WrapperExpandContent>
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

  // Подумать над созданием отдельного компонента, так как не очень хорошо, что пользователь будет вручную управлять стилями
  const columns2 = useMemo(
    () => [
      columnHelper.accessor('type', {
        header: ({ table, header }) => {
          return (
            <WrapperTitleCell className="th">
              <CheckboxCell $dimension={dimension}>
                <CheckboxField
                  dimension={dimension === 'm' || dimension === 's' ? 's' : 'm'}
                  type="checkbox"
                  {...{
                    checked: table.getIsAllRowsSelected(),
                    indeterminate: table.getIsSomeRowsSelected(),
                    onChange: table.getIsSomeRowsSelected()
                      ? () => setRowSelection({})
                      : table.getToggleAllRowsSelectedHandler(),
                  }}
                />
              </CheckboxCell>
              <CellTh
                as="div"
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
            </WrapperTitleCell>
          );
        },
        cell: ({ row, getValue }) => {
          return (
            <WrapperExpandContent $depth={row.getCanExpand() ? row.depth : row.depth + 1} $dimension={dimension}>
              {row.getCanExpand() && (
                <ExpandCell $dimension={dimension}>
                  <ExpandIconPlacement
                    dimension={dimension === 'm' || dimension === 's' ? 'mBig' : 'lBig'}
                    highlightFocus={false}
                    onClick={row.getToggleExpandedHandler()}
                  >
                    <ExpandIcon $isOpened={row.getIsExpanded()} aria-hidden />
                  </ExpandIconPlacement>
                </ExpandCell>
              )}
              <CheckboxCell $dimension={dimension}>
                <CheckboxField
                  dimension={dimension === 'm' || dimension === 's' ? 's' : 'm'}
                  {...{
                    checked: row.getIsSelected(),
                    disabled: !row.getCanSelect(),
                    indeterminate: row.getIsSomeSelected(),
                    onChange: row.getToggleSelectedHandler(),
                  }}
                />
              </CheckboxCell>
              <CellText>{getValue<boolean>()}</CellText>
            </WrapperExpandContent>
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
    ...defaultOptions,
  });

  return (
    <>
      <ExampleSection
        text={
          <>
            <T font="Body/Body 1 Long" as="div">
              <PStyled>
                Строки в таблице можно группировать под общим заголовком. Для того чтобы задать группу строк, нужно в
                массиве с данными в строке добавить параметр meta передать subRows с параметрами строки или с заголовком
                группы.
              </PStyled>
              <PStyled>
                Группировку можно использовать вместе с чекбоксами. Если вы используете заголовки групп, то для
                корректного отображения чекбоксов необходимо в таблицу передавать prop showCheckboxTitleGroup,
              </PStyled>
            </T>
          </>
        }
      >
        <TanstackTable table={table} />
      </ExampleSection>
      <ExampleSection text="Пример с чекбоксами">
        <TanstackTable table={table2} showCheckboxTitleGroup />
      </ExampleSection>
    </>
  );
};
