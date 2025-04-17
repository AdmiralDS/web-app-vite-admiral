import { createFileRoute } from '@tanstack/react-router';
import { TableFilter } from '#examples/table/filter';

export const Route = createFileRoute('/components/table/filter')({
  component: TableFilter,
  staticData: {
    title: 'Table. Фильтрация',
  },
});
