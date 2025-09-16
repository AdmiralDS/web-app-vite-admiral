import styled, { css } from 'styled-components';
import { typography } from '@admiral-ds/react-ui';

import ArrowUpOutline from '@admiral-ds/icons/build/system/ArrowUpOutline.svg?react';

import type { SortDirection } from '@tanstack/react-table';
import { cellStyle, type Dimension } from '../styled';

export const singleLineTitle = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const multiLineTitle = css<{ $lineClamp: number }>`
  display: -webkit-inline-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${({ $lineClamp }) => $lineClamp};
  overflow: hidden;
`;

export const headerStyle = css<{ $dimension: Dimension }>`
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
  ${({ $dimension }) =>
    $dimension === 'l' || $dimension === 'xl' ? typography['Subtitle/Subtitle 2'] : typography['Subtitle/Subtitle 3']}
`;

export const ColumnSeparator = styled.div`
  width: 1px;
  height: 16px;
  background-color: var(--admiral-color-Neutral_Neutral20, ${(p) => p.theme.color['Neutral/Neutral 20']});
`;

export const SortIcon = styled(ArrowUpOutline)<{ $sort: SortDirection | false }>`
  display: flex;
  flex-shrink: 0;
  transition: transform 0.3s ease-in-out;
  margin: 2px 0;

  & *[fill^='#'] {
    fill: ${({ theme, $sort }) =>
      $sort ? `var(--admiral-color-Primary_Primary60Main, ${theme.color['Primary/Primary 60 Main']})` : 'transparent'};
  }
  ${({ $sort }) => ($sort === 'desc' ? 'transform: rotate(180deg);' : '')}
`;

export const TitleContent = styled.div`
  overflow: hidden;
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

export const Title = styled.div<{ $lineClamp: number }>`
  text-overflow: ellipsis;
  width: 100%;
  overflow: hidden;

  ${({ $lineClamp }) => ($lineClamp === 1 ? singleLineTitle : multiLineTitle)}
`;

export const ExtraText = styled(Title)<{ $dimension: Dimension }>`
  margin: 2px 0;
  color: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
  ${({ $dimension }) =>
    $dimension === 'l' || $dimension === 'xl' ? typography['Body/Body 2 Long'] : typography['Caption/Caption 1']}
`;

export const HeaderCellTh = styled.th<{ $dimension: Dimension; $resizer?: boolean }>`
  position: relative;
  padding: 0;
  box-sizing: border-box;
  cursor: default;
  text-align: start;
  border-bottom: 1px solid var(--admiral-color-Neutral_Neutral20, ${(p) => p.theme.color['Neutral/Neutral 20']});

  ${headerStyle}

  &[data-draggable='true'] {
    cursor: pointer;
  }
`;

export const ThWrapper = styled.div<{ $dimension: Dimension; $cellAlign?: 'left' | 'right' }>`
  display: flex;
  width: 100%;

  align-items: center;
  ${cellStyle};

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

export const ThContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

export const HeaderCellTitle = styled.div<{ $sortable: boolean; $sort: SortDirection | false }>`
  overflow: hidden;
  display: flex;
  width: 100%;

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
