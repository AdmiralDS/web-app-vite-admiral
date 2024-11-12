import { createFileRoute } from '@tanstack/react-router';
import { useState, useRef, useMemo } from 'react';
import { Table } from '@admiral-ds/react-ui';
import type { Column, TableRow } from '@admiral-ds/react-ui';

import { LastRow } from '../../-helpers/table';

const columnList: Column[] = [
  {
    name: 'transfer_number',
    title: 'Номер сделки',
    width: '33%',
  },
  {
    name: 'transfer_type',
    title: 'Тип сделки',
    width: '33%',
  },
  {
    name: 'transfer_amount',
    title: 'Сумма, ₽',
    width: '33%',
  },
];

const TOTAL_ROWS_AMOUNT = 100;

const TableLoadOnScrollSpinner = () => {
  const [cols, setCols] = useState(columnList);
  const [rowsAmount, setRowsAmount] = useState(10);
  const [loading, setLoading] = useState(false);
  const tableRef = useRef<HTMLDivElement>(null);

  const rows = useMemo(() => {
    const array = Array.from({ length: rowsAmount }, (_v, k) => {
      return `${k + 1}0000`;
    }).map((item, index) => ({
      id: item,
      transfer_number: index + 1,
      transfer_type: 'МНО',
      transfer_amount: item,
    }));
    return array;
  }, [rowsAmount]);

  const handleResize = ({ name, width }: { name: string; width: string }) => {
    const newCols = cols.map((col) => (col.name === name ? { ...col, width } : col));
    setCols(newCols);
  };

  const uploadNewRows = () => {
    if (rowsAmount < TOTAL_ROWS_AMOUNT) {
      setLoading(true);

      const promise = new Promise(function (resolve) {
        setTimeout(() => resolve('done'), 1000);
      });

      promise.then(() => {
        setRowsAmount((amount) => amount + 10);
        setLoading(false);
      });
    }
  };

  const renderRowWrapper = (row: TableRow, index: number, rowNode: React.ReactNode) =>
    index === rowsAmount - 1 ? (
      <LastRow
        key={`row_${row.id}`}
        containerRef={tableRef}
        onVisible={uploadNewRows}
        rowNode={rowNode}
        loading={loading}
      />
    ) : (
      rowNode
    );

  return (
    <>
      <Table
        ref={tableRef}
        rowList={rows}
        columnList={cols}
        onColumnResize={handleResize}
        renderRowWrapper={renderRowWrapper}
        style={{ height: '300px', width: '450px' }}
      />
    </>
  );
};

export const Route = createFileRoute('/components/table/loadOnScrollSpinner')({
  component: () => <TableLoadOnScrollSpinner />,
  staticData: {
    title: 'Table. Загрузка данных при скролле со спиннером',
    description: 'Небольшое описание функционала',
  },
});
