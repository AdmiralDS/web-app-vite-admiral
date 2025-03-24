import { createFileRoute } from '@tanstack/react-router';
import { DrawerBasic } from '#examples/drawer';

export const Route = createFileRoute('/components/drawer/')({
  component: () => <DrawerBasic />,
  staticData: {
    title: 'Drawer. Базовый пример',
    description:
      'Компонент Drawer — это панель, которая накладывается поверх страницы, выдвигаясь c правой или левой части экрана. Он содержит набор информации или действий.',
  },
});
