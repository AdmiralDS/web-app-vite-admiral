import { createFileRoute } from '@tanstack/react-router';
import styled from 'styled-components';
import {
  AvatarActivityGroup,
  AvatarGroup,
  NotificationItemContent,
  StyledNotificationItem,
} from '@admiral-ds/react-ui';
import type { AvatarGroupProps, AvatarActivityGroupProps } from '@admiral-ds/react-ui';
import PersonSolid from '@admiral-ds/icons/build/system/PersonSolid.svg?react';

const imageURL = 'https://avavatar.ru/images/full/3/Ya4mRgF2LYW9hNdk.jpg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  align-self: flex-start;

  > * {
    margin: 20px 20px;
  }
`;

const onSelectAvatar = (id: string) => {
  // eslint-disable-next-line no-console
  console.log('Select item with id: ', id);
};

const Separator = styled.div<{ height: number }>`
  height: ${(p) => p.height}px;
`;

const avatarGroupItems1: AvatarGroupProps['items'] = [
  { userName: 'Lena Ivanova', icon: <PersonSolid />, id: '1' },
  { userName: 'Petr Lesov', icon: <PersonSolid />, id: '2' },
  { userName: 'Agata Petrova', icon: <PersonSolid />, id: '3' },
  { userName: 'Arina Leskova', icon: <PersonSolid />, id: '4' },
  { userName: 'Rita', id: '5' },
  { userName: 'Важный Кот', icon: <PersonSolid />, href: imageURL, id: '6' },
  { userName: 'Lisa Kotova', icon: <PersonSolid />, id: '7' },
  { userName: 'Ирина Глушко', icon: <PersonSolid />, id: '8' },
  { userName: 'Rosa Farrel', icon: <PersonSolid />, id: '9' },
  { userName: 'Tom Hidlton', id: '10' },
];
const avatarGroupItems2: AvatarGroupProps['items'] = [
  {
    userName: 'Lena Ivanova',
    icon: <PersonSolid />,
    id: '1',
    appearance: { background: '#3F7DFE', icon: '#001157' },
  },
  { userName: 'Petr Lesov', icon: <PersonSolid />, id: '2' },
  { userName: 'Agata Petrova', id: '3', appearance: { background: '#D92020', text: '#FFFFFF' } },
  { userName: 'Arina Leskova', icon: <PersonSolid />, id: '4' },
  { userName: 'Rita', appearance: 'neutral2', id: '5' },
  { userName: 'Важный Кот', icon: <PersonSolid />, href: imageURL, id: '6' },
  { userName: 'Lisa Kotova', icon: <PersonSolid />, id: '7' },
  { userName: 'Ирина Глушко', icon: <PersonSolid />, id: '8' },
  { userName: 'Rosa Farrel', icon: <PersonSolid />, id: '9' },
  { userName: 'Tom Hidlton', appearance: 'neutral2', id: '10' },
];

const avatarActivityGroupItems1: AvatarActivityGroupProps['items'] = [
  { userName: 'Lena Ivanova', icon: <PersonSolid />, id: '1' },
  { userName: 'Petr Lesov', icon: <PersonSolid />, id: '2' },
  { userName: 'Agata Petrova', icon: <PersonSolid />, id: '3' },
  { userName: 'Arina Leskova', icon: <PersonSolid />, id: '4', showActivityRing: true },
  { userName: 'Rita', appearance: 'neutral4', id: '5' },
  { userName: 'Важный Кот', icon: <PersonSolid />, href: imageURL, id: '6' },
  { userName: 'Lisa Kotova', icon: <PersonSolid />, id: '7' },
  { userName: 'Ирина Глушко', icon: <PersonSolid />, id: '8' },
  { userName: 'Rosa Farrel', icon: <PersonSolid />, id: '9' },
  { userName: 'Tom Hidlton', appearance: 'neutral4', id: '10' },
];
const avatarActivityGroupItems2: AvatarActivityGroupProps['items'] = [
  {
    userName: 'Lena Ivanova',
    icon: <PersonSolid />,
    id: '1',
    appearance: { background: '#3F7DFE', icon: '#001157' },
  },
  { userName: 'Petr Lesov', icon: <PersonSolid />, id: '2' },
  {
    userName: 'Agata Petrova',
    id: '3',
    appearance: { background: '#D92020', text: '#FFFFFF' },
  },
  { userName: 'Arina Leskova', icon: <PersonSolid />, id: '4', showActivityRing: true },
  { userName: 'Rita', appearance: 'neutral2', id: '5' },
  { userName: 'Важный Кот', icon: <PersonSolid />, href: imageURL, id: '6' },
  { userName: 'Lisa Kotova', icon: <PersonSolid />, id: '7' },
  { userName: 'Ирина Глушко', icon: <PersonSolid />, id: '8' },
  { userName: 'Rosa Farrel', icon: <PersonSolid />, id: '9' },
  { userName: 'Tom Hidlton', appearance: 'neutral2', id: '10' },
];

export const AvatarGroupExample = () => {
  return (
    <Wrapper>
      <StyledNotificationItem displayStatusIcon>
        <NotificationItemContent>
          При достижении условного максимума отображаемых аватаров, последним ставится аватар с отображением количества
          скрытых элементов.
          <Separator height={8} />
          Чтобы задать для всех аватаров, входящих в группу, единый внешний вид, достаточно задать для компонента
          AvatarGroup соответствующее значение параметра appearance. Если для каких-то аватаров нужно задать отличный от
          остальных внешний вид, необходимо задать параметр appearance непосредственно для компонента Avatar. Параметр
          appearance, заданный для Avatar, имеет больший приоритет, чем параметр appearance, заданный для AvatarGroup.
          <Separator height={8} />
          Пример AvatarGroup с единым для всех аватаров внешним видом (appearance).
        </NotificationItemContent>
      </StyledNotificationItem>
      <AvatarGroup
        style={{ width: '300px' }}
        items={avatarGroupItems1}
        onAvatarSelect={onSelectAvatar}
        dropContainerClassName="dropContainerClass"
      />
      <AvatarActivityGroup
        style={{ width: '300px' }}
        items={avatarActivityGroupItems1}
        onAvatarSelect={onSelectAvatar}
        dropContainerClassName="dropContainerClass"
      />
      <StyledNotificationItem displayStatusIcon>
        <NotificationItemContent>
          Пример AvatarGroup и AvatarActivityGroup с различными по внешнему виду (appearance) аватарами.
        </NotificationItemContent>
      </StyledNotificationItem>
      <AvatarGroup
        style={{ width: '300px' }}
        items={avatarGroupItems2}
        onAvatarSelect={onSelectAvatar}
        appearance="neutral4"
        dropContainerClassName="dropContainerClass"
        dropContainerStyle={{ width: '250px' }}
      />
      <AvatarActivityGroup
        style={{ width: '300px' }}
        items={avatarActivityGroupItems2}
        onAvatarSelect={onSelectAvatar}
        appearance="neutral4"
        dropContainerClassName="dropContainerClass"
        dropContainerStyle={{ width: '250px' }}
      />
    </Wrapper>
  );
};

export const Route = createFileRoute('/components/avatar/avatarGroupLimitedWidth')({
  component: () => <AvatarGroupExample />,
  staticData: {
    title: 'Группировка при ограниченной ширине',
    description: 'Компоненты AvatarGroup и AvatarActivityGroup.',
  },
});
