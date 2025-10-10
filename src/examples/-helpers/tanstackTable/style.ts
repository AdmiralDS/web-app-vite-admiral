import { IconPlacement, typography, type Color } from '@admiral-ds/react-ui';
import styled, { css } from 'styled-components';
import type { Dimension, Status } from './Table';
import ChevronDownOutline from '@admiral-ds/icons/build/system/ChevronDownOutline.svg?react';
import { getActionSize } from './OverflowMenu';
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

export const rowStyle = css<{ $dimension: Dimension }>`
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
  ${({ $dimension }) =>
    $dimension === 'l' || $dimension === 'xl' ? typography['Body/Body 1 Short'] : typography['Body/Body 2 Short']}
`;

export const rowBackground = css<{
  selected?: boolean;
  disabled?: boolean;
  $grey?: boolean;
  $status?: Status;
}>`
  ${({ theme, selected, disabled, $grey, $status }) => {
    if (disabled) {
      return `var(--admiral-color-Neutral_Neutral00, ${theme.color['Neutral/Neutral 00']})`;
    }
    if (selected) {
      return `var(--admiral-color-Primary_Primary20, ${theme.color['Primary/Primary 20']})`;
    }
    if ($status) {
      if (theme.color.hasOwnProperty($status)) {
        const cssVar = `--admiral-color-${$status?.replace('/', '_').replaceAll(' ', '')}`;

        return `var(${cssVar}, ${theme.color[$status as keyof Color]})`;
      } else if ($status === 'error') return `var(--admiral-color-Error_Error20, ${theme.color['Error/Error 20']})`;
      else if ($status === 'success')
        return `var(--admiral-color-Success_Success20, ${theme.color['Success/Success 20']})`;
      else {
        return $status;
      }
    }
    if ($grey) {
      return `var(--admiral-color-Neutral_Neutral05, ${theme.color['Neutral/Neutral 05']})`;
    }
    return `var(--admiral-color-Neutral_Neutral00, ${theme.color['Neutral/Neutral 00']})`;
  }}
`;

export const disabledRow = css`
  color: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
  & > * {
    pointer-events: none;
  }
  //todo cursor не работает из-за того что у дочернего компонента(td) pointer-events: none;
  cursor: not-allowed;
`;

export const rowHoverMixin = css`
  cursor: pointer;
  background: var(--admiral-color-Primary_Primary10, ${(p) => p.theme.color['Primary/Primary 10']});
`;

export const borderStyle = css<{ $resizer?: boolean }>`
  border-right: 1px solid transparent;
  [data-borders='true'] & {
    border-color: ${(p) =>
      p.$resizer ? `var(--admiral-color-Neutral_Neutral20, ${p.theme.color['Neutral/Neutral 20']})` : 'transparent'};
  }
`;

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
  $showRowsActions?: boolean;
  $expandedRow?: boolean;
}>`
  position: relative;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: var(--columns-template);
  min-width: fit-content;
  background: ${rowBackground};

  ${rowStyle}
  ${({ disabled }) => disabled && disabledRow}

  &:hover {
    ${({ $hover, disabled }) => $hover && !disabled && rowHoverMixin}
  }

  ${({ $showRowsActions }) =>
    !$showRowsActions &&
    css`
      &:hover {
        & td[data-overflowmenu] {
          visibility: visible;
        }
      }
      & td[data-overflowmenu][data-opened='true'] {
        visibility: visible;
      }
    `}

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

export const ActionMock = styled.th<{ $dimension: Dimension }>`
  display: flex;
  position: sticky;
  right: 0;
  z-index: 5;
  .table[data-shadow-right='true'] & {
    box-shadow: -4px 0 12px rgba(0, 0, 0, 0.12);
  }

  min-height: ${({ $dimension }) => getActionSize($dimension) - 1}px;
  width: ${({ $dimension }) => getActionSize($dimension)}px;
  background-color: inherit;
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
export const ExpandIcon = styled(ChevronDownOutline)<{ $isOpened?: boolean }>`
  transition: transform 0.3s ease-in-out;
  transform: rotate(${(p) => (p.$isOpened ? 180 : 0)}deg);
`;

export const WrapperExpandContent = styled.div<{ $dimension?: Dimension; $depth: number }>`
  padding-left: ${({ $depth, $dimension }) => `${$depth * ($dimension === 's' || $dimension === 'm' ? 44 : 56)}px`};
  display: inline-flex;
  overflow: hidden;
`;

//todo удалить при мерже с виртуальным скролом
export const headerStyle = css<{ $dimension: Dimension }>`
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
  ${({ $dimension }) =>
    $dimension === 'l' || $dimension === 'xl' ? typography['Subtitle/Subtitle 2'] : typography['Subtitle/Subtitle 3']}
`;

export const GroupTitleCell = styled.div<{ $dimension: Dimension }>`
  display: flex;
  align-items: flex-start;
  box-sizing: border-box;
  cursor: default;

  ${headerStyle}
  ${cellStyle}
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

export const WrapperTitleCell = styled.th<{ $dimension: Dimension }>`
  padding: 0;
  position: relative;
  display: inline-flex;
  flex: 0 0 auto;
  align-items: flex-start;
  box-sizing: border-box;
  cursor: default;
  padding-left: ${({ $dimension }) => ($dimension === 'm' || $dimension === 's' ? '44' : '56')}px;
  width: 100%;
  height: 100%;
`;
