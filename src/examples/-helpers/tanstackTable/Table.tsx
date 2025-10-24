import { flexRender, type Row, type RowData, type Table } from '@tanstack/react-table';
import { Fragment, useLayoutEffect, useRef, useState } from 'react';
import { CheckboxField, type Color } from '@admiral-ds/react-ui';

import { OverflowMenu } from './OverflowMenu';
import * as S from './style';
import { CellTh } from './HeaderCell';
import { tableHeaderRowSpan } from './utils';

export type Status = 'success' | 'error' | keyof Color | `#${string}` | `rgb(${string})` | `rgba(${string})`;

export type Dimension = 'xl' | 'l' | 'm' | 's';

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

export interface TanstackTableProps<T> {
  table: Table<T>;
  dimension?: Dimension;
  headerLineClamp?: number;
  headerExtraLineClamp?: number;
  greyHeader?: boolean;
  greyZebraRows?: boolean;
  /** Включение постоянной видимости иконок действий над строками (OverflowMenu и иконки одиночных действий).
   * По умолчанию showRowsActions = false, при этом иконки действий видны только при ховере строк. */
  showRowsActions?: boolean;
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

export const TanstackTable = <T,>({
  table,
  dimension = 'm',
  headerLineClamp = 1,
  headerExtraLineClamp = 1,
  greyHeader,
  greyZebraRows,
  showRowsActions: userShowRowsActions = false,
  showCheckboxTitleGroup = false,
  showDividerForLastColumn = false,
  showLastRowUnderline = true,
  showBorders = false,
}: TanstackTableProps<T>) => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const tableRef = useRef(null);
  const headerRef = useRef(null);
  const rightEdgeRef = useRef(null);

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

  const isRowsActions = table.getRowModel().rows.some((row) => {
    const original = row.original as RowData & MetaRowProps<T>;

    return original.meta?.actionRender || original.meta?.overflowMenuRender;
  });

  const showRowsActions = isRowsActions && userShowRowsActions;

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
    let width = header.column.getCanResize()
      ? header.getSize() + 'px'
      : header.column.columnDef.meta?.gridColumnTemplate || header.getSize() + 'px';

