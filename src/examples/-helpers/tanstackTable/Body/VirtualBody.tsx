import { type RowData } from '@tanstack/react-table';
import { type VirtualItem, type Virtualizer } from '@tanstack/react-virtual';
import { Fragment } from 'react';

import * as S from './style';
import type { MetaRowProps } from '../types';
import { ExpandedRow } from './ExpandedRow';
import { RowContent } from './RowContent';
import type { BodyProps } from './Body';

interface VirtualBodyProps<T> extends BodyProps<T> {
  isDynamicRowHeight: boolean;
  rowVirtualizer: Virtualizer<Element, Element>;
}

export const VirtualBody = <T,>({
  table,
  isDynamicRowHeight,
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
  rowVirtualizer,
}: VirtualBodyProps<T>) => {
  const isEmptyArrayRows = table.getRowModel().rows.length === 0;

  const renderRow = (virtualRow: VirtualItem) => {
    const index = virtualRow.index;
    const row = table.getRowModel().rows[index];
    const original = row.original as RowData & MetaRowProps<T>;
    const isLastRow = index === table.getRowModel().rows.length - 1;
    const showUnderline = isLastRow ? showLastRowUnderline && !showBorders : true;
    const isSelected =
      row.getIsSelected() ||
      original.meta?.selected ||
      row.getIsSomeSelected() ||
      (!row.getCanSelect() && row.getIsAllSubRowsSelected());

    const node = (
      <Fragment key={index}>
        <S.VirtualBodyTr
          className="tr"
          data-index={index} //needed for dynamic row height measurement
          ref={isDynamicRowHeight ? rowVirtualizer?.measureElement : null}
          $dimension={dimension}
          selected={isSelected}
          disabled={original.meta?.disabled}
          $hover={original.meta?.hover}
          $grey={greyZebraRows && index % 2 === 1}
          $status={original.meta?.status}
          $showRowsActions={showRowsActions}
          $moveY={virtualRow.start}
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
        </S.VirtualBodyTr>
        {row.getCanExpand() && original.meta?.expandedRowRender && (
          <ExpandedRow dimension={dimension} row={row} showUnderline={showUnderline} />
        )}
      </Fragment>
    );

    return node ? (renderRowWrapper?.(row, index, node) ?? node) : node;
  };

  return (
    <S.VirtualBody className="tbody" $heightBody={`${rowVirtualizer?.getTotalSize()}px`}>
      {isEmptyArrayRows ? (
        <S.BodyTr className="tr" $dimension={dimension} $showUnderline={showLastRowUnderline && !showBorders}>
          <S.EmptyCell className="td" $dimension={dimension} $resizer={false}>
            {emptyMessage || 'Нет совпадений'}
          </S.EmptyCell>
        </S.BodyTr>
      ) : (
        rowVirtualizer?.getVirtualItems().map((virtualRow) => renderRow(virtualRow))
      )}
    </S.VirtualBody>
  );
};
