import * as React from 'react';

import { createColumnHelper, getCoreRowModel, useReactTable, type Row } from '@tanstack/react-table';
import { CellText, defaultOptions, TanstackTable } from '#examples/-helpers/tanstackTable';
import { ExampleSection } from '#examples/-helpers';
import { Spinner, T } from '@admiral-ds/react-ui';

const ROW_COUNT = 100;

type LastRowProps = {
  containerRef: React.RefObject<HTMLElement>;
  onVisible: () => void;
  rowNode: React.ReactNode;
  rowIndex?: number;
};

const LastRowWrapper = ({ containerRef, onVisible, rowNode }: LastRowProps) => {
  const [visible, setVisible] = React.useState<boolean>(false);
  const ref = React.useRef<HTMLDivElement>(null);

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    console.log('🚀 ~ handleIntersection ~ await');
    if (entries[0].isIntersecting && !visible) {
      setVisible(true);
      onVisible?.();
    }

    if (!entries[0].isIntersecting && visible) {
      setVisible(false);
    }
  };

  React.useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: containerRef?.current,
      threshold: [0, 1.0],
    });

    if (containerRef.current && ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [visible, rowNode]);

  return <div ref={ref}>{rowNode}</div>;
};

const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const LastRowWrapper2 = ({ containerRef, onVisible, rowNode, rowIndex }: LastRowProps) => {
  const [visible, setVisible] = React.useState<boolean>(false);
  const ref = React.useRef<HTMLDivElement>(null);

  const handleIntersection = async (entries: IntersectionObserverEntry[]) => {
    await sleep(1000);
    if (entries[0].isIntersecting && entries[0].intersectionRatio > 0 && !visible) {
      console.log('🚀 ~ handleIntersection ~ await');
      await setVisible(true);
      await onVisible?.();
    }

    if (!entries[0].isIntersecting && visible) {
      await setVisible(false);
    }
  };

  React.useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: containerRef?.current,
      threshold: [0, 1.0],
    });

    if (containerRef.current && ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [visible, rowNode]);

  return (
    <div ref={ref}>
      <div
        style={{
          position: 'absolute',
          transform: `translateY(${(rowIndex || 0 + 1) * 40}px)`,
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <Spinner dimension={'m'} />
      </div>
    </div>
  );
};

interface Props {
  transfer_number: number;
  transfer_type: string;
  transfer_amount: string;
}

export const LoadScrollExample = () => {
  const [rowsAmount, setRowsAmount] = React.useState(10);
  const [rowsAmount2, setRowsAmount2] = React.useState(10);
  const tableRef = React.useRef<HTMLDivElement>(null);
  const tableRef2 = React.useRef<HTMLDivElement>(null);

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

  const data: Props[] = React.useMemo(() => {
    const array = Array.from({ length: rowsAmount }, (_, k) => {
      return `${k + 1}0000`;
    }).map((item, index) => ({
      transfer_number: index + 1,
      transfer_type: 'МНО',
      transfer_amount: item,
    }));
    return array;
  }, [rowsAmount]);

  const uploadNewRows = () => {
    if (rowsAmount < ROW_COUNT) setRowsAmount(rowsAmount + 10);
  };

  const renderRowWrapper = (row: Row<Props>, index: number, rowNode: React.ReactNode) =>
    index === rowsAmount - 1 && index !== ROW_COUNT - 1 ? (
      <LastRowWrapper
        key={`${row.id}`}
        data-index={index}
        containerRef={tableRef}
        onVisible={uploadNewRows}
        rowNode={rowNode}
      />
    ) : (
      rowNode
    );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    ...defaultOptions,
  });

  //Для 2 примера
  const data2: Props[] = React.useMemo(() => {
    const array = Array.from({ length: rowsAmount2 }, (_, k) => {
      return `${k + 1}0000`;
    }).map((item, index) => ({
      transfer_number: index + 1,
      transfer_type: 'МНО',
      transfer_amount: item,
    }));
    return array;
  }, [rowsAmount2]);

  const uploadNewRows2 = () => {
    if (rowsAmount2 < ROW_COUNT) setRowsAmount2(rowsAmount2 + 10);
  };

  const renderRowWrapper2 = (row: Row<Props>, index: number, rowNode: React.ReactNode) =>
    index === rowsAmount2 - 1 && index !== ROW_COUNT - 1 ? (
      <LastRowWrapper2
        key={`${row.id}`}
        data-index={index}
        containerRef={tableRef2}
        onVisible={uploadNewRows2}
        rowNode={rowNode}
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
      <T font="Body/Body 2 Long" as="div">
        Пользователь может реализовать подгрузку новых строк по мере скролла тела таблицы, например, следующим образом.
        С помощью функции renderRowWrapper можно создать элемент-обёртку над последней строкой в таблице, и через
        IntersectionObserver отслеживать момент, когда элемент-обёртка станет видим в пределах тела таблицы (т.е. момент
        доскролла до последней строки). Это событие будет являться триггером для загрузки новой порции строк.
      </T>
      <ExampleSection header="Пример с невидимой подгрузкой данных">
        <TanstackTable table={table} style={{ height: '350px' }} renderRowWrapper={renderRowWrapper} ref={tableRef} />
      </ExampleSection>
      <ExampleSection header="Пример подгрузки данных с компонентом Spinner и задержкой в 1 секунду">
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
