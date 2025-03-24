import { createFileRoute } from '@tanstack/react-router';
import { TreeWithOnChangeHandler } from '#examples/tree/withOnChangeHandler';

export const Route = createFileRoute('/components/tree/withOnChangeHandler')({
  component: () => <TreeWithOnChangeHandler />,
  staticData: {
    title: 'Tree. Обработка событий onExpandChange и onCheckedChange',
  },
});
