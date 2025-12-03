import { useEffect, useMemo, useRef, useState } from 'react';
import { createColumnHelper, getCoreRowModel, useReactTable, type Row } from '@tanstack/react-table';
import { Spinner } from '@admiral-ds/react-ui';
import styled from 'styled-components';

import { CellText, defaultOptions, TanstackTable } from '#examples/-helpers/tanstackTable';
import { ExampleSection } from '#examples/-helpers';

const ROW_COUNT = 100;

const WrapperSpinner = styled.div<{ $rowIndex?: number }>`
  ${({ $rowIndex }) => $rowIndex && `position: absolute; transform: translateY(${($rowIndex || 0 + 1) * 40}px);`}
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

type LastRowProps = {
  containerRef: React.RefObject<HTMLElement>;
  onVisible: () => void;
  rowIndex?: number;
};

const LastRowWrapper = ({ containerRef, onVisible, rowIndex }: LastRowProps) => {
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
      root: containerRef?.current,
      threshold: [0, 1.0],
    });

    if (containerRef.current && ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [visible]);

  return (
    <WrapperSpinner ref={ref} $rowIndex={rowIndex}>
      <Spinner dimension="m" />
    </WrapperSpinner>
  );
};

interface Props {
  transfer_number: number;
  transfer_type: string;
  transfer_amount: string;
}

const columnHelper = createColumnHelper<Props>();

const columns = [
  columnHelper.accessor('transfer_number', {
    header: 'Дата сделки',
    cell: (info) => <CellText>{info.getValue()}</CellText>,
    size: 149,
  }),
  columnHelper.accessor('transfer_type', {
    header: 'Сумма',
    cell: (info) => <CellText>{info.getValue()}</CellText>,
    size: 150,
  }),
  columnHelper.accessor('transfer_amount', {
    header: 'Валюта',
    cell: (info) => <CellText>{info.renderValue()}</CellText>,
  }),
];

export const LoadScrollSpinnerExample = () => {
  const [rowsAmount, setRowsAmount] = useState(10);
  const [rowsAmount2, setRowsAmount2] = useState(10);
  const tableRef = useRef<HTMLDivElement>(null);
  const tableRef2 = useRef<HTMLDivElement>(null);

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

  const uploadNewRows = async () => {
    if (rowsAmount < ROW_COUNT) {
      await sleep(1000);
      await setRowsAmount(rowsAmount + 10);
    }
  };

  const renderRowWrapper = (row: Row<Props>, index: number, rowNode: React.ReactNode) =>
    index === rowsAmount - 1 && index !== ROW_COUNT - 1 ? (
      <LastRowWrapper key={`${row.id}`} containerRef={tableRef} onVisible={uploadNewRows} />
    ) : (
      rowNode
    );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    ...defaultOptions,
  });

  // Для 2 примера
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

  const uploadNewRows2 = async () => {
    if (rowsAmount2 < ROW_COUNT) {
      await sleep(1000);
      await setRowsAmount2(rowsAmount2 + 10);
    }
  };

  const renderRowWrapper2 = (row: Row<Props>, index: number, rowNode: React.ReactNode) =>
    index === rowsAmount2 - 1 && index !== ROW_COUNT - 1 ? (
      <LastRowWrapper
        key={`${row.id}`}
        data-index={index}
        containerRef={tableRef2}
        onVisible={uploadNewRows2}
        rowIndex={index}
      />
    ) : (
      rowNode
    );

  const table2 = useReactTable({
    data: data2,
    columns,
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
      <ExampleSection header="Пример подгрузки данных с компонентом Spinner и задержкой в 1 секунду">
        <TanstackTable table={table} style={{ height: '350px' }} renderRowWrapper={renderRowWrapper} ref={tableRef} />
      </ExampleSection>
      <ExampleSection header="Пример подгрузки данных с компонентом Spinner и задержкой в 1 секунду c виртуализацией">
        <TanstackTable
          table={table2}
          style={{ height: '350px' }}
          renderRowWrapper={renderRowWrapper2}
          ref={tableRef2}
          virtualScroll={{ vertical: true }}
        />
      </ExampleSection>
    </>
  );
};
