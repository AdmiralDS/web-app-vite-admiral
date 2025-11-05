import { type RowData } from '@tanstack/react-table';
import { useRef, useState } from 'react';

import * as S from './style';
import { Body } from './Body';
import { VirtualBody } from './Body/VirtualBody';
import { useVirtualizer, type VirtualItem, type Virtualizer } from '@tanstack/react-virtual';
import { Header } from './Header';
import type { MetaRowProps, TanstackTableProps } from './types';

export const defaultOptions = {
  enableSorting: false,
  columnResizeMode: 'onChange',
  defaultColumn: {
    size: 100, //starting column size
    minSize: 50, //enforced during column resizing
    maxSize: 500, //enforced during column resizing
  },
} as const;

export const DEFAULT_COLUMN_WIDTH = 100;

export const TanstackTable = <T,>({
  table,
  dimension = 'm',
  headerLineClamp = 1,
  headerExtraLineClamp = 1,
  greyHeader,
  greyZebraRows,
  showRowsActions: userShowRowsActions = false,
  virtualScroll,
  showCheckboxTitleGroup = false,
  showDividerForLastColumn = false,
  showLastRowUnderline = true,
  showBorders = false,
  ...props
}: TanstackTableProps<T>) => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const tableRef = useRef(null);

  const isRowsActions = table.getRowModel().rows.some((row) => {
    const original = row.original as RowData & MetaRowProps<T>;

    return original.meta?.actionRender || original.meta?.overflowMenuRender;
  });
  const showRowsActions = isRowsActions && userShowRowsActions;

  //виртуализация
  // Не учитывается, что есть колонки с чекбоксами/ стрелками, фиксированные колонки !!!
  const visibleColumns = table.getVisibleLeafColumns();
  let virtualPaddingLeft = 0;
  let virtualPaddingRight = 0;
  let columnVirtualizer: Virtualizer<HTMLDivElement, HTMLTableCellElement>;
  let virtualColumns: VirtualItem[] = [];

  if (virtualScroll && virtualScroll.horizontal) {
    columnVirtualizer = useVirtualizer<HTMLDivElement, HTMLTableCellElement>({
      count: visibleColumns.length,
      estimateSize: () => virtualScroll.fixedColumnWidth || DEFAULT_COLUMN_WIDTH, //estimate width of each column for accurate scrollbar dragging
      getScrollElement: () => tableRef.current,
      horizontal: true,
      overscan: 3, //how many columns to render on each side off screen each way (adjust this for performance)
    });

    virtualColumns = columnVirtualizer.getVirtualItems();

    if (columnVirtualizer && virtualColumns?.length) {
      virtualPaddingLeft = virtualColumns[0]?.start ?? 0;
      virtualPaddingRight = columnVirtualizer.getTotalSize() - (virtualColumns[virtualColumns.length - 1]?.end ?? 0);
    }
  }

  //определение ширины колонок
  const gridVisibleTemplateColumns = table.getLeafHeaders().reduce((result, header) => {
    if (header.subHeaders.length > 0) {
      return result + '';
    }
    if (
      header.column.getIsPinned() == 'left' &&
      (header.column.id == 'checkbox-column' || header.column.id == 'expand-column')
    ) {
      return result + ` min-content`;
    }
    // нужно перебирать только virtualColumns, а не все подряд
    // if (virtualScroll && virtualScroll.horizontal) {
    //   return result + ` ${virtualScroll.fixedColumnWidth ?? DEFAULT_COLUMN_WIDTH}px`;
    // }
    let width = header.column.getCanResize()
      ? header.getSize() + 'px'
      : header.column.columnDef.meta?.gridColumnTemplate || header.getSize() + 'px';

    return result + ` ${width}`;
  }, '');

  // Spacer - minmax(0px, auto)
  let gridTemplateColumns = `${gridVisibleTemplateColumns} minmax(0px, auto)`;

  // if (virtualScroll && virtualScroll.horizontal) {
  //   gridTemplateColumns = `${virtualPaddingLeft} ` + gridTemplateColumns + ` ${virtualPaddingRight}`;
  // }

  if (isRowsActions) {
    // ActionMock - min-content, Edge - 0px
    gridTemplateColumns = `${gridTemplateColumns} min-content 0px`;
  }

  return (
    <S.Table
      ref={tableRef}
      data-borders={showBorders}
      {...props}
      style={
        {
          '--columns-template': gridTemplateColumns,
          ...props.style,
        } as React.CSSProperties
      }
      className={`table ${props.className || ''}`}
    >
      <Header
        table={table}
        setHeaderHeight={(height) => setHeaderHeight(height)}
        dimension={dimension}
        headerLineClamp={headerLineClamp}
        headerExtraLineClamp={headerExtraLineClamp}
        greyHeader={greyHeader}
        showRowsActions={showRowsActions}
        virtualPaddingLeft={virtualPaddingLeft}
        virtualPaddingRight={virtualPaddingRight}
        virtualScroll={virtualScroll}
        virtualColumns={virtualColumns}
        fixedColumnWidth={virtualScroll?.fixedColumnWidth || DEFAULT_COLUMN_WIDTH}
        showDividerForLastColumn={showDividerForLastColumn}
        tableRef={tableRef}
        showBorders={showBorders}
        style={
          {
            '--columns-template': `0px ${gridTemplateColumns}`,
          } as React.CSSProperties
        }
      />

      {virtualScroll && virtualScroll.vertical ? (
        <VirtualBody
          dimension={dimension}
          table={table}
          tableRef={tableRef}
          virtualScroll={virtualScroll}
          greyZebraRows={greyZebraRows}
          showRowsActions={showRowsActions}
          headerHeight={headerHeight}
          virtualColumns={virtualScroll.horizontal ? virtualColumns : undefined}
          virtualPaddingLeft={virtualPaddingLeft}
          virtualPaddingRight={virtualPaddingRight}
        />
      ) : (
        <Body
          dimension={dimension}
          table={table}
          tableRef={tableRef}
          greyZebraRows={greyZebraRows}
          showRowsActions={showRowsActions}
          headerHeight={headerHeight}
          showLastRowUnderline={showLastRowUnderline}
          showBorders={showBorders}
          showCheckboxTitleGroup={showCheckboxTitleGroup}
          showDividerForLastColumn={showDividerForLastColumn}
        />
      )}
    </S.Table>
  );
};
