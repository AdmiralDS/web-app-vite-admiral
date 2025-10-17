import type { VirtualItem } from '@tanstack/react-virtual';
import { flexRender, type HeaderGroup } from '@tanstack/react-table';
import { type Dimension } from '../Table';
import { Fragment } from 'react';

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
  showDividerForLastColumn: boolean;
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
  showDividerForLastColumn,
}: Props<T>) => {
  return (
    <>
      {!!virtualPaddingLeft && (
        //fake empty column to the left for virtualization scroll padding
        <HeaderCell $dimension={dimension} style={{ width: virtualPaddingLeft }} />
      )}
      {virtualColumns.map((vc, index) => {
        const id = vc.index;
        const header = headerGroup.headers[id];
        const headers = headerGroup.headers;

        // TODO: упростить данные вычисления, возможно добавить комментарии
        const isEmptyCell = !header.isPlaceholder
          ? index === headers.length - 1
            ? showDividerForLastColumn
            : true
          : !headers[index + 1 === headers.length ? index : index + 1].isPlaceholder;
        const title = header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext());
        const extraText = header.isPlaceholder
          ? null
          : flexRender(header.column.columnDef.meta?.extraText, header.getContext());

        return (
          <Fragment key={header.id}>
            {typeof title === 'string' ? (
              <CellTh
                style={{ display: 'flex', width: fixedColumnWidth }}
                key={header.id}
                header={header}
                headerLineClamp={headerLineClamp}
                headerExtraLineClamp={headerExtraLineClamp}
                multiSortable={multiSortable}
                dimension={dimension}
                isEmptyCell={isEmptyCell}
                title={title}
                extraText={extraText}
              />
            ) : (
              title
            )}
          </Fragment>
        );
      })}
      {!!virtualPaddingRight && (
        //fake empty column to the right for virtualization scroll padding
        <HeaderCell $dimension={dimension} style={{ width: virtualPaddingRight }} />
      )}
    </>
  );
};
