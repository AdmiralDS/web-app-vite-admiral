import { createFileRoute } from '@tanstack/react-router';
import { TableSort } from '#examples/table/sort';

export const Route = createFileRoute('/components/table/sort')({
  component: TableSort,
  staticData: {
    title: 'Table. Сортировка',
  },
});
