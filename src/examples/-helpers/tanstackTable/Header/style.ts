import styled from 'styled-components';
import type { Dimension } from '../Table';
import { getActionSize } from '../Body/OverflowMenu';

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

/** aka HeaderWrapper in react-ui */
export const Header = styled.thead`
  display: grid;
  width: 100%;
  box-sizing: border-box;
  position: sticky;
  top: 0;
  z-index: 6;
`;
