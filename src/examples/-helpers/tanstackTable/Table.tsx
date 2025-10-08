import { flexRender, type Row, type RowData, type Table } from '@tanstack/react-table';
import type { Color } from '@admiral-ds/react-ui';
import { Fragment } from 'react';
import * as S from './style';
import type { Dimension } from './style';
import { CellTh } from './HeaderCell';

export type Status = 'success' | 'error' | keyof Color | `#${string}` | `rgb(${string})` | `rgba(${string})`;

export interface MetaRowProps<T> {
  meta?: {
    hover?: boolean;
    status?: Status;
    disabled?: boolean;
    selected?: boolean;
    expandedRowRender?: (props: { row: Row<T> }) => React.ReactElement;
  };
}

interface Props<T> {
  table: Table<T>;
  dimension?: Dimension;
  headerLineClamp?: number;
  headerExtraLineClamp?: number;
  greyHeader?: boolean;
  greyZebraRows?: boolean;
  /** Отображение разделителя для последней колонки. По умолчанию разделитель не отображается */
  showDividerForLastColumn?: boolean;
  /** Отображение серой линии подчеркивания для последней строки. По умолчанию линия отображается */
  showLastRowUnderline?: boolean;
  /** Включение границ между ячейками таблицы и обводки всей таблицы.
   * Последняя колонка имеет границы справа только, если параметр showDividerForLastColumn равен true. */
  showBorders?: boolean;
}

export const defaultOptions: any = {
  enableSorting: false,
  columnResizeMode: 'onChange',
  defaultColumn: {
    size: 100, //starting column size
    minSize: 50, //enforced during column resizing
    maxSize: 500, //enforced during column resizing
  },
};

export const TanstackTable = <T,>({
  table,
  dimension = 'm',
  headerLineClamp = 1,
  headerExtraLineClamp = 1,
  greyHeader,
  greyZebraRows,
  showDividerForLastColumn = false,
  showLastRowUnderline = true,
  showBorders = false,
}: Props<T>) => {
  const gridTemplateColumns = table.getLeafHeaders().reduce((result, header) => {
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

  return (
    <S.Table style={{ '--columns-template': gridTemplateColumns } as React.CSSProperties} data-borders={showBorders}>
      <S.Header>
        {table.getHeaderGroups().map((headerGroup) => {
          const multiSortable =
            headerGroup.headers.reduce((acc, h) => (h.column.getSortIndex() >= 0 ? acc + 1 : acc), 0) > 1;

          return (
            <S.HeaderTr $greyHeader={greyHeader} $dimension={dimension} key={headerGroup.id}>
              {headerGroup.headers.map((header, index, headers) => {
                // TODO: упростить данные вычисления, возможно добавить комментарии
                const isEmptyCell = !header.isPlaceholder
                  ? index === headers.length - 1
                    ? showDividerForLastColumn
                    : true
                  : !headers[index + 1 === headers.length ? index : index + 1].isPlaceholder;

                return (
                  <CellTh
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
            </S.HeaderTr>
          );
        })}
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
                $underline={!row.getIsExpanded() && (isLastRow ? showLastRowUnderline && !showBorders : true)}
              >
                {row.getVisibleCells().map((cell, index, cells) => (
                  <S.CellTd
                    key={cell.id}
                    $dimension={dimension}
                    $cellAlign={cell.column.columnDef.meta?.cellAlign}
                    $resizer={index === cells.length - 1 ? showDividerForLastColumn : true}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </S.CellTd>
                ))}
              </S.BodyTr>
              {row.getIsExpanded() && (
                <S.BodyTr $dimension={dimension}>
                  <S.CellTd $dimension={dimension} colSpan={row.getVisibleCells().length}>
                    {original.meta?.expandedRowRender ? original.meta.expandedRowRender({ row }) : null}
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
