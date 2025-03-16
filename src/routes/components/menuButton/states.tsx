import { createFileRoute } from '@tanstack/react-router';
import { States } from '#examples/menuButton/states';

export const Route = createFileRoute('/components/menuButton/states')({
  component: () => <States />,
  staticData: {
    title: 'MenuButton. Состояния',
    description: 'Состояния аналогичны Button.',
  },
});
