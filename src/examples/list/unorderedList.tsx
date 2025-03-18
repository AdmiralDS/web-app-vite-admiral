import { ExampleSection, rowFlexMixin } from '#examples/-helpers';
import { ListIcon, ListItem, UnorderedList } from '@admiral-ds/react-ui';
import TasksOutline from '@admiral-ds/icons/build/documents/TasksOutline.svg?react';
import EmailOutline from '@admiral-ds/icons/build/system/EmailOutline.svg?react';
import PeopleOutline from '@admiral-ds/icons/build/system/PeopleOutline.svg?react';

export const ListUnordered = () => {
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
