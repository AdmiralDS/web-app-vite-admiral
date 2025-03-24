import { createFileRoute } from '@tanstack/react-router';
import { Base } from '#examples/iconButton';

export const Route = createFileRoute('/components/iconButton/')({
  component: () => <Base />,
  staticData: {
    title: 'IconButton. Базовый пример',
    description: '',
  },
});
