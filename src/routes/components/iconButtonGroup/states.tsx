import { createFileRoute } from '@tanstack/react-router';
import { States } from '#examples/iconButtonGroup/states';

export const Route = createFileRoute('/components/iconButtonGroup/states')({
  component: () => <States />,
  staticData: {
    title: 'IconButtonGroup. Состояния',
    description: '',
  },
});
