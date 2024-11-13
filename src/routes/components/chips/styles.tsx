import { createFileRoute } from '@tanstack/react-router';
import styled from 'styled-components';

import { Chips } from '@admiral-ds/react-ui';
import { ExampleWrapper } from '../../-helpers/examples';

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

export const ChipsStyles = () => {
  return (
    <ExampleWrapper>
      <WrapperChip $dimension="m">
        {listData.map((item) => (
          <Chips dimension="m" appearance="outlined" key={item.id}>
            {item.label}
          </Chips>
        ))}
      </WrapperChip>
      <WrapperChip $dimension="s">
        {listData.map((item) => (
          <Chips dimension="s" appearance="outlined" key={item.id}>
            {item.label}
          </Chips>
        ))}
      </WrapperChip>
      <WrapperChip $dimension="m">
        {listData.map((item) => (
          <Chips dimension="m" appearance="filled" key={item.id}>
            {item.label}
          </Chips>
        ))}
      </WrapperChip>
      <WrapperChip $dimension="s">
        {listData.map((item) => (
          <Chips dimension="s" appearance="filled" key={item.id}>
            {item.label}
          </Chips>
        ))}
      </WrapperChip>
    </ExampleWrapper>
  );
};

export const Route = createFileRoute('/components/chips/styles')({
  component: () => <ChipsStyles />,
  staticData: {
    title: 'Chips. Стили и размеры',
    description: 'Чипсы представляют собой перечень выбранных фильтров, опций или каких-либо элементов из списка.',
  },
});
