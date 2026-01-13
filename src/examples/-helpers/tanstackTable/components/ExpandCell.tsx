import styled from 'styled-components';
import { IconPlacement, type Dimension, type IconPlacementProps } from '@admiral-ds/react-ui';
import ChevronDownOutline from '@admiral-ds/icons/build/system/ChevronDownOutline.svg?react';

export const ExpandCellWrapper = styled.div<{ $dimension: Dimension }>`
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

export const ExpandIconPlacement = styled(IconPlacement)`
  margin: 0;
  flex-shrink: 0;
`;

export const ExpandIcon = styled(ChevronDownOutline)<{ $isOpened?: boolean }>`
  transition: transform 0.3s ease-in-out;
  transform: rotate(${({ $isOpened }) => ($isOpened ? 180 : 0)}deg);
`;

interface ExpandCellProps extends Omit<IconPlacementProps, 'dimension'> {
  dimension: Dimension;
  isOpened: boolean;
}

export const ExpandCell = ({ dimension, isOpened, ...props }: ExpandCellProps) => {
  return (
    <ExpandCellWrapper $dimension={dimension}>
      <ExpandIconPlacement
        dimension={dimension === 'm' || dimension === 's' ? 'mBig' : 'lBig'}
        highlightFocus={false}
        {...props}
      >
        <ExpandIcon $isOpened={isOpened} aria-hidden />
      </ExpandIconPlacement>
    </ExpandCellWrapper>
  );
};
