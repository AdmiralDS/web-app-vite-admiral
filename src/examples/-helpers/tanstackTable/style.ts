import { IconPlacement, typography, type Color } from '@admiral-ds/react-ui';
import styled, { css } from 'styled-components';
import type { Status } from './Table';
import { rowStyle, rowBackground, rowHoverMixin, disabledRow, cellStyle, borderStyle } from './mixins';
import ChevronDownOutline from '@admiral-ds/icons/build/system/ChevronDownOutline.svg?react';

export type Dimension = 'xl' | 'l' | 'm' | 's';

/** aka TableContainer in react-ui */
export const Table = styled.table`
  display: grid;
  width: 100%;
  position: relative;
  box-sizing: border-box;
  background: var(--admiral-color-Neutral_Neutral00, ${(p) => p.theme.color['Neutral/Neutral 00']});
  overflow: auto;

  &[data-borders='true'] {
    border: 1px solid var(--admiral-color-Neutral_Neutral20, ${(p) => p.theme.color['Neutral/Neutral 20']});
  }
`;

/** aka HeaderWrapper in react-ui */
export const Header = styled.thead`
  display: grid;
  width: 100%;
  box-sizing: border-box;
  position: sticky;
  top: 0;
  z-index: 6;
`;

/** нужны ли?
 * box-sizing: border-box; min-width: fit-content; */
export const HeaderTr = styled.tr<{
  $dimension: Dimension;
  $greyHeader?: boolean;
}>`
  display: grid;
  grid-template-columns: var(--columns-template);
  justify-content: start;
  box-sizing: border-box;
  min-width: fit-content;
  background: ${(p) =>
    p.$greyHeader
      ? `var(--admiral-color-Neutral_Neutral05, ${p.theme.color['Neutral/Neutral 05']})`
      : `var(--admiral-color-Neutral_Neutral00, ${p.theme.color['Neutral/Neutral 00']})`};
  border-bottom: 1px solid var(--admiral-color-Neutral_Neutral20, ${(p) => p.theme.color['Neutral/Neutral 20']});
`;

export const Body = styled.tbody`
  display: grid;
`;

/** aka Row + SimpleRow from react-ui */
export const BodyTr = styled.tr<{
  selected?: boolean;
  disabled?: boolean;
  $hover?: boolean;
  $grey?: boolean;
  $status?: Status;
  $dimension: Dimension;
  $expandedRow?: boolean;
}>`
  position: relative;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: var(--columns-template);
  min-width: fit-content;
  & > * {
    background: ${rowBackground};
  }
  ${rowStyle}
  ${({ disabled }) => disabled && disabledRow}

  &:hover {
    ${({ $hover, disabled }) => $hover && !disabled && rowHoverMixin}
  }

  ${({ $expandedRow, theme }) =>
    !$expandedRow &&
    `border-bottom: 1px solid var(--admiral-color-Neutral_Neutral20, ${theme.color['Neutral/Neutral 20']})`};

  min-height: ${({ $dimension }) => {
    switch ($dimension) {
      case 's':
        return '32px';
      case 'l':
        return '48px';
      case 'xl':
        return '56px';
      case 'm':
      default:
        return '40px';
    }
  }};
`;

/** Подумать про text-align */
export const CellTd = styled.td<{
  $dimension: Dimension;
  $resizer?: boolean;
  $cellAlign?: 'left' | 'right';
}>`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex: 1 0 auto;
  box-sizing: border-box;
  padding: 0;
  overflow: hidden;
  text-align: ${({ $cellAlign }) => ($cellAlign === 'right' ? 'right' : 'left')};
  ${borderStyle}
`;

/** учтены 2px отступы по вертикали */
export const CellText = styled.div<{ $dimension?: Dimension }>`
  display: block;
  width: 100%;
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
