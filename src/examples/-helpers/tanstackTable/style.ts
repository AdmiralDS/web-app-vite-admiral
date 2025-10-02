import styled, { css } from 'styled-components';
import type { Dimension } from './Table';

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

export const borderStyle = css<{ $resizer?: boolean }>`
  border-right: 1px solid transparent;
  [data-borders='true'] & {
    border-color: ${(p) =>
      p.$resizer ? `var(--admiral-color-Neutral_Neutral20, ${p.theme.color['Neutral/Neutral 20']})` : 'transparent'};
  }
`;

/** aka TableContainer in react-ui */
export const Table = styled.table<{ $gridTemplateColumns?: string }>`
  display: grid;
  width: 100%;
  position: relative;
  box-sizing: border-box;
  background: var(--admiral-color-Neutral_Neutral00, ${(p) => p.theme.color['Neutral/Neutral 00']});
  overflow: auto;

  &[data-borders='true'] {
    border: 1px solid var(--admiral-color-Neutral_Neutral20, ${(p) => p.theme.color['Neutral/Neutral 20']});
  }

  --columns-template: ${(p) => p.$gridTemplateColumns};
`;

/** учтены 2px отступы по вертикали */
export const CellText = styled.div<{ $dimension?: Dimension }>`
  display: block;
  width: 100%;
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
