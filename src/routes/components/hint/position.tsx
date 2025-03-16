import { createFileRoute } from '@tanstack/react-router';
import { HintPosition } from '#examples/hint/position';

export const Route = createFileRoute('/components/hint/position')({
  component: () => <HintPosition />,
  staticData: {
    title: 'Hint. Позиционирование',
    description: '',
  },
});
