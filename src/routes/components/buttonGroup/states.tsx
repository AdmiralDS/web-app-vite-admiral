import { createFileRoute } from '@tanstack/react-router';
import { ButtonGroupStates } from '#examples/buttonGroup/states';

export const Route = createFileRoute('/components/buttonGroup/states')({
  component: () => <ButtonGroupStates />,
  staticData: {
    title: 'ButtonGroup. Состояния.',
    description: '',
  },
});
