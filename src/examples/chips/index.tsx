import styled from 'styled-components';

import { Chips } from '@admiral-ds/react-ui';
import type { ChipsProps } from '@admiral-ds/react-ui';
import { ExampleSection } from '#examples/-helpers';

const WrapperChip = styled.div<{ $dimension?: 'm' | 's' }>`
  display: flex;
  & > div {
    margin-right: ${({ $dimension }) => ($dimension === 's' ? 8 : 12)}px;
  }
`;

const listData = [
  { id: '1', label: 'Москва', disabled: false, selected: false },
  { id: '2', label: 'Тверь', disabled: false, selected: false },
  { id: '3', label: 'Самара', disabled: false, selected: false },
];

export const ChipsBasic = (props: ChipsProps) => {
  return (
    <ExampleSection>
      <WrapperChip $dimension={props.dimension}>
        {listData.map((item) => (
          <Chips {...props} key={item.id}>
            {item.label}
          </Chips>
        ))}
      </WrapperChip>
    </ExampleSection>
  );
};
