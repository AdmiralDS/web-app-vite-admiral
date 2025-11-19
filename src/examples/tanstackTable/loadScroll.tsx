import * as React from 'react';

import { createColumnHelper, getCoreRowModel, useReactTable, type Row } from '@tanstack/react-table';
import { CellText, defaultOptions, TanstackTable } from '#examples/-helpers/tanstackTable';
import { ExampleSection } from '#examples/-helpers';

type LastRowProps = {
  containerRef: React.RefObject<HTMLElement>;
  onVisible: () => void;
  rowNode: React.ReactNode;
};

const LastRowWrapper = ({ containerRef, onVisible, rowNode }: LastRowProps) => {
  const [visible, setVisible] = React.useState<boolean>(false);
  const ref = React.useRef<HTMLDivElement>(null);

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
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
  }, [containerRef, visible, rowNode]);

  return <div ref={ref}>{rowNode}</div>;
};

interface Props {
  transfer_number: number;
  transfer_type: string;
  transfer_amount: string;
}

export const LoadScrollExample = () => {
  const [rowsAmount, setRowsAmount] = React.useState(10);
  const tableRef = React.useRef<HTMLDivElement>(null);

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

  const uploadNewRows = () => {
    if (rowsAmount < 100) setRowsAmount((amount) => amount + 10);
  };

  const renderRowWrapper = (row: Row<Props>, index: number, rowNode: React.ReactNode) =>
    index === rowsAmount - 1 ? (
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

  return (
    <ExampleSection>
      <TanstackTable table={table} style={{ height: '500px' }} renderRowWrapper={renderRowWrapper} ref={tableRef} />
    </ExampleSection>
  );
};
