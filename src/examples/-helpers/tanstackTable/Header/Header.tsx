import type { CSSProperties } from 'styled-components';
import { Fragment, useLayoutEffect, useRef } from 'react';
import { flexRender, type Table, type HeaderGroup, type RowData } from '@tanstack/react-table';

import type { Dimension, MetaRowProps } from '../types';
import * as S from './style';
import { CellTh } from './HeaderCell';
import { tableHeaderRowSpan } from './utils';

interface Props<T> {
  table: Table<T>;
  setHeaderHeight: (headerHeight: number) => void;
  dimension: Dimension;
  headerLineClamp: number;
  headerExtraLineClamp: number;
  greyHeader?: boolean;
  showRowsActions?: boolean;
  showDividerForLastColumn: boolean;
  tableRef: React.MutableRefObject<null>;
  showBorders?: boolean;
  style?: CSSProperties;
}

export const Header = <T,>({
  table,
  setHeaderHeight,
  dimension,
  headerLineClamp,
  headerExtraLineClamp,
  greyHeader,
  showRowsActions,
  showDividerForLastColumn,
  tableRef,
  showBorders,
  style,
}: Props<T>) => {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const spacerRef = useRef<HTMLDivElement | null>(null);
  const leftEdgeRef = useRef<HTMLDivElement | null>(null);
  const rightEdgeRef = useRef<HTMLDivElement | null>(null);
  const enableLeftShadow = table.getIsSomeColumnsPinned('left');
  const enableRightShadow = table.getIsSomeColumnsPinned('right') || showRowsActions;
  const isSomeRowsGrouped = table.options.data.some((item) => {
    const dataRow = item as RowData & MetaRowProps<T>;

    return !!dataRow.meta?.subRows;
  });

  // check header size updates
  useLayoutEffect(() => {
    const header = headerRef.current;

    if (header) {
      const resizeObserver = new ResizeObserver(() => {
        setHeaderHeight(header.getBoundingClientRect().height);
      });
      resizeObserver.observe(header);
      return () => {
        resizeObserver.disconnect();
      };
    }
  }, [setHeaderHeight]);

  // check spacer size updates
  useLayoutEffect(() => {
    const spacer = spacerRef.current;

    if (spacer) {
      const resizeObserver = new ResizeObserver(() => {
        spacer.dataset.empty = String(spacer.getBoundingClientRect().width == 0);
      });
      resizeObserver.observe(spacer);
      return () => {
        resizeObserver.disconnect();
      };
    }
  }, []);

  // добавление тени слева
  useLayoutEffect(() => {
    const table: HTMLElement | null = tableRef.current;
    const leftEdge = leftEdgeRef.current;

    function handleIntersection([entry]: IntersectionObserverEntry[]) {
      if (table) {
        if (entry.isIntersecting && entry.intersectionRatio > 0.99) {
          table.setAttribute('data-shadow-left', 'false');
        } else {
          table.setAttribute('data-shadow-left', 'true');
        }
      }
    }

    if (table && leftEdge && enableLeftShadow) {
      const observer = new IntersectionObserver(handleIntersection, {
        root: table,
        threshold: [0, 1.0],
      });
      observer.observe(leftEdge);
      return () => observer.disconnect();
    }
  }, [enableLeftShadow]);

  //добавление тени справа
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

    if (table && rightEdge && enableRightShadow) {
      const observer = new IntersectionObserver(handleIntersection, {
        root: table,
        threshold: [0, 1.0],
      });
      observer.observe(rightEdge);
      return () => observer.disconnect();
    }
  }, [enableRightShadow]);

  const renderHeaderGroup = (headerGroup: HeaderGroup<T>) => {
    const multiSortable = headerGroup.headers.reduce((acc, h) => (h.column.getSortIndex() >= 0 ? acc + 1 : acc), 0) > 1;

    return (
      <Fragment key={headerGroup.id}>
        {headerGroup.headers.map((header) => {
          const rowSpan = tableHeaderRowSpan(header);

          if (!rowSpan) {
            return null;
          }

          const showResizer = header.column.getIsLastColumn() ? showDividerForLastColumn : true;
          const title = flexRender(header.column.columnDef.header, header.getContext());
          const extraText = flexRender(header.column.columnDef.meta?.extraText, header.getContext());

          const headerString =
            typeof header.column.columnDef.header === 'string' ||
            (typeof header.column.columnDef.header === 'function' &&
              typeof header.column.columnDef.header(header.getContext()) === 'string');
          return (
            <Fragment key={header.id}>
              {headerString ? (
                <CellTh
                  key={header.id}
                  data-th-column={header.id}
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
      </Fragment>
    );
  };

  return (
    <S.Header
      className="thead"
      ref={headerRef}
      data-borders={showBorders || table.getHeaderGroups().length > 1}
      style={style}
    >
      <S.HeaderTr className="tr" $dimension={dimension} $isSomeRowsGrouped={isSomeRowsGrouped}>
        <>
          {table.getIsSomeColumnsPinned('left') && (
            <>
              <S.Edge ref={leftEdgeRef} />
              <S.StickyWrapper
                $position="left"
                $gridColumn={`2 / span ${table.getLeftLeafHeaders().length}`}
                $gridTemplateRows={`repeat(${table.getHeaderGroups().length}, 1fr)`}
                $greyHeader={greyHeader}
              >
                {table.getLeftHeaderGroups().map((headerGroup) => renderHeaderGroup(headerGroup))}
              </S.StickyWrapper>
            </>
          )}
          <S.NormalWrapper
            $gridColumn={`${table.getLeftLeafHeaders().length ? table.getLeftLeafHeaders().length + 2 : 1} / span ${table.getCenterLeafHeaders().length}`}
            $gridTemplateRows={`repeat(${table.getHeaderGroups().length}, 1fr)`}
            $greyHeader={greyHeader}
          >
            {table.getCenterHeaderGroups().map((headerGroup) => renderHeaderGroup(headerGroup))}
          </S.NormalWrapper>
          <S.Spacer ref={spacerRef} $greyHeader={greyHeader} />
          {(table.getIsSomeColumnsPinned('right') || showRowsActions) && (
            <>
              <S.StickyWrapper
                $position="right"
                $gridColumn={`-2 / -${2 + table.getRightLeafHeaders().length + (showRowsActions ? 1 : 0)}`}
                $gridTemplateRows={`repeat(${table.getHeaderGroups().length}, 1fr)`}
                $greyHeader={greyHeader}
              >
                {table.getRightHeaderGroups().map((headerGroup) => renderHeaderGroup(headerGroup))}
                {showRowsActions && <S.ActionMock $dimension={dimension} />}
              </S.StickyWrapper>
              <S.Edge ref={rightEdgeRef} />
            </>
          )}
        </>
      </S.HeaderTr>
    </S.Header>
  );
};
