import { type RowData } from '@tanstack/react-table';
import { useVirtualizer, type VirtualItem } from '@tanstack/react-virtual';
import { Fragment, useEffect, useState } from 'react';

import * as S from './style';
import type { MetaRowProps, VirtualScroll } from '../types';
import { ExpandedRow } from './ExpandedRow';
import { RowContent } from './RowContent';
import type { BodyProps } from './Body';

interface VirtualBodyProps<T> extends BodyProps<T> {
  virtualScroll: Omit<VirtualScroll, 'horizontal'>;
}

export const VirtualBody = <T,>({
  table,
  virtualScroll,
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
}: VirtualBodyProps<T>) => {
  const { fixedRowHeight, estimatedRowHeight, overscan = 5 } = virtualScroll;
  const isEmptyArrayRows = table.getRowModel().rows.length === 0;
  const [tableRefTest, setTableRefTest] = useState(null);

  useEffect(() => {
    setTableRefTest(tableRef.current);
  }, [tableRef.current]);

  const rowVirtualizer = useVirtualizer({
    getScrollElement: () => tableRefTest,
    estimateSize: (index: number) => fixedRowHeight?.(index) || estimatedRowHeight?.(index) || 40,
    count: table.getRowModel().rows.length,
    overscan: overscan,
  });

  const renderRow = (virtualRow: VirtualItem) => {
    const index = virtualRow.index;
    const row = table.getRowModel().rows[index];
    const original = row.original as RowData & MetaRowProps<T>;
    const isLastRow = index === table.getRowModel().rows.length - 1;
    const showUnderline = isLastRow ? showLastRowUnderline && !showBorders : true;

    const node = (
      <Fragment key={index}>
        <S.VirtualBodyTr
          data-index={index} //needed for dynamic row height measurement
          ref={estimatedRowHeight ? rowVirtualizer?.measureElement : null}
          $dimension={dimension}
          selected={row.getIsSelected() || original.meta?.selected}
          disabled={original.meta?.disabled}
          $hover={original.meta?.hover}
          $grey={greyZebraRows && index % 2 === 1}
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

    return node ? (renderRowWrapper?.(row, index, node) ?? node) : node;
  };

  return (
    <S.VirtualBody $heightBody={`${rowVirtualizer?.getTotalSize()}px`}>
      {isEmptyArrayRows ? (
        <S.BodyTr $dimension={dimension} $showUnderline={showLastRowUnderline && !showBorders}>
          <S.EmptyCell $dimension={dimension} $resizer={false}>
            {emptyMessage || 'Нет совпадений'}
          </S.EmptyCell>
        </S.BodyTr>
      ) : (
        rowVirtualizer?.getVirtualItems().map((virtualRow) => renderRow(virtualRow))
      )}
    </S.VirtualBody>
  );
};
