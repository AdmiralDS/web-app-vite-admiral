import { CheckboxField } from '@admiral-ds/react-ui';
import { flexRender, type Row, type RowData, type Cell } from '@tanstack/react-table';

import type { Dimension, MetaRowProps } from '../../types';
import { CheckboxCell, ExpandCell, ExpandIcon, ExpandIconPlacement, WrapperExpandContent } from '../../style';
import { CellTd } from '../style';

import * as S from './style';
import { OverflowMenu } from './OverflowMenu';

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

  const renderGroupTitle = () => (
    <td style={{ gridColumn: `1/-1` }}>
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
  );

  const renderCellTd = (cell: Cell<T, unknown>) => (
    <CellTd
      key={cell.id}
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
          {(row.getRightVisibleCells() || renderOverflowMenu) && (
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
