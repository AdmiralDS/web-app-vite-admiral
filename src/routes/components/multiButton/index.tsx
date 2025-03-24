import { createFileRoute } from '@tanstack/react-router';
import { Base } from '#examples/multiButton';

export const Route = createFileRoute('/components/multiButton/')({
  component: () => <Base />,
  staticData: {
    title: 'MultiButton. Базовый пример',
    description: '',
  },
});
