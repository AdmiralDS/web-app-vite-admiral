import { typography, type Color } from '@admiral-ds/react-ui';
import { css } from 'styled-components';

import type { Status } from './Table';

export type Dimension = 'xl' | 'l' | 'm' | 's';

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

export const rowHoverMixin = css`
  cursor: pointer;

  & > * {
    background: var(--admiral-color-Primary_Primary10, ${(p) => p.theme.color['Primary/Primary 10']});
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
