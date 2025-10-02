interface Props<T> {
  table: Table<T>;
  setHeaderHeight: (headerHeight: number) => void;
  dimension: Dimension;
  headerLineClamp: number;
  headerExtraLineClamp: number;
  greyHeader?: boolean;
  showRowsActions?: boolean;
  fixedColumnWidth: number;
  virtualPaddingLeft: number;
  virtualPaddingRight: number;
  virtualColumns: VirtualItem[];
  virtualScroll?: VirtualScroll;
}

import { useLayoutEffect, useRef } from 'react';
import * as S from './style';
import type { Table } from '@tanstack/react-table';
import type { Dimension, VirtualScroll } from '../Table';
import { CellTh } from './HeaderCell';
import { HeaderCell } from './HeaderCell/styled';
import type { VirtualItem } from '@tanstack/react-virtual';
import { VirtualHeaderCells } from './VirtualHeaderCells';

export const Header = <T,>({
  table,
  setHeaderHeight,
  dimension,
  headerLineClamp,
  headerExtraLineClamp,
  greyHeader,
  showRowsActions,
  virtualPaddingLeft,
  virtualPaddingRight,
  virtualScroll,
  virtualColumns,
  fixedColumnWidth,
}: Props<T>) => {
  const headerRef = useRef(null);

  // check header size updates
  useLayoutEffect(() => {
    const header = headerRef.current;

    if (!header) return;

    const resizeObserver = new ResizeObserver(() => {
      setHeaderHeight((header as HTMLElement).getBoundingClientRect().height);
    });
    resizeObserver.observe(header);
    return () => {
      resizeObserver.disconnect();
    };
  }, [setHeaderHeight]);

  return (
    <S.Header ref={headerRef}>
      {table.getHeaderGroups().map((headerGroup) => {
        const multiSortable =
          headerGroup.headers.reduce((acc, h) => (h.column.getSortIndex() >= 0 ? acc + 1 : acc), 0) > 1;

        return (
          <S.HeaderTr
            $greyHeader={greyHeader}
            $dimension={dimension}
            key={headerGroup.id}
            style={virtualScroll && virtualScroll.horizontal ? { display: 'flex', width: '100%' } : {}}
          >
            {virtualScroll && virtualScroll.horizontal ? (
              <>
                {/* <VirtualHeaderCells //todo раскоментировать это
                  fixedColumnWidth={fixedColumnWidth}
                  multiSortable={multiSortable}
                  headerGroup={headerGroup}
                  dimension={dimension}
                  headerLineClamp={headerLineClamp}
                  headerExtraLineClamp={headerExtraLineClamp}
                  virtualPaddingLeft={virtualPaddingLeft}
                  virtualPaddingRight={virtualPaddingLeft}
                  virtualColumns={virtualColumns}
                /> */}
                {
                  //todo закоментировать всё до </>
                  !!virtualPaddingLeft && (
                    //fake empty column to the left for virtualization scroll padding
                    <HeaderCell $dimension={dimension} style={{ width: virtualPaddingLeft }} />
                  )
                }
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
            ) : (
              headerGroup.headers.map((header, id) => {
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
              })
            )}
            {showRowsActions && <S.ActionMock $dimension={dimension} />}
          </S.HeaderTr>
        );
      })}
    </S.Header>
  );
};
