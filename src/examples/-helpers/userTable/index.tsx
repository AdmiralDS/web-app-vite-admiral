import { flexRender } from '@tanstack/react-table';
import type { CellContext, RowData, Table } from '@tanstack/react-table';
import { useVirtualizer } from '@tanstack/react-virtual';
import { useMemo, useRef } from 'react';
import * as S from './style';
import { TextWithOverflowPopup } from './TextWithOverflow';

type Props<T> = {
  table: Table<T>;
  className?: string;
  estimatedRowHeightPx?: number;
};

/**
    <h3>Быстрое решение для простых типовых таблиц</h3>
    <ul>
      <li>Основано на @tanstack/react-table</li>
      <li>Cтилизовано по дизайн-системе Admiral 2.1</li>
      <li>Поддерживает сортировку</li>
      <li>Из коробки поддерживает виртуализацию</li>
    </ul>
 */

export const GenericTable = <T,>({ table, className, estimatedRowHeightPx = 32 }: Props<T>): React.ReactElement => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const { rows } = table.getRowModel();

  const rowVirtualizer = useVirtualizer({
    getScrollElement: () => wrapperRef.current,
    estimateSize: () => estimatedRowHeightPx,
    count: rows.length,
    //measure dynamic row height, except in firefox because it measures table border height incorrectly
    measureElement:
      typeof window !== 'undefined' && navigator.userAgent.indexOf('Firefox') === -1
        ? (element) => element?.getBoundingClientRect()?.height
        : undefined,
    overscan: 5,
  });

  const isHeaderGroupsUsed = table.getVisibleLeafColumns().some((c) => c.depth > 0);
  const TableHeaderCell = isHeaderGroupsUsed ? S.TableHeaderCellForGroups : S.TableHeaderCell;
  const lastLeafColumnsIndex = table.getVisibleLeafColumns().length - 1;

  const headerGroupsDepth = table.getLeafHeaders()[0]?.depth;

  const gridTemplateColumns = useMemo(() => {
    return table
      .getVisibleLeafColumns()
      .map((c) => c.columnDef.meta?.gridColumnTemplate ?? 'minmax(100px, 1fr)')
      .join(' ');
  }, [table.getState().columnVisibility]);

  let virtualItems = rowVirtualizer.getVirtualItems();
  return (
    <S.TableWrapper ref={wrapperRef} tabIndex={0} className={className} $headerRows={headerGroupsDepth}>
      <S.Table>
        <S.TableHead>
          {table.getHeaderGroups().map((headerGroup, index) => (
            <S.TableRow key={headerGroup.id} $gridTemplateColumns={gridTemplateColumns} data-index={index}>
              {headerGroup.headers.map((header, index) => {
                let hideBar = false;
                if (header.isPlaceholder) {
                  let siblingsMaxIndex = headerGroup.headers
                    .filter((h) => h.column.parent === header.column.parent && h.isPlaceholder)
                    .reduce((max, sibling) => (sibling.index > max ? sibling.index : max), 0);
                  hideBar = siblingsMaxIndex !== header.index;
                }
                let hideBottomBorder = header.subHeaders.length > 0 && header.subHeaders.every((h) => h.isPlaceholder);
                return (
                  <TableHeaderCell
                    key={header.id}
                    $colspan={header.colSpan}
                    $isPlaceholder={header.isPlaceholder}
                    $hideRightBorder={hideBar || header.column.getIndex() === lastLeafColumnsIndex}
                    $hideBottomBorder={hideBottomBorder}
                    $isInteractive={!header.isPlaceholder}
                    data-index={index}
                  >
                    {header.isPlaceholder ? null : (
                      <S.HeaderCell
                        onClick={header.column.getToggleSortingHandler()}
                        $hideSeparator={isHeaderGroupsUsed || header.column.getIndex() === lastLeafColumnsIndex}
                      >
                        <TextWithOverflowPopup tooltipPosition={'bottom'}>
                          {flexRender(header.column.columnDef.header, header.getContext())}
                        </TextWithOverflowPopup>
                        {header.column.getCanSort() && <S.ArrowUpIcon $direction={header.column.getIsSorted()} />}
                      </S.HeaderCell>
                    )}
                  </TableHeaderCell>
                );
              })}
            </S.TableRow>
          ))}
        </S.TableHead>
        <S.TableBody style={{ height: `${rowVirtualizer.getTotalSize()}px` }}>
          {virtualItems.map((virtualRow, index) => {
            const row = rows[virtualRow.index];
            return (
              <S.TableRow
                data-index={virtualRow.index} //needed for dynamic row height measurement
                key={row.id}
                ref={rowVirtualizer.measureElement}
                style={{
                  transform: `translateY(${virtualItems[0]?.start ?? 0}px)`,
                }}
                $gridTemplateColumns={gridTemplateColumns}
              >
                {row.getVisibleCells().map((cell) => (
                  <S.Cell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</S.Cell>
                ))}
              </S.TableRow>
            );
          })}
        </S.TableBody>
      </S.Table>
    </S.TableWrapper>
  );
};

export const TextCell = <TData extends RowData, TValue>({
  renderValue,
  children,
}: React.PropsWithChildren<Pick<CellContext<TData, TValue>, 'renderValue'>>): React.ReactElement => {
  return <S.TextCellContent>{children ?? renderValue()}</S.TextCellContent>;
};
