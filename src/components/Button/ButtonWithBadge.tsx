import styled from 'styled-components';

import { Button, ButtonBadge, T } from '@admiral-ds/react-ui';
import type { ButtonAppearance } from '@admiral-ds/react-ui';

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
    <>
      <T font="Body/Body 1 Long" as="div">
        В кнопки Primary, Secondary и Ghost можно добавлять компонент Badge
      </T>
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
    </>
  );
};
