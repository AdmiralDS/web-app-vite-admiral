import { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import type { Row, RowData } from '@tanstack/react-table';
import type { Dimension, MetaRowProps } from './Table';

export const getActionSize = (dimension: Dimension) => {
  switch (dimension) {
    case 's':
      return 32;
    case 'l':
      return 48;
    case 'xl':
      return 56;
    case 'm':
    default:
      return 40;
  }
};

const OverflowMenuWrapper = styled.div<{ $showRowsActions?: boolean }>`
  position: sticky;
  right: 0;
  z-index: 5;

  .table[data-shadow-right='true'] & {
    box-shadow: -4px 0 12px rgba(0, 0, 0, 0.12);
  }

  ${({ $showRowsActions }) =>
    !$showRowsActions &&
    css`
      width: 0;
      direction: rtl;
      visibility: hidden;
      &:hover {
        visibility: visible;
      }
    `}
`;

const OverflowMenuContent = styled.div<{
  $dimension: Dimension;
}>`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  box-sizing: border-box;
  height: 100%;
  width: ${({ $dimension }) => getActionSize($dimension)}px;
  padding: ${({ $dimension }) => {
    switch ($dimension) {
      case 's':
        return '0px';
      case 'l':
        return '6px 0 5px';
      case 'xl':
        return '10px 0 9px';
      case 'm':
      default:
        return '4px 0 3px';
    }
  }};
  background-color: inherit;
`;

interface OverflowMenuProps<T> extends React.HTMLAttributes<HTMLDivElement> {
  dimension: Dimension;
  row: Row<T>;
  showRowsActions: boolean;
  tableRef: React.RefObject<HTMLElement>;
  headerHeight: number;
}

export const OverflowMenu = <T,>({
  row,
  dimension,
  showRowsActions,
  tableRef,
  headerHeight,
  ...props
}: OverflowMenuProps<T>) => {
  const original = row.original as RowData & MetaRowProps<T>;

  const oveflowMenuRef = useRef<HTMLDivElement>(null);

  const handleVisibilityChange = (isVisible: boolean) => {
    if (!showRowsActions) {
      if (isVisible) {
        if (oveflowMenuRef.current) oveflowMenuRef.current.dataset.opened = 'true';
      } else {
        if (oveflowMenuRef.current) oveflowMenuRef.current.dataset.opened = 'false';
      }
    }
  };

  useEffect(() => {
    function handleIntersection([entry]: IntersectionObserverEntry[]) {
      if (!entry.isIntersecting) {
        /** Вызываем закрытие OverflowMenu в момент, когда кнопка, открывающая
         * меню, вышла из области видимости тела таблицы, н-р, в ходе вертикального скролла таблицы */
        const overflowMenuBtn = oveflowMenuRef.current?.querySelector(
          `button[aria-haspopup='true'][aria-expanded='true']`,
        ) as HTMLElement;
        overflowMenuBtn?.click();
      }
    }
    const observer = new IntersectionObserver(handleIntersection, {
      root: tableRef.current,
      rootMargin: `-${headerHeight || 0}px 0px 0px 0px`,
      threshold: [0, 1.0],
    });

    if (tableRef.current && oveflowMenuRef.current) {
      observer.observe(oveflowMenuRef.current);
    }

    return () => observer.disconnect();
  }, [headerHeight]);

  return (
    <OverflowMenuWrapper
      ref={oveflowMenuRef}
      data-overflowmenu
      data-opened={showRowsActions}
      $showRowsActions={showRowsActions}
      {...props}
    >
      <OverflowMenuContent $dimension={dimension}>
        {original.meta?.actionRender
          ? original.meta.actionRender(row)
          : original.meta?.overflowMenuRender?.(row, handleVisibilityChange)}
      </OverflowMenuContent>
    </OverflowMenuWrapper>
  );
};
