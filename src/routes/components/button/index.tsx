import { createFileRoute } from '@tanstack/react-router';
import { ButtonBasic } from '#examples/button';

export const Route = createFileRoute('/components/button/')({
  component: () => <ButtonBasic />,
  staticData: {
    title: 'Button. Базовый пример',
    description: '',
  },
});
