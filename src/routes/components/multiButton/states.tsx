import { createFileRoute } from '@tanstack/react-router';
import { States } from '#examples/multiButton/states';

export const Route = createFileRoute('/components/multiButton/states')({
  component: () => <States />,
  staticData: {
    title: 'MultiButton. Состояния',
  },
});
