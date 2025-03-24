import styled from 'styled-components';
import { ExampleSection } from '#examples/-helpers';
import { ListItem, OrderedList, UnorderedList } from '@admiral-ds/react-ui';

const Layout = styled.div`
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, auto);
`;

export const ListNested = () => {
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
