import { createFileRoute } from '@tanstack/react-router';
import styled from 'styled-components';

import { Chips } from '@admiral-ds/react-ui';
import { ExampleSection } from '../../-helpers/examples';

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
    <>
      <ExampleSection text="Outlined">
        <WrapperChip $dimension="m">
          {listData.map((item) => (
            <Chips dimension="m" appearance="outlined" key={item.id}>
              {item.label}
            </Chips>
          ))}
        </WrapperChip>
      </ExampleSection>
      <ExampleSection text="Filled">
        <WrapperChip $dimension="m">
          {listData.map((item) => (
            <Chips dimension="m" appearance="filled" key={item.id}>
              {item.label}
            </Chips>
          ))}
        </WrapperChip>
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/chips/styles')({
  component: () => <ChipsStyles />,
  staticData: {
    title: 'Chips. Стили',
    description: 'В библиотеке есть два типа чипсов — Filled и Outlined.',
  },
});
