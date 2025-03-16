import { createFileRoute } from '@tanstack/react-router';
import { ToggleStates } from '#examples/toggle/states';

export const Route = createFileRoute('/components/toggle/states')({
  component: () => <ToggleStates />,
  staticData: {
    title: 'Toggle. Состояния',
    description: '',
  },
});
