import { useState } from 'react';
import styled from 'styled-components';

import { Chips } from '@admiral-ds/react-ui';
import type { ChipsProps } from '@admiral-ds/react-ui';
import { columnFlexMixin, ExampleSection } from '#examples/-helpers';

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

export const ChipsSelect = (props: ChipsProps) => {
  const [selectedM, setSelectedM] = useState('');
  const [selectedS, setSelectedS] = useState('');
  const [selectedFilledM, setSelectedFilledM] = useState('');
  const [selectedFilledS, setSelectedFilledS] = useState('');
  return (
    <ExampleSection cssMixin={columnFlexMixin}>
      <WrapperChip $dimension={props.dimension}>
        {listData.map((item) => (
          <Chips
            {...props}
            key={item.id}
            selected={selectedM === item.id}
            onClick={() => (props.disabled ? null : setSelectedM(item.id))}
          >
            {item.label}
          </Chips>
        ))}
      </WrapperChip>
      <WrapperChip $dimension="s">
        {listData.map((item) => (
          <Chips
            {...props}
            dimension="s"
            key={item.id}
            selected={selectedS === item.id}
            onClick={() => (props.disabled ? null : setSelectedS(item.id))}
          >
            {item.label}
          </Chips>
        ))}
      </WrapperChip>
      <WrapperChip $dimension={props.dimension}>
        {listData.map((item) => (
          <Chips
            {...props}
            key={item.id}
            selected={selectedFilledM === item.id}
            onClick={() => (props.disabled ? null : setSelectedFilledM(item.id))}
            appearance="filled"
          >
            {item.label}
          </Chips>
        ))}
      </WrapperChip>
      <WrapperChip $dimension="s">
        {listData.map((item) => (
          <Chips
            {...props}
            dimension="s"
            key={item.id}
            selected={selectedFilledS === item.id}
            onClick={() => (props.disabled ? null : setSelectedFilledS(item.id))}
            appearance="filled"
          >
            {item.label}
          </Chips>
        ))}
      </WrapperChip>
    </ExampleSection>
  );
};
