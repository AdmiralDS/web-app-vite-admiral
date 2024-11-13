import { createFileRoute } from '@tanstack/react-router';
import styled from 'styled-components';
import { Avatar, NotificationItemContent, StyledNotificationItem } from '@admiral-ds/react-ui';
import { ExampleWrapper } from '../../-helpers/examples';

const imageURL = 'https://avavatar.ru/images/full/3/Ya4mRgF2LYW9hNdk.jpg';

const Separator = styled.div<{ height: number }>`
  height: ${(p) => p.height}px;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  gap: 20px;
`;

export const AvatarXXS = () => {
  return (
    <ExampleWrapper>
      <StyledNotificationItem displayStatusIcon>
        <NotificationItemContent>
          Не используется самостоятельно, как отдельно стоящий и в группах. Применяется в составе других компонентов с
          размерным рядом элементов 20px.
          <Separator height={8} />
          Имеет только два типа: с инициалами или с фото.
        </NotificationItemContent>
      </StyledNotificationItem>
      <Container>
        <Avatar userName={'Just Example'} dimension="xxs" />
        <Avatar userName={'Just Example'} href={imageURL} dimension="xxs" />
      </Container>
    </ExampleWrapper>
  );
};

export const Route = createFileRoute('/components/avatar/sizeXXS')({
  component: () => <AvatarXXS />,
  staticData: {
    title: 'Avatar. Размер XXS',
    description: 'Компонент используется для отображения фотографии пользователя, его инициалов или иконки.',
  },
});
