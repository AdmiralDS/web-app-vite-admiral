import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import styled from 'styled-components';

import { Chips } from '@admiral-ds/react-ui';
import type { ChipsProps } from '@admiral-ds/react-ui';

import VacationIcon from '@admiral-ds/icons/build/category/VacationSolid.svg?react';
import AlertSolid from '@admiral-ds/icons/build/category/AlertSolid.svg?react';
import DiamondSolid from '@admiral-ds/icons/build/category/DiamondSolid.svg?react';
import TrophyIcon from '@admiral-ds/icons/build/category/TrophySolid.svg?react';
import BurnIcon from '@admiral-ds/icons/build/category/BurnSolid.svg?react';

const listDataIcon = [
  {
    id: '1',
    label: 'Москва',
    disabled: false,
    iconStart: <VacationIcon />,
    iconEnd: <AlertSolid />,
    selected: false,
  },
  { id: '2', label: 'Тверь', disabled: false, iconStart: <TrophyIcon />, selected: false },
  { id: '3', label: 'Самара', disabled: false, iconEnd: <BurnIcon />, selected: false },
  { id: '4', label: 'Омск', disabled: false, iconEnd: <DiamondSolid />, selected: false },
  { id: '5', label: 'Вильнус', disabled: false, iconStart: <BurnIcon />, selected: false, badge: 3 },
];

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  align-self: flex-start;

  > * {
    margin: 20px 20px;
  }
`;

const WrapperChip = styled.div<{ $dimension?: 'm' | 's' }>`
  display: flex;
  & > div {
    margin-right: ${({ $dimension }) => ($dimension === 's' ? 8 : 12)}px;
  }
`;

export const ChipsBadges = (props: ChipsProps) => {
  const [selectedM, setSelectedM] = useState('');
  const [selectedS, setSelectedS] = useState('');

  return (
    <Wrapper>
      <WrapperChip $dimension="m">
        {listDataIcon.map((item) => (
          <Chips
            {...props}
            key={item.id}
            badge={props.badge}
            dimension="m"
            selected={selectedM === item.id}
            onClick={() => (props.disabled ? null : setSelectedM(item.id))}
            iconStart={item?.iconStart}
            iconEnd={item?.iconEnd}
          >
            {item.label}
          </Chips>
        ))}
      </WrapperChip>
      <WrapperChip $dimension="s">
        {listDataIcon.map((item) => (
          <Chips
            {...props}
            key={item.id}
            badge={props.badge}
            dimension="s"
            appearance="filled"
            selected={selectedS === item.id}
            onClick={() => (props.disabled ? null : setSelectedS(item.id))}
            iconStart={item?.iconStart}
            iconEnd={item?.iconEnd}
          >
            {item.label}
          </Chips>
        ))}
      </WrapperChip>
    </Wrapper>
  );
};

export const Route = createFileRoute('/components/chips/withBadge')({
  component: () => <ChipsBadges />,
  staticData: {
    title: 'Chips с Badge',
    description: 'В компоненте можно включать бейджи.',
  },
});
