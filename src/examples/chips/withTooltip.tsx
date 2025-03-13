import styled from 'styled-components';

import { Chips } from '@admiral-ds/react-ui';
import type { ChipsProps } from '@admiral-ds/react-ui';
import { ExampleSection } from '#routes/-helpers/examples';

const listDataIconTooltip = [
  { id: '1', label: 'Ограниченное пространство', disabled: false },
  { id: '2', label: 'Ограниченное пространство', disabled: false },
  { id: '3', label: 'Ограниченное пространство', disabled: false },
];

const WrapperChip = styled.div<{ $dimension?: 'm' | 's' }>`
  display: flex;
  & > div {
    margin-right: ${({ $dimension }) => ($dimension === 's' ? 8 : 12)}px;
  }
`;

const StyledChipsTooltip = styled(Chips)`
  width: 160px;
`;

export const ChipsTooltip = (props: ChipsProps) => {
  return (
    <ExampleSection>
      <WrapperChip>
        {listDataIconTooltip.map((item) => (
          <StyledChipsTooltip {...props} renderContentTooltip={() => item.label} key={item.id}>
            {item.label}
          </StyledChipsTooltip>
        ))}
      </WrapperChip>
    </ExampleSection>
  );
};
