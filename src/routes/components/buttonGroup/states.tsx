import { createFileRoute } from '@tanstack/react-router';
import styled from 'styled-components';

import { Button, ButtonGroup, T } from '@admiral-ds/react-ui';
import type { ButtonGroupProps } from '@admiral-ds/react-ui';
import { ContentArea } from '../../-helpers/examples';

const GroupWrapper = styled.div`
  margin-top: 20px;
`;

const appearanceMap: Array<ButtonGroupProps['appearance']> = ['primary', 'secondary', 'tertiary'];

export const ButtonGroupStates = () => (
  <ContentArea>
    <T font="Body/Body 1 Long">Disable (вторая внопка)</T>
    {appearanceMap.map((appearance, index) => (
      <GroupWrapper key={'disable_' + index}>
        <ButtonGroup appearance={appearance}>
          <Button>Button 56</Button>
          <Button disabled>Button 56</Button>
          <Button>Button 56</Button>
        </ButtonGroup>
      </GroupWrapper>
    ))}
    <T font="Body/Body 1 Long">Loading (третья кнопка)</T>
    {appearanceMap.map((appearance, index) => (
      <GroupWrapper key={'loading' + index}>
        <ButtonGroup appearance={appearance}>
          <Button>Button 56</Button>
          <Button>Button 56</Button>
          <Button loading>Button 56</Button>
        </ButtonGroup>
      </GroupWrapper>
    ))}
  </ContentArea>
);

export const Route = createFileRoute('/components/buttonGroup/states')({
  component: () => <ButtonGroupStates />,
  staticData: {
    title: 'ButtonGroup. Состояния.',
    description: '',
  },
});
