import { flexRender, type Table } from '@tanstack/react-table';
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

interface Props<T> {
  table: Table<T>;
  dimension?: Dimension;
  headerLineClamp?: number;
  headerExtraLineClamp?: number;
}

export const TanstackTable = <T,>({
  table,
  dimension = 'm',
  headerLineClamp = 1,
  headerExtraLineClamp = 1,
}: Props<T>) => {
  return (
    <TableContainer>
      <HeaderWrapper>
        {table.getHeaderGroups().map((headerGroup) => (
          <HeaderTr $dimension={dimension} key={headerGroup.id}>
            {headerGroup.headers.map((header, id) => {
              const extraText = header.isPlaceholder
                ? null
                : flexRender(header.column.columnDef.meta?.extraText, header.getContext());
              const title = header.isPlaceholder
                ? null
                : flexRender(header.column.columnDef.header, header.getContext());
              console.log('🚀 ~ TanstackTable ~ header.isPlaceholder:', header.isPlaceholder);
              const visibleColumnSeparator = !header.isPlaceholder
                ? headerGroup.headers.length !== id + 1
                : !headerGroup.headers[id + 1 === headerGroup.headers.length ? id : id + 1].isPlaceholder;

              return (
                <HeaderCellTh $dimension={dimension} key={header.id} colSpan={header.colSpan}>
                  <ThWrapper
                    $dimension={dimension}
                    onClick={header.column.getToggleSortingHandler()}
                    $sort={header.column.getIsSorted()}
                    $sortable={header.column.getCanSort()}
                  >
                    <HeaderCell
                      headerLineClamp={headerLineClamp}
                      headerExtraLineClamp={headerExtraLineClamp}
                      title={title as string}
                      extraText={extraText as string}
                      visibleColumnSeparator={visibleColumnSeparator}
                      sort={header.column.getIsSorted()}
                      sortable={header.column.getCanSort()}
                      sortIndex={header.column.getSortIndex() + 1}
                      dimension={dimension}
                    />
                  </ThWrapper>
                </HeaderCellTh>
              );
            })}
          </HeaderTr>
        ))}
      </HeaderWrapper>
      <Body>
        {table.getRowModel().rows.map((row) => (
          <BodyTr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <CellTd $dimension={dimension} key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </CellTd>
            ))}
          </BodyTr>
        ))}
      </Body>
    </TableContainer>
  );
};
