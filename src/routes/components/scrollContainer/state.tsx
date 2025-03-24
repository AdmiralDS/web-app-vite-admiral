import { createFileRoute } from '@tanstack/react-router';
import { ScrollContainerState } from '#examples/scrollContainer/state';

export const Route = createFileRoute('/components/scrollContainer/state')({
  component: () => <ScrollContainerState />,
  staticData: {
    title: 'ScrollContainer. Состояния',
  },
});
