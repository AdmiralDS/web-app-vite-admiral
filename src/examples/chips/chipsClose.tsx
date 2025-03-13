import styled from 'styled-components';
import { Chips } from '@admiral-ds/react-ui';
import type { ChipsProps } from '@admiral-ds/react-ui';
import { useState } from 'react';
import { columnFlexMixin, ExampleSection } from '#routes/-helpers/examples';

const WrapperChip = styled.div<{ $dimension?: 'm' | 's' }>`
  display: flex;
  & > div {
    margin-right: ${({ $dimension }) => ($dimension === 's' ? 8 : 12)}px;
  }
`;

const listData = [
  { id: '1', label: 'Москва', disabled: false, selected: false },
  { id: '2', label: 'Тверь', disabled: false, selected: false },
  { id: '3', label: 'Самара', disabled: false, selected: false, badge: 3 },
];

export const ChipsClose = (props: ChipsProps) => {
  const [dataListM, setDataM] = useState(listData);
  const [dataListS, setDataS] = useState(listData);
  return (
    <ExampleSection cssMixin={columnFlexMixin}>
      <WrapperChip $dimension={props.dimension}>
        {dataListM.map((item) => (
          <Chips
            key={item.id}
            {...props}
            badge={item.badge || props.badge}
            onClose={() => setDataM((prev) => prev.filter((d) => d.id !== item.id))}
          >
            {item.label}
          </Chips>
        ))}
      </WrapperChip>
      <WrapperChip $dimension="s">
        {dataListS.map((item) => (
          <Chips
            key={item.id}
            {...props}
            dimension="s"
            badge={item.badge || props.badge}
            onClose={() => setDataS((prev) => prev.filter((d) => d.id !== item.id))}
          >
            {item.label}
          </Chips>
        ))}
      </WrapperChip>
    </ExampleSection>
  );
};
