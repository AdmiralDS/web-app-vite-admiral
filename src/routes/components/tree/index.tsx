import { createFileRoute } from '@tanstack/react-router';
import { TreeBasic } from '#examples/tree';

export const Route = createFileRoute('/components/tree/')({
  component: () => <TreeBasic />,
  staticData: {
    title: 'Tree. Базовый пример',
  },
});
