import { createFileRoute } from '@tanstack/react-router';
import { TreeUncontrolled } from '#examples/tree/uncontrolled';

export const Route = createFileRoute('/components/tree/uncontrolled')({
  component: () => <TreeUncontrolled />,
  staticData: {
    title: 'Tree. Неконтролируемое дерево',
  },
});
