import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection, rowFlexMixin } from '../../-helpers/examples';
import { ListIcon, ListItem, UnorderedList } from '@admiral-ds/react-ui';
import TasksOutline from '@admiral-ds/icons/build/documents/TasksOutline.svg?react';
import EmailOutline from '@admiral-ds/icons/build/system/EmailOutline.svg?react';
import PeopleOutline from '@admiral-ds/icons/build/system/PeopleOutline.svg?react';

export const Template = () => {
  return (
    <>
      <ExampleSection cssMixin={rowFlexMixin} text="Bullet">
        <UnorderedList>
          <ListItem>Уборка</ListItem>
          <ListItem>Покупка продуктов</ListItem>
          <ListItem>Работа</ListItem>
        </UnorderedList>
        <UnorderedList dimension="s">
          <ListItem>Уборка</ListItem>
          <ListItem>Покупка продуктов</ListItem>
          <ListItem>Работа</ListItem>
        </UnorderedList>
      </ExampleSection>
      <ExampleSection cssMixin={rowFlexMixin} text="Virgule">
        <UnorderedList styleType="virgule">
          <ListItem>Куриная грудка</ListItem>
          <ListItem>Сливки</ListItem>
          <ListItem>Чеснок</ListItem>
        </UnorderedList>
        <UnorderedList styleType="virgule" dimension="s">
          <ListItem>Куриная грудка</ListItem>
          <ListItem>Сливки</ListItem>
          <ListItem>Чеснок</ListItem>
        </UnorderedList>
      </ExampleSection>
      <ExampleSection cssMixin={rowFlexMixin} text="Icon">
        <UnorderedList styleType="icon">
          <ListItem>
            <ListIcon as={TasksOutline} />
            Задачи
          </ListItem>
          <ListItem>
            <ListIcon as={EmailOutline} />
            Почта
          </ListItem>
          <ListItem>
            <ListIcon as={PeopleOutline} />
            Встречи
          </ListItem>
        </UnorderedList>
        <UnorderedList styleType="icon" dimension="s">
          <ListItem>
            <ListIcon as={TasksOutline} />
            Задачи
          </ListItem>
          <ListItem>
            <ListIcon as={EmailOutline} />
            Почта
          </ListItem>
          <ListItem>
            <ListIcon as={PeopleOutline} />
            Встречи
          </ListItem>
        </UnorderedList>
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/list/unorderedList')({
  component: () => <Template />,
  staticData: {
    title: 'UnorderedList. Виды и размеры.',
    description:
      'UnorderedList – компонент для вертикальной группировки связанных по смыслу текстовых пунктов. UnorderedList следует использовать, если вам необходим неупорядоченный список, когда смысл списка не меняется в зависимости от порядка элементов. Компонент представлен в трех видах (Bullet, Virgule, Icon) и двух размерах (S и M).',
  },
});