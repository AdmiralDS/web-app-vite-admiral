import { typography } from '@admiral-ds/react-ui';
import styled, { css } from 'styled-components';

export type Dimension = 'xl' | 'l' | 'm' | 's';

export const borderStyle = css<{ $resizer?: boolean }>`
  border-right: 1px solid transparent;
  [data-borders='true'] & {
    border-color: ${(p) =>
      p.$resizer ? `var(--admiral-color-Neutral_Neutral20, ${p.theme.color['Neutral/Neutral 20']})` : 'transparent'};
  }
`;

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

export const TableContainer = styled.table`
  border-collapse: collapse;

  position: relative;
  box-sizing: border-box;
  width: 100%;
  background: var(--admiral-color-Neutral_Neutral00, ${(p) => p.theme.color['Neutral/Neutral 00']});
  overflow: auto;
  table-layout: fixed;
  /* 
  &[data-borders='true'] {
    border: 1px solid var(--admiral-color-Neutral_Neutral20, ${(p) => p.theme.color['Neutral/Neutral 20']});
  } */
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
  ${borderStyle}
  cursor: default;
  &[data-draggable='true'] {
    cursor: pointer;
  }
  text-align: start;
  border-bottom: 1px solid var(--admiral-color-Neutral_Neutral20, ${(p) => p.theme.color['Neutral/Neutral 20']});
  ${headerStyle}
`;

export const Body = styled.tbody``;

export const BodyTr = styled.tr`
  position: relative;
  background: var(--admiral-color-Neutral_Neutral00, ${(p) => p.theme.color['Neutral/Neutral 00']});
`;

export const CellTd = styled.td<{ $dimension: Dimension; $resizer?: boolean }>`
  box-sizing: border-box;
  ${cellStyle};
  overflow: hidden;
  ${borderStyle}
  text-align: start;
  border-bottom: 1px solid var(--admiral-color-Neutral_Neutral20, ${(p) => p.theme.color['Neutral/Neutral 20']});
  ${rowStyle}
`;

export const ThWrapper = styled.div<{ $dimension: Dimension }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${cellStyle};
`;

export const RowLine = styled.div`
  margin-left: 12px;
  width: 1px;
  height: 16px;
  background-color: var(--admiral-color-Neutral_Neutral20, ${(p) => p.theme.color['Neutral/Neutral 20']});
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

export const HeaderCellTitle = styled.div`
  overflow: hidden;
`;
