import { createFileRoute } from '@tanstack/react-router';
import { ListMarkerColor } from '#examples/list/markerColor';

export const Route = createFileRoute('/components/list/markerColor')({
  component: () => <ListMarkerColor />,
  staticData: {
    title: 'List. Кастомный цвет маркера',
    description:
      'Пользователь может кастомизировать цвет маркеров и иконок самостоятельно, как это продемонстрировано в данном примере.',
  },
});
