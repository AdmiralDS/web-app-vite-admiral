import type { VirtualItem } from '@tanstack/react-virtual';
import { flexRender, type HeaderGroup } from '@tanstack/react-table';
import { Fragment } from 'react';

import { CellTh } from './HeaderCell';
import { HeaderCell } from './HeaderCell/styled';
import type { Dimension } from '../types';
import * as S from './style';
import { tableHeaderRowSpan } from './utils';

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
        <HeaderCell $dimension={dimension} colSpan={1} rowSpan={10} />
      )}
      {virtualColumns.map((vc, index) => {
        const id = vc.index;
        const header = headerGroup.headers[id];
        const headers = headerGroup.headers;

        const rowSpan = tableHeaderRowSpan(header);
        if (!rowSpan) {
          return null;
        }

        const showResizer = index === headers.length - 1 ? showDividerForLastColumn : true;

        const title = flexRender(header.column.columnDef.header, header.getContext());
        const extraText = flexRender(header.column.columnDef.meta?.extraText, header.getContext());

        return (
          /** некорректное сравнение на тип string, так как в случае если header не задан напрямую может сломаться дизайн */
          <Fragment key={header.id}>
            {typeof title === 'string' ? (
              <CellTh
                // style={{ display: 'flex', width: fixedColumnWidth }}
                key={header.id}
                header={header}
                headerLineClamp={headerLineClamp}
                headerExtraLineClamp={headerExtraLineClamp}
                multiSortable={multiSortable}
                dimension={dimension}
                showResizer={showResizer}
                title={title}
                extraText={extraText}
              />
            ) : (
              title
            )}
          </Fragment>
        );
      })}
      <S.Spacer />
      {!!virtualPaddingRight && (
        //fake empty column to the right for virtualization scroll padding
        <HeaderCell $dimension={dimension} colSpan={1} rowSpan={10} />
      )}
    </>
  );
};