    return result + ` ${width}`;
  }, '');

  // Spacer - minmax(0px, auto), ActionMock - min-content, Edge - 0px
  const gridTemplateColumns = isRowsActions
    ? `${gridVisibleTemplateColumns} minmax(0px, auto) min-content 0px`
    : `${gridVisibleTemplateColumns} minmax(0px, auto)`;

  useLayoutEffect(() => {
    const table: HTMLElement | null = tableRef.current;
    const rightEdge = rightEdgeRef.current;

    function handleIntersection([entry]: IntersectionObserverEntry[]) {
      if (table) {
        if (entry.isIntersecting && entry.intersectionRatio > 0.99) {
          table.setAttribute('data-shadow-right', 'false');
        } else {
          table.setAttribute('data-shadow-right', 'true');
        }
      }
    }

    if (table && rightEdge && showRowsActions) {
      const observer = new IntersectionObserver(handleIntersection, {
        root: table,
        threshold: [0, 1.0],
      });
      observer.observe(rightEdge);
      return () => observer.disconnect();
    }
  }, [showRowsActions]);

  return (
    <S.Table
      ref={tableRef}
      style={
        {
          '--columns-template': gridTemplateColumns,
        } as React.CSSProperties
      }
      data-borders={showBorders}
    >
      <S.Header ref={headerRef} data-borders={showBorders || table.getHeaderGroups().length > 1}>
        <S.HeaderTr $greyHeader={greyHeader} $dimension={dimension}>
          {table.getHeaderGroups().map((headerGroup) => {
            const multiSortable =
              headerGroup.headers.reduce((acc, h) => (h.column.getSortIndex() >= 0 ? acc + 1 : acc), 0) > 1;

            return (
              <Fragment key={headerGroup.id}>
                {headerGroup.headers.map((header, index, headers) => {
                  const rowSpan = tableHeaderRowSpan(header);
                  if (!rowSpan) {
                    return null;
                  }
                  const showResizer = index === headers.length - 1 ? showDividerForLastColumn : true;

                  const title = flexRender(header.column.columnDef.header, header.getContext());
                  const extraText = flexRender(header.column.columnDef.meta?.extraText, header.getContext());
                  /** некорректное сравнение на тип string, так как в случае если header не задан напрямую может сломаться дизайн */
                  return (
                    <Fragment key={header.id}>
                      {typeof title === 'string' ? (
                        <CellTh
                          key={header.id}
                          header={header}
                          headerLineClamp={headerLineClamp}
                          headerExtraLineClamp={headerExtraLineClamp}
                          multiSortable={multiSortable}
                          dimension={dimension}
                          showResizer={showResizer}
                          rowSpan={rowSpan}
                          title={title}
                          extraText={extraText}
                        />
                      ) : (
                        title
                      )}
                    </Fragment>
                  );
                })}
                <S.Spacer />
              </Fragment>
            );
          })}
          {showRowsActions && (
            <>
              <S.ActionMock $dimension={dimension} />
              <S.Edge ref={rightEdgeRef} />
            </>
          )}
        </S.HeaderTr>
      </S.Header>
      <S.Body>
        {table.getRowModel().rows.map((row, index, rows) => {
          const original = row.original as RowData & MetaRowProps<T>;
          const isLastRow = index === rows.length - 1;

          return (
            <Fragment key={row.id}>
              <S.BodyTr
                $dimension={dimension}
                selected={row.getIsSelected() || original.meta?.selected}
                disabled={original.meta?.disabled}
                $hover={original.meta?.hover}
                $grey={greyZebraRows && index % 2 === 1}
                $status={original.meta?.status}
                $showRowsActions={showRowsActions}
                $expandedRow={row.getIsExpanded() && !!original.meta?.expandedRowRender}
                $underline={!row.getIsExpanded() && (isLastRow ? showLastRowUnderline && !showBorders : true)}
              >
                {original.meta?.groupTitle ? (
                  <td
                    colSpan={row.getVisibleCells().length}
                    style={{ gridColumn: `span ${row.getVisibleCells().length}` }}
                  >
                    <S.WrapperExpandContent
                      $depth={row.getCanExpand() ? row.depth : row.depth + 1}
                      $dimension={dimension}
                    >
                      {row.getCanExpand() && (
                        <S.ExpandCell $dimension={dimension}>
                          <S.ExpandIconPlacement
                            dimension={dimension === 'm' || dimension === 's' ? 'mBig' : 'lBig'}
                            highlightFocus={false}
                            onClick={row.getToggleExpandedHandler()}
                          >
                            <S.ExpandIcon $isOpened={row.getIsExpanded()} aria-hidden />
                          </S.ExpandIconPlacement>
                        </S.ExpandCell>
                      )}
                      {row.getCanSelect() && showCheckboxTitleGroup && (
                        <S.CheckboxCell $dimension={dimension}>
                          <CheckboxField
                            dimension={dimension === 'm' || dimension === 's' ? 's' : 'm'}
                            {...{
                              checked: row.getIsSelected(),
                              disabled: !row.getCanSelect(),
                              indeterminate: row.getIsSomeSelected(),
                              onChange: row.getToggleSelectedHandler(),
                            }}
                          />
                        </S.CheckboxCell>
                      )}

                      <S.GroupTitleCell $dimension={dimension}>{original.meta?.groupTitle}</S.GroupTitleCell>
                    </S.WrapperExpandContent>
                  </td>
                ) : (
                  row.getVisibleCells().map((cell, index, cells) => (
                    <S.CellTd
                      key={cell.id}
                      $dimension={dimension}
                      $cellAlign={cell.column.columnDef.meta?.cellAlign}
                      $resizer={index === cells.length - 1 ? showDividerForLastColumn : true}
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </S.CellTd>
                  ))
                )}
                {(showRowsActions || original.meta?.actionRender || original.meta?.overflowMenuRender) && (
                  <OverflowMenu
                    dimension={dimension}
                    row={row}
                    onClick={handleOverflowMenuClick}
                    showRowsActions={showRowsActions}
                    tableRef={tableRef}
                    headerHeight={headerHeight}
                  />
                )}
              </S.BodyTr>
              {row.getIsExpanded() && original.meta?.expandedRowRender && (
                <S.BodyTr $dimension={dimension}>
                  <S.CellTd $dimension={dimension} colSpan={row.getVisibleCells().length}>
                    {original.meta.expandedRowRender({ row })}
                  </S.CellTd>
                </S.BodyTr>
              )}
            </Fragment>
          );
        })}
      </S.Body>
    </S.Table>
  );
};
