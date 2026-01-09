import styled, { css } from 'styled-components';

import type { Dimension } from './types';

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

export const Table = styled.div`
  display: grid;
  grid-template-rows: repeat(2, min-content);
  width: 100%;
  position: relative;
  box-sizing: border-box;
  background: var(--admiral-color-Neutral_Neutral00, ${(p) => p.theme.color['Neutral/Neutral 00']});
  overflow: auto;

  &[data-borders='true'] {
    border: 1px solid var(--admiral-color-Neutral_Neutral20, ${(p) => p.theme.color['Neutral/Neutral 20']});
  }
`;

/** учтены 2px отступы по вертикали */
export const CellText = styled.div<{ $dimension?: Dimension }>`
  display: block;
  box-sizing: border-box;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: ${({ $dimension }) => {
    switch ($dimension) {
      case 's':
        return '8px 12px 7px 12px';
      case 'l':
        return '14px 16px 13px 16px';
      case 'xl':
        return '18px 16px 17px 16px';
      case 'm':
      default:
        return '12px 12px 11px 12px';
    }
  }};
`;

export const RowCellContent = styled.div`
  display: flex;
  align-items: center;
`;

export const WrapperTitleCell = styled.div`
  padding: 0;
  position: relative;
  display: inline-flex;
  flex: 0 0 auto;
  align-items: flex-start;
  box-sizing: border-box;
  cursor: default;
  width: 100%;
  height: 100%;
`;

export const WrapperExpandContent = styled.div<{ $dimension?: Dimension; $depth: number }>`
  padding-left: ${({ $depth, $dimension }) => `${$depth * ($dimension === 's' || $dimension === 'm' ? 44 : 56)}px`};
  display: inline-flex;
  overflow: hidden;
`;

export const ExpandedRowContent = styled.div`
  display: flex;
  flex: 1 0 auto;
  box-sizing: border-box;
  padding: 0 12px 11px 12px;
`;
