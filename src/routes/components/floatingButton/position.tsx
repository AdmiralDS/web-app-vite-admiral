import { createFileRoute } from '@tanstack/react-router';
import { FloatingButtonPosition } from '#examples/floatingButton/position';

export const Route = createFileRoute('/components/floatingButton/position')({
  component: () => <FloatingButtonPosition />,
  staticData: {
    title: 'FloatingButton. Расположение',
    description: '',
  },
});
