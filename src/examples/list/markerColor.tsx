import styled from 'styled-components';
import { ExampleSection } from '#examples/-helpers';
import { ListIcon, ListItem, UnorderedList } from '@admiral-ds/react-ui';
import TasksOutline from '@admiral-ds/icons/build/documents/TasksOutline.svg?react';
import PeopleOutline from '@admiral-ds/icons/build/system/PeopleOutline.svg?react';
import EmailOutline from '@admiral-ds/icons/build/system/EmailOutline.svg?react';

const ItemWithColoredMarker = styled(ListItem)<{ $color: string }>`
  &&::before {
    color: ${(p) => p.$color};
  }
`;

export const ListMarkerColor = () => {
  return (
    <ExampleSection>
      <UnorderedList>
        <ListItem>Уборка</ListItem>
        <ListItem>
          Покупка продуктов
          <UnorderedList>
            <ItemWithColoredMarker $color="blue">Куриная грудка</ItemWithColoredMarker>
            <ItemWithColoredMarker $color="red">Сливки</ItemWithColoredMarker>
            <ItemWithColoredMarker $color="green">Чеснок</ItemWithColoredMarker>
          </UnorderedList>
        </ListItem>
        <ListItem>
          Работа
          <UnorderedList styleType="icon">
            <ListItem>
              <ListIcon as={TasksOutline} color="blue" />
              Задачи
            </ListItem>
            <ListItem>
              <ListIcon as={EmailOutline} color="red" />
              Почта
            </ListItem>
            <ListItem>
              <ListIcon as={PeopleOutline} color="green" />
              Встречи
            </ListItem>
          </UnorderedList>
        </ListItem>
      </UnorderedList>
    </ExampleSection>
  );
};
