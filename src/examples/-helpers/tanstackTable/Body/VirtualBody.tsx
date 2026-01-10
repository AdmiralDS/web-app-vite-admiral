import { type RowData } from '@tanstack/react-table';
import { useVirtualizer, type VirtualItem } from '@tanstack/react-virtual';
import { Fragment } from 'react';
import styled from 'styled-components';

import type { MetaRowProps, VirtualScroll } from '../types';
import { getRowHeight } from '../utils';

import { BodyTr } from './style';
import { ExpandedRow } from './ExpandedRow';
import { RowContent } from './RowContent';
import { EmptyRow } from './EmptyRow';
import type { BodyProps } from './Body';

// use style attribute for frequently changed styles
const VirtualBodyTr = styled(BodyTr).attrs<{ $moveY?: number }>((p) => ({
  style: { transform: `translateY(${p.$moveY + 'px'})` },
}))`
  position: absolute;
  left: 0;
  right: 0;
`;

const VirtualBodyEl = styled.div<{ $heightBody: string }>`
  display: grid;
  position: relative;
  height: ${({ $heightBody }) => $heightBody};
`;

interface VirtualBodyProps<T> extends BodyProps<T> {
  isDynamicRowHeight: boolean;
  virtualScroll: VirtualScroll;
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
  virtualScroll,
}: VirtualBodyProps<T>) => {
  const { fixedRowHeight, estimatedRowHeight, overscan = 5 } = virtualScroll;

  const rowVirtualizer = useVirtualizer({
    getScrollElement: () => tableRef.current,
    estimateSize: (index: number) => fixedRowHeight?.(index) || estimatedRowHeight?.(index) || getRowHeight(dimension),
    count: table.getRowModel().rows.length,
    overscan,
  });

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
        <VirtualBodyTr
          className="tr"
          data-index={index} //needed for dynamic row height measurement
          data-row={index}
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
        </VirtualBodyTr>
        {row.getCanExpand() && original.meta?.expandedRowRender && (
          <ExpandedRow dimension={dimension} row={row} showUnderline={showUnderline} />
        )}
      </Fragment>
    );

    return node ? (renderRowWrapper?.(row, index, node) ?? node) : node;
  };

  return (
    <VirtualBodyEl className="tbody" $heightBody={`${rowVirtualizer?.getTotalSize()}px`}>
      {isEmptyArrayRows ? (
        <EmptyRow dimension={dimension} underline={showLastRowUnderline && !showBorders}>
          {emptyMessage}
        </EmptyRow>
      ) : (
        rowVirtualizer?.getVirtualItems().map((virtualRow) => renderRow(virtualRow))
      )}
    </VirtualBodyEl>
  );
};
