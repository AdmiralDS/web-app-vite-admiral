import { CheckboxField } from '@admiral-ds/react-ui';
import { CellTd } from '../style';

import * as S from './style';
import { OverflowMenu } from './OverflowMenu';
import { flexRender, type Row, type RowData } from '@tanstack/react-table';
import type { Dimension, MetaRowProps } from '../../types';
import { CheckboxCell, ExpandCell, ExpandIcon, ExpandIconPlacement, WrapperExpandContent } from '../../style';

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

  return (
    <>
      {original.meta?.groupTitle ? (
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
      ) : (
        <>
          {!!row.getLeftVisibleCells().length && (
            <S.StickyWrapper $gridColumn={`1 / ${row.getLeftVisibleCells().length + 1}`}>
              {row.getLeftVisibleCells().map((cell) => (
                <CellTd
                  key={cell.id}
                  $dimension={dimension}
                  $cellAlign={cell.column.columnDef.meta?.cellAlign}
                  $resizer={true}
                  $disableBorderStyle={cell.column.id === 'checkbox-column'}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </CellTd>
              ))}
            </S.StickyWrapper>
          )}
          <S.NormalWrapper $gridColumn={`${row.getLeftVisibleCells().length + 1} / -1`}>
            {row.getCenterVisibleCells().map((cell) => (
              <CellTd
                key={cell.id}
                $dimension={dimension}
                $cellAlign={cell.column.columnDef.meta?.cellAlign}
                $resizer={cell.column.getIsLastColumn() ? showDividerForLastColumn : true}
                $disableBorderStyle={cell.column.id === 'checkbox-column'}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </CellTd>
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
    </>
  );
};
