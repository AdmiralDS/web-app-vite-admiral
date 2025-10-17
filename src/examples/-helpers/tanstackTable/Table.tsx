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

    /** Название группы */
    groupTitle?: string;
    /** Строки таблицы, находящиеся в группе */
    subRows?: T[];
  };
}

export interface TanstackTableProps<T> extends React.HTMLAttributes<HTMLTableElement> {
  table: Table<T>;
  dimension?: Dimension;
  headerLineClamp?: number;
  headerExtraLineClamp?: number;
  greyHeader?: boolean;
  greyZebraRows?: boolean;
  /** Включение постоянной видимости иконок действий над строками (OverflowMenu и иконки одиночных действий).
   * По умолчанию showRowsActions = false, при этом иконки действий видны только при ховере строк. */
  showRowsActions?: boolean;
  virtualScroll?: VirtualScroll;
  /** Отображать чекбоксы в названиях групп */
  showCheckboxTitleGroup?: boolean;
  /** Отображение разделителя для последней колонки. По умолчанию разделитель не отображается */
  showDividerForLastColumn?: boolean;
  /** Отображение серой линии подчеркивания для последней строки. По умолчанию линия отображается */
  showLastRowUnderline?: boolean;
  /** Включение границ между ячейками таблицы и обводки всей таблицы.
   * Последняя колонка имеет границы справа только, если параметр showDividerForLastColumn равен true. */
  showBorders?: boolean;
}

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
    if (
      header.column.getIsPinned() == 'left' &&
      (header.column.id == 'checkbox-column' || header.column.id == 'expand-column')
    ) {
      return result + ` min-content`;
    }
    if (virtualScroll && virtualScroll.horizontal) return `${virtualScroll.fixedColumnWidth ?? DEFAULT_COLUMN_WIDTH}px`;
    else {
      let width = header.column.getCanResize()
        ? header.getSize() + 'px'
        : header.column.columnDef.meta?.gridColumnTemplate || header.getSize() + 'px';

      return result + ` ${width}`;
    }
  }, '');

  const gridTemplateColumns = isRowsActions
    ? `${gridVisibleTemplateColumns} minmax(min-content, auto) 0px`
    : gridVisibleTemplateColumns;

  return (
    <S.Table
      ref={tableRef}
      style={
        {
          '--columns-template': gridTemplateColumns,
        } as React.CSSProperties
      }
      data-borders={showBorders}
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
        virtualPaddingLeft={virtualPaddingLeft}
        virtualPaddingRight={virtualPaddingRight}
        virtualScroll={virtualScroll}
        virtualColumns={virtualColumns}
        fixedColumnWidth={virtualScroll?.fixedColumnWidth || DEFAULT_COLUMN_WIDTH}
        showDividerForLastColumn={showDividerForLastColumn}
        tableRef={tableRef}
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
