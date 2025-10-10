import { flexRender, type Header } from '@tanstack/react-table';
import {
  HeaderCell,
  HeaderCellContent,
  HeaderCellTitle,
  HeaderCellSpacer,
  SortIcon,
  TitleContent,
  SortIconWrapper,
  SortOrder,
} from './styled';
import { TitleText } from './TitleText';
import { Filter } from '../Filter/Filter';
import { RowWidthResizer } from '../RowWidthResizer';
import { useState } from 'react';
import type { Dimension } from '@admiral-ds/react-ui';

interface Props<T> {
  headerLineClamp: number;
  headerExtraLineClamp: number;
  dimension: Dimension;
  multiSortable: boolean;
  header: Header<T, unknown>;
  isEmptyCell?: boolean;
}

export const CellTh = <T,>({
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

  const additionalEmptyCells = header.id === 'expand-column' || header.id === 'checkbox-column';
  const visibleColumnSeparator = isEmptyCell && !additionalEmptyCells;

  const sortable = header.column.getCanSort() && !!title;

  const defaultSpacer = dimension === 'l' || dimension === 'xl' ? '16px' : '12px';

  const iconSize = dimension === 's' || dimension === 'm' ? 16 : 20;
  const sortIndex = column.getSortIndex() + 1;
  const sort = column.getIsSorted();

  return (
    <HeaderCell
      key={header.id}
      $dimension={dimension}
      $resizer={visibleColumnSeparator}
      colSpan={header.colSpan}
      ref={(node) => setHeaderRef(node)}
    >
      <HeaderCellContent $dimension={dimension} $cellAlign={column.columnDef.meta?.cellAlign}>
        <HeaderCellTitle
          onClick={sortable ? header.column.getToggleSortingHandler() : () => {}}
          $sort={header.column.getIsSorted()}
          $sortable={sortable}
        >
          <TitleContent $dimension={dimension} $sortable={sortable}>
            <TitleText lineClamp={headerLineClamp} title={title} />
            {extraText && <TitleText extraText lineClamp={headerExtraLineClamp} title={extraText} />}
          </TitleContent>
          {sortable && (
            <SortIconWrapper>
              <SortIcon $sort={sort} width={iconSize} height={iconSize} />
              {multiSortable && sort && sortIndex && <SortOrder>{sortIndex}</SortOrder>}
            </SortIconWrapper>
          )}
        </HeaderCellTitle>
        {column.getCanFilter() && column.columnDef.meta?.filter?.renderFilter && (
          <>
            <HeaderCellSpacer width={defaultSpacer} />
            <Filter column={column} targetElement={headerRef} />
          </>
        )}
      </HeaderCellContent>
      {visibleColumnSeparator && (
        <RowWidthResizer
          disabled={!header.column.getCanResize()}
          dimension={dimension}
          onMouseDown={header.getResizeHandler()}
          onTouchStart={header.getResizeHandler()}
        />
      )}
    </HeaderCell>
  );
};
