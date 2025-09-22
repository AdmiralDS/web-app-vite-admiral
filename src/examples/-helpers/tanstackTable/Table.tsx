import { flexRender, type Row, type RowData, type Table } from '@tanstack/react-table';
import { ActionMock, Body, BodyTr, CellTd, HeaderTr, HeaderWrapper, TableContainer, type Dimension } from './styled';
import { HeaderCell } from './HeaderCell';
import type { Color } from '@admiral-ds/react-ui';
import { Fragment, useLayoutEffect, useRef, useState } from 'react';
import { OverflowMenu } from './OverflowMenu';

export type Status = 'success' | 'error' | keyof Color | `#${string}` | `rgb(${string})` | `rgba(${string})`;

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

interface Props<T> {
  table: Table<T>;
  dimension?: Dimension;
  headerLineClamp?: number;
  headerExtraLineClamp?: number;
  greyHeader?: boolean;
  greyZebraRows?: boolean;
  /** Включение постоянной видимости иконок действий над строками (OverflowMenu и иконки одиночных действий).
   * По умолчанию showRowsActions = false, при этом иконки действий видны только при ховере строк. */
  showRowsActions?: boolean;
}

export const TanstackTable = <T,>({
  table,
  dimension = 'm',
  headerLineClamp = 1,
  headerExtraLineClamp = 1,
  greyHeader,
  greyZebraRows,
  showRowsActions: userShowRowsActions = false,
}: Props<T>) => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const tableRef = useRef(null);
  const headerRef = useRef(null);

  const handleOverflowMenuClick = (e: React.MouseEvent<HTMLElement>) => {
    // клик по меню не должен вызывать событие клика по строке
    e.stopPropagation();
  };

  // check header size updates
  useLayoutEffect(() => {
    const header = headerRef.current;

    if (!header) return;

    const resizeObserver = new ResizeObserver(() => {
      setHeaderHeight((header as HTMLElement).getBoundingClientRect().height);
    });
    resizeObserver.observe(header);
    return () => {
      resizeObserver.disconnect();
    };
  }, [setHeaderHeight]);

  return (
    <TableContainer ref={tableRef}>
      <HeaderWrapper ref={headerRef}>
        {table.getHeaderGroups().map((headerGroup) => {
          const multiSortable =
            headerGroup.headers.reduce((acc, h) => (h.column.getSortIndex() >= 0 ? acc + 1 : acc), 0) > 1;

          return (
            <HeaderTr $greyHeader={greyHeader} $dimension={dimension} key={headerGroup.id}>
              {headerGroup.headers.map((header, id) => {
                const isEmptyCell = !header.isPlaceholder
                  ? headerGroup.headers.length !== id + 1
                  : !headerGroup.headers[id + 1 === headerGroup.headers.length ? id : id + 1].isPlaceholder;

                return (
                  <HeaderCell
                    key={header.id}
                    header={header}
                    headerLineClamp={headerLineClamp}
                    headerExtraLineClamp={headerExtraLineClamp}
                    multiSortable={multiSortable}
                    dimension={dimension}
                    isEmptyCell={isEmptyCell}
                  />
                );
              })}
              <th>
                <ActionMock $dimension={dimension} />
              </th>
            </HeaderTr>
          );
        })}
      </HeaderWrapper>
      <Body>
        {table.getRowModel().rows.map((row, index) => {
          const original = row.original as RowData & MetaRowProps<T>;
          const showRowsActions =
            (original.meta?.actionRender || original.meta?.overflowMenuRender) && userShowRowsActions;

          return (
            <Fragment key={row.id}>
              <BodyTr
                $dimension={dimension}
                selected={row.getIsSelected() || original.meta?.selected}
                disabled={original.meta?.disabled}
                $hover={original.meta?.hover}
                $grey={greyZebraRows && index % 2 === 1}
                $status={original.meta?.status}
                $showRowsActions={showRowsActions}
              >
                {row.getVisibleCells().map((cell) => (
                  <CellTd
                    $dimension={dimension}
                    key={cell.id}
                    $expandedRow={row.getIsExpanded()}
                    $cellAlign={cell.column.columnDef.meta?.cellAlign}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </CellTd>
                ))}
                {(showRowsActions || original.meta?.actionRender || original.meta?.overflowMenuRender) && (
                  <td>
                    <OverflowMenu
                      dimension={dimension}
                      row={row}
                      onClick={handleOverflowMenuClick}
                      //todo пересмотреть
                      showRowsActions={!!showRowsActions}
                      tableRef={tableRef}
                      headerHeight={headerHeight}
                    />
                  </td>
                )}
              </BodyTr>
              {row.getIsExpanded() && (
                <BodyTr $dimension={dimension}>
                  <CellTd $dimension={dimension} colSpan={row.getVisibleCells().length}>
                    {original.meta?.expandedRowRender ? original.meta.expandedRowRender({ row }) : null}
                  </CellTd>
                </BodyTr>
              )}
            </Fragment>
          );
        })}
      </Body>
    </TableContainer>
  );
};
