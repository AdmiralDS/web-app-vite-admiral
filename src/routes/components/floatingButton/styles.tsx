import { createFileRoute } from '@tanstack/react-router';
import { FloatingButtonStyles } from '#examples/floatingButton/styles';

export const Route = createFileRoute('/components/floatingButton/styles')({
  component: () => <FloatingButtonStyles />,
  staticData: {
    title: 'FloatingButton. Размеры и стили',
    description: '',
  },
});
