import { typography, type Color } from '@admiral-ds/react-ui';
import styled, { css } from 'styled-components';

import { SortIcon } from './HeaderCell/styled';
import type { SortDirection } from '@tanstack/react-table';
import type { Status } from './Table';

export type Dimension = 'xl' | 'l' | 'm' | 's';

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
        return '10px 0px 9px 12px';
    }
  }};
`;

export const headerStyle = css<{ $dimension: Dimension }>`
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
  ${({ $dimension }) =>
    $dimension === 'l' || $dimension === 'xl' ? typography['Subtitle/Subtitle 2'] : typography['Subtitle/Subtitle 3']}
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

const rowHoverMixin = css`
  cursor: pointer;

  & > * {
    background: var(--admiral-color-Primary_Primary10, ${(p) => p.theme.color['Primary/Primary 10']});
  }
`;

export const TableContainer = styled.table`
  border-collapse: collapse;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  background: var(--admiral-color-Neutral_Neutral00, ${(p) => p.theme.color['Neutral/Neutral 00']});
  overflow: auto;
  table-layout: fixed;
`;

export const HeaderWrapper = styled.thead`
  box-sizing: border-box;
  position: sticky;
  top: 0;
  z-index: 6;
  background: var(--admiral-color-Neutral_Neutral00, ${(p) => p.theme.color['Neutral/Neutral 00']});
`;

export const HeaderTr = styled.tr<{
  $dimension: Dimension;
  $greyHeader?: boolean;
}>`
  box-sizing: border-box;
  min-width: fit-content;
  background: ${(p) =>
    p.$greyHeader
      ? `var(--admiral-color-Neutral_Neutral05, ${p.theme.color['Neutral/Neutral 05']})`
      : `var(--admiral-color-Neutral_Neutral00, ${p.theme.color['Neutral/Neutral 00']})`};
`;

export const HeaderCellTh = styled.th<{ $dimension: Dimension; $resizer?: boolean }>`
  position: relative;
  box-sizing: border-box;
  cursor: default;
  text-align: start;
  border-bottom: 1px solid var(--admiral-color-Neutral_Neutral20, ${(p) => p.theme.color['Neutral/Neutral 20']});

  ${headerStyle}

  &[data-draggable='true'] {
    cursor: pointer;
  }
`;

export const Body = styled.tbody``;

export const BodyTr = styled.tr<{
  selected?: boolean;
  disabled?: boolean;
  $hover?: boolean;
  $grey?: boolean;
  $status?: Status;
  $dimension: Dimension;
}>`
  position: relative;
  & > * {
    background: ${rowBackground};
  }
  ${rowStyle}
  ${({ disabled }) => disabled && disabledRow}

  &:hover {
    ${({ $hover, disabled }) => $hover && !disabled && rowHoverMixin}
  }
`;

export const CellTd = styled.td<{ $dimension: Dimension; $resizer?: boolean }>`
  box-sizing: border-box;
  ${cellStyle};
  overflow: hidden;
  text-align: start;
  border-bottom: 1px solid var(--admiral-color-Neutral_Neutral20, ${(p) => p.theme.color['Neutral/Neutral 20']});
`;

export const ThWrapper = styled.div<{ $dimension: Dimension; $sortable: boolean; $sort: SortDirection | false }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${cellStyle};

  ${({ $sortable }) => $sortable && 'cursor: pointer;'}
  &:hover {
    ${SortIcon} *[fill^='#'] {
      fill: ${({ theme, $sort }) =>
        $sort
          ? `var(--admiral-color-Primary_Primary70, ${theme.color['Primary/Primary 70']})`
          : `var(--admiral-color-Neutral_Neutral50, ${theme.color['Neutral/Neutral 50']})`};
    }
  }
`;
