import styled, { css } from 'styled-components';
import { headerStyle } from '../../Header/HeaderCell/styled';
import { cellStyle } from '../../style';
import type { Dimension } from '../../types';

export const GroupTitleCell = styled.div<{ $dimension: Dimension }>`
  display: flex;
  align-items: flex-start;
  box-sizing: border-box;
  cursor: default;

  ${headerStyle}
  ${cellStyle}
`;

export const NormalWrapper = styled.div<{ $gridColumn: string; $gridTemplateRows?: string }>`
  display: grid;
  grid-template-columns: subgrid;
  grid-column: ${(p) => p.$gridColumn};
  ${(p) => p.$gridTemplateRows && `grid-template-rows: ${p.$gridTemplateRows};`}
`;

export const StickyWrapper = styled(NormalWrapper)<{ $position: 'left' | 'right' }>`
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

export const Spacer = styled.div`
  padding: 0;
`;
