import { flexRender, type RowData, type Table } from '@tanstack/react-table';
import {
  Body,
  BodyTr,
  CellTd,
  HeaderCellTh,
  HeaderTr,
  HeaderWrapper,
  TableContainer,
  ThWrapper,
  type Dimension,
} from './styled';
import { HeaderCell } from './HeaderCell';
import type { Color } from '@admiral-ds/react-ui';

export type Status = 'success' | 'error' | keyof Color | `#${string}` | `rgb(${string})` | `rgba(${string})`;

export interface MetaRowProps {
  meta?: {
    hover?: boolean;
    status?: Status;
    disabled?: boolean;
    selected?: boolean;
  };
}

interface Props<T> {
  table: Table<T>;
  dimension?: Dimension;
  headerLineClamp?: number;
  headerExtraLineClamp?: number;
  greyHeader?: boolean;
  greyZebraRows?: boolean;
}

export const TanstackTable = <T,>({
  table,
  dimension = 'm',
  headerLineClamp = 1,
  headerExtraLineClamp = 1,
  greyHeader,
  greyZebraRows,
}: Props<T>) => {
  return (
    <TableContainer>
      <HeaderWrapper>
        {table.getHeaderGroups().map((headerGroup) => {
          const multiSortable =
            headerGroup.headers.reduce((acc, h) => (h.column.getSortIndex() >= 0 ? acc + 1 : acc), 0) > 1;

          return (
            <HeaderTr $greyHeader={greyHeader} $dimension={dimension} key={headerGroup.id}>
              {headerGroup.headers.map((header, id) => {
                const extraText = header.isPlaceholder
                  ? null
                  : flexRender(header.column.columnDef.meta?.extraText, header.getContext());
                const title = header.isPlaceholder
                  ? null
                  : flexRender(header.column.columnDef.header, header.getContext());

                const visibleColumnSeparator = !header.isPlaceholder
                  ? headerGroup.headers.length !== id + 1
                  : !headerGroup.headers[id + 1 === headerGroup.headers.length ? id : id + 1].isPlaceholder;

                const sortable = header.column.getCanSort() && !!title;

                return (
                  <HeaderCellTh $dimension={dimension} key={header.id} colSpan={header.colSpan}>
                    <ThWrapper
                      $dimension={dimension}
                      onClick={sortable ? header.column.getToggleSortingHandler() : () => {}}
                      $sort={header.column.getIsSorted()}
                      $sortable={sortable}
                    >
                      <HeaderCell
                        headerLineClamp={headerLineClamp}
                        headerExtraLineClamp={headerExtraLineClamp}
                        title={title as string}
                        extraText={extraText as string}
                        visibleColumnSeparator={visibleColumnSeparator}
                        sort={header.column.getIsSorted()}
                        sortable={sortable}
                        multiSortable={multiSortable}
                        sortIndex={header.column.getSortIndex() + 1}
                        dimension={dimension}
                      />
                    </ThWrapper>
                  </HeaderCellTh>
                );
              })}
            </HeaderTr>
          );
        })}
      </HeaderWrapper>
      <Body>
        {table.getRowModel().rows.map((row, index) => {
          const original = row.original as RowData & MetaRowProps;

          return (
            <BodyTr
              key={row.id}
              $dimension={dimension}
              selected={row.getIsSelected() || original.meta?.selected}
              disabled={original.meta?.disabled}
              $hover={original.meta?.hover}
              $grey={greyZebraRows && index % 2 === 1}
              $status={original.meta?.status}
            >
              {row.getVisibleCells().map((cell) => (
                <CellTd $dimension={dimension} key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </CellTd>
              ))}
            </BodyTr>
          );
        })}
      </Body>
    </TableContainer>
  );
};
