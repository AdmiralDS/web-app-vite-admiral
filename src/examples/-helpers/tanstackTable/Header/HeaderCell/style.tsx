import styled, { css } from 'styled-components';
import { typography } from '@admiral-ds/react-ui';

import ArrowUpOutline from '@admiral-ds/icons/build/system/ArrowUpOutline.svg?react';

import type { SortDirection } from '@tanstack/react-table';
import { cellStyle, borderStyle } from '../../style';
import type { Dimension } from '../../types';

export const headerStyle = css<{ $dimension: Dimension }>`
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
  ${({ $dimension }) =>
    $dimension === 'l' || $dimension === 'xl' ? typography['Subtitle/Subtitle 2'] : typography['Subtitle/Subtitle 3']}
`;

export const SortIcon = styled(ArrowUpOutline)<{ $sort: SortDirection | false }>`
  display: flex;
  flex-shrink: 0;
  transform: ${({ $sort }) => ($sort === 'desc' ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.3s ease-in-out;
  margin: 2px 0;

  & *[fill^='#'] {
    fill: ${({ theme, $sort }) =>
      $sort ? `var(--admiral-color-Primary_Primary60Main, ${theme.color['Primary/Primary 60 Main']})` : 'transparent'};
  }
`;

export const TitleContent = styled.div<{ $dimension: Dimension; $sortable?: boolean }>`
  display: flex;
  flex-direction: column;

  // leave 20px/16px for SortIcon
  max-width: ${({ $sortable, $dimension }) =>
    $sortable ? `calc(100% - ${$dimension === 's' || $dimension === 'm' ? 16 : 20}px)` : '100%'};
`;

export const SortIconWrapper = styled.div`
  position: relative;
`;

export const SortOrder = styled.div`
  position: absolute;
  top: 1px;
  right: 0;
  font-family: var(--admiral-font-family, ${(p) => p.theme.fontFamily});
  font-style: normal;
  font-weight: 500;
  font-size: 8px;
  line-height: 9px;
  font-feature-settings:
    'tnum' on,
    'lnum' on;
  color: var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']});
`;

const singleLineTitle = css`
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const multiLineTitle = css<{ $lineClamp: number }>`
  display: -webkit-inline-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${({ $lineClamp }) => $lineClamp};
  overflow: hidden;
`;

export const Title = styled.div<{ $lineClamp: number }>`
  position: relative;
  width: 100%;
  ${({ $lineClamp }) => ($lineClamp === 1 ? singleLineTitle : multiLineTitle)}
`;

export const ExtraText = styled(Title)<{ $dimension: Dimension }>`
  margin: 2px 0;
  color: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
  ${({ $dimension }) =>
    $dimension === 'l' || $dimension === 'xl' ? typography['Body/Body 2 Long'] : typography['Caption/Caption 1']}
`;

export const HeaderCell = styled.div<{
  $dimension: Dimension;
  colSpan: number;
  rowSpan: number;
  $resizer?: boolean;
}>`
  position: relative;
  display: inline-flex;
  flex: 0 0 auto;
  align-items: flex-start;
  box-sizing: border-box;
  cursor: default;
  grid-column: span ${(p) => p.colSpan};
  grid-row: span ${(p) => p.rowSpan};
  ${cellStyle}
  ${headerStyle}
  ${borderStyle}
`;

export const HeaderCellContent = styled.div<{ $dimension: Dimension; $cellAlign?: 'left' | 'right' }>`
  display: flex;
  width: 100%;
  align-items: flex-start;
  text-align: left;

  ${({ $cellAlign }) =>
    $cellAlign === 'right' &&
    css`
      flex-direction: row-reverse;
      & > ${HeaderCellTitle} {
        text-align: right;
        flex-direction: row-reverse;
      }
    `}
`;

export const HeaderCellTitle = styled.div<{ $sortable: boolean; $sort: SortDirection | false }>`
  display: inline-flex;
  align-items: flex-start;
  width: 100%;
  overflow: hidden;

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

export const HeaderCellSpacer = styled.div<{ width?: string }>`
  display: flex;
  align-self: stretch;
  width: ${(p) => (p.width ? p.width : '12px')};
  flex-shrink: 0;
`;
