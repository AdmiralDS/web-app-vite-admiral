import { createFileRoute } from '@tanstack/react-router';
import { CheckboxStates } from '#examples/checkbox/states';

export const Route = createFileRoute('/components/checkbox/states')({
  component: () => <CheckboxStates />,
  staticData: {
    title: 'CheckboxField. Состояния.',
    description: '',
  },
});
