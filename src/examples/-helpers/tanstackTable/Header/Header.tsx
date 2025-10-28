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
  showDividerForLastColumn: boolean;
  tableRef: React.MutableRefObject<null>;
  showBorders?: boolean;
}

import { Fragment, useLayoutEffect, useRef } from 'react';
import * as S from './style';
import { flexRender, type Table } from '@tanstack/react-table';
import type { Dimension, VirtualScroll } from '../Table';
import { CellTh } from './HeaderCell';
import { HeaderCell } from './HeaderCell/styled';
import type { VirtualItem } from '@tanstack/react-virtual';
import { VirtualHeaderCells } from './VirtualHeaderCells';
import { tableHeaderRowSpan } from './utils';

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
  showDividerForLastColumn,
  tableRef,
  showBorders,
}: Props<T>) => {
  const headerRef = useRef(null);
  const rightEdgeRef = useRef(null);

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

  //добавление тени справо
  useLayoutEffect(() => {
    const table: HTMLElement | null = tableRef.current;
    const rightEdge = rightEdgeRef.current;

    function handleIntersection([entry]: IntersectionObserverEntry[]) {
      if (table) {
        if (entry.isIntersecting && entry.intersectionRatio > 0.99) {
          table.setAttribute('data-shadow-right', 'false');
        } else {
          table.setAttribute('data-shadow-right', 'true');
        }
      }
    }

    if (table && rightEdge && showRowsActions) {
      const observer = new IntersectionObserver(handleIntersection, {
        root: table,
        threshold: [0, 1.0],
      });
      observer.observe(rightEdge);
      return () => observer.disconnect();
    }
  }, [showRowsActions]);

  return (
    <S.Header ref={headerRef} data-borders={showBorders || table.getHeaderGroups().length > 1}>
      {table.getHeaderGroups().map((headerGroup) => {
        return (
          <S.HeaderTr
            $greyHeader={greyHeader}
            $dimension={dimension}
            key={headerGroup.id}
            // style={virtualScroll && virtualScroll.horizontal ? { display: 'flex', width: '100%' } : {}}
          >
            {table.getHeaderGroups().map((headerGroup) => {
              const multiSortable =
                headerGroup.headers.reduce((acc, h) => (h.column.getSortIndex() >= 0 ? acc + 1 : acc), 0) > 1;

              return (
                <Fragment key={headerGroup.id}>
                  {headerGroup.headers.map((header, index, headers) => {
                    const rowSpan = tableHeaderRowSpan(header);
                    if (!rowSpan) {
                      return null;
                    }
                    const showResizer = index === headers.length - 1 ? showDividerForLastColumn : true;

                    const title = flexRender(header.column.columnDef.header, header.getContext());
                    const extraText = flexRender(header.column.columnDef.meta?.extraText, header.getContext());
                    /** некорректное сравнение на тип string, так как в случае если header не задан напрямую может сломаться дизайн */
                    return (
                      <Fragment key={header.id}>
                        {typeof title === 'string' ? (
                          <CellTh
                            key={header.id}
                            header={header}
                            headerLineClamp={headerLineClamp}
                            headerExtraLineClamp={headerExtraLineClamp}
                            multiSortable={multiSortable}
                            dimension={dimension}
                            showResizer={showResizer}
                            rowSpan={rowSpan}
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
                </Fragment>
              );
            })}
            {showRowsActions && (
              <>
                <S.ActionMock $dimension={dimension} />
                <S.Edge ref={rightEdgeRef} />
              </>
            )}
          </S.HeaderTr>
        );
      })}
    </S.Header>
  );
};

// virtualScroll && virtualScroll.horizontal ? (
//               <>
//                 {/* <VirtualHeaderCells //todo раскоментировать это
//                   fixedColumnWidth={fixedColumnWidth}
//                   multiSortable={multiSortable}
//                   headerGroup={headerGroup}
//                   dimension={dimension}
//                   headerLineClamp={headerLineClamp}
//                   headerExtraLineClamp={headerExtraLineClamp}
//                   virtualPaddingLeft={virtualPaddingLeft}
//                   virtualPaddingRight={virtualPaddingLeft}
//                   virtualColumns={virtualColumns}
//                   showDividerForLastColumn={showDividerForLastColumn}
//                 /> */}
//                 {
//                   //todo закоментировать всё до </>
//                   !!virtualPaddingLeft && (
//                     //fake empty column to the left for virtualization scroll padding
//                     <HeaderCell $dimension={dimension} style={{ width: virtualPaddingLeft }} />
//                   )
//                 }
//                 {virtualColumns.map((vc, index) => {
//                   const id = vc.index;
//                   const header = headerGroup.headers[id];
//                   const headers = headerGroup.headers;

//                   // TODO: упростить данные вычисления, возможно добавить комментарии
//                   const isEmptyCell = !header.isPlaceholder
//                     ? index === headers.length - 1
//                       ? showDividerForLastColumn
//                       : true
//                     : !headers[index + 1 === headers.length ? index : index + 1].isPlaceholder;
//                   const title = header.isPlaceholder
//                     ? null
//                     : flexRender(header.column.columnDef.header, header.getContext());
//                   const extraText = header.isPlaceholder
//                     ? null
//                     : flexRender(header.column.columnDef.meta?.extraText, header.getContext());

//                   return (
//                     <Fragment key={header.id}>
//                       {typeof title === 'string' ? (
//                         <CellTh
//                           style={{ display: 'flex', width: fixedColumnWidth }}
//                           key={header.id}
//                           header={header}
//                           headerLineClamp={headerLineClamp}
//                           headerExtraLineClamp={headerExtraLineClamp}
//                           multiSortable={multiSortable}
//                           dimension={dimension}
//                           isEmptyCell={isEmptyCell}
//                           title={title}
//                           extraText={extraText}
//                         />
//                       ) : (
//                         title
//                       )}
//                     </Fragment>
//                   );
//                 })}
//                 {!!virtualPaddingRight && (
//                   //fake empty column to the right for virtualization scroll padding
//                   <HeaderCell $dimension={dimension} style={{ width: virtualPaddingRight }} />
//                 )}
//               </>
//             ) : (
//               headerGroup.headers.map((header, index, headers) => {
//                 // TODO: упростить данные вычисления, возможно добавить комментарии
//                 const isEmptyCell = !header.isPlaceholder
//                   ? index === headers.length - 1
//                     ? showDividerForLastColumn
//                     : true
//                   : !headers[index + 1 === headers.length ? index : index + 1].isPlaceholder;
//                 const title = header.isPlaceholder
//                   ? null
//                   : flexRender(header.column.columnDef.header, header.getContext());
//                 const extraText = header.isPlaceholder
//                   ? null
//                   : flexRender(header.column.columnDef.meta?.extraText, header.getContext());

//                 return (
//                   <Fragment key={header.id}>
//                     {typeof title === 'string' ? (
//                       <CellTh
//                         key={header.id}
//                         header={header}
//                         headerLineClamp={headerLineClamp}
//                         headerExtraLineClamp={headerExtraLineClamp}
//                         multiSortable={multiSortable}
//                         dimension={dimension}
//                         isEmptyCell={isEmptyCell}
//                         title={title}
//                         extraText={extraText}
//                       />
//                     ) : (
//                       title
//                     )}
//                   </Fragment>
//                 );
//               })
//             )
