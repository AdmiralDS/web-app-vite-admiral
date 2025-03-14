import { ExampleSection, rowFlexMixin } from '#routes/-helpers/examples';
import { ListItem, OrderedList } from '@admiral-ds/react-ui';

export const ListOrdered = () => {
  return (
    <>
      <ExampleSection cssMixin={rowFlexMixin} text="Numbers">
        <OrderedList>
          <ListItem>Обработка запроса</ListItem>
          <ListItem>Исследование</ListItem>
          <ListItem>Подведение итогов</ListItem>
        </OrderedList>
        <OrderedList dimension="s">
          <ListItem>Обработка запроса</ListItem>
          <ListItem>Исследование</ListItem>
          <ListItem>Подведение итогов</ListItem>
        </OrderedList>
      </ExampleSection>
      <ExampleSection cssMixin={rowFlexMixin} text="Letters lower">
        <OrderedList styleType="lower-letters">
          <ListItem>Обработка запроса</ListItem>
          <ListItem>Исследование</ListItem>
          <ListItem>Подведение итогов</ListItem>
        </OrderedList>
        <OrderedList styleType="lower-letters" dimension="s">
          <ListItem>Обработка запроса</ListItem>
          <ListItem>Исследование</ListItem>
          <ListItem>Подведение итогов</ListItem>
        </OrderedList>
      </ExampleSection>
      <ExampleSection cssMixin={rowFlexMixin} text="Letters upper">
        <OrderedList styleType="upper-letters">
          <ListItem>Обработка запроса</ListItem>
          <ListItem>Исследование</ListItem>
          <ListItem>Подведение итогов</ListItem>
        </OrderedList>
        <OrderedList styleType="upper-letters" dimension="s">
          <ListItem>Обработка запроса</ListItem>
          <ListItem>Исследование</ListItem>
          <ListItem>Подведение итогов</ListItem>
        </OrderedList>
      </ExampleSection>
    </>
  );
};
