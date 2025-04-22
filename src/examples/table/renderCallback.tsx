import { useState } from 'react';
import { Table, T, Badge } from '@admiral-ds/react-ui';
import type { Column, TableRow } from '@admiral-ds/react-ui';
import styled from 'styled-components';
import { ExampleSection, PStyled } from '#examples/-helpers';

const AmountCell = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;

  &[data-disabled='true'] {
    & > * {
      color: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
    }
  }
`;

const numberFormatter = new Intl.NumberFormat();

type RowData = TableRow & {
  transfer_type: string;
  transfer_date: string;
  transfer_amount: React.ReactNode;
  currency: string;
  rate: number;
};

const rowList: RowData[] = [
  {
    id: '0002',
    transfer_type: 'МНО',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(32_500_000_000)}</T>
      </AmountCell>
    ),
    currency: 'RUB',
    rate: 2.5,
  },
  {
    id: '0003',
    transfer_type: 'МНО',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(18_000_000)}</T>
      </AmountCell>
    ),
    currency: 'RUB',
    rate: 2.5,
  },
  {
    id: '0004',
    transfer_type: 'МНО',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(32_500_000_000)}</T>
      </AmountCell>
    ),
    currency: 'RUB',
    rate: 2.5,
  },
  {
    id: '0001',
    transfer_type: 'Group name',
    expanded: false,
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(18_000_000)}</T>
      </AmountCell>
    ),
    currency: 'RUB',
    rate: 2.5,
    groupTitle: 'Группа',
    renderGroupTitle(row: RowData): React.ReactNode {
      return (
        <div style={{ fontSize: '36px' }}>
          {row.transfer_type} - {row.transfer_date}
        </div>
      );
    },
    groupRows: ['0007', '0008'],
  },
  {
    id: '0005',
    transfer_type: 'МНО',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(18_000_000)}</T>
      </AmountCell>
    ),
    currency: 'RUB',
    rate: 2.5,
  },
  {
    id: '0006',
    transfer_type: 'МНО',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(32_500_000_000)}</T>
      </AmountCell>
    ),
    currency: 'RUB',
    rate: 2.5,
  },
  {
    id: '0007',
    transfer_type: 'GR1',
    transfer_date: new Date('2020-07-18').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(200)}</T>
      </AmountCell>
    ),
    currency: 'RUB',
    rate: 2.5,
  },
  {
    id: '0008',
    transfer_type: 'GR1',
    transfer_date: new Date('2020-08-25').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(100)}</T>
      </AmountCell>
    ),
    currency: 'RUB',
    rate: 2.5,
  },
];

const columnList: Column[] = [
  {
    name: 'transfer_type',
    title: 'Тип сделки',
    width: '20%',
    renderCell(data, _row, idx): React.ReactNode {
      return (
        <div style={{ border: '1px solid #aaa', padding: '3px' }}>
          {data} <Badge>{idx}</Badge>
        </div>
      );
    },
  },
  {
    name: 'transfer_date',
    title: 'Дата сделки',
    width: '250px',
    renderCell(date: string): React.ReactNode {
      return <div>Дата - {date}</div>;
    },
  },
  {
    name: 'rate',
    title: 'Ставка',
    renderCell(data: string): React.ReactNode {
      return <i>{data}$</i>;
    },
  },
];

export const TableRenderCallback = () => {
  const [rows, setRows] = useState(rowList);
  const [cols, setCols] = useState(columnList);

  const handleResize = ({ name, width }: { name: string; width: string }) => {
    const newCols = cols.map((col) => (col.name === name ? { ...col, width } : col));
    setCols(newCols);
  };

  const handleExpansionChange = (ids: Record<string, boolean>): void => {
    const updRows = rows.map((row) => ({ ...row, expanded: ids[row.id] }));
    setRows(updRows);
  };

  return (
    <ExampleSection
      text={
        <>
          <PStyled>
            Для формирования контента ячейки пользователь может использовать рендер-колбек <code>renderCell</code>.
            Функция <code>renderCell</code> задается для каждого столбца в отдельности и представляет собой метод для
            переопределения стандартного вида ячейки. На вход функция <code>renderCell</code> получает 3 параметра:{' '}
            <code>data</code> - контент ячейки, <code>row</code> - объект строки и <code>rowIdx</code> - индекс строки.
          </PStyled>
          <PStyled>
            Пользователь может кастомизировать заголовок группы строк с помощью рендер-колбека{' '}
            <code>renderGroupTitle</code>. Функция <code>renderGroupTitle</code> задается для каждой строки в
            отдельности и представляет собой метод для переопределения стандартного вида заголовка группы строк. На вход
            функция <code>renderGroupTitle</code> получает 1 параметр: <code>row</code> - объект строки.
          </PStyled>
        </>
      }
    >
      <Table
        rowList={rows}
        columnList={cols}
        onColumnResize={handleResize}
        onRowExpansionChange={handleExpansionChange}
        displayRowExpansionColumn
      />
    </ExampleSection>
  );
};
