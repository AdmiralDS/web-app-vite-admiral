import { createFileRoute } from '@tanstack/react-router';
import { TableExpand } from '#examples/table/expand';

export const Route = createFileRoute('/components/table/expand')({
  component: TableExpand,
  staticData: {
    title: 'Table. Пример детализации строк',
  },
});
