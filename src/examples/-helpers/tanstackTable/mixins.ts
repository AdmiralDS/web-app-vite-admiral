import { css } from 'styled-components';
import type { Column } from '@tanstack/react-table';
import type { Dimension } from './types';

export const getRowHeight = (dimension: Dimension) => {
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

export const getColumnWidth = <T>(column: Column<T>) => {
  return column.getCanResize()
    ? `${column.getSize()}px`
    : column.columnDef.meta?.gridColumnTemplate || `${column.getSize()}px`;
};

// padding-bottom меньше padding-top на 1px, т.к. 1px остается для border-bottom ячейки
export const cellStyle = css<{ $dimension: Dimension }>`
  padding: ${({ $dimension }) => {
    switch ($dimension) {
      case 's':
        return '6px 12px 5px 12px';
      case 'l':
        return '12px 16px 11px 16px';
      case 'xl':
        return '16px 16px 15px 16px';
      case 'm':
      default:
        return '10px 12px 9px 12px';
    }
  }};
`;

export const borderStyle = css<{ $resizer?: boolean }>`
  border-right: 1px solid transparent;
  [data-borders='true'] & {
    border-color: ${(p) =>
      p.$resizer ? `var(--admiral-color-Neutral_Neutral20, ${p.theme.color['Neutral/Neutral 20']})` : 'transparent'};
  }
`;

export const stickyStyle = css<{ $position: 'left' | 'right' }>`
  position: sticky;
  z-index: 2;
  ${(p) =>
    p.$position == 'left' &&
    css`
      left: 0;
      .table[data-shadow-left='true'] & {
        box-shadow: 4px 0 12px rgba(0, 0, 0, 0.12);
      }
    `}
  ${(p) =>
    p.$position == 'right' &&
    css`
      right: 0;
      .table[data-shadow-right='true'] & {
        box-shadow: -4px 0 12px rgba(0, 0, 0, 0.12);
      }
    `}
`;
