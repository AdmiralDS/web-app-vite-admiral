import { createFileRoute } from '@tanstack/react-router';
import { TreeVariants } from '#examples/tree/variants';

export const Route = createFileRoute('/components/tree/variants')({
  component: () => <TreeVariants />,
  staticData: {
    title: 'Tree. Варианты',
  },
});
