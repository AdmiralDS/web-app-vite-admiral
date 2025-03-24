import { createFileRoute } from '@tanstack/react-router';
import { TreeCustom } from '#examples/tree/custom';

export const Route = createFileRoute('/components/tree/custom')({
  component: () => <TreeCustom />,
  staticData: {
    title: 'Tree. Произвольный контент',
  },
});
