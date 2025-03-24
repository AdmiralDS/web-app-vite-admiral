import { createFileRoute } from '@tanstack/react-router';
import { TreeWithControlCheckCount } from '#examples/tree/withControlCheckCount';

export const Route = createFileRoute('/components/tree/withControlCheckCount')({
  component: () => <TreeWithControlCheckCount />,
  staticData: {
    title: 'Tree. С счётчиком выбранных элементов',
  },
});
