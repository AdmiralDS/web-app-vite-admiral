import styled, { css } from 'styled-components';

import type { Dimension, Status } from './Table';
import ChevronDownOutline from '@admiral-ds/icons/build/system/ChevronDownOutline.svg?react';
import { IconPlacement } from '@admiral-ds/react-ui';
// import { headerStyle } from './HeaderCell/styled';

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

/** aka TableContainer in react-ui */
export const Table = styled.table<{ $gridTemplateColumns?: string }>`
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
  grid-row-gap: 1px;
  box-sizing: border-box;
  min-width: fit-content;
  // данный background будет виден через grid-row-gap и будет создавать иллюзию подчеркивания строк
  background: var(--admiral-color-Neutral_Neutral20, ${(p) => p.theme.color['Neutral/Neutral 20']});
  & > * {
    background: ${(p) =>
      p.$greyHeader
        ? `var(--admiral-color-Neutral_Neutral05, ${p.theme.color['Neutral/Neutral 05']})`
        : `var(--admiral-color-Neutral_Neutral00, ${p.theme.color['Neutral/Neutral 00']})`};
  }
  border-bottom: 1px solid var(--admiral-color-Neutral_Neutral20, ${(p) => p.theme.color['Neutral/Neutral 20']});
`;

export const Body = styled.tbody`
  display: grid;
`;

/** учтены 2px отступы по вертикали */
export const CellText = styled.div<{ $dimension?: Dimension }>`
  display: block;
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

export const ExpandCell = styled.div<{ $dimension: Dimension }>`
  width: ${({ $dimension }) => ($dimension === 's' || $dimension === 'm' ? 44 : 56)}px;
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
  border: none;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex: 1 0 auto;
  box-sizing: border-box;
  overflow: hidden;
`;

export const ExpandIconPlacement = styled(IconPlacement)`
  margin: 0;
  flex-shrink: 0;
`;

//todo transition не работает при использовании в cell из-за ререндера ячеек
export const ExpandIcon = styled(ChevronDownOutline)<{ $isOpened?: boolean }>`
  transition:
    transform 0.3s,
    ease-in-out;
  transform: rotate(${({ $isOpened }) => ($isOpened ? 180 : 0)}deg);
`;

export const CheckboxCell = styled.div<{ $dimension: Dimension }>`
  width: ${({ $dimension }) => ($dimension === 's' || $dimension === 'm' ? 44 : 56)}px;
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
  border: none;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex: 1 0 auto;
  box-sizing: border-box;
  overflow: hidden;
`;

export const WrapperTitleCell = styled.th`
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
