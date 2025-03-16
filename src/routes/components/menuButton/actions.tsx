import { createFileRoute } from '@tanstack/react-router';
import { Actions } from '#examples/menuButton/actions';

export const Route = createFileRoute('/components/menuButton/actions')({
  component: () => <Actions />,
  staticData: {
    title: 'MenuButton. Задизейбленные и кастомизированные опции и панель с кнопками',
    description: '',
  },
});
