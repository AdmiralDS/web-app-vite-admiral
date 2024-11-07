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

const WrapperContent = styled.div`
  display: flex;
  align-items: center;
`;

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

export const ChipsMultiSelect = (props: ChipsProps) => {
  const [listM, setListM] = useState(listDataIcon);
  const handleKeyM = (id: string) => {
    setListM((prev) => prev.map((item) => (item.id === id ? { ...item, selected: !item.selected } : { ...item })));
  };
  const [listS, setListS] = useState(listDataIcon);
  const handleKeyS = (id: string) => {
    setListS((prev) => prev.map((item) => (item.id === id ? { ...item, selected: !item.selected } : { ...item })));
  };

  return (
    <Wrapper>
      <WrapperChip $dimension={props.dimension}>
        {listM.map((item) => (
          <Chips
            {...props}
            key={item.id}
            onClick={props.disabled ? void 0 : handleKeyM.bind(null, item.id)}
            selected={item.selected}
          >
            <WrapperContent>{item.label}</WrapperContent>
          </Chips>
        ))}
      </WrapperChip>
      <WrapperChip $dimension="s">
        {listS.map((item) => (
          <Chips
            {...props}
            dimension="s"
            key={item.id}
            onClick={props.disabled ? void 0 : handleKeyS.bind(null, item.id)}
            selected={item.selected}
          >
            <WrapperContent>{item.label}</WrapperContent>
          </Chips>
        ))}
      </WrapperChip>
    </Wrapper>
  );
};

export const Route = createFileRoute('/components/chips/multiSelect')({
  component: () => <ChipsMultiSelect />,
  staticData: {
    title: 'Chips для множественного выбора',
    description: 'Chips в режиме чекбоксов, когда можно выбрать любое количество значений.',
  },
});
