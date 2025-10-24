import { type Header } from '@tanstack/react-table';
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
import type { CSSProperties } from 'styled-components';

interface Props<T> {
  headerLineClamp: number;
  headerExtraLineClamp: number;
  dimension: Dimension;
  multiSortable?: boolean;
  header: Header<T, unknown>;
  title: React.ReactNode;
  extraText?: React.ReactNode;
  //todo пересмотреть тип
  as?: React.ReactNode;
  style?: CSSProperties;
  showResizer?: boolean;
  rowSpan?: number;
}

export const CellTh = <T,>({
  headerLineClamp,
  headerExtraLineClamp,
  dimension,
  multiSortable,
  header,
  title,
  extraText,
  showResizer,
  rowSpan = 1,
  ...props
}: Props<T>) => {
  const [headerRef, setHeaderRef] = useState<HTMLDivElement | null>(null);

  const column = header.column;

  const additionalCells = header.id === 'expand-column' || header.id === 'checkbox-column';
  const visibleResizer = showResizer && !additionalCells;

  const sortable = column.getCanSort() && !!title;

  const defaultSpacer = dimension === 'l' || dimension === 'xl' ? '16px' : '12px';

  const iconSize = dimension === 's' || dimension === 'm' ? 16 : 20;
  const sortIndex = column.getSortIndex() + 1;
  const sort = column.getIsSorted();

  return (
    <HeaderCell
      {...props}
      key={header.id}
      $dimension={dimension}
      $resizer={visibleResizer}
      colSpan={header.colSpan}
      rowSpan={rowSpan}
      ref={(node) => setHeaderRef(node)}
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
            <Filter column={column} targetElement={headerRef} />
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
    </HeaderCell>
  );
};
