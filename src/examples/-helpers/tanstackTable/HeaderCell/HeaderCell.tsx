import { flexRender, type Header } from '@tanstack/react-table';
import {
  HeaderCellTitle,
  ColumnSeparator,
  SortIcon,
  TitleContent,
  SortIconWrapper,
  SortOrder,
  ThWrapper,
  HeaderCellTh,
  ThContainer,
} from './styled';
import { TitleText } from './TitleText';
import type { Dimension } from '../styled';
import { Filter } from '../Filter/Filter';
import { useState } from 'react';

interface Props<T> {
  headerLineClamp: number;
  headerExtraLineClamp: number;
  dimension: Dimension;
  multiSortable: boolean;
  header: Header<T, unknown>;
  isEmptyCell?: boolean;
}

export const HeaderCell = <T,>({
  headerLineClamp,
  headerExtraLineClamp,
  dimension,
  multiSortable,
  header,
  isEmptyCell,
}: Props<T>) => {
  const [headerRef, setHeaderRef] = useState<HTMLDivElement | null>(null);

  const column = header.column;

  const extraText = header.isPlaceholder
    ? null
    : flexRender(header.column.columnDef.meta?.extraText, header.getContext());
  const title = header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext());

  const additionalEmptyCells = header.id === 'expander' || header.id === 'select';
  const visibleColumnSeparator = isEmptyCell && !additionalEmptyCells;

  const sortable = header.column.getCanSort() && !!title;

  const iconSize = dimension === 's' || dimension === 'm' ? 16 : 20;
  const sortIndex = column.getSortIndex() + 1;
  const sort = column.getIsSorted();

  return (
    <HeaderCellTh $dimension={dimension} key={header.id} colSpan={header.colSpan} ref={(node) => setHeaderRef(node)}>
      <ThContainer>
        <ThWrapper $dimension={dimension} $cellAlign={column.columnDef.meta?.cellAlign}>
          <HeaderCellTitle
            onClick={sortable ? header.column.getToggleSortingHandler() : () => {}}
            $sort={header.column.getIsSorted()}
            $sortable={sortable}
          >
            <TitleContent>
              <TitleText lineClamp={headerLineClamp} title={title} />
              {extraText && <TitleText extraText lineClamp={headerExtraLineClamp} title={title} />}
            </TitleContent>
            {sortable && (
              <SortIconWrapper>
                <SortIcon $sort={sort} width={iconSize} height={iconSize} />
                {multiSortable && sort && sortIndex && <SortOrder>{sortIndex}</SortOrder>}
              </SortIconWrapper>
            )}
          </HeaderCellTitle>
          {column.getCanFilter() && column.columnDef.meta?.filter?.renderFilter && (
            <Filter column={column} targetElement={headerRef} />
          )}
        </ThWrapper>
        {visibleColumnSeparator && <ColumnSeparator />}
      </ThContainer>
    </HeaderCellTh>
  );
};
