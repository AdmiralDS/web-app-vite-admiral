import { createFileRoute } from '@tanstack/react-router';
import { ScrollContainerBasic } from '#examples/scrollContainer';

export const Route = createFileRoute('/components/scrollContainer/')({
  component: () => <ScrollContainerBasic />,
  staticData: {
    title: 'ScrollContainer. Базовый пример',
  },
});
