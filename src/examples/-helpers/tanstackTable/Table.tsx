import { type RowData, type Column } from '@tanstack/react-table';
import { useRef, useState } from 'react';

import * as S from './style';
import { Body } from './Body';
import { VirtualBody } from './Body/VirtualBody';
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
  emptyMessage,
  ...props
}: TanstackTableProps<T>) => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const tableRef = useRef(null);

  const isRowsActions = table.getRowModel().rows.some((row) => {
    const original = row.original as RowData & MetaRowProps<T>;

    return original.meta?.actionRender || original.meta?.overflowMenuRender;
  });
  const showRowsActions = isRowsActions && userShowRowsActions;

  //определение ширины колонок Проверить и отладить всё это!!!
  let leftTemplate = '',
    centerTemplate = '',
    rightTemplate = '';

  const getColumnWidth = (column: Column<T>) => {
    return column.getCanResize()
      ? `${column.getSize()}px`
      : column.columnDef.meta?.gridColumnTemplate || `${column.getSize()}px`;
  };

  if (table.getIsSomeColumnsPinned('left')) {
    leftTemplate = table.getLeftLeafColumns().reduce((result, column) => {
      if (column.id == 'checkbox-column' || column.id == 'expand-column') {
        return `${result} min-content`;
      }
      return `${result} ${getColumnWidth(column)}`;
    }, '');
  }

  // minmax(0px, auto) для Spacer
  centerTemplate =
    table.getCenterLeafColumns().reduce((result, column) => `${result} ${getColumnWidth(column)}`, '') +
    ' minmax(0px, auto)';

  if (table.getIsSomeColumnsPinned('right')) {
    rightTemplate = table.getRightLeafColumns().reduce((result, column) => `${result} ${getColumnWidth(column)}`, ' ');
  }

  const gridTemplate = leftTemplate + centerTemplate + rightTemplate;
  const gridTemplateColumns = gridTemplate + (isRowsActions ? ' min-content' : '');

  const gridTemplateHeaders =
    (table.getIsSomeColumnsPinned('left') ? '0px ' : '') +
    gridTemplate +
    (table.getIsSomeColumnsPinned('right') || showRowsActions ? ` ${showRowsActions ? 'min-content ' : ''}0px` : '');

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
        virtualScroll={virtualScroll}
        fixedColumnWidth={virtualScroll?.fixedColumnWidth || DEFAULT_COLUMN_WIDTH}
        showDividerForLastColumn={showDividerForLastColumn}
        tableRef={tableRef}
        showBorders={showBorders}
        style={
          {
            '--columns-template': gridTemplateHeaders,
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
          showLastRowUnderline={showLastRowUnderline}
          showBorders={showBorders}
          showCheckboxTitleGroup={showCheckboxTitleGroup}
          showDividerForLastColumn={showDividerForLastColumn}
          emptyMessage={emptyMessage}
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
          emptyMessage={emptyMessage}
        />
      )}
    </S.Table>
  );
};
