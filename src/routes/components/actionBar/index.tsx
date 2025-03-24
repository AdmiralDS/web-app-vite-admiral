import { createFileRoute } from '@tanstack/react-router';
import { ActionBarBasic } from '#examples/actionBar';

export const Route = createFileRoute('/components/actionBar/')({
  component: () => <ActionBarBasic />,
  staticData: {
    title: 'ActionBar. Базовый пример',
    description: 'Панель действий с возможностью деления на логические группы с помощью разделителя.',
  },
});
