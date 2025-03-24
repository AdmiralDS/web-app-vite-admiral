import { AvatarActivityGroup, AvatarGroup } from '@admiral-ds/react-ui';
import type { AvatarGroupProps, AvatarActivityGroupProps } from '@admiral-ds/react-ui';
import PersonSolid from '@admiral-ds/icons/build/system/PersonSolid.svg?react';
import { ExampleSection } from '#examples/-helpers';

const imageURL = 'https://avavatar.ru/images/full/3/Ya4mRgF2LYW9hNdk.jpg';

const onSelectAvatar = (id: string) => {
  // eslint-disable-next-line no-console
  console.log('Select item with id: ', id);
};

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
    <>
      <ExampleSection
        style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
        header="Пример AvatarGroup с единым для всех аватаров внешним видом (appearance)."
        text="Чтобы задать для всех аватаров, входящих в группу, единый внешний вид, достаточно задать для компонента
          AvatarGroup соответствующее значение параметра appearance. Если для каких-то аватаров нужно задать отличный от
          остальных внешний вид, необходимо задать параметр appearance непосредственно для компонента Avatar. Параметр
          appearance, заданный для Avatar, имеет больший приоритет, чем параметр appearance, заданный для AvatarGroup."
      >
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
      </ExampleSection>
      <ExampleSection
        style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
        header="Пример AvatarGroup и AvatarActivityGroup с различными по внешнему виду (appearance) аватарами."
      >
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
      </ExampleSection>
    </>
  );
};
