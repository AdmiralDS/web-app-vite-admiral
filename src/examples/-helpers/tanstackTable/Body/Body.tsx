import { Fragment } from 'react';
import { type Row, type RowData, type Table } from '@tanstack/react-table';

import * as S from './style';
import { ExpandedRow } from './ExpandedRow';
import type { Dimension, MetaRowProps } from '../types';
import { RowContent } from './RowContent';

export interface BodyProps<T> {
  table: Table<T>;
  greyZebraRows?: boolean;
  /** Включение постоянной видимости иконок действий над строками (OverflowMenu и иконки одиночных действий).
   * По умолчанию showRowsActions = false, при этом иконки действий видны только при ховере строк. */
  showRowsActions: boolean;
  dimension: Dimension;
  tableRef: React.MutableRefObject<null>;
  headerHeight: number;
  showLastRowUnderline: boolean;
  showBorders: boolean;
  showCheckboxTitleGroup: boolean;
  showDividerForLastColumn: boolean;
  emptyMessage?: React.ReactNode;
  renderRowWrapper?: (row: Row<T>, index: number, rowNode: React.ReactNode) => React.ReactNode;
}

export const Body = <T,>({
  table,
  dimension,
  tableRef,
  greyZebraRows,
  showRowsActions,
  headerHeight,
  showLastRowUnderline,
  showBorders,
  showCheckboxTitleGroup,
  showDividerForLastColumn,
  emptyMessage,
  renderRowWrapper,
}: BodyProps<T>) => {
  const isEmptyArrayRows = table.getRowModel().rows.length === 0;

  const renderRow = (row: Row<T>, index: number, isLastRow: boolean) => {
    const original = row.original as RowData & MetaRowProps<T>;
    const showUnderline = isLastRow ? showLastRowUnderline && !showBorders : true;

    const node = (
      <Fragment key={row.id}>
        <S.BodyTr
          $dimension={dimension}
          selected={row.getIsSelected() || original.meta?.selected}
          disabled={original.meta?.disabled}
          $hover={original.meta?.hover}
          $grey={greyZebraRows && index % 2 === 1}
          $status={original.meta?.status}
          $showRowsActions={showRowsActions}
          $showUnderline={!original.meta?.expandedRowRender && showUnderline}
        >
          <RowContent
            original={original}
            row={row}
            dimension={dimension}
            showCheckboxTitleGroup={showCheckboxTitleGroup}
            showDividerForLastColumn={showDividerForLastColumn}
            showRowsActions={showRowsActions}
            tableRef={tableRef}
            headerHeight={headerHeight}
          />
        </S.BodyTr>
        {row.getCanExpand() && original.meta?.expandedRowRender && (
          <ExpandedRow dimension={dimension} row={row} showUnderline={showUnderline} />
        )}
      </Fragment>
    );

    return node ? (renderRowWrapper?.(row, index, node) ?? node) : node;
  };

  return (
    <S.Body>
      {isEmptyArrayRows ? (
        <S.BodyTr $dimension={dimension} $showUnderline={showLastRowUnderline && !showBorders}>
          <S.EmptyCell $dimension={dimension} $resizer={false}>
            {emptyMessage || 'Нет совпадений'}
          </S.EmptyCell>
        </S.BodyTr>
      ) : (
        table.getRowModel().rows.map((row, index, rows) => {
          const isLastRow = index === rows.length - 1;

          return renderRow(row, index, isLastRow);
        })
      )}
    </S.Body>
  );
};
