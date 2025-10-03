import * as React from 'react';
import styled from 'styled-components';
import type { Dimension } from './style';

const RESIZER_WIDTH = '17px';

export const ResizerWrapper = styled.div<{ disabled: boolean; $dimension: Dimension }>`
  position: absolute;
  right: -9px;
  z-index: 1;
  top: 0;
  width: ${RESIZER_WIDTH};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'col-resize')};

  padding: ${({ $dimension }) => {
    switch ($dimension) {
      case 's':
        return '8px 0 7px 0';
      case 'l':
        return '14px 0 13px 0';
      case 'xl':
        return '18px 0 17px 0';
      case 'm':
      default:
        return '12px 0 11px 0';
    }
  }};
`;

export const Resizer = styled.div`
  box-sizing: border-box;
  width: 1px;
  height: 100%;
  background: var(--admiral-color-Neutral_Neutral20, ${(p) => p.theme.color['Neutral/Neutral 20']});
`;

interface ResizerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  name?: string;
  disabled: boolean;
  dimension: Dimension;
  columnMinWidth?: number;
  onChange?: (evt: { name: string; width: number }) => void;
}

export function RowWidthResizer({ disabled, dimension, onChange, ...props }: ResizerProps) {
  const node = React.useRef<HTMLDivElement | null>(null);

  return (
    <ResizerWrapper ref={node} disabled={disabled} $dimension={dimension} {...props}>
      <Resizer />
    </ResizerWrapper>
  );
}
