import styled from 'styled-components';
import { CheckboxField, type CheckboxFieldProps } from '@admiral-ds/react-ui';

import type { Dimension } from '../types';

export const CheckboxCellWrapper = styled.div<{ $dimension: Dimension }>`
  width: ${({ $dimension }) => ($dimension === 's' || $dimension === 'm' ? 44 : 56)}px;
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
  border: none;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex: 1 0 auto;
  box-sizing: border-box;
  overflow: hidden;
`;

interface CheckboxCellProps extends Omit<CheckboxFieldProps, 'dimension'> {
  dimension: Dimension;
  'data-row'?: string;
}

export const CheckboxCell = ({ dimension, style, className, 'data-row': dataRow, ...props }: CheckboxCellProps) => {
  return (
    <CheckboxCellWrapper
      className={`item_checkbox ${className || ''}`}
      data-item="checkbox"
      data-row={dataRow}
      $dimension={dimension}
      style={style}
    >
      <CheckboxField dimension={dimension === 'm' || dimension === 's' ? 's' : 'm'} {...props} />
    </CheckboxCellWrapper>
  );
};
