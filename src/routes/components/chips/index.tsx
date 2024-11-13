import { createFileRoute } from '@tanstack/react-router';
import styled from 'styled-components';

import { Chips } from '@admiral-ds/react-ui';
import type { ChipsProps } from '@admiral-ds/react-ui';
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

export const ChipsBasic = (props: ChipsProps) => {
  return (
    <ExampleWrapper>
      <WrapperChip $dimension={props.dimension}>
        {listData.map((item) => (
          <Chips {...props} key={item.id}>
            {item.label}
          </Chips>
        ))}
      </WrapperChip>
    </ExampleWrapper>
  );
};

export const Route = createFileRoute('/components/chips/')({
  component: () => <ChipsBasic />,
  staticData: {
    title: 'Chips. Базовый пример',
    description: 'Чипсы представляют собой перечень выбранных фильтров, опций или каких-либо элементов из списка.',
  },
});
