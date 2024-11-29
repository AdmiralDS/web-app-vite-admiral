import { createFileRoute } from '@tanstack/react-router';
import { css } from 'styled-components';
import { ExampleSection } from '../../-helpers/examples';
import { ListItem, OrderedList, UnorderedList } from '@admiral-ds/react-ui';

/**
 * Контент маркера может зависить от значения счетчика.
 * В компонентах OrderedList и UnorderedList используется счетчик с именем admiral-list-counter
 **/
const latinLettersMarker = css`
  content: counter(admiral-list-counter, lower-latin) ')';
`;

const squareMarker = css`
  content: counter(admiral-list-counter, square);
`;

const checkMarker = css`
  content: '✓';
  color: green;
`;

export const Template = () => {
  return (
    <ExampleSection>
      <OrderedList styleType="lower-letters" markerCssMixin={latinLettersMarker}>
        <ListItem>Уборка</ListItem>
        <ListItem>
          Покупка продуктов
          <UnorderedList markerCssMixin={checkMarker}>
            <ListItem>Куриная грудка</ListItem>
            <ListItem>Сливки</ListItem>
            <ListItem>Чеснок</ListItem>
          </UnorderedList>
        </ListItem>
        <ListItem>
          Работа
          <UnorderedList markerCssMixin={squareMarker}>
            <ListItem>Задачи</ListItem>
            <ListItem>Почта</ListItem>
            <ListItem>Встречи</ListItem>
          </UnorderedList>
        </ListItem>
      </OrderedList>
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/list/customMarker')({
  component: () => <Template />,
  staticData: {
    title: 'List. Кастомизация маркеров',
    description:
      'Пользователь может кастомизировать внешний вид и контент маркеров в списках с помощью параметра markerCssMixin, задаваемого для компонентов OrderedList и UnorderedList. В компонентах OrderedList и UnorderedList также специально введен css счётчик с именем admiral-list-counter. Пользователи могут опираться на значение данного счетчика для задания контента маркеров с использованием css функций counter() и counters().',
  },
});
