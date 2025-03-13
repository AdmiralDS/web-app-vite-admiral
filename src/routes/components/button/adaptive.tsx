import { createFileRoute } from '@tanstack/react-router';
import { ButtonAdaptive } from '#examples/button/adaptive';

export const Route = createFileRoute('/components/button/adaptive')({
  component: () => <ButtonAdaptive />,
  staticData: {
    title: 'Адаптив',
    description: '',
  },
});
