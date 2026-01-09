import { type RowData } from '@tanstack/react-table';
import { forwardRef, useRef, useState, useMemo } from 'react';
import { refSetter } from '@admiral-ds/react-ui';

import * as S from './style';
import { Body } from './Body';
import { VirtualBody } from './Body/VirtualBody';
import { Header } from './Header';
import type { MetaRowProps, TanstackTableProps } from './types';
import { getColumnWidth } from './utils';

export const defaultOptions = {
  enableSorting: false,
  columnResizeMode: 'onChange',
  defaultColumn: {
    size: 100, //starting column size
    minSize: 50, //enforced during column resizing
    maxSize: 500, //enforced during column resizing
  },
} as const;

export const TanstackTable = forwardRef(
  <T,>(
    {
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
      emptyMessage = 'Нет совпадений',
      renderRowWrapper,
      style,
      className,
      ...props
    }: TanstackTableProps<T>,
    ref: React.ForwardedRef<HTMLDivElement>,
  ) => {
    const [headerHeight, setHeaderHeight] = useState(0);
    const tableRef = useRef(null);
    const mergedRefs = useMemo(() => refSetter(ref, tableRef), [ref]);

    const isRowsActions = table.getRowModel().rows.some((row) => {
      const original = row.original as RowData & MetaRowProps<T>;

      return original.meta?.actionRender || original.meta?.overflowMenuRender;
    });
    const showRowsActions = isRowsActions && userShowRowsActions;

    let leftTemplate = table.getLeftLeafColumns().reduce((result, column) => {
      if (column.id == 'checkbox-column' || column.id == 'expand-column') {
        return `${result} min-content`;
      }
      return `${result} ${getColumnWidth(column)}`;
    }, '');

    // minmax(0px, auto) для Spacer
    let centerTemplate =
      table.getCenterLeafColumns().reduce((result, column) => `${result} ${getColumnWidth(column)}`, '') +
      ' minmax(0px, auto)';

    let rightTemplate = table
      .getRightLeafColumns()
      .reduce((result, column) => `${result} ${getColumnWidth(column)}`, '');

    const gridTemplate = leftTemplate + centerTemplate + rightTemplate;
    const gridTemplateColumns = gridTemplate + (isRowsActions ? ' min-content' : '');

    const gridTemplateHeaders =
      (table.getIsSomeColumnsPinned('left') ? '0px ' : '') +
      gridTemplate +
      (table.getIsSomeColumnsPinned('right') || showRowsActions ? ` ${showRowsActions ? 'min-content ' : ''}0px` : '');

    return (
      <S.Table
        ref={mergedRefs}
        data-borders={showBorders}
        style={
          {
            '--columns-template': gridTemplateColumns,
            ...style,
          } as React.CSSProperties
        }
        className={`table ${className || ''}`}
        {...props}
      >
        <Header
          table={table}
          setHeaderHeight={(height) => setHeaderHeight(height)}
          dimension={dimension}
          headerLineClamp={headerLineClamp}
          headerExtraLineClamp={headerExtraLineClamp}
          greyHeader={greyHeader}
          showRowsActions={showRowsActions}
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
            isDynamicRowHeight={!!virtualScroll.estimatedRowHeight}
            greyZebraRows={greyZebraRows}
            showRowsActions={showRowsActions}
            headerHeight={headerHeight}
            showLastRowUnderline={showLastRowUnderline}
            showBorders={showBorders}
            showCheckboxTitleGroup={showCheckboxTitleGroup}
            showDividerForLastColumn={showDividerForLastColumn}
            emptyMessage={emptyMessage}
            renderRowWrapper={renderRowWrapper}
            virtualScroll={virtualScroll}
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
            renderRowWrapper={renderRowWrapper}
          />
        )}
      </S.Table>
    );
  },
) as <T>(props: TanstackTableProps<T> & { ref?: React.ForwardedRef<HTMLDivElement> }) => JSX.Element;
