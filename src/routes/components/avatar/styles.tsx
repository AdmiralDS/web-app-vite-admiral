import { createFileRoute } from '@tanstack/react-router';
import styled from 'styled-components';
import {
  Avatar,
  AvatarActivity,
  NotificationItemContent,
  StyledNotificationItem,
  typography,
} from '@admiral-ds/react-ui';
import PersonSolid from '@admiral-ds/icons/build/system/PersonSolid.svg?react';
import { ContentArea } from '../../-helpers/examples';

const imageURL = 'https://avavatar.ru/images/full/3/Ya4mRgF2LYW9hNdk.jpg';

const Container = styled.div`
  position: relative;
  display: flex;
  gap: 10px;
`;

const HorizontalContainer = styled.div`
  display: flex;
  gap: 40px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 20px;
`;

const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px;
`;

const Text = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 8px;
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
  ${typography['Body/Body 2 Long']}
`;

const Separator = styled.div<{ height: number }>`
  height: ${(p) => p.height}px;
`;

export const AvatarStyles = () => {
  const showTooltip = true;
  const showActivityRing = true;
  const appearance = 'neutral2';

  return (
    <ContentArea>
      <StyledNotificationItem displayStatusIcon>
        <NotificationItemContent>
          Присутствует пять размеров компонента. Допускается использование одной или двух букв для обозначения
          пользователя.
          <Separator height={8} />
          Компонент может быть кликабельным, например, вести в личный кабинет или показывать выпадающее меню с опциями
          пользователя.
          <Separator height={8} />
          При ховере над аватаром показывается Tooltip с именем пользователя (опционально можно отключить).
          <Separator height={8} />
          Аватары можно группировать – компонент Avatar Group, в таком случае статусы показывать нельзя.
          <Separator height={8} />
          Рекомендуемый алгоритм использования типов аватаров:
          <li>Если пользователь предоставил фотографию, то используется аватар с фото</li>
          <li>Если нет фото, то пишутся инициалы пользователя – первые буквы имени и фамилии</li>
          <li>Если известно только имя, то пишутся первые две буквы имени</li>
          <li>Если нет никаких данных, то используется аватар с иконкой.</li>
        </NotificationItemContent>
      </StyledNotificationItem>
      <HorizontalContainer>
        <Container>
          <Avatar showTooltip={showTooltip} dimension="xs" userName="Dimension xs" />
          <Avatar showTooltip={showTooltip} dimension="s" userName="Dimension s" />
          <Avatar showTooltip={showTooltip} dimension="m" userName="Dimension m" />
          <Avatar showTooltip={showTooltip} dimension="l" userName="Dimension l" />
          <Avatar showTooltip={showTooltip} userName="Dimension xl" />
        </Container>
        <Container>
          <AvatarActivity
            appearance={appearance}
            showTooltip={showTooltip}
            showActivityRing={showActivityRing}
            dimension="xs"
            userName="Dimension xs"
          />
          <AvatarActivity
            appearance={appearance}
            showTooltip={showTooltip}
            showActivityRing={showActivityRing}
            dimension="s"
            userName="Dimension s"
          />
          <AvatarActivity
            appearance={appearance}
            showTooltip={showTooltip}
            showActivityRing={showActivityRing}
            dimension="m"
            userName="Dimension m"
          />
          <AvatarActivity
            appearance={appearance}
            showTooltip={showTooltip}
            showActivityRing={showActivityRing}
            dimension="l"
            userName="Dimension l"
          />
          <AvatarActivity
            appearance={appearance}
            showTooltip={showTooltip}
            showActivityRing={showActivityRing}
            userName="Dimension xl"
          />
        </Container>
      </HorizontalContainer>
      <HorizontalContainer>
        <Container>
          <Avatar showTooltip={showTooltip} dimension="xs" userName="Dimension xs" icon={<PersonSolid />} />
          <Avatar showTooltip={showTooltip} dimension="s" userName="Dimension s" icon={<PersonSolid />} />
          <Avatar showTooltip={showTooltip} dimension="m" userName="Dimension m" icon={<PersonSolid />} />
          <Avatar showTooltip={showTooltip} dimension="l" userName="Dimension l" icon={<PersonSolid />} />
          <Avatar showTooltip={showTooltip} userName="Dimension xl" icon={<PersonSolid />} />
        </Container>
        <Container>
          <AvatarActivity
            appearance={appearance}
            showTooltip={showTooltip}
            showActivityRing={showActivityRing}
            dimension="xs"
            userName="Dimension xs"
            icon={<PersonSolid />}
          />
          <AvatarActivity
            appearance={appearance}
            showTooltip={showTooltip}
            showActivityRing={showActivityRing}
            dimension="s"
            userName="Dimension s"
            icon={<PersonSolid />}
          />
          <AvatarActivity
            appearance={appearance}
            showTooltip={showTooltip}
            showActivityRing={showActivityRing}
            dimension="m"
            userName="Dimension m"
            icon={<PersonSolid />}
          />
          <AvatarActivity
            appearance={appearance}
            showTooltip={showTooltip}
            showActivityRing={showActivityRing}
            dimension="l"
            userName="Dimension l"
            icon={<PersonSolid />}
          />
          <AvatarActivity
            appearance={appearance}
            showTooltip={showTooltip}
            showActivityRing={showActivityRing}
            userName="Dimension xl"
            icon={<PersonSolid />}
          />
        </Container>
      </HorizontalContainer>
      <HorizontalContainer>
        <Container>
          <Avatar showTooltip={showTooltip} dimension="xs" userName="Dimension xs" href={imageURL} />
          <Avatar showTooltip={showTooltip} dimension="s" userName="Dimension s" href={imageURL} />
          <Avatar showTooltip={showTooltip} dimension="m" userName="Dimension m" href={imageURL} />
          <Avatar showTooltip={showTooltip} dimension="l" userName="Dimension l" href={imageURL} />
          <Avatar showTooltip={showTooltip} userName="Dimension xl" href={imageURL} />
        </Container>
        <Container>
          <AvatarActivity
            appearance={appearance}
            showTooltip={showTooltip}
            showActivityRing={showActivityRing}
            dimension="xs"
            userName="Dimension xs"
            href={imageURL}
          />
          <AvatarActivity
            appearance={appearance}
            showTooltip={showTooltip}
            showActivityRing={showActivityRing}
            dimension="s"
            userName="Dimension s"
            href={imageURL}
          />
          <AvatarActivity
            appearance={appearance}
            showTooltip={showTooltip}
            showActivityRing={showActivityRing}
            dimension="m"
            userName="Dimension m"
            href={imageURL}
          />
          <AvatarActivity
            appearance={appearance}
            showTooltip={showTooltip}
            showActivityRing={showActivityRing}
            dimension="l"
            userName="Dimension l"
            href={imageURL}
          />
          <AvatarActivity
            appearance={appearance}
            showTooltip={showTooltip}
            showActivityRing={showActivityRing}
            userName="Dimension xl"
            href={imageURL}
          />
        </Container>
      </HorizontalContainer>

      <StyledNotificationItem displayStatusIcon>
        <NotificationItemContent>
          Может отображать статус пользователя с помощью статусного Бейджа.
          <Separator height={8} />
          Статусы: «В сети», «Не беспокоить», «Отошел», «Не в сети». Также возможно задать кастомный цвет для статуса.
        </NotificationItemContent>
      </StyledNotificationItem>
      <HorizontalContainer>
        <Container>
          <Avatar showTooltip={showTooltip} dimension="xs" userName="Status Success" status="success" />
          <Avatar showTooltip={showTooltip} dimension="s" userName="Status Danger" status="danger" />
          <Avatar showTooltip={showTooltip} dimension="m" userName="Status Warn" status="warn" />
          <Avatar showTooltip={showTooltip} dimension="l" userName="Status Inactive" status="inactive" />
          <Avatar showTooltip={showTooltip} userName="Custom Status" status="#3F7DFE" />
        </Container>
        <Container>
          <AvatarActivity
            appearance={appearance}
            showTooltip={showTooltip}
            showActivityRing={showActivityRing}
            dimension="xs"
            userName="Dimension xs"
            status="success"
          />
          <AvatarActivity
            appearance={appearance}
            showTooltip={showTooltip}
            showActivityRing={showActivityRing}
            dimension="s"
            userName="Dimension s"
            status="danger"
          />
          <AvatarActivity
            appearance={appearance}
            showTooltip={showTooltip}
            showActivityRing={showActivityRing}
            dimension="m"
            userName="Dimension m"
            status="warn"
          />
          <AvatarActivity
            appearance={appearance}
            showTooltip={showTooltip}
            showActivityRing={showActivityRing}
            dimension="l"
            userName="Dimension l"
            status="inactive"
          />
          <AvatarActivity
            appearance={appearance}
            showTooltip={showTooltip}
            showActivityRing={showActivityRing}
            userName="Dimension xl"
            status="success"
          />
        </Container>
      </HorizontalContainer>
      <HorizontalContainer>
        <Container>
          <Avatar
            showTooltip={showTooltip}
            dimension="xs"
            userName="Status Success"
            icon={<PersonSolid />}
            status="success"
          />
          <Avatar
            showTooltip={showTooltip}
            dimension="s"
            userName="Status Danger"
            icon={<PersonSolid />}
            status="danger"
          />
          <Avatar showTooltip={showTooltip} dimension="m" userName="Status Warn" icon={<PersonSolid />} status="warn" />
          <Avatar
            showTooltip={showTooltip}
            dimension="l"
            userName="Status Inactive"
            icon={<PersonSolid />}
            status="inactive"
          />
          <Avatar showTooltip={showTooltip} userName="Custom Status" icon={<PersonSolid />} status="#3F7DFE" />
        </Container>
        <Container>
          <AvatarActivity
            appearance={appearance}
            showTooltip={showTooltip}
            showActivityRing={showActivityRing}
            dimension="xs"
            userName="Dimension xs"
            icon={<PersonSolid />}
            status="success"
          />
          <AvatarActivity
            appearance={appearance}
            showTooltip={showTooltip}
            showActivityRing={showActivityRing}
            dimension="s"
            userName="Dimension s"
            icon={<PersonSolid />}
            status="danger"
          />
          <AvatarActivity
            appearance={appearance}
            showTooltip={showTooltip}
            showActivityRing={showActivityRing}
            dimension="m"
            userName="Dimension m"
            icon={<PersonSolid />}
            status="warn"
          />
          <AvatarActivity
            appearance={appearance}
            showTooltip={showTooltip}
            showActivityRing={showActivityRing}
            dimension="l"
            userName="Dimension l"
            icon={<PersonSolid />}
            status="inactive"
          />
          <AvatarActivity
            appearance={appearance}
            showTooltip={showTooltip}
            showActivityRing={showActivityRing}
            userName="Dimension xl"
            icon={<PersonSolid />}
            status="success"
          />
        </Container>
      </HorizontalContainer>
      <HorizontalContainer>
        <Container>
          <Avatar showTooltip={showTooltip} dimension="xs" userName="Status Success" href={imageURL} status="success" />
          <Avatar showTooltip={showTooltip} dimension="s" userName="Status Danger" href={imageURL} status="danger" />
          <Avatar showTooltip={showTooltip} dimension="m" userName="Status Warn" href={imageURL} status="warn" />
          <Avatar
            showTooltip={showTooltip}
            dimension="l"
            userName="Status Inactive"
            href={imageURL}
            status="inactive"
          />
          <Avatar showTooltip={showTooltip} userName="Custom Status" href={imageURL} status="#3F7DFE" />
        </Container>
        <Container>
          <AvatarActivity
            appearance={appearance}
            showTooltip={showTooltip}
            showActivityRing={showActivityRing}
            dimension="xs"
            userName="Dimension xs"
            href={imageURL}
            status="success"
          />
          <AvatarActivity
            appearance={appearance}
            showTooltip={showTooltip}
            showActivityRing={showActivityRing}
            dimension="s"
            userName="Dimension s"
            href={imageURL}
            status="danger"
          />
          <AvatarActivity
            appearance={appearance}
            showTooltip={showTooltip}
            showActivityRing={showActivityRing}
            dimension="m"
            userName="Dimension m"
            href={imageURL}
            status="warn"
          />
          <AvatarActivity
            appearance={appearance}
            showTooltip={showTooltip}
            showActivityRing={showActivityRing}
            dimension="l"
            userName="Dimension l"
            href={imageURL}
            status="inactive"
          />
          <AvatarActivity
            appearance={appearance}
            showTooltip={showTooltip}
            showActivityRing={showActivityRing}
            userName="Dimension xl"
            href={imageURL}
            status="success"
          />
        </Container>
      </HorizontalContainer>

      <StyledNotificationItem displayStatusIcon>
        <NotificationItemContent>
          Компоненту и символам в нем можно присваивать любые цвета из палитры.
          <Separator height={8} />
          Для окраски фона компонента, букв (иконок) используйте стандартную палитру дизайн-системы, следите за
          контрастностью и читаемостью. Рекомендуемые цвета:
        </NotificationItemContent>
      </StyledNotificationItem>
      <GridContainer>
        <AvatarContainer style={{ background: '#F1F2F4' }}>
          <Text>Neutral 00</Text>
          <Avatar showTooltip={showTooltip} userName="Neutral 1 Appearance" appearance="neutral1" dimension="m" />
        </AvatarContainer>
        <AvatarContainer>
          <Text>Neutral 10</Text>
          <Avatar showTooltip={showTooltip} userName="Neutral 2 Appearance" dimension="m" />
        </AvatarContainer>
        <AvatarContainer>
          <Text>Neutral 50</Text>
          <Avatar showTooltip={showTooltip} userName="Neutral 3 Appearance" appearance="neutral3" dimension="m" />
        </AvatarContainer>
        <AvatarContainer>
          <Text>Neutral 80</Text>
          <Avatar showTooltip={showTooltip} userName="Neutral 4 Appearance" appearance="neutral4" dimension="m" />
        </AvatarContainer>
        <AvatarContainer>
          <Text>Primary 60 Main</Text>
          <Avatar
            showTooltip={showTooltip}
            userName="Primary 60 Main"
            appearance={{ background: '#0062FF', text: '#FFFFFF' }}
            dimension="m"
          />
        </AvatarContainer>
        <AvatarContainer>
          <Text>Error 60 Main</Text>
          <Avatar
            showTooltip={showTooltip}
            userName="Error 60 Main"
            appearance={{ background: '#D92020', text: '#FFFFFF' }}
            dimension="m"
          />
        </AvatarContainer>
        <AvatarContainer>
          <Text>Success 50 Main</Text>
          <Avatar
            showTooltip={showTooltip}
            userName="Success 50 Main"
            appearance={{ background: '#1BA049', text: '#FFFFFF' }}
            dimension="m"
          />
        </AvatarContainer>
        <AvatarContainer>
          <Text>Warning 50 Main</Text>
          <Avatar
            showTooltip={showTooltip}
            userName="Warning 50 Main"
            appearance={{ background: '#FF5C22', text: '#FFFFFF' }}
            dimension="m"
          />
        </AvatarContainer>
        <AvatarContainer>
          <Text>Attention 50 Main</Text>
          <Avatar
            showTooltip={showTooltip}
            userName="Attention 50 Main"
            appearance={{ background: '#FFC400', text: '#121316' }}
            dimension="m"
          />
        </AvatarContainer>
        <AvatarContainer>
          <Text>Purple 60 Main</Text>
          <Avatar
            showTooltip={showTooltip}
            userName="Purple 60 Main"
            appearance={{ background: '#8A3FFC', text: '#FFFFFF' }}
            dimension="m"
          />
        </AvatarContainer>
        <AvatarContainer>
          <Text>Magenta 60 Main</Text>
          <Avatar
            showTooltip={showTooltip}
            userName="Magenta 60 Main"
            appearance={{ background: '#D02670', text: '#FFFFFF' }}
            dimension="m"
          />
        </AvatarContainer>
        <AvatarContainer>
          <Text>Cian 60 Main</Text>
          <Avatar
            showTooltip={showTooltip}
            userName="Cian 60 Main"
            appearance={{ background: '#0072C3', text: '#FFFFFF' }}
            dimension="m"
          />
        </AvatarContainer>
        <AvatarContainer>
          <Text>Teal 60 Main</Text>
          <Avatar
            showTooltip={showTooltip}
            userName="Teal 60 Main"
            appearance={{ background: '#007D79', text: '#FFFFFF' }}
            dimension="m"
          />
        </AvatarContainer>
      </GridContainer>
    </ContentArea>
  );
};

export const Route = createFileRoute('/components/avatar/styles')({
  component: () => <AvatarStyles />,
  staticData: {
    title: 'Avatar, AvatarActivity. Стили',
    description: 'Компонент используется для отображения фотографии пользователя, его инициалов или иконки.',
  },
});
