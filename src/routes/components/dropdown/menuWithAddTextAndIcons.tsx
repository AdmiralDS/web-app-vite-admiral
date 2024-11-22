import { createFileRoute } from '@tanstack/react-router';
import styled, { css } from 'styled-components';
import { useState } from 'react';

import { ExampleSection } from '../../-helpers/examples';
import { getItemHeight, Menu, MenuItem, type RenderOptionProps, typography } from '@admiral-ds/react-ui';

import VacationSolid from '@admiral-ds/icons/build/category/VacationSolid.svg?react';
import AlertSolid from '@admiral-ds/icons/build/category/AlertSolid.svg?react';
import DiamondSolid from '@admiral-ds/icons/build/category/DiamondSolid.svg?react';
import TrophyIcon from '@admiral-ds/icons/build/category/TrophySolid.svg?react';
import BurnIcon from '@admiral-ds/icons/build/category/BurnSolid.svg?react';
import BugSolid from '@admiral-ds/icons/build/category/BugSolid.svg?react';
import CompareSolid from '@admiral-ds/icons/build/category/CompareSolid.svg?react';
import ElderlySolid from '@admiral-ds/icons/build/category/ElderlySolid.svg?react';
import MartiniOutline from '@admiral-ds/icons/build/category/MartiniOutline.svg?react';
import PostOutline from '@admiral-ds/icons/build/category/PostOutline.svg?react';
import ShoppingBagOutline from '@admiral-ds/icons/build/category/ShoppingBagOutline.svg?react';
import TrophyOutline from '@admiral-ds/icons/build/category/TrophyOutline.svg?react';
import AgreedSolid from '@admiral-ds/icons/build/service/AgreedSolid.svg?react';
import { MenuWrapper } from '../../-helpers/menu';

const items = [
  {
    id: '1',
    label: 'Option one',
    value: 1,
    iconBefore: <TrophyIcon />,
    iconAfter: <BurnIcon />,
  },
  {
    id: '2',
    label: 'Option two',
    value: 2,
    iconBefore: <VacationSolid />,
    iconAfter: <AlertSolid />,
  },
  {
    id: '3',
    label: 'Option three',
    value: 3,
    iconBefore: <DiamondSolid />,
    iconAfter: <BugSolid />,
  },
  {
    id: '4',
    label: 'Option four',
    value: 4,
    iconBefore: <TrophyOutline />,
    iconAfter: <AgreedSolid />,
  },
  {
    id: '5',
    label: 'Option five',
    value: 5,
    iconBefore: <ShoppingBagOutline />,
    iconAfter: <VacationSolid />,
  },
  {
    id: '6',
    label: 'Option six',
    value: 7,
    iconBefore: <ElderlySolid />,
    iconAfter: <PostOutline />,
  },
  {
    id: '7',
    label: 'Option seven',
    value: 6,
    iconBefore: <MartiniOutline />,
    iconAfter: <CompareSolid />,
  },
];

const StyledMenuItem = styled(MenuItem)`
  ${typography['Body/Body 1 Short']}
  padding: 6px 16px;
  align-items: flex-start;
  height: ${getItemHeight('l')}px;
  width: 320px;
  box-sizing: border-box;
`;

const StyledAdditionalText = styled.div`
  ${typography['Caption/Caption 1']}
  color: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
  pointer-events: none;
`;

const iconSize = css`
  width: 24px;
  height: 24px;
`;

const IconBefore = styled.div`
  position: absolute;
  top: 4px;
  left: 16px;
  ${iconSize}
`;

const IconAfter = styled.div`
  position: absolute;
  top: 4px;
  right: 16px;
  ${iconSize}
`;

const MenuWithAddTextAndIcons = () => {
  const modelBase = items.map((item) => ({
    id: item.id,
    render: (options: RenderOptionProps) => (
      <StyledMenuItem {...options} key={item.id} dimension="l">
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {item.label}
          <StyledAdditionalText>Комментарий</StyledAdditionalText>
        </div>
      </StyledMenuItem>
    ),
  }));
  const modelIconBefore = items.map((item) => ({
    id: item.id,
    render: (options: RenderOptionProps) => (
      <StyledMenuItem {...options} key={item.id} dimension="l">
        <IconBefore>{item.iconBefore}</IconBefore>
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '32px' }}>
          {item.label}
          <StyledAdditionalText>Комментарий</StyledAdditionalText>
        </div>
      </StyledMenuItem>
    ),
  }));
  const modelIconAfter = items.map((item) => ({
    id: item.id,
    render: (options: RenderOptionProps) => (
      <StyledMenuItem {...options} key={item.id} dimension="l">
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {item.label}
          <StyledAdditionalText>Комментарий</StyledAdditionalText>
        </div>
        <IconAfter>{item.iconAfter}</IconAfter>
      </StyledMenuItem>
    ),
  }));
  const modelTwoIcons = items.map((item) => ({
    id: item.id,
    render: (options: RenderOptionProps) => (
      <StyledMenuItem {...options} key={item.id} dimension="l">
        <IconBefore>{item.iconBefore}</IconBefore>
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '32px' }}>
          {item.label}
          <StyledAdditionalText>Комментарий</StyledAdditionalText>
        </div>
        <IconAfter>{item.iconAfter}</IconAfter>
      </StyledMenuItem>
    ),
  }));

  const [selected1, setSelected1] = useState<string | undefined>('');
  const [selected2, setSelected2] = useState<string | undefined>('');
  const [selected3, setSelected3] = useState<string | undefined>('');
  const [selected4, setSelected4] = useState<string | undefined>('');
  const [active1, setActive1] = useState<string | undefined>('');
  const [active2, setActive2] = useState<string | undefined>('');
  const [active3, setActive3] = useState<string | undefined>('');
  const [active4, setActive4] = useState<string | undefined>('');

  return (
    <>
      <ExampleSection text="Меню с дополнительным текстом">
        <MenuWrapper style={{ width: 'fit-content' }}>
          <Menu
            defaultIsActive={false}
            dimension="l"
            model={modelBase}
            selected={selected1}
            onSelectItem={setSelected1}
            active={active1}
            onActivateItem={setActive1}
          />
        </MenuWrapper>
      </ExampleSection>
      <ExampleSection text="Меню с иконкой слева">
        <MenuWrapper style={{ width: 'fit-content' }}>
          <Menu
            defaultIsActive={false}
            dimension="l"
            model={modelIconBefore}
            selected={selected3}
            onSelectItem={setSelected3}
            active={active3}
            onActivateItem={setActive3}
          />
        </MenuWrapper>
      </ExampleSection>
      <ExampleSection text="Меню с иконкой справа">
        <MenuWrapper style={{ width: 'fit-content' }}>
          <Menu
            defaultIsActive={false}
            dimension="l"
            model={modelIconAfter}
            selected={selected4}
            onSelectItem={setSelected4}
            active={active4}
            onActivateItem={setActive4}
          />
        </MenuWrapper>
      </ExampleSection>
      <ExampleSection text="Меню с двумя иконками">
        <MenuWrapper style={{ width: 'fit-content' }}>
          <Menu
            defaultIsActive={false}
            dimension="l"
            model={modelTwoIcons}
            selected={selected2}
            onSelectItem={setSelected2}
            active={active2}
            onActivateItem={setActive2}
          />
        </MenuWrapper>
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/dropdown/menuWithAddTextAndIcons')({
  component: () => <MenuWithAddTextAndIcons />,
  staticData: {
    title: 'Menu. С дополнительным текстом и иконками',
    description: 'Можно включить вариант с дополнительным текстом и иконкой',
  },
});
