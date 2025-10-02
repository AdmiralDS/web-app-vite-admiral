import { type Row, type RowData, type Table } from '@tanstack/react-table';
import { useRef, useState } from 'react';
import type { Color } from '@admiral-ds/react-ui';

import * as S from './style';
import { Body } from './Body';
import { VirtualBody } from './Body/VirtualBody';
import { useVirtualizer, type VirtualItem, type Virtualizer } from '@tanstack/react-virtual';
import { Header } from './Header';

export type Status = 'success' | 'error' | keyof Color | `#${string}` | `rgb(${string})` | `rgba(${string})`;

export type Dimension = 'xl' | 'l' | 'm' | 's';

export type VirtualScroll = {
  fixedRowHeight?: number;
  horizontal?: boolean;
  vertical?: boolean;
  fixedColumnWidth?: number;
};

export interface MetaRowProps<T> {
  meta?: {
    hover?: boolean;
    status?: Status;
    disabled?: boolean;
    selected?: boolean;
    /** Функция рендера содержимого раскрытой части строки (детализации строки) */
    expandedRowRender?: (props: { row: Row<T> }) => React.ReactElement;

    /** Функция рендера OverflowMenu для строки.
     * Входные параметры: сама строка, колбек onVisibilityChange.
     * Колбек необходимо вызывать при открытии/закрытии меню для того, чтобы таблица могла управлять видимостью OverflowMenu.
     * OverflowMenu отображается при ховере на строку или при открытом меню
     * и располагается по правому краю строки в видимой области таблицы.
     *
     * В качестве результата функция должна возвращать OverflowMenu.
     * Для таблицы с dimension='s' или dimension='m' используется OverflowMenu c dimension='m'.
     * Для таблицы с dimension='l' или dimension='xl' используется OverflowMenu c dimension='l'.
     */
    overflowMenuRender?: (row: any, onVisibilityChange?: (isVisible: boolean) => void) => React.ReactNode;
    /** Функция рендера одиночного действия над строкой.
     * Одиночное действие отображается в виде иконки при ховере на строку
     * и располагается по правому краю строки в видимой области таблицы.
     *
     * В качестве результата функция должна возвращать компонент RowAction,
     * внутрь которого нужно передать произвольную иконку для отображения действия.
     */
    actionRender?: (row: any) => React.ReactNode;
  };
}

interface Props<T> extends React.HTMLAttributes<HTMLTableElement> {
  table: Table<T>;
  dimension?: Dimension;
  headerLineClamp?: number;
  headerExtraLineClamp?: number;
  greyHeader?: boolean;
  greyZebraRows?: boolean;
  /** Включение постоянной видимости иконок действий над строками (OverflowMenu и иконки одиночных действий).
   * По умолчанию showRowsActions = false, при этом иконки действий видны только при ховере строк. */
  showRowsActions?: boolean;
  gridTemplateColumns?: string;
  virtualScroll?: VirtualScroll;
}

export const DEFAULT_COLUMN_WIDTH = 100;

export const TanstackTable = <T,>({
  table,
  dimension = 'm',
  headerLineClamp = 1,
  headerExtraLineClamp = 1,
  greyHeader,
  greyZebraRows,
  showRowsActions: userShowRowsActions = false,
  gridTemplateColumns,
  virtualScroll,
  ...props
}: Props<T>) => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const tableRef = useRef(null);

  const isRowsActions = table.getRowModel().rows.some((row) => {
    const original = row.original as RowData & MetaRowProps<T>;

    return original.meta?.actionRender || original.meta?.overflowMenuRender;
  });

  const showRowsActions = isRowsActions && userShowRowsActions;

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

  return (
    <S.Table
      ref={tableRef}
      $gridTemplateColumns={
        gridTemplateColumns ??
        `repeat(${isRowsActions ? table.getAllLeafColumns().length + 1 : table.getAllLeafColumns().length}, ${(virtualScroll && virtualScroll.fixedColumnWidth) ?? DEFAULT_COLUMN_WIDTH}px)`
      }
      {...props}
    >
      <Header
        table={table}
        setHeaderHeight={(headerHeight) => setHeaderHeight(headerHeight)}
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
        />
      )}
    </S.Table>
  );
};
