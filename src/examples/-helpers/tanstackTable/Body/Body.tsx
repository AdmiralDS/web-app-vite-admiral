import { Fragment } from 'react';
import { flexRender, type RowData, type Table } from '@tanstack/react-table';

import { OverflowMenu } from './OverflowMenu';
import type { Dimension, MetaRowProps } from '../Table';

import * as S from './style';

interface Bodys<T> {
  table: Table<T>;
  greyZebraRows?: boolean;
  /** Включение постоянной видимости иконок действий над строками (OverflowMenu и иконки одиночных действий).
   * По умолчанию showRowsActions = false, при этом иконки действий видны только при ховере строк. */
  showRowsActions: boolean;
  dimension: Dimension;
  tableRef: React.MutableRefObject<null>;
  headerHeight: number;
}

export const Body = <T,>({ table, dimension, tableRef, greyZebraRows, showRowsActions, headerHeight }: Bodys<T>) => {
  const handleOverflowMenuClick = (e: React.MouseEvent<HTMLElement>) => {
    // клик по меню не должен вызывать событие клика по строке
    e.stopPropagation();
  };

  return (
    <S.Body>
      {table.getRowModel().rows.map((row, index) => {
        const original = row.original as RowData & MetaRowProps<T>;

        return (
          <Fragment key={row.id}>
            <S.BodyTr
              $dimension={dimension}
              selected={row.getIsSelected() || original.meta?.selected}
              disabled={original.meta?.disabled}
              $hover={original.meta?.hover}
              $grey={greyZebraRows && index % 2 === 1}
              $status={original.meta?.status}
              $showRowsActions={showRowsActions}
              $expandedRow={row.getIsExpanded()}
            >
              {row.getVisibleCells().map((cell) => (
                <S.CellTd $dimension={dimension} key={cell.id} $cellAlign={cell.column.columnDef.meta?.cellAlign}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </S.CellTd>
              ))}
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
            </S.BodyTr>
            {row.getIsExpanded() && (
              <S.BodyTr $dimension={dimension}>
                <S.CellTd $dimension={dimension} colSpan={row.getVisibleCells().length}>
                  {original.meta?.expandedRowRender ? original.meta.expandedRowRender({ row }) : null}
                </S.CellTd>
              </S.BodyTr>
            )}
          </Fragment>
        );
      })}
    </S.Body>
  );
};
