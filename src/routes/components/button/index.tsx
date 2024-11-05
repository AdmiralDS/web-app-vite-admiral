import { createFileRoute } from '@tanstack/react-router';
import styled from 'styled-components';
import { Button, NotificationItem, NotificationItemContent } from '@admiral-ds/react-ui';
import StarSolid from '@admiral-ds/icons/build/system/StarSolid.svg?react';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: flex-start;

  > * {
    margin: 8px 16px;
  }
`;

const ButtonContainer = styled.div`
  padding: 24px;
  position: relative;
  display: block;

  > * {
    margin: 8px 16px 0 0;
  }
`;

export const ButtonBasic = () => {
  return (
    <Wrapper>
      <ButtonContainer>
        <Button>Button 56</Button>

        <Button iconStart={<StarSolid />}>Button 56</Button>

        <Button iconEnd={<StarSolid />}>Button 56</Button>

        <Button iconStart={<StarSolid />} displayAsSquare />
      </ButtonContainer>
      <NotificationItem displayStatusIcon>
        <NotificationItemContent>
          Кнопки представлены в четырех размерностях XL, L, M и S. Для дополнительных акцентов и более прозрачных
          действий могут применяться кнопки с иконками и текстом. Иконка может быть как перед надписью, так и после
          (iconStart/iconEnd). В некоторых случаях могут использоваться кнопки только с иконками. Как правило, это
          иконки, значения которых общепонятны и не вызывают сомнений.
        </NotificationItemContent>
      </NotificationItem>
    </Wrapper>
  );
};

export const Route = createFileRoute('/components/button/')({
  component: () => <ButtonBasic />,
  staticData: {
    title: 'Button. Базовый пример',
    description: 'Небольшое описание функционала',
  },
});
