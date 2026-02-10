import { type Header } from '@tanstack/react-table';
import { useState } from 'react';

import type { Dimension } from '../../types';
import {
  HeaderCell as HeaderCellWrapper,
  HeaderCellContent,
  HeaderCellTitle,
  HeaderCellSpacer,
  SortIcon,
  TitleContent,
  SortIconWrapper,
  SortOrder,
} from './style';
import { TitleText } from './TitleText';
import { Filter } from './Filter';
import { RowWidthResizer } from './RowWidthResizer';

export interface HeaderCellProps<T> extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  header: Header<T, unknown>;
  headerLineClamp?: number;
  headerExtraLineClamp?: number;
  dimension: Dimension;
  multiSortable?: boolean;
  title: React.ReactNode;
  extraText?: React.ReactNode;
  showResizer?: boolean;
  rowSpan?: number;
}

export const HeaderCell = <T,>({
  headerLineClamp = 1,
  headerExtraLineClamp = 1,
  dimension,
  multiSortable,
  header,
  title,
  extraText,
  showResizer,
  rowSpan = 1,
  ...props
}: HeaderCellProps<T>) => {
  const [headerEl, setHeaderEl] = useState<HTMLDivElement | null>(null);

  const column = header.column;

  const additionalCells = header.id === 'expand-column' || header.id === 'checkbox-column';
  const visibleResizer = showResizer && !additionalCells;

  const sortable = column.getCanSort() && !!title;

  const defaultSpacer = dimension === 'l' || dimension === 'xl' ? '16px' : '12px';

  const iconSize = dimension === 's' || dimension === 'm' ? 16 : 20;
  const sortIndex = column.getSortIndex() + 1;
  const sort = column.getIsSorted();

  return (
    <HeaderCellWrapper
      {...props}
      key={header.id}
      $dimension={dimension}
      $resizer={visibleResizer}
      colSpan={header.colSpan}
      rowSpan={rowSpan}
      ref={(node) => setHeaderEl(node)}
    >
      <HeaderCellContent $dimension={dimension} $cellAlign={column.columnDef.meta?.cellAlign}>
        <HeaderCellTitle
          onClick={sortable ? column.getToggleSortingHandler() : () => {}}
          $sort={column.getIsSorted()}
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
            <Filter column={column} targetElement={headerEl} />
          </>
        )}
      </HeaderCellContent>
      {visibleResizer && (
        <RowWidthResizer
          disabled={!column.getCanResize()}
          dimension={dimension}
          onMouseDown={(event) => {
            event.preventDefault();
            return header.getResizeHandler()(event);
          }}
          onTouchStart={(event) => {
            event.preventDefault();
            return header.getResizeHandler()(event);
          }}
        />
      )}
    </HeaderCellWrapper>
  );
};
