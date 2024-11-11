import { createFileRoute } from '@tanstack/react-router';
import styled from 'styled-components';
import { Avatar, NotificationItemContent, StyledNotificationItem } from '@admiral-ds/react-ui';

const imageURL = 'https://avavatar.ru/images/full/3/Ya4mRgF2LYW9hNdk.jpg';

const Separator = styled.div<{ height: number }>`
  height: ${(p) => p.height}px;
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

const Container = styled.div`
  position: relative;
  display: flex;
  gap: 20px;
`;

export const AvatarXXS = () => {
  return (
    <Wrapper>
      <StyledNotificationItem displayStatusIcon>
        <NotificationItemContent>
          Не используется самостоятельно, как отдельно стоящий и в группах. Применяется в составе других компонентов с
          размерным рядом элементов 20px.
          <Separator height={8} />
          Имеет только два типа: с инициалами или с фото.
        </NotificationItemContent>
      </StyledNotificationItem>
      <Separator height={40} />
      <Container>
        <Avatar userName={'Just Example'} dimension="xxs" />
        <Avatar userName={'Just Example'} href={imageURL} dimension="xxs" />
      </Container>
    </Wrapper>
  );
};

export const Route = createFileRoute('/components/avatar/sizeXXS')({
  component: () => <AvatarXXS />,
  staticData: {
    title: 'Avatar. Размер XXS',
    description: 'Компонент используется для отображения фотографии пользователя, его инициалов или иконки.',
  },
});
