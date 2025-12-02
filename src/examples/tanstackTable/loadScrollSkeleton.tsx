import { getCoreRowModel, useReactTable, type ColumnDef, type Row } from '@tanstack/react-table';
import { PseudoText, skeletonAnimationMixin } from '@admiral-ds/react-ui';
import styled from 'styled-components';
import { useMemo, useState, useRef, useEffect, useCallback } from 'react';

import { CellText, defaultOptions, TanstackTable } from '#examples/-helpers/tanstackTable';
import { ExampleSection } from '#examples/-helpers';

const ROW_AMOUNT = 100;

const SkeletonComponent = styled(PseudoText)`
  width: 100%;
  ${skeletonAnimationMixin}
`;

type LastRowProps = {
  container: HTMLElement | null;
  onVisible: () => void;
  rowNode: React.ReactNode;
};

const LastRowWrapper = ({ container, onVisible, rowNode }: LastRowProps) => {
  const [visible, setVisible] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    if (entries[0].isIntersecting && entries[0].intersectionRatio > 0 && !visible) {
      setVisible(true);
      onVisible?.();
    }

    if (!entries[0].isIntersecting && visible) {
      setVisible(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: container,
      threshold: [0, 1.0],
    });

    if (container && ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [visible, container]);

  return <div ref={ref}>{rowNode}</div>;
};

interface Props {
  transfer_number: number;
  transfer_type: string;
  transfer_amount: string;
}

