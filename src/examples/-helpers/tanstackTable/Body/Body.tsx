import { Fragment } from 'react';
import { type RowData, type Table } from '@tanstack/react-table';

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
  columnsLength: number;
  emptyMessage?: React.ReactNode;
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
  columnsLength,
  emptyMessage,
}: BodyProps<T>) => {
  const isEmptyArrayRows = table.getRowModel().rows.length === 0;

  return (
    <S.Body>
      {isEmptyArrayRows ? (
        <S.BodyTr $dimension={dimension} $showUnderline={showLastRowUnderline && !showBorders}>
          <S.EmptyCell style={{ gridColumn: `span ${columnsLength}` }} $dimension={dimension} $resizer={true}>
            {emptyMessage || 'Нет совпадений'}
          </S.EmptyCell>
        </S.BodyTr>
      ) : (
        table.getRowModel().rows.map((row, index, rows) => {
          const original = row.original as RowData & MetaRowProps<T>;
          const isLastRow = index === rows.length - 1;
          const showUnderline = isLastRow ? showLastRowUnderline && !showBorders : true;

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
                  columnsLength={columnsLength}
                />
              </S.BodyTr>
              {row.getCanExpand() && original.meta?.expandedRowRender && (
                <ExpandedRow dimension={dimension} row={row} showUnderline={showUnderline} />
              )}
            </Fragment>
          );
        })
      )}
    </S.Body>
  );
};
