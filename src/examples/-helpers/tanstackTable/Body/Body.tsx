import { Fragment } from 'react';
import { flexRender, type RowData, type Table } from '@tanstack/react-table';

import { OverflowMenu } from './OverflowMenu';

import * as S from './style';
import { ExpandedRow } from './ExpandedRow';
import { CheckboxCell, ExpandCell, ExpandIcon, ExpandIconPlacement, WrapperExpandContent } from '../style';
import { CheckboxField } from '@admiral-ds/react-ui';
import type { Dimension, MetaRowProps } from '../types';

interface Bodys<T> {
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
}: Bodys<T>) => {
  const handleOverflowMenuClick = (e: React.MouseEvent<HTMLElement>) => {
    // клик по меню не должен вызывать событие клика по строке
    e.stopPropagation();
  };

  return (
    <S.Body>
      {table.getRowModel().rows.map((row, index, rows) => {
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
              {original.meta?.groupTitle ? (
                <td
                  colSpan={row.getVisibleCells().length}
                  style={{ gridColumn: `span ${row.getVisibleCells().length}` }}
                >
                  <WrapperExpandContent $depth={row.getCanExpand() ? row.depth : row.depth + 1} $dimension={dimension}>
                    {row.getCanExpand() && (
                      <ExpandCell $dimension={dimension}>
                        <ExpandIconPlacement
                          dimension={dimension === 'm' || dimension === 's' ? 'mBig' : 'lBig'}
                          highlightFocus={false}
                          onClick={row.getToggleExpandedHandler()}
                        >
                          <ExpandIcon $isOpened={row.getIsExpanded()} aria-hidden />
                        </ExpandIconPlacement>
                      </ExpandCell>
                    )}
                    {row.getCanSelect() && showCheckboxTitleGroup && (
                      <CheckboxCell $dimension={dimension}>
                        <CheckboxField
                          dimension={dimension === 'm' || dimension === 's' ? 's' : 'm'}
                          {...{
                            checked: row.getIsSelected(),
                            disabled: !row.getCanSelect(),
                            indeterminate: row.getIsSomeSelected(),
                            onChange: row.getToggleSelectedHandler(),
                          }}
                        />
                      </CheckboxCell>
                    )}

                    <S.GroupTitleCell $dimension={dimension}>{original.meta?.groupTitle}</S.GroupTitleCell>
                  </WrapperExpandContent>
                </td>
              ) : (
                <>
                  {!!row.getLeftVisibleCells().length && (
                    <S.StickyWrapper $gridColumn={`1 / ${row.getLeftVisibleCells().length + 1}`}>
                      {row.getLeftVisibleCells().map((cell) => (
                        <S.CellTd
                          key={cell.id}
                          $dimension={dimension}
                          $cellAlign={cell.column.columnDef.meta?.cellAlign}
                          $resizer={true}
                          $disableBorderStyle={cell.column.id === 'checkbox-column'}
                        >
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </S.CellTd>
                      ))}
                    </S.StickyWrapper>
                  )}
                  <S.NormalWrapper $gridColumn={`${row.getLeftVisibleCells().length + 1} / -1`}>
                    {row.getCenterVisibleCells().map((cell) => (
                      <S.CellTd
                        key={cell.id}
                        $dimension={dimension}
                        $cellAlign={cell.column.columnDef.meta?.cellAlign}
                        $resizer={showDividerForLastColumn && cell.column.getIsLastColumn()}
                        $disableBorderStyle={cell.column.id === 'checkbox-column'}
                      >
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </S.CellTd>
                    ))}
                  </S.NormalWrapper>
                </>
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
            </S.BodyTr>
            {row.getCanExpand() && original.meta?.expandedRowRender && (
              <ExpandedRow dimension={dimension} row={row} showUnderline={showUnderline} />
            )}
          </Fragment>
        );
      })}
    </S.Body>
  );
};
