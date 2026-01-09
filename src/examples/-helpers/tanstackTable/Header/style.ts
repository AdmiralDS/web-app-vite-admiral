import styled from 'styled-components';
import { stickyStyle } from '../style';
import type { Dimension } from '../types';
import { getRowHeight } from '../utils';

export const ActionMock = styled.div<{ $dimension: Dimension }>`
  display: flex;
  justify-self: end;
  padding: 0;
  min-height: ${({ $dimension }) => getRowHeight($dimension) - 1}px;
  width: ${({ $dimension }) => getRowHeight($dimension)}px;
`;

/** нужны ли?
 * box-sizing: border-box; min-width: fit-content; */
export const HeaderTr = styled.div<{
  $dimension: Dimension;
  $isSomeRowsGrouped?: boolean;
}>`
  display: grid;
  grid-template-columns: var(--columns-template);
  box-sizing: border-box;
  min-width: fit-content;
  border-bottom: 1px solid var(--admiral-color-Neutral_Neutral20, ${(p) => p.theme.color['Neutral/Neutral 20']});
  ${({ $dimension, $isSomeRowsGrouped }) =>
    $isSomeRowsGrouped &&
    `.th:first-child {padding-left: ${$dimension === 'm' || $dimension === 's' ? '44px' : '56px'}}}`}
`;

/**
 * Если NormalWrapper занимает всё свободное место в строке (это можно проверить через элемент Spacer и его data-empty атрибут),
 * то для NormalWrapper следует задать стиль overflow-x: hidden.
 *
 * Это важно для случаев, когда у последней ячейки включен resizer. Дело в том, что resizer выходит на 8px за пределы ячейки.
 * И за счет этого может вызывать увеличение таблицы по длине. Чтобы этого не произошло используется стиль overflow-x: hidden.
 *
 * В качестве референса взята реализация из mui https://mui.com/material-ui/react-table/
 */
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

  &:has(+ div[data-empty='true']) {
    overflow-x: hidden;
  }
`;

export const StickyWrapper = styled(NormalWrapper)<{ $position: 'left' | 'right' }>`
  ${stickyStyle}
`;

export const Header = styled.div`
  display: grid;
  width: 100%;
  box-sizing: border-box;
  position: sticky;
  top: 0;
  z-index: 6;
`;

export const Edge = styled.div`
  display: flex;
  width: 0;
  height: auto;
  padding: 0;
`;

export const Spacer = styled.div<{ $greyHeader?: boolean }>`
  padding: 0;
  background: ${(p) =>
    p.$greyHeader
      ? `var(--admiral-color-Neutral_Neutral05, ${p.theme.color['Neutral/Neutral 05']})`
      : `var(--admiral-color-Neutral_Neutral00, ${p.theme.color['Neutral/Neutral 00']})`};
`;
