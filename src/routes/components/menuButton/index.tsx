import { createFileRoute } from '@tanstack/react-router';
import { Base } from '#examples/menuButton';

export const Route = createFileRoute('/components/menuButton/')({
  component: () => <Base />,
  staticData: {
    title: 'MenuButton. Базовый пример',
    description: '',
  },
});
