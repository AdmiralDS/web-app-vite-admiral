import { createFileRoute } from '@tanstack/react-router';
import styled from 'styled-components';

import {
  Button,
  ButtonGroup,
  NotificationItem,
  NotificationItemContent,
  NotificationItemTitle,
} from '@admiral-ds/react-ui';

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

export const ButtonGroupBasic = () => (
  <Wrapper>
    <ButtonGroup>
      <Button dimension="l">Button 56</Button>
      <Button dimension="m">Button 56</Button>
      <Button dimension="s">Button 56</Button>
    </ButtonGroup>
    <NotificationItem displayStatusIcon>
      <NotificationItemTitle>Рекомендации</NotificationItemTitle>
      <NotificationItemContent>
        <li>
          Используйте компонент только для организации схожих функций. Не группируйте кнопки только потому, что они
          стоят рядом.
        </li>
        <Separator height={8} />
        <li>Не группируйте слишком много кнопок — это создает излишнюю когнитивную нагрузку на пользователя.</li>
        <Separator height={8} />
        <li>Не используйте компонент для навигации по вкладкам, для этого есть специализированные компоненты.</li>
        <Separator height={8} />
        <li>
          Нельзя использовать в группе кнопки с разными включенными опциями. Если есть иконка, то она во всех кнопках.
        </li>
      </NotificationItemContent>
    </NotificationItem>
  </Wrapper>
);

export const Route = createFileRoute('/components/buttonGroup/')({
  component: () => <ButtonGroupBasic />,
  staticData: {
    title: 'ButtonGroup. Базовый пример.',
    description: 'Состоит из компонентов Button, связаных друг с другом, используется для организации схожих функций.',
  },
});