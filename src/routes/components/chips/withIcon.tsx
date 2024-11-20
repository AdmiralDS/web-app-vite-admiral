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
import { columnFlexMixin, ExampleSection } from '../../-helpers/examples';

const WrapperChip = styled.div<{ $dimension?: 'm' | 's' }>`
  display: flex;
  & > div {
    margin-right: ${({ $dimension }) => ($dimension === 's' ? 8 : 12)}px;
  }
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

export const ChipsIcon = (props: ChipsProps) => {
  const [selectedM, setSelectedM] = useState('');
  const [selectedS, setSelectedS] = useState('');
  return (
    <ExampleSection cssMixin={columnFlexMixin}>
      <WrapperChip $dimension={props.dimension}>
        {listDataIcon.map((d) => (
          <Chips
            {...props}
            key={d.id}
            selected={selectedM === d.id}
            onClick={() => (props.disabled ? null : setSelectedM(d.id))}
            iconStart={d?.iconStart}
            iconEnd={d?.iconEnd}
          >
            {d.label}
          </Chips>
        ))}
      </WrapperChip>
      <WrapperChip $dimension="s">
        {listDataIcon.map((d) => (
          <Chips
            {...props}
            dimension="s"
            key={d.id}
            selected={selectedS === d.id}
            onClick={() => (props.disabled ? null : setSelectedS(d.id))}
            iconStart={d?.iconStart}
            iconEnd={d?.iconEnd}
          >
            {d.label}
          </Chips>
        ))}
      </WrapperChip>
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/chips/withIcon')({
  component: () => <ChipsIcon />,
  staticData: {
    title: 'Chips с иконкой',
    description: 'В компоненте можно включать иконки справа и/или слева от текста.',
  },
});
