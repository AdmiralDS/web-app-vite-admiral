import { flexRender, type Row, type RowData, type Cell } from '@tanstack/react-table';

import type { Dimension, MetaRowProps } from '../../types';
import { WrapperExpandContent } from '../../style';
import { CellTd } from '../style';

import * as S from './style';
import { OverflowMenu } from './OverflowMenu';
import { CheckboxCell, ExpandCell } from '../../components';

interface RowContentProps<T> {
  original: RowData & MetaRowProps<T>;
  row: Row<T>;
  /** Включение постоянной видимости иконок действий над строками (OverflowMenu и иконки одиночных действий).
   * По умолчанию showRowsActions = false, при этом иконки действий видны только при ховере строк. */
  showRowsActions: boolean;
  dimension: Dimension;
  tableRef: React.MutableRefObject<null>;
  headerHeight: number;
  showCheckboxTitleGroup: boolean;
  showDividerForLastColumn: boolean;
}

export const RowContent = <T,>({
  original,
  row,
  dimension,
  showCheckboxTitleGroup,
  showDividerForLastColumn,
  showRowsActions,
  tableRef,
  headerHeight,
}: RowContentProps<T>) => {
  const handleOverflowMenuClick = (e: React.MouseEvent<HTMLElement>) => {
    // клик по меню не должен вызывать событие клика по строке
    e.stopPropagation();
  };

  const rowSelected = row.getIsAllSubRowsSelected();
  const rowIndeterminate = row.getIsSomeSelected();

  const renderGroupTitle = () => {
    const handleToggleSubRows = () => {
      row.subRows.forEach((subRow) => {
        rowSelected || rowIndeterminate ? subRow.toggleSelected(false) : subRow.toggleSelected(true);
      });
    };

    return (
      <div className="td" data-column="group" data-row={row.id} style={{ gridColumn: `1/-1` }}>
        <WrapperExpandContent $depth={row.getCanExpand() ? row.depth : row.depth + 1} $dimension={dimension}>
          {row.getCanExpand() && (
            <ExpandCell
              data-row={row.id}
              data-item="expand"
              className="item_expand"
              dimension={dimension}
              onClick={row.getToggleExpandedHandler()}
              isOpened={row.getIsExpanded()}
            />
          )}
          {showCheckboxTitleGroup && (
            <CheckboxCell
              data-row={row.id}
              data-item="checkbox"
              className="item_checkbox"
              dimension={dimension}
              {...{
                checked: rowSelected,
                indeterminate: rowIndeterminate,
                onChange: handleToggleSubRows,
              }}
            />
          )}

          <S.GroupTitleCell $dimension={dimension}>{original.meta?.groupTitle}</S.GroupTitleCell>
        </WrapperExpandContent>
      </div>
    );
  };

  const renderCellTd = (cell: Cell<T, unknown>) => (
    <CellTd
      className="td"
      key={cell.id}
      data-column={cell.column.id}
      data-row={cell.row.id}
      $dimension={dimension}
      $cellAlign={cell.column.columnDef.meta?.cellAlign}
      $resizer={cell.column.getIsLastColumn() ? showDividerForLastColumn : true}
      $disableBorderStyle={cell.column.id === 'checkbox-column'}
    >
      {flexRender(cell.column.columnDef.cell, cell.getContext())}
    </CellTd>
  );

  const renderOverflowMenu = showRowsActions || original.meta?.actionRender || original.meta?.overflowMenuRender;

  return (
    <>
      {original.meta?.groupTitle ? (
        renderGroupTitle()
      ) : (
        <>
          {!!row.getLeftVisibleCells().length && (
            <S.StickyWrapper $position="left" $gridColumn={`1 / span ${row.getLeftVisibleCells().length}`}>
              {row.getLeftVisibleCells().map((cell) => renderCellTd(cell))}
            </S.StickyWrapper>
          )}
          {row.getCenterVisibleCells().map((cell) => renderCellTd(cell))}
          <S.Spacer />
          {(!!row.getRightVisibleCells().length || renderOverflowMenu) && (
            <S.StickyWrapper
              $position="right"
              $gridColumn={`-1 / -${1 + row.getRightVisibleCells().length + (renderOverflowMenu ? 1 : 0)}`}
            >
              {row.getRightVisibleCells().map((cell) => renderCellTd(cell))}
              {renderOverflowMenu && (
                <OverflowMenu
                  dimension={dimension}
                  row={row}
                  onClick={handleOverflowMenuClick}
                  showRowsActions={showRowsActions}
                  tableRef={tableRef}
                  headerHeight={headerHeight}
                />
              )}
            </S.StickyWrapper>
          )}
        </>
      )}
    </>
  );
};
