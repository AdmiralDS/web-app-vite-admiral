import { flexRender, type RowData, type Table } from '@tanstack/react-table';
import { useVirtualizer, type VirtualItem } from '@tanstack/react-virtual';

import { OverflowMenu } from './OverflowMenu';

import * as S from './style';
import type { Dimension, MetaRowProps } from '../types';

interface Bodys<T> {
  table: Table<T>;
  virtualScroll?: { fixedRowHeight?: number; horizontal?: boolean };
  greyZebraRows?: boolean;
  /** Включение постоянной видимости иконок действий над строками (OverflowMenu и иконки одиночных действий).
   * По умолчанию showRowsActions = false, при этом иконки действий видны только при ховере строк. */
  showRowsActions: boolean;
  dimension: Dimension;
  tableRef: React.MutableRefObject<null>;
  headerHeight: number;
  virtualColumns?: VirtualItem[];
  virtualPaddingLeft: number;
  virtualPaddingRight: number;
}

export const VirtualBody = <T,>({
  table,
  virtualScroll,
  dimension,
  tableRef,
  greyZebraRows,
  showRowsActions,
  headerHeight,
  virtualColumns,
  virtualPaddingLeft,
  virtualPaddingRight,
}: Bodys<T>) => {
  const handleOverflowMenuClick = (e: React.MouseEvent<HTMLElement>) => {
    // клик по меню не должен вызывать событие клика по строке
    e.stopPropagation();
  };

  const rowVirtualizer = useVirtualizer({
    getScrollElement: () => tableRef.current,
    //todo при добавлении динамической высоты строки исправить || 40
    estimateSize: () => virtualScroll?.fixedRowHeight || 40,
    count: table.getRowModel().rows.length,
    //measure dynamic row height, except in firefox because it measures table border height incorrectly
    measureElement:
      typeof window !== 'undefined' && navigator.userAgent.indexOf('Firefox') === -1
        ? (element) => element?.getBoundingClientRect()?.height
        : undefined,
    overscan: 5,
  });

  return (
    <S.VirtualBody $heightBody={`${rowVirtualizer.getTotalSize()}px`}>
      {rowVirtualizer.getVirtualItems().map((virtualRow) => {
        const row = table.getRowModel().rows[virtualRow.index];
        const original = row.original as RowData & MetaRowProps<T>;

        return (
          <S.VirtualBodyTr
            key={virtualRow.index}
            data-index={virtualRow.index} //needed for dynamic row height measurement
            ref={rowVirtualizer.measureElement}
            $dimension={dimension}
            selected={row.getIsSelected() || original.meta?.selected}
            disabled={original.meta?.disabled}
            $hover={original.meta?.hover}
            $grey={greyZebraRows && virtualRow.index % 2 === 1}
            $status={original.meta?.status}
            $showRowsActions={showRowsActions}
            $moveY={virtualRow.start}
          >
            {virtualColumns ? (
              <>
                {!!virtualPaddingLeft && <S.SpacerCellTd $width={virtualPaddingLeft} $dimension={dimension} />}
                {virtualColumns.map((virtualColumn) => {
                  const cell = row.getVisibleCells()[virtualColumn.index];

                  return (
                    <S.CellTd $dimension={dimension} key={cell.id} $cellAlign={cell.column.columnDef.meta?.cellAlign}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </S.CellTd>
                  );
                })}
                {!!virtualPaddingRight && <S.SpacerCellTd $width={virtualPaddingRight} $dimension={dimension} />}
              </>
            ) : (
              row.getVisibleCells().map((cell) => (
                <S.CellTd $dimension={dimension} key={cell.id} $cellAlign={cell.column.columnDef.meta?.cellAlign}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </S.CellTd>
              ))
            )}
            {(showRowsActions || original.meta?.actionRender || original.meta?.overflowMenuRender) && (
              <OverflowMenu
                dimension={dimension}
                row={row}
                onClick={handleOverflowMenuClick}
                showRowsActions={showRowsActions}
                tableRef={tableRef}
                headerHeight={headerHeight}
              />
            )}
          </S.VirtualBodyTr>
        );
      })}
    </S.VirtualBody>
  );
};
