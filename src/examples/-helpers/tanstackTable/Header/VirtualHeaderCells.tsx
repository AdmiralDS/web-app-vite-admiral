import type { VirtualItem } from '@tanstack/react-virtual';
import type { HeaderGroup } from '@tanstack/react-table';
import { type Dimension } from '../Table';

import { CellTh } from './HeaderCell';
import { HeaderCell } from './HeaderCell/styled';

interface Props<T> {
  dimension: Dimension;
  headerLineClamp: number;
  headerExtraLineClamp: number;
  virtualPaddingLeft: number;
  virtualPaddingRight: number;
  virtualColumns: VirtualItem[];
  headerGroup: HeaderGroup<T>;
  fixedColumnWidth: number;
  multiSortable: boolean;
}

export const VirtualHeaderCells = <T,>({
  dimension,
  headerLineClamp,
  headerExtraLineClamp,
  virtualPaddingLeft,
  virtualPaddingRight,
  virtualColumns,
  headerGroup,
  fixedColumnWidth,
  multiSortable,
}: Props<T>) => {
  return (
    <>
      {!!virtualPaddingLeft && (
        //fake empty column to the left for virtualization scroll padding
        <HeaderCell $dimension={dimension} style={{ width: virtualPaddingLeft }} />
      )}
      {virtualColumns.map((vc) => {
        const id = vc.index;
        const header = headerGroup.headers[id];

        const isEmptyCell = !header.isPlaceholder
          ? headerGroup.headers.length !== id + 1
          : !headerGroup.headers[id + 1 === headerGroup.headers.length ? id : id + 1].isPlaceholder;

        return (
          <CellTh
            style={{ display: 'flex', width: fixedColumnWidth }}
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
      {!!virtualPaddingRight && (
        //fake empty column to the right for virtualization scroll padding
        <HeaderCell $dimension={dimension} style={{ width: virtualPaddingRight }} />
      )}
    </>
  );
};