export const LoadScrollSkeletonExample = () => {
  const [rowsAmount, setRowsAmount] = useState(10);
  const [rowsAmount2, setRowsAmount2] = useState(10);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [tableContainer, setTableContainer] = useState<HTMLElement | null>(null);
  const [tableContainer2, setTableContainer2] = useState<HTMLElement | null>(null);

  const columns: ColumnDef<Props>[] = useMemo(
    () => [
      {
        accessorKey: 'transfer_number',
        header: 'Дата сделки',
        cell: (info) => (
          <CellText>
            {info.row.index > rowsAmount - 10 && loading ? (
              <SkeletonComponent dimension="m" appearance="secondary" />
            ) : (
              info.renderValue<string>()
            )}
          </CellText>
        ),
        size: 149,
      },
      {
        accessorKey: 'transfer_type',
        header: 'Сумма',

        cell: (info) => (
          <CellText>
            {info.row.index > rowsAmount - 10 && loading ? (
              <SkeletonComponent dimension="m" appearance="secondary" />
            ) : (
              info.renderValue<string>()
            )}
          </CellText>
        ),
        size: 150,
      },
      {
        accessorKey: 'transfer_amount',
        header: 'Валюта',
        cell: (info) => (
          <CellText>
            {info.row.index > rowsAmount - 10 && loading ? (
              <SkeletonComponent dimension="m" appearance="secondary" />
            ) : (
              info.renderValue<string>()
            )}
          </CellText>
        ),
      },
    ],
    [rowsAmount, loading],
  );

  const data: Props[] = useMemo(() => {
    const array = Array.from({ length: rowsAmount }, (_, k) => {
      return `${k + 1}0000`;
    }).map((item, index) => ({
      transfer_number: index + 1,
      transfer_type: 'МНО',
      transfer_amount: item,
    }));
    return array;
  }, [rowsAmount]);

  const handleRef = useCallback((node: HTMLElement | null) => setTableContainer(node), []);

  const uploadNewRows = useCallback(() => {
    if (rowsAmount >= ROW_AMOUNT) return;

    setLoading(true);
    setRowsAmount(rowsAmount + 10);

    const promise = new Promise((resolve) => setTimeout(resolve, 2000));
    promise.then(() => {
      setLoading(false);
    });
  }, [rowsAmount]);

  const renderRowWrapper = useCallback(
    (row: Row<Props>, index: number, rowNode: React.ReactNode) =>
      index === rowsAmount - 1 && index !== ROW_AMOUNT - 1 ? (
        <LastRowWrapper key={`${row.id}`} container={tableContainer} onVisible={uploadNewRows} rowNode={rowNode} />
      ) : (
        rowNode
      ),
    [rowsAmount, tableContainer, uploadNewRows],
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    ...defaultOptions,
  });

  //Для 2 примера
  const columns2: ColumnDef<Props>[] = useMemo(
    () => [
      {
        accessorKey: 'transfer_number',
        header: 'Дата сделки',
        cell: (info) => (
          <CellText>
            {info.row.index > rowsAmount2 - 10 && loading2 ? (
              <SkeletonComponent dimension="m" appearance="secondary" />
            ) : (
              info.renderValue<string>()
            )}
          </CellText>
        ),
        size: 149,
      },
      {
        accessorKey: 'transfer_type',
        header: 'Сумма',

        cell: (info) => (
          <CellText>
            {info.row.index > rowsAmount2 - 10 && loading2 ? (
              <SkeletonComponent dimension="m" appearance="secondary" />
            ) : (
              info.renderValue<string>()
            )}
          </CellText>
        ),
        size: 150,
      },
      {
        accessorKey: 'transfer_amount',
        header: 'Валюта',
        cell: (info) => (
          <CellText>
            {info.row.index > rowsAmount2 - 10 && loading2 ? (
              <SkeletonComponent dimension="m" appearance="secondary" />
            ) : (
              info.renderValue<string>()
            )}
          </CellText>
        ),
      },
    ],
    [rowsAmount2, loading2],
  );

  const data2: Props[] = useMemo(() => {
    const array = Array.from({ length: rowsAmount2 }, (_, k) => {
      return `${k + 1}0000`;
    }).map((item, index) => ({
      transfer_number: index + 1,
      transfer_type: 'МНО',
      transfer_amount: item,
    }));
    return array;
  }, [rowsAmount2]);

  const handleRef2 = useCallback((node: HTMLElement | null) => setTableContainer2(node), []);

  const uploadNewRows2 = useCallback(() => {
    if (rowsAmount2 >= ROW_AMOUNT) return;

    setLoading2(true);
    setRowsAmount2(rowsAmount2 + 10);

    const promise = new Promise((resolve) => setTimeout(resolve, 2000));
    promise.then(() => {
      setLoading2(false);
    });
  }, [rowsAmount2]);

  const renderRowWrapper2 = useCallback(
    (row: Row<Props>, index: number, rowNode: React.ReactNode) =>
      index === rowsAmount2 - 1 && index !== ROW_AMOUNT - 1 ? (
        <LastRowWrapper
          key={`${row.id}`}
          data-index={index}
          container={tableContainer2}
          onVisible={uploadNewRows2}
          rowNode={rowNode}
        />
      ) : (
        rowNode
      ),
    [rowsAmount2, tableContainer2, uploadNewRows2],
  );

  const table2 = useReactTable({
    data: data2,
    columns: columns2,
    getCoreRowModel: getCoreRowModel(),
    ...defaultOptions,
  });

  return (
    <>
      <ExampleSection
        text="Пользователь может реализовать подгрузку новых строк по мере скролла тела таблицы, например, следующим образом.
        С помощью функции renderRowWrapper можно создать элемент-обёртку над последней строкой в таблице, и через
        IntersectionObserver отслеживать момент, когда элемент-обёртка станет видим в пределах тела таблицы (т.е. момент
        доскролла до последней строки). Это событие будет являться триггером для загрузки новой порции строк."
      />
      <ExampleSection header="Пример подзагрузки данных с Skeleton и задержкой в 2 секунды">
        <TanstackTable table={table} style={{ height: '350px' }} renderRowWrapper={renderRowWrapper} ref={handleRef} />
      </ExampleSection>
      <ExampleSection header="Пример подзагрузки данных с Skeleton и задержкой в 2 секунды с виртуализацией">
        <TanstackTable
          table={table2}
          style={{ height: '350px' }}
          renderRowWrapper={renderRowWrapper2}
          ref={handleRef2}
          virtualScroll={{ vertical: true, overscan: 1 }}
        />
      </ExampleSection>
    </>
  );
};
