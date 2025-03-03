import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import styled from 'styled-components';

import { Chips } from '@admiral-ds/react-ui';
import type { ChipsProps } from '@admiral-ds/react-ui';

import { columnFlexMixin, ExampleSection } from '../../-helpers/examples';

const listData = [
  {
    id: '1',
    label: 'Москва',
    disabled: false,
    badge: 1,
    selected: false,
  },
  { id: '2', label: 'Тверь', disabled: false, badge: 2, selected: false },
  { id: '3', label: 'Самара', disabled: false, badge: 3, selected: false },
  { id: '4', label: 'Омск', disabled: false, badge: 4, selected: false },
  { id: '5', label: 'Вильнус', disabled: false, badge: 5, selected: false },
];

const WrapperChip = styled.div<{ $dimension?: 'm' | 's' }>`
  display: flex;
  & > div {
    margin-right: ${({ $dimension }) => ($dimension === 's' ? 8 : 12)}px;
  }
`;

export const ChipsBadges = (props: ChipsProps) => {
  const [selectedM, setSelectedM] = useState('');
  const [selectedS, setSelectedS] = useState('');
  const [dataListM, setDataM] = useState(listData);
  const [dataListS, setDataS] = useState(listData);

  return (
    <ExampleSection cssMixin={columnFlexMixin}>
      <WrapperChip $dimension="m">
        {dataListM.map((item) => (
          <Chips
            {...props}
            key={item.id}
            badge={item.badge}
            dimension="m"
            selected={selectedM === item.id}
            onClick={() => (props.disabled ? null : setSelectedM(item.id))}
            onClose={item.badge % 2 ? () => setDataM((prev) => prev.filter((d) => d.id !== item.id)) : undefined}
          >
            {item.label}
          </Chips>
        ))}
      </WrapperChip>
      <WrapperChip $dimension="s">
        {dataListS.map((item) => (
          <Chips
            {...props}
            key={item.id}
            badge={item.badge}
            dimension="s"
            appearance="filled"
            selected={selectedS === item.id}
            onClick={() => (props.disabled ? null : setSelectedS(item.id))}
            onClose={item.badge % 2 ? () => setDataS((prev) => prev.filter((d) => d.id !== item.id)) : undefined}
          >
            {item.label}
          </Chips>
        ))}
      </WrapperChip>
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/chips/withBadge')({
  component: () => <ChipsBadges />,
  staticData: {
    title: 'Chips с Badge',
    description: 'В компоненте можно включать бейджи.',
  },
});
