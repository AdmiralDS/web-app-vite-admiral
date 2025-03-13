import { createFileRoute } from '@tanstack/react-router';
import styled from 'styled-components';
import { ExampleSection } from '#routes/-helpers/examples';
import { ListItem, OrderedList, UnorderedList } from '@admiral-ds/react-ui';

const Layout = styled.div`
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, auto);
`;

export const Template = () => {
  return (
    <ExampleSection>
      <Layout>
        <OrderedList>
          <ListItem>Текст строки</ListItem>
          <ListItem>
            Текст строки
            <OrderedList>
              <ListItem>Текст строки</ListItem>
              <ListItem>Текст строки</ListItem>
            </OrderedList>
          </ListItem>
          <ListItem>Текст строки</ListItem>
        </OrderedList>
        <OrderedList dimension="s">
          <ListItem>Текст строки</ListItem>
          <ListItem>
            Текст строки
            <OrderedList dimension="s">
              <ListItem>Текст строки</ListItem>
              <ListItem>Текст строки</ListItem>
            </OrderedList>
          </ListItem>
          <ListItem>Текст строки</ListItem>
        </OrderedList>
        <UnorderedList>
          <ListItem>Текст строки</ListItem>
          <ListItem>
            Текст строки
            <UnorderedList styleType="virgule">
              <ListItem>Текст строки</ListItem>
              <ListItem>Текст строки</ListItem>
            </UnorderedList>
          </ListItem>
          <ListItem>Текст строки</ListItem>
        </UnorderedList>
        <UnorderedList dimension="s">
          <ListItem>Текст строки</ListItem>
          <ListItem>
            Текст строки
            <UnorderedList dimension="s" styleType="virgule">
              <ListItem>Текст строки</ListItem>
              <ListItem>Текст строки</ListItem>
            </UnorderedList>
          </ListItem>
          <ListItem>Текст строки</ListItem>
        </UnorderedList>
      </Layout>
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/list/nested')({
  component: () => <Template />,
  staticData: {
    title: 'List. Вложенные списки',
    description:
      'Списки могут быть вложенными, а разновидности могут смешиваться внутри вложенных группировок. Отступ слева равен расстоянию от текста до левого края компонента вышестоящего уровня. То есть выравнивание идет по краю текста вышестоящего уровня.',
  },
});
