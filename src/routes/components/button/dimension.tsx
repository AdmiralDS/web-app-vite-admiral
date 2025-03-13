import { createFileRoute } from '@tanstack/react-router';
import { ButtonDimension } from '#examples/button/dimension';

export const Route = createFileRoute('/components/button/dimension')({
  component: () => <ButtonDimension />,
  staticData: {
    title: 'Button. Размеры',
    description: '',
  },
});
