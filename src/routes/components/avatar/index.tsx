import { createFileRoute } from '@tanstack/react-router';
import styled from 'styled-components';
import { Avatar, AvatarActivity, NotificationItemContent, StyledNotificationItem } from '@admiral-ds/react-ui';

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

const HorizontalContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

export const AvatarBasic = () => {
  return (
    <Wrapper>
      <StyledNotificationItem displayStatusIcon>
        <NotificationItemContent>
          Условно компонент можно разделить на два вида – обычный Avatar и тот, который используется с Activity Ring. Во
          втором варианте появляется пустое пространство вокруг компонента под круг фокусировки, что бы он (круг) при
          включении входил в общий размер компонента и не обрезался во фреймах. Таким образом, включение опции «Activity
          Avatar» добавляет по 4 px с каждой стороны компонента. Используйте только один тип Аватаров одновременно.
        </NotificationItemContent>
      </StyledNotificationItem>
      <HorizontalContainer>
        <Avatar showTooltip userName="Avatar" />
        <AvatarActivity showTooltip showActivityRing userName="AvatarActivity" />
      </HorizontalContainer>
    </Wrapper>
  );
};

export const Route = createFileRoute('/components/avatar/')({
  component: () => <AvatarBasic />,
  staticData: {
    title: 'Avatar, AvatarActivity. Базовый пример',
    description: 'Компонент используется для отображения фотографии пользователя, его инициалов или иконки.',
  },
});
