import styled, { css } from 'styled-components';
import { borderStyle, cellStyle } from '../style';
import { typography, type Color } from '@admiral-ds/react-ui';
import type { Dimension, Status } from '../types';
import { StickyWrapper } from './RowContent/style';

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
  cursor: not-allowed;

  & > * {
    pointer-events: none;
  }
`;

export const rowHoverMixin = css`
  cursor: pointer;

  & > * {
    background: var(--admiral-color-Primary_Primary10, ${(p) => p.theme.color['Primary/Primary 10']});
  }
`;

export const Body = styled.tbody`
  display: grid;
`;

export const VirtualBody = styled.tbody<{ $heightBody: string }>`
  display: grid;
  position: relative;
  height: ${({ $heightBody }) => $heightBody};
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
  $showUnderline?: boolean;
}>`
  position: relative;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: var(--columns-template);
  min-width: fit-content;
  background: ${rowBackground};
  & > ${StickyWrapper} {
    background: ${rowBackground};
  }

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

  ${({ theme, $showUnderline }) =>
    $showUnderline &&
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

export const VirtualBodyTr = styled(BodyTr)<{ $moveY: number }>`
  position: absolute;
  left: 0;
  right: 0;
  transform: translateY(${({ $moveY }) => $moveY}px);
`;

//todo возможно вынести его чтобы пользователи могли сами решить нужны ли им отступы или нет?
export const ExpandedRowContent = styled.div`
  display: flex;
  flex: 1 0 auto;
  height: fit-content;
  box-sizing: border-box;
  padding: 0 12px 11px 12px;
`;

/** Подумать про text-align */
export const CellTd = styled.td<{
  $dimension: Dimension;
  $resizer?: boolean;
  $disableBorderStyle?: boolean;
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
  ${({ $disableBorderStyle }) => !$disableBorderStyle && borderStyle}
`;

export const SpacerCellTd = styled(CellTd)<{ $width: number }>`
  border: none;
  flex: none;
  width: ${({ $width }) => `${$width}px`};
`;

export const EmptyCell = styled(CellTd)`
  grid-column: 1 / -1;
  margin: 2px 0;
  color: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
  ${cellStyle}
`;
