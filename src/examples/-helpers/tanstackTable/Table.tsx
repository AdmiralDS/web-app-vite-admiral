import { flexRender, type Row, type RowData, type Table } from '@tanstack/react-table';
import { type Dimension } from './styled';
import * as S from './style';
import { CellTh } from './HeaderCell';
import type { Color } from '@admiral-ds/react-ui';
import { Fragment } from 'react';

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
  gridTemplateColumns?: string;
}

export const TanstackTable = <T,>({
  table,
  dimension = 'm',
  headerLineClamp = 1,
  headerExtraLineClamp = 1,
  greyHeader,
  greyZebraRows,
  gridTemplateColumns,
}: Props<T>) => {
  return (
    <S.Table
      style={
        {
          '--columns-template': gridTemplateColumns ?? `repeat(${table.getAllFlatColumns().length}, 100px)`,
        } as React.CSSProperties
      }
    >
      <S.Header>
        {table.getHeaderGroups().map((headerGroup) => {
          const multiSortable =
            headerGroup.headers.reduce((acc, h) => (h.column.getSortIndex() >= 0 ? acc + 1 : acc), 0) > 1;

          return (
            <S.HeaderTr $greyHeader={greyHeader} $dimension={dimension} key={headerGroup.id}>
              {headerGroup.headers.map((header, id) => {
                const isEmptyCell = !header.isPlaceholder
                  ? headerGroup.headers.length !== id + 1
                  : !headerGroup.headers[id + 1 === headerGroup.headers.length ? id : id + 1].isPlaceholder;

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
        {table.getRowModel().rows.map((row, index) => {
          const original = row.original as RowData & MetaRowProps<T>;

          return (
            <Fragment key={row.id}>
              <S.BodyTr
                $dimension={dimension}
                selected={row.getIsSelected() || original.meta?.selected}
                disabled={original.meta?.disabled}
                $hover={original.meta?.hover}
                $grey={greyZebraRows && index % 2 === 1}
                $status={original.meta?.status}
                $expandedRow={row.getIsExpanded()}
              >
                {row.getVisibleCells().map((cell) => (
                  <S.CellTd $dimension={dimension} key={cell.id} $cellAlign={cell.column.columnDef.meta?.cellAlign}>
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
