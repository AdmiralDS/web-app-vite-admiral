import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection, rowFlexMixin } from '#routes/-helpers/examples';
import { ListItem, OrderedList } from '@admiral-ds/react-ui';

export const Template = () => {
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

export const Route = createFileRoute('/components/list/orderedList')({
  component: () => <Template />,
  staticData: {
    title: 'OrderedList. Виды и размеры.',
    description:
      'OrderedList – компонент для вертикальной группировки связанных по смыслу текстовых пунктов. OrderedList следует использовать, если вам необходим упорядоченный, пронумерованный список. Компонент представлен в двух видах (Numbers и Letters) и двух размерах (S и M). В списках Letters можно использовать как прописные (lower-letters), так и заглавные буквы (upper-letters).',
  },
});
