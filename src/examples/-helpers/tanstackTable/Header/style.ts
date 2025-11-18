import styled, { css } from 'styled-components';
import { Table } from '../style';
import type { Dimension } from '../types';
import { getActionSize } from '../Body/RowContent/OverflowMenu';

export const ActionMock = styled.th<{ $dimension: Dimension }>`
  display: flex;
  justify-self: end;
  padding: 0;
  min-height: ${({ $dimension }) => getActionSize($dimension) - 1}px;
  width: ${({ $dimension }) => getActionSize($dimension)}px;
`;

/** нужны ли?
 * box-sizing: border-box; min-width: fit-content; */
export const HeaderTr = styled.tr<{
  $dimension: Dimension;
  $isSomeRowsGrouped?: boolean;
}>`
  display: grid;
  grid-template-columns: var(--columns-template);
  box-sizing: border-box;
  min-width: fit-content;
  border-bottom: 1px solid var(--admiral-color-Neutral_Neutral20, ${(p) => p.theme.color['Neutral/Neutral 20']});
  ${({ $dimension, $isSomeRowsGrouped }) =>
    $isSomeRowsGrouped && `padding-left: ${$dimension === 'm' || $dimension === 's' ? '44px' : '56px'}}`}
`;

export const NormalWrapper = styled.div<{ $gridColumn: string; $gridTemplateRows?: string; $greyHeader?: boolean }>`
  display: grid;
  grid-template-columns: subgrid;
  grid-column: ${(p) => p.$gridColumn};
  ${(p) => p.$gridTemplateRows && `grid-template-rows: ${p.$gridTemplateRows};`}
  grid-row-gap: 1px;
  // данный background будет виден через grid-row-gap и будет создавать иллюзию подчеркивания строк
  background: var(--admiral-color-Neutral_Neutral20, ${(p) => p.theme.color['Neutral/Neutral 20']});
  & > * {
    background: ${(p) =>
      p.$greyHeader
        ? `var(--admiral-color-Neutral_Neutral05, ${p.theme.color['Neutral/Neutral 05']})`
        : `var(--admiral-color-Neutral_Neutral00, ${p.theme.color['Neutral/Neutral 00']})`};
  }
`;

export const StickyWrapper = styled(NormalWrapper)<{ $position: 'left' | 'right' }>`
  position: sticky;
  z-index: 2;

  ${(p) =>
    p.$position == 'left' &&
    css`
      left: 0;
      ${Table}[data-shadow-left='true'] & {
        box-shadow: 4px 0 12px rgba(0, 0, 0, 0.12);
      }
    `}
  ${(p) =>
    p.$position == 'right' &&
    css`
      right: 0;
      ${Table}[data-shadow-right='true'] & {
        box-shadow: -4px 0 12px rgba(0, 0, 0, 0.12);
      }
    `}
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

export const Edge = styled.th`
  display: flex;
  width: 0;
  height: auto;
  padding: 0;
`;

export const Spacer = styled.th<{ $greyHeader?: boolean }>`
  padding: 0;
  background: ${(p) =>
    p.$greyHeader
      ? `var(--admiral-color-Neutral_Neutral05, ${p.theme.color['Neutral/Neutral 05']})`
      : `var(--admiral-color-Neutral_Neutral00, ${p.theme.color['Neutral/Neutral 00']})`};
`;
