import { useEffect, useMemo, useRef, useState } from 'react';
import { createFileRoute } from '@tanstack/react-router'
import styled from 'styled-components';

import { PseudoText, skeletonAnimationMixin, Spinner, Table } from '@admiral-ds/react-ui';
import type { Column, TableRow } from '@admiral-ds/react-ui';

const SkeletonComponent = styled(PseudoText)`
  width: 100%;
  ${skeletonAnimationMixin}
`;

const SpinnerWrapper = styled.div`
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: center;
`;

export const SpinnerComponent = () => {
  return (
    <SpinnerWrapper>
      <Spinner />
    </SpinnerWrapper>
  );
};

type LastRowProps = {
  containerRef: React.RefObject<HTMLElement>;
  onVisible: () => void;
  rowNode: React.ReactNode;
  loading?: boolean;
};

const LastRow = ({ containerRef, onVisible, rowNode, loading }: LastRowProps) => {
  const [visible, setVisible] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    if (entries[0].isIntersecting && !visible) {
      setVisible(true);
      onVisible?.();
    }

    if (!entries[0].isIntersecting && visible) {
      setVisible(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: containerRef?.current,
      threshold: [0, 1.0],
    });

    if (containerRef.current && ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [containerRef, visible]);

  return <div ref={ref}>{loading ? <SpinnerComponent /> : rowNode}</div>;
};

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

  const renderRowWrapper = (row: TableRow, index: number, rowNode: React.ReactNode) =>
    index === rowsAmount - 1 ? (
      <LastRow key={`row_${row.id}`} containerRef={tableRef} onVisible={uploadNewRows} rowNode={rowNode} />
    ) : (
      rowNode
    );

  return (
    <>
      <Table
        ref={tableRef}
        rowList={rows}
        columnList={columns}
        onColumnResize={handleResize}
        renderRowWrapper={renderRowWrapper}
        style={{ height: '300px', width: '450px' }}
      />
    </>
  );
};

export const Route = createFileRoute('/components/table/loadOnScrollSkeleton')({
  component: () => <TableLoadOnScrollSkeleton />,
  staticData: {
    title: 'Table. Подгрузка данных при скролле со скелетоном',
    description: 'Небольшое описание функционала',
  },
});
