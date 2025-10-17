import { useLayoutEffect, useRef } from 'react';
import type { Row, RowData } from '@tanstack/react-table';
import styled from 'styled-components';

import { BodyTr, CellTd, ExpandedRowContent } from './style';

import { Transition } from '../../../../layout/SideMenu/Transition';
import type { Dimension, MetaRowProps } from '../types';

const ExpandTr = styled(BodyTr)`
  grid-template-columns: unset;
  min-width: unset;
  min-height: unset;
  overflow: hidden;
  transition: height 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const ExpandedRow = <T,>({
  row,
  dimension,
  showUnderline,
}: {
  row: Row<T>;
  dimension: Dimension;
  showUnderline: boolean;
}) => {
  const wrapperRef = useRef<HTMLTableRowElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    setWrapperHeight(row.getIsExpanded() ? 'auto' : '0px');
  }, []);

  const setWrapperHeight = (height?: string) => {
    // reading clientHeight will cause the browser to recalculate (reflow),
    // which will let animations work
    const contentHeight = (contentRef.current?.clientHeight || 0) + 'px';
    const wrapperHeight = height ?? contentHeight;

    if (wrapperRef.current) {
      wrapperRef.current.style.height = wrapperHeight;
    }
  };

  const handleTransitionEnter = () => {
    setWrapperHeight('0px');
  };
  const handleTransitionEntering = () => {
    setWrapperHeight();
  };
  const handleTransitionEntered = () => {
    setWrapperHeight('auto');
  };
  const handleTransitionExit = () => {
    setWrapperHeight();
  };
  const handleTransitionExiting = () => {
    setWrapperHeight('0px');
  };

  const original = row.original as RowData & MetaRowProps<T>;

  return (
    <Transition
      in={row.getIsExpanded()}
      timeout={250}
      onEnter={handleTransitionEnter}
      onEntered={handleTransitionEntered}
      onEntering={handleTransitionEntering}
      onExit={handleTransitionExit}
      onExiting={handleTransitionExiting}
    >
      <ExpandTr ref={wrapperRef} $dimension={dimension} $showUnderline={showUnderline}>
        <CellTd
          $dimension={dimension}
          colSpan={row.getVisibleCells().length}
          style={{ gridColumn: `span ${row.getVisibleCells().length}` }}
        >
          <ExpandedRowContent ref={contentRef}>
            {original.meta?.expandedRowRender && original.meta.expandedRowRender({ row })}
          </ExpandedRowContent>
        </CellTd>
      </ExpandTr>
    </Transition>
  );
};
