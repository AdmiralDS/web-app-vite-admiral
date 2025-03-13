import { createFileRoute } from '@tanstack/react-router';
import { ButtonTypes } from '#examples/button/types';

export const Route = createFileRoute('/components/button/types')({
  component: () => <ButtonTypes />,
  staticData: {
    title: 'Button. Типы',
    description: '',
  },
});
