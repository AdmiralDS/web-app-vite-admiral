import { createFileRoute } from '@tanstack/react-router'
import styled from 'styled-components';

import {
  Button,
  ButtonBadge,
  NotificationItem,
  NotificationItemContent,
} from '@admiral-ds/react-ui';
import type { ButtonAppearance } from '@admiral-ds/react-ui';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  margin: 15px 5px;
`

const ButtonContainer = styled.div<{ $appearance?: ButtonAppearance }>`
  padding: 24px;
  position: relative;
  display: block;

  > * {
    margin: 8px 16px 0 0;
  }

  ${(p) => p.$appearance === 'white' && 'background-color: #2B313B;'};
`;

export const ButtonWithBadge = () => {
  return (
    <Wrapper>
      <ButtonContainer>
        <Button appearance="primary" displayAsSquare={false}>
          Button
          <ButtonBadge appearance="primary">5</ButtonBadge>
        </Button>

        <Button appearance="secondary" displayAsSquare={false}>
          Button
          <ButtonBadge appearance="secondary">5</ButtonBadge>
        </Button>

        <Button appearance="tertiary" displayAsSquare={false}>
          Button
          <ButtonBadge appearance="tertiary">5</ButtonBadge>
        </Button>

        <Button appearance="ghost" displayAsSquare={false}>
          Button
          <ButtonBadge appearance="ghost">5</ButtonBadge>
        </Button>
      </ButtonContainer>
      <NotificationItem displayStatusIcon>
        <NotificationItemContent>
          В кнопки Primary, Secondary и Ghost можно добавлять компонент Badge.
        </NotificationItemContent>
      </NotificationItem>
    </Wrapper>
  );
};

export const Route = createFileRoute('/components/button/buttonWithBadge')({
  component: () => <ButtonWithBadge />,
  staticData: {
    title: 'Button. С бейджем',
    description: 'Небольшое описание функционала',
  },
})
