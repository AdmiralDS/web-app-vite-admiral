import { useMemo, useRef, useState } from 'react';
import { Table } from '@admiral-ds/react-ui';
import type { Column, TableRow } from '@admiral-ds/react-ui';

import { LastRow, SkeletonComponent } from '#examples/-helpers/table';
import { ExampleSection, PStyled } from '#examples/-helpers';

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

export const TableLoadOnScrollSkeleton = () => {
  const [cols, setCols] = useState(columnList);
  /** Текущее количество строк  */
  const [rowsAmount, setRowsAmount] = useState(10);
  /** Индикация загрузки данных */
  const [loading, setLoading] = useState(false);
  const tableRef = useRef<HTMLDivElement>(null);

  /** Формируем массив строк на основе текущего количества строк */
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

  /** Дополняем массив колонок функцией renderCell,
   * возвращающей в состоянии loading компонент Skeleton */
  const columns = useMemo(() => {
    return cols.map((col) => {
      return {
        ...col,
        renderCell: (data: any, _row: TableRow, rowIdx: number) => {
          return rowIdx > rowsAmount - 10 && loading ? (
            <SkeletonComponent dimension="m" appearance="secondary" />
          ) : (
            data
          );
        },
      };
    });
  }, [cols, rowsAmount, loading]);

  const handleResize = ({ name, width }: { name: string; width: string }) => {
    const newCols = cols.map((col) => (col.name === name ? { ...col, width } : col));
    setCols(newCols);
  };

  /** Имитация загрузки данных через setTimeout */
  const uploadNewRows = () => {
    if (rowsAmount < TOTAL_ROWS_AMOUNT) {
      setLoading(true);
      setRowsAmount((amount) => amount + 10);

      const promise = new Promise(function (resolve) {
        // load new data
        setTimeout(() => resolve('done'), 2000);
      });
      promise.then(() => {
        setLoading(false);
      });
    }
  };

  /** Определение обертки вокруг строки */
  const renderRowWrapper = (row: TableRow, index: number, rowNode: React.ReactNode) =>
    index === rowsAmount - 1 ? (
      <LastRow key={`row_${row.id}`} containerRef={tableRef} onVisible={uploadNewRows} rowNode={rowNode} />
    ) : (
      rowNode
    );

  return (
    <ExampleSection
      text={
        <>
          <PStyled>
            Пользователь может реализовать подгрузку новых строк по мере скролла тела таблицы. В момент, когда данные
            для новых строк ещё не загружены, новые строки можно отображать в состоянии скелетона. Это можно сделать,
            например, следующим образом:
          </PStyled>
          <PStyled>
            С помощью функции renderRowWrapper можно создать элемент-обёртку над последней строкой в таблице, и через
            IntersectionObserver отслеживать момент, когда элемент-обёртка станет видим в пределах тела таблицы (т.е.
            момент доскролла до последней строки). Это событие будет являться триггером для загрузки новой порции строк.
            При этом, пока будут загружаться данные новых строк, содержимое строк можно отобразить в виде скелетонов с
            помощью колбека renderCell.
          </PStyled>
        </>
      }
    >
      <Table
        ref={tableRef}
        rowList={rows}
        columnList={columns}
        onColumnResize={handleResize}
        renderRowWrapper={renderRowWrapper}
        style={{ height: '300px', width: '450px' }}
      />
    </ExampleSection>
  );
};
