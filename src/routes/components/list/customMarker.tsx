import { createFileRoute } from '@tanstack/react-router';
import { ListCustomMarker } from '#examples/list/customMarker';

export const Route = createFileRoute('/components/list/customMarker')({
  component: () => <ListCustomMarker />,
  staticData: {
    title: 'List. Кастомизация маркеров',
    description:
      'Пользователь может кастомизировать внешний вид и контент маркеров в списках с помощью параметра markerCssMixin, задаваемого для компонентов OrderedList и UnorderedList. В компонентах OrderedList и UnorderedList также специально введен css счётчик с именем admiral-list-counter. Пользователи могут опираться на значение данного счетчика для задания контента маркеров с использованием css функций counter() и counters().',
  },
});
