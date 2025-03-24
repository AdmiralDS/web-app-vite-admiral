import { createFileRoute } from '@tanstack/react-router';
import { States } from '#examples/iconButton/states';

export const Route = createFileRoute('/components/iconButton/states')({
  component: () => <States />,
  staticData: {
    title: 'IconButton. Состояния',
  },
});
