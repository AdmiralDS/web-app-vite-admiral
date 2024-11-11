import { createFileRoute } from '@tanstack/react-router';
import styled from 'styled-components';

import { Button, ButtonBadge, ButtonGroup, T } from '@admiral-ds/react-ui';
import type { ButtonGroupProps } from '@admiral-ds/react-ui';
import StarSolid from '@admiral-ds/icons/build/system/StarSolid.svg?react';

const GroupWrapper = styled.div`
  margin-top: 20px;
`;
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

const appearanceMap: Array<ButtonGroupProps['appearance']> = ['primary', 'secondary', 'tertiary'];

export const ButtonGroupVariants = () => (
  <Wrapper>
    <T font="Body/Body 1 Long">С включенной иконкой слева</T>
    {appearanceMap.map((appearance, index) => (
      <GroupWrapper key={'iconStart_' + index}>
        <ButtonGroup appearance={appearance}>
          <Button iconStart={<StarSolid />}>Button 48</Button>
          <Button iconStart={<StarSolid />}>Button 48</Button>
          <Button iconStart={<StarSolid />}>Button 48</Button>
        </ButtonGroup>
      </GroupWrapper>
    ))}
    <T font="Body/Body 1 Long">С включенной иконкой справа</T>
    {appearanceMap.map((appearance, index) => (
      <GroupWrapper key={'iconEnd_' + index}>
        <ButtonGroup appearance={appearance}>
          <Button iconEnd={<StarSolid />}>Button 48</Button>
          <Button iconEnd={<StarSolid />}>Button 48</Button>
          <Button iconEnd={<StarSolid />}>Button 48</Button>
        </ButtonGroup>
      </GroupWrapper>
    ))}
    <T font="Body/Body 1 Long">С бейджами</T>
    {appearanceMap.map((appearance, index) => (
      <GroupWrapper key={'badge_' + index}>
        <ButtonGroup appearance={appearance}>
          <Button displayAsSquare={false}>
            Button
            <ButtonBadge appearance={appearance}>5</ButtonBadge>
          </Button>
          <Button displayAsSquare={false}>
            Button
            <ButtonBadge appearance={appearance}>5</ButtonBadge>
          </Button>
          <Button displayAsSquare={false}>
            Button
            <ButtonBadge appearance={appearance}>5</ButtonBadge>
          </Button>
        </ButtonGroup>
      </GroupWrapper>
    ))}
    <T font="Body/Body 1 Long">Icon Only</T>
    {appearanceMap.map((appearance, index) => (
      <GroupWrapper key={'iconOnly_' + index}>
        <ButtonGroup appearance={appearance}>
          <Button iconStart={<StarSolid />} displayAsSquare />
          <Button iconStart={<StarSolid />} displayAsSquare />
          <Button iconStart={<StarSolid />} displayAsSquare />
        </ButtonGroup>
      </GroupWrapper>
    ))}
  </Wrapper>
);

export const Route = createFileRoute('/components/buttonGroup/variants')({
  component: () => <ButtonGroupVariants />,
  staticData: {
    title: 'ButtonGroup. Варианты.',
    description: '',
  },
});
