import { type RowData } from '@tanstack/react-table';
import { useVirtualizer, type VirtualItem } from '@tanstack/react-virtual';
import { Fragment } from 'react';

import * as S from './style';
import type { MetaRowProps, VirtualScroll } from '../types';
import { ExpandedRow } from './ExpandedRow';
import { RowContent } from './RowContent';
import type { BodyProps } from './Body';

interface VirtualBodyProps<T> extends BodyProps<T> {
  virtualScroll: Omit<VirtualScroll, 'horizontal'>;
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
  // virtualColumns,
  // virtualPaddingLeft,
  // virtualPaddingRight,
  showLastRowUnderline,
  showBorders,
  showCheckboxTitleGroup,
  showDividerForLastColumn,
}: VirtualBodyProps<T>) => {
  const rowVirtualizer = useVirtualizer({
    getScrollElement: () => tableRef.current,
    estimateSize: () => virtualScroll?.fixedRowHeight || virtualScroll?.estimatedRowHeight || 40,
    count: table.getRowModel().rows.length,
    //measure dynamic row height, except in firefox because it measures table border height incorrectly
    // measureElement:
    //   typeof window !== 'undefined' && navigator.userAgent.indexOf('Firefox') === -1
    //     ? (element) => element?.getBoundingClientRect()?.height
    //     : undefined,
    overscan: virtualScroll?.overscan || 5,
  });

  return (
    <S.VirtualBody $heightBody={`${rowVirtualizer.getTotalSize()}px`}>
      {rowVirtualizer.getVirtualItems().map((virtualRow) => {
        const row = table.getRowModel().rows[virtualRow.index];
        const original = row.original as RowData & MetaRowProps<T>;

        const isLastRow = virtualRow.index === table.getRowModel().rows.length - 1;
        const showUnderline = isLastRow ? showLastRowUnderline && !showBorders : true;

        return (
          <Fragment key={virtualRow.index}>
            <S.VirtualBodyTr
              data-index={virtualRow.index} //needed for dynamic row height measurement
              ref={virtualScroll?.estimatedRowHeight ? rowVirtualizer.measureElement : null}
              $dimension={dimension}
              selected={row.getIsSelected() || original.meta?.selected}
              disabled={original.meta?.disabled}
              $hover={original.meta?.hover}
              $grey={greyZebraRows && virtualRow.index % 2 === 1}
              $status={original.meta?.status}
              $showRowsActions={showRowsActions}
              $moveY={virtualRow.start}
              $showUnderline={!original.meta?.expandedRowRender && showUnderline}
            >
              {
                // virtualColumns ? (
                //   <>
                //     {!!virtualPaddingLeft && <S.SpacerCellTd $width={virtualPaddingLeft} $dimension={dimension} />}
                //     {virtualColumns.map((virtualColumn) => {
                //       const cell = row.getVisibleCells()[virtualColumn.index];
                //       return (
                //         <S.CellTd $dimension={dimension} key={cell.id} $cellAlign={cell.column.columnDef.meta?.cellAlign}>
                //           {flexRender(cell.column.columnDef.cell, cell.getContext())}
                //         </S.CellTd>
                //       );
                //     })}
                //     {!!virtualPaddingRight && <S.SpacerCellTd $width={virtualPaddingRight} $dimension={dimension} />}
                //   </>
                // ) : (
              }
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
      })}
    </S.VirtualBody>
  );
};
