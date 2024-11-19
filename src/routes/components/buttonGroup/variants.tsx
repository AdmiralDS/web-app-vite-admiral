import { createFileRoute } from '@tanstack/react-router';
import styled from 'styled-components';

import { Button, ButtonBadge, ButtonGroup } from '@admiral-ds/react-ui';
import type { ButtonGroupProps } from '@admiral-ds/react-ui';
import StarSolid from '@admiral-ds/icons/build/system/StarSolid.svg?react';
import { ExampleSection } from '../../-helpers/examples';

const GroupWrapper = styled.div`
  margin-top: 20px;
`;

const appearanceMap: Array<ButtonGroupProps['appearance']> = ['primary', 'secondary', 'tertiary'];

export const ButtonGroupVariants = () => (
  <>
    <ExampleSection text="С включенной иконкой слева">
      {appearanceMap.map((appearance, index) => (
        <GroupWrapper key={'iconStart_' + index}>
          <ButtonGroup appearance={appearance}>
            <Button iconStart={<StarSolid />}>Button 48</Button>
            <Button iconStart={<StarSolid />}>Button 48</Button>
            <Button iconStart={<StarSolid />}>Button 48</Button>
          </ButtonGroup>
        </GroupWrapper>
      ))}
    </ExampleSection>
    <ExampleSection text="С включенной иконкой справа">
      {appearanceMap.map((appearance, index) => (
        <GroupWrapper key={'iconEnd_' + index}>
          <ButtonGroup appearance={appearance}>
            <Button iconEnd={<StarSolid />}>Button 48</Button>
            <Button iconEnd={<StarSolid />}>Button 48</Button>
            <Button iconEnd={<StarSolid />}>Button 48</Button>
          </ButtonGroup>
        </GroupWrapper>
      ))}
    </ExampleSection>
    <ExampleSection text="С бейджами">
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
    </ExampleSection>
    <ExampleSection text="Icon Only">
      {appearanceMap.map((appearance, index) => (
        <GroupWrapper key={'iconOnly_' + index}>
          <ButtonGroup appearance={appearance}>
            <Button iconStart={<StarSolid />} displayAsSquare />
            <Button iconStart={<StarSolid />} displayAsSquare />
            <Button iconStart={<StarSolid />} displayAsSquare />
          </ButtonGroup>
        </GroupWrapper>
      ))}
    </ExampleSection>
  </>
);

export const Route = createFileRoute('/components/buttonGroup/variants')({
  component: () => <ButtonGroupVariants />,
  staticData: {
    title: 'ButtonGroup. Варианты.',
    description: '',
  },
});
